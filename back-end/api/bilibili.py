# Written by GRP Team202218
from flask import Blueprint, request, jsonify, g
from exts import mail, db, create_app
from models import BiliExtract, BiliResultCount
import underlying.crawl_bilibili
import underlying.control_data_number
from flask_mail import Message
from decorators import login_required
import threading
from threading import Thread

bp = Blueprint("bilibili", __name__, url_prefix="/api/bilibili")

topic = ""


@bp.route("/start", methods=["GET", "POST"])
# @login_required
def bili_start():
    global topic
    bili_json = request.get_json()
    isStart = bili_json.get("start")
    get_topic = bili_json.get("topic")
    get_days = bili_json.get("days")
    get_hours = bili_json.get("hours")
    get_minutes = bili_json.get("minutes")
    interval = int(get_days) * 86400 + int(get_hours) * 3600 + int(get_minutes) * 60
    if isStart:
        topic = get_topic
        email = g.user.email

        bili_thread(get_topic, interval, g.user, email, 0)
        # t = Thread(target=bili_thread, args=(get_topic, interval, g.user))
        # t.start()
        return jsonify({"ifWork": True})
    else:
        topic = ""
        return jsonify({"info": False})


def bili_thread(get_topic, interval, user, email, times):
    global topic
    if get_topic != topic:
        return

    app = create_app()
    output = underlying.crawl_bilibili.bilibili_monitor(get_topic, interval)
    print("local output:")
    try:
        print(output)
    except:
        print("decode error, cannot print")

    if len(output) != 0:

        if times == 0:
            for item in output:
                try:
                    biliinfo = BiliExtract(title=item.get('title'), url=item.get('url'),
                                           uploader=item.get('uploader'),
                                           view_counts=item.get('view_counts'), upload_time=item.get('upload_time'),
                                           image=item.get('image'), topic=get_topic, author=user)

                    db.session.add(biliinfo)
                    db.session.commit()

                except Exception as e:
                    print(e)
            times += 1
            underlying.control_data_number.control_number(1)
        else:
            with app.app_context():
                message = Message(subject="UNNCTeam18 Update attentions", recipients=[email],
                                  body=f"Bilibili has updated, {len(output)} new videos, topic is {get_topic}. "
                                       f"Please go to the mini program to check")
                mail.send(message)
                for item in output:
                    try:
                        biliinfo = BiliExtract(title=item.get('title'), url=item.get('url'), uploader=item.get('uploader'),
                                               view_counts=item.get('view_counts'), upload_time=item.get('upload_time'),
                                               image=item.get('image'), topic=get_topic, author=user)

                        db.session.add(biliinfo)
                        db.session.commit()

                    except Exception as e:
                        print(e)

                underlying.control_data_number.control_number(1)

    timer = threading.Timer(interval, bili_thread, (get_topic, interval, user, email, times))
    timer.start()


@bp.route("/extract", methods=["GET", "POST"])
def bili_extract():
    output = []
    bili_show = BiliExtract.query.filter_by(author=g.user)
    bili_number = BiliResultCount.query.filter_by(author=g.user).first()

    bili_id = 0
    for item in bili_show:
        if bili_number:
            if item.id <= bili_number.lastID:
                continue
        global topic
        if item.topic != topic:
            continue
        d = {}
        d["id"] = item.id
        d["title"] = item.title
        d["url"] = item.url
        d["uploader"] = item.uploader
        d["view_counts"] = item.view_counts
        d["upload_time"] = item.upload_time
        d["image"] = item.image
        output.append(d)
        if item.id > bili_id:
            bili_id = item.id

    if bili_number:
        if len(output) != 0:
            bili_number.lastID = bili_id
            db.session.commit()
    else:
        bili_number = BiliResultCount(lastID=bili_id, author=g.user)
        db.session.add(bili_number)
        db.session.commit()

    return jsonify({"info": output})

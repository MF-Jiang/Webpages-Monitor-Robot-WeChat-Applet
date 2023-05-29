# Written by GRP Team202218
from flask import Blueprint, request, jsonify, g
from exts import mail, db, create_app
from models import SinaExtract, SinaResultCount
import underlying.crawl_sina
import underlying.control_data_number
from flask_mail import Message
from decorators import login_required
import threading
from threading import Thread

bp = Blueprint("sina", __name__, url_prefix="/api/sina")

topic = ""


@bp.route("/start", methods=["GET", "POST"])
# @login_required
def sina_start():
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
        sina_thread(get_topic, interval, g.user, email, 0)
        return jsonify({"ifWork": True})
    else:
        topic = ""
        return jsonify({"ifWork": False})


def sina_thread(get_topic, interval, user, email, times):
    global topic
    if get_topic != topic:
        return

    app = create_app()
    output = underlying.crawl_sina.sina_monitor(get_topic, interval)
    try:
        print(output)
    except:
        print("decode error")
    if len(output) != 0:
        if times == 0:
            for item in output:
                try:
                    sinainfo = SinaExtract(title=item.get('title'), url=item.get('url'), media=item.get('media'),
                                           temp_text=item.get('news_context'), datetime=item.get('upload_time'),
                                           topic=get_topic, author=user)

                    db.session.add(sinainfo)
                    db.session.commit()

                except Exception as e:
                    print(e)
            times += 1
            underlying.control_data_number.control_number(2)
        else:
            with app.app_context():
                message = Message(subject="UNNCTeam18 Update attentions", recipients=[email],
                                  body=f"Sina has updated, {len(output)} new news, topic is {get_topic}. Please go to "
                                       f"the mini program to check")
                # mail.send(message)
                for item in output:
                    try:
                        sinainfo = SinaExtract(title=item.get('title'), url=item.get('url'), media=item.get('media'),
                                               temp_text=item.get('news_context'), datetime=item.get('upload_time'),
                                               topic=get_topic, author=user)

                        db.session.add(sinainfo)
                        db.session.commit()

                    except Exception as e:
                        print(e)
                underlying.control_data_number.control_number(2)

    timer = threading.Timer(interval, sina_thread, (get_topic, interval, user, email, times))
    timer.start()


@bp.route("/extract", methods=["GET", "POST"])
def sina_extract():
    output = []
    sina_show = SinaExtract.query.filter_by(author=g.user)
    sina_number = SinaResultCount.query.filter_by(author=g.user).first()
    sina_id = 0
    for item in sina_show:
        if sina_number:
            if item.id <= sina_number.lastID:
                continue
        global topic
        if item.topic != topic:
            continue
        d = {}
        d["id"] = item.id
        d["title"] = item.title
        d["url"] = item.url
        d["media"] = item.media
        d["news_content"] = item.temp_text
        d["upload_time"] = item.datetime
        output.append(d)
        if item.id > sina_id:
            sina_id = item.id


    if sina_number:
        if len(output) != 0:
            sina_number.lastID = sina_id
            db.session.commit()
    else:
        bili_number = SinaResultCount(lastID=sina_id, author=g.user)
        db.session.add(bili_number)
        db.session.commit()

    return jsonify({"info": output})

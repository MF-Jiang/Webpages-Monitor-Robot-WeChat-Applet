# Written by GRP Team202218
import random

from flask import Blueprint, request, jsonify, g
from exts import mail, db, create_app
from models import GSExtract, GSResultCount, BingExtract, BingResultCount
import underlying.crawl_google_scholar
import underlying.crawl_bing
import underlying.control_data_number
from flask_mail import Message
from decorators import login_required
import threading
from threading import Thread

bp = Blueprint("google_scholar", __name__, url_prefix="/api/academic")

topic = ""


@bp.route("/start", methods=["GET", "POST"])
# @login_required
def gs_start():
    global topic
    gs_json = request.get_json()
    isStart = gs_json.get("start")
    get_number = gs_json.get("number")
    get_topic = gs_json.get("topic")
    get_days = gs_json.get("days")
    get_hours = gs_json.get("hours")
    get_minutes = gs_json.get("minutes")
    interval = int(get_days) * 86400 + int(get_hours) * 3600 + int(get_minutes) * 60
    if isStart:
        topic = get_topic
        email = g.user.email
        # d = Thread(target=bing_thread, args=(get_topic, int(get_number), interval, g.user, email, 0))
        # d.start()
        gs_thread(get_topic, int(get_number), interval, g.user, email, 0, True)
        bing_thread(get_topic, int(get_number), interval, g.user, email, 0)
        # d.join()
        return jsonify({"ifWork": True})
    else:
        topic = ""
        return jsonify({"ifWork": False})


def gs_thread(get_topic, get_number, interval, user, email, times, ifnew):
    global topic
    if get_topic != topic:
        return

    app = create_app()
    output = underlying.crawl_google_scholar.google_scholar_crawler(get_topic, get_number, ifnew)
    ifnew = False
    print("local output:")
    try:
        print(output)
    except:
        print("decode error, cannot print")

    if len(output) != 0:
        if times == 0:
            for item in output:
                try:
                    gsinfo = GSExtract(title=item[0], link=item[1], pdf=item[2], content=item[3], topic=get_topic,
                                       author=user)

                    db.session.add(gsinfo)
                    db.session.commit()

                except Exception as e:
                    print(e)
            times += 1
            underlying.control_data_number.control_number(3)
        else:
            with app.app_context():
                message = Message(subject="UNNCTeam18 Update attentions", recipients=[email],
                                  body=f"Google Scholar has updated, {len(output)} new essays, topic is {get_topic}."
                                       f"Please go to the mini program to check.")
                mail.send(message)
                for item in output:
                    try:
                        gsinfo = GSExtract(title=item[0], link=item[1], pdf=item[2], content=item[3], topic=get_topic,
                                           author=user)

                        db.session.add(gsinfo)
                        db.session.commit()

                    except Exception as e:
                        print(e)
                underlying.control_data_number.control_number(3)

    timer = threading.Timer(interval, gs_thread, (get_topic, get_number, interval, user, email, times, ifnew))
    timer.start()


def bing_thread(get_topic, get_number, interval, user, email, times):
    global topic
    if get_topic != topic:
        return

    app = create_app()
    output = underlying.crawl_bing.bing_crawler(get_topic, get_number)
    number = 0
    print("local output:")
    try:
        print(output)
    except:
        print("decode error, cannot print")

    if len(output) != 0:
        if times == 0:
            for item in output:
                try:
                    binginfo = BingExtract(title=item.get("title"), link=item.get("url"), content=item.get("content"),
                                           topic=get_topic, author=user)

                    db.session.add(binginfo)
                    db.session.commit()

                except Exception as e:
                    print(e)
        else:
            with app.app_context():
                for item in output:
                    ifExit = BingExtract.query.filter_by(title=item.get("title")).first()
                    if not ifExit:
                        try:
                            binginfo = BingExtract(title=item.get("title"), link=item.get("url"), content=item.get("content"),
                                               topic=get_topic, author=user)

                            db.session.add(binginfo)
                            db.session.commit()

                        except Exception as e:
                            print(e)
                        number += 1

                if times != 0 and number != 0:
                    message = Message(subject="UNNCTeam18 Update attentions", recipients=[email],
                                      body=f"Google Scholar has updated, {len(output)} new essays, topic is {get_topic}."
                                           f"Please go to the mini program to check.")
                    mail.send(message)
                underlying.control_data_number.control_number(4)
        times = 1

    timer = threading.Timer(interval, bing_thread, (get_topic, get_number, interval, user, email, times))
    timer.start()


@bp.route("/extract", methods=["GET", "POST"])
def gs_extract():
    ac_json = request.get_json()
    select = ac_json.get("web") # 0 = gs, 1 = bing

    index1 = 0
    index2 = 0
    output = []
    output1 = gs_out()
    output2 = bing_out()
    if int(select) == 1:
        output = output1
    elif int(select) == 2:
        output = output2
    else:
        length = len(output2)
        while True:
            c1 = random.randint(1, 4)
            c2 = random.randint(1, 4)
            for i in range(c1):
                try:
                    if index1+i >= length//2:
                        break
                    output.append(output1[index1 + i])
                except:
                    pass
            for i in range(c2):
                try:
                    if index2+i >= length//2:
                        break
                    output.append(output2[index2 + i])
                except:
                    pass

            index1 += c1
            index2 += c2

            if index1 >= len(output1) and index2 >= len(output2):
                break
        print(len(output))
        if length % 2 != 0:
            output.append(output1[length//2])

    return jsonify({"info": output})


def gs_out():
    output = []
    global topic
    gs_show = GSExtract.query.filter_by(author=g.user)
    gs_number = GSResultCount.query.filter_by(author=g.user).first()
    gs_id = 0
    for item in gs_show:
        if gs_number:
            if item.id <= gs_number.lastID:
                continue

        if item.topic != topic:
            continue
        d = {}
        d["id"] = f"g{item.id}"
        d["title"] = item.title
        d["link"] = item.link
        d["pdf"] = item.pdf
        d["content"] = item.content
        output.append(d)
        if item.id > gs_id:
            gs_id = item.id

    if gs_number:
        if len(output) != 0:
            gs_number.lastID = gs_id
            db.session.commit()
    else:
        bili_number = GSResultCount(lastID=gs_id, author=g.user)
        db.session.add(bili_number)
        db.session.commit()

    return output


def bing_out():
    global topic
    output = []
    bing_show = BingExtract.query.filter_by(author=g.user)
    bing_number = BingResultCount.query.filter_by(author=g.user).first()
    bing_id = 0
    for item in bing_show:
        if bing_number:
            if item.id <= bing_number.lastID:
                continue
        if item.topic != topic:
            continue
        d = {}
        d["id"] = f"b{item.id}"
        d["title"] = item.title
        d["link"] = item.link
        d["content"] = item.content
        output.append(d)
        if item.id > bing_id:
            bing_id = item.id

    if bing_number:
        if len(output) != 0:
            bing_number.lastID = bing_id
            db.session.commit()
    else:
        bili_number = BingResultCount(lastID=bing_id, author=g.user)
        db.session.add(bili_number)
        db.session.commit()

    return output
# Written by GRP Team202218
from flask import Blueprint, request, jsonify, g, session
from exts import db
from models import UserModel, BiliExtract, GSExtract, SinaExtract
from decorators import login_required

bp = Blueprint("userInfo", __name__, url_prefix="/api/userInfo")


@bp.route("/personal_data", methods=["GET", "POST"])
# @login_required
def personal_data():
    user = UserModel.query.get(g.user.id)
    d = {}
    d["username"] = user.username
    d["email"] = user.email
    d["join_time"] = user.joinTime

    return jsonify({"info": d})


@bp.route("/personal_data/modify", methods=["GET", "POST"])
def modify_personal_info():
    modifyPI_json = request.get_json()
    get_username = modifyPI_json.get("username")
    get_email = modifyPI_json.get("email")

    user = UserModel.query.get(g.user.id)
    user.username = get_username
    user.email = get_email
    db.session.commit()

    return jsonify({"ifSuccess": True})


@bp.route("/modify_password", methods=["GET", "POST"])
def modify_password():
    modifyPwd_json = request.get_json()
    get_pwd = modifyPwd_json.get("password")
    get_newPwd = modifyPwd_json.get("new_password")
    get_confirm = modifyPwd_json.get("confirm")

    user = UserModel.query.get(g.user.id)
    if user.password == get_pwd:
        if get_newPwd == get_confirm:
            user.password = get_newPwd
            db.session.commit()
            return jsonify({"ifSuccess": True, "message": None})
        else:
            return jsonify({"ifSuccess": False, "message": "Confirm password is not same as new password"})
    else:
        return jsonify({"ifSuccess": False, "message": "Password Error"})


@bp.route("/history/bilibili", methods=["GET", "POST"])
def history_bili():
    bili_history = BiliExtract.query.filter_by(author=g.user)
    output = []
    for item in bili_history:
        d = {}
        d["title"] = item.title
        d["url"] = item.url
        d["uploader"] = item.uploader
        d["view_counts"] = item.view_counts
        d["upload_time"] = item.upload_time
        d["image"] = item.image
        d["topic"] = item.topic
        output.append(d)

    return jsonify({"info":output})


@bp.route("/history/google_scholar", methods=["GET", "POST"])
def history_gs():
    gs_history = GSExtract.query.filter_by(author=g.user)
    output = []
    for item in gs_history:
        d = {}
        d["title"] = item.title
        d["link"] = item.link
        d["pdf"] = item.pdf
        d["topic"] = item.topic
        output.append(d)

    return jsonify({"info":output})


@bp.route("/history/sina", methods=["GET", "POST"])
def history_sina():
    sina_history = SinaExtract.query.filter_by(author=g.user)
    output = []
    for item in sina_history:
        d = {}
        d["title"] = item.title
        d["datetime"] = item.url
        d["media"] = item.uploader
        d["url"] = item.view_counts
        d["temp_text"] = item.upload_time
        d["topic"] = item.topic
        output.append(d)

    return jsonify({"info": output})


@bp.route("/logout", methods=["GET", "POST"])
def logout():
    session.clear()

    return jsonify({"ifSuccess": True})
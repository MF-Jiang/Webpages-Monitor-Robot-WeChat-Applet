# Written by GRP Team202218
from flask import Blueprint, request, jsonify, session, g, make_response
from exts import mail, db
from flask_mail import Message
import string
import random
from models import UserModel, EmailCaptchaModel, FindPwdCaptchaModel
from decorators import login_required

bp = Blueprint("auth", __name__, url_prefix="/api/auth")


@bp.route("/login", methods=["GET", "POST"])
def login():
    login_json = request.get_json()
    get_personalInfo = login_json.get("uore")
    get_password = login_json.get("password")
    useremail = UserModel.query.filter_by(email=get_personalInfo, password=get_password).first()
    userusername = UserModel.query.filter_by(username=get_personalInfo, password=get_password).first()

    if useremail or userusername:
        if useremail:
            session['user_id'] = useremail.id  # Cookie
        if userusername:
            session['user_id'] = userusername.id
        return jsonify({"ifSuccess": True, "message": "", "data": None})
    else:
        return jsonify({"ifSuccess": False, "message": "account or password error", "data": None})


@bp.route("/register", methods=["GET", "POST"])
def register():
    register_json = request.get_json()
    get_username = register_json.get("username")
    get_email = register_json.get("email")
    get_captcha = register_json.get("captcha")
    get_password = register_json.get("password")

    email_captcha = EmailCaptchaModel.query.filter_by(email=get_email, captcha=get_captcha).first()
    if not email_captcha:
        return jsonify({"ifSuccess": False, "message": "captcha error", "data": None})
    else:
        name = UserModel.query.filter_by(username=get_username).first()
        if name:
            return jsonify({"ifSuccess": False, "message": "username has existed", "data": None})

        user = UserModel.query.filter_by(email=get_email).first()
        if user:
            return jsonify({"ifSuccess": False, "message": "email address has existed", "data": None})
        else:
            user = UserModel(email=get_email, username=get_username, password=get_password)
            db.session.add(user)
            db.session.commit()
            db.session.delete(email_captcha)
            db.session.commit()
            return jsonify({"ifSuccess": True, "message": "", "data": None})


@bp.route("/register/captcha", methods=["GET", "POST"])
def email_captcha():
    captcha_json = request.get_json()
    email = captcha_json.get("email")
    captcha = random.sample(string.digits * 4, 4)
    captcha = "".join(captcha)
    try:
        message = Message(subject="UNNCTeam18 Captcha", recipients=[email], body=f"Captcha is {captcha}. "
                                                        f"Now you can return to the mini program to complete register")
        mail.send(message)

    except:
        return jsonify({"ifSuccess": False, "message": "Please enter correct email"})

    email_captcha = EmailCaptchaModel(email=email, captcha=captcha)
    db.session.add(email_captcha)
    db.session.commit()
    return jsonify({"ifSuccess": True, "message": None})


@bp.route("/find_password", methods=["GET", "POST"])
def find_password():
    findPwd_json = request.get_json()
    email = findPwd_json.get("uoe")
    captcha = findPwd_json.get("captcha")

    user_check_username = UserModel.query.filter_by(username=email).first()

    if user_check_username:
        email = user_check_username.email

    confirm_captcha = FindPwdCaptchaModel.query.filter_by(email=email).first()
    if not confirm_captcha:
        return jsonify({"ifSuccess": False, "message": "Username or email error", "data": None})

    if confirm_captcha.captcha != captcha:
        return jsonify({"ifSuccess": False, "message": "Captcha error", "data": None})
    else:
        user_email = UserModel.query.filter_by(email=email).first()
        if user_email:
            db.session.delete(confirm_captcha)
            db.session.commit()
            return jsonify({"ifSuccess": True, "message": None, "data": user_email.password})
        else:
            return jsonify({"ifSuccess": False, "message": "This email hasn't registered", "data": None})


@bp.route("/find_password/captcha", methods=["GET", "POST"])
def findPwd_captcha():
    captcha_json = request.get_json()
    uoe = captcha_json.get("uoe")
    user_email = UserModel.query.filter_by(email=uoe).first()
    user_username = UserModel.query.filter_by(username=uoe).first()
    if user_email:
        email = uoe
    else:
        if user_username:
            email = user_username.email
        else:
            return jsonify({"ifSuccess": False, "message": "No username or email"})

    captcha = random.sample(string.digits * 4, 4)
    captcha = "".join(captcha)
    message = Message(subject="find password captcha test", recipients=[email], body=f"{captcha}")
    mail.send(message)

    findPwd_captcha = FindPwdCaptchaModel(email=email, captcha=captcha)
    if findPwd_captcha:
        print(True)
    db.session.add(findPwd_captcha)
    db.session.commit()
    return jsonify({"ifSuccess": True})


@bp.route("/user_menu", methods=["GET", "POST"])
# @login_required
def user_menu():
    user = UserModel.query.get(g.user.id)
    return jsonify({"username": user.username, "email": user.email, "time": user.joinTime})


@bp.route("/user_menu/change", methods=["GET", "POST"])
def change_user():
    change_json = request.get_json()
    get_username = change_json.get("username")
    get_email = change_json.get("email")

    user = UserModel.query.get(g.user.id)
    user.username = get_username
    user.email = get_email
    db.session.commit()
    return jsonify(({"ifSuccess": True}))


@bp.route("/change_password", methods=["GET", "POST"])
def change_password():
    changep_json = request.get_json()
    get_old = changep_json.get("old")
    get_new = changep_json.get("new")

    user = UserModel.query.get(g.user.id)
    if get_old == user.password:
        user.password = get_new
        db.session.commit()
        return jsonify({"ifSuccess": True, "message": None})
    else:
        return jsonify({"ifSuccess": False, "message": "old password error"})


@bp.route("/logout", methods=["GET", "POST"])
def log_out():
    session.clear()
    response = make_response()
    response.delete_cookie('session')

    return jsonify({"ifSuccess": True})

# Written by GRP Team202218
from exts import db
from datetime import datetime


class UserModel(db.Model):
    __tablename__ = "user"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    username = db.Column(db.String(100), nullable=False)
    password = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False, unique=True)
    joinTime = db.Column(db.DateTime, default=datetime.now)


class EmailCaptchaModel(db.Model):
    __tablename__ = "email_captcha"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    email = db.Column(db.String(100), nullable=False)
    captcha = db.Column(db.String(100), nullable=False)
    createTime = db.Column(db.DateTime, default=datetime.now)


class FindPwdCaptchaModel(db.Model):
    __tablename__ = "findPwd_captcha"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    email = db.Column(db.String(100), nullable=False)
    captcha = db.Column(db.String(100), nullable=False)
    createTime = db.Column(db.DateTime, default=datetime.now)


class GSExtract(db.Model):
    __tablename__ = "gs_extract"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    topic = db.Column(db.String(100), nullable=False)
    title = db.Column(db.String(1000), nullable=True)
    link = db.Column(db.String(200), nullable=True)
    pdf = db.Column(db.String(100))
    content = db.Column(db.String(10000))

    author_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    author = db.relationship(UserModel, backref="gs_extract")


class BingExtract(db.Model):
    __tablename__ = "bing_extract"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    topic = db.Column(db.String(100), nullable=False)
    title = db.Column(db.String(1000), nullable=True)
    link = db.Column(db.String(200), nullable=True)
    content = db.Column(db.String(10000))

    author_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    author = db.relationship(UserModel, backref="bing_extract")


class BiliExtract(db.Model):
    __tablename__ = "bili_extract"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    title = db.Column(db.String(100), nullable=True)
    url = db.Column(db.String(200), nullable=True)
    uploader = db.Column(db.String(100), nullable=True)
    view_counts = db.Column(db.String(100), nullable=True)
    upload_time = db.Column(db.String(100), nullable=True)
    image = db.Column(db.String(200), nullable=True)
    topic = db.Column(db.String(200), nullable=False)

    author_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    author = db.relationship(UserModel, backref="bili_extract")


class SinaExtract(db.Model):
    __tablename__ = "sina_extract"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    title = db.Column(db.String(1000), nullable=True)
    datetime = db.Column(db.String(100), nullable=True)
    media = db.Column(db.String(100), nullable=True)
    url = db.Column(db.String(200), nullable=True)
    temp_text = db.Column(db.String(10000), nullable=True)
    topic = db.Column(db.String(200), nullable=False)

    author_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    author = db.relationship(UserModel, backref="sina_extract")


class BiliResultCount(db.Model):
    __tablename__ = "bili_result_count"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    lastID = db.Column(db.Integer, nullable=False)

    author_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    author = db.relationship(UserModel, backref="bili_result_count")


class SinaResultCount(db.Model):
    __tablename__ = "sina_result_count"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    lastID = db.Column(db.Integer, nullable=False)

    author_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    author = db.relationship(UserModel, backref="sina_result_count")


class GSResultCount(db.Model):
    __tablename__ = "gs_result_count"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    lastID = db.Column(db.Integer, nullable=False)

    author_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    author = db.relationship(UserModel, backref="gs_result_count")


class BingResultCount(db.Model):
    __tablename__ = "bing_result_count"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    lastID = db.Column(db.Integer, nullable=False)

    author_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    author = db.relationship(UserModel, backref="bing_result_count")

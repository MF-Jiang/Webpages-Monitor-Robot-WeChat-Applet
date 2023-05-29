# Written by GRP Team202218
# DB_URI = 'mysql+pymysql://root:Hrz020123@localhost/grp18?charset=utf8'
import os

basedir = os.path.abspath(os.path.dirname(__file__))

SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(basedir, 'app.db')
# SQLALCHEMY_MIGRATE_REPO = os.path.join(basedir, 'db_repository')

# 网易邮箱：SNNJFMMFWVGXVJBR
MAIL_SERVER = "smtp.163.com"
MAIL_USE_SSL = True
MAIL_PORT = 465
MAIL_USERNAME = "h13214243479@163.com"
MAIL_PASSWORD = "SNNJFMMFWVGXVJBR"
MAIL_DEFAULT_SENDER = "h13214243479@163.com"

SECRET_KEY = "nvxkzizovklaenahviio"

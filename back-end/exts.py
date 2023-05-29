# Written by GRP Team202218
from flask_sqlalchemy import SQLAlchemy
from flask_mail import Mail
from flask import Flask
import config

db = SQLAlchemy()
mail = Mail()


def create_app():
    app = Flask(__name__)
    app.config.from_object(config)
    db.init_app(app)
    mail.init_app(app)
    return app




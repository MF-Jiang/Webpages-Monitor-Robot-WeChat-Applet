# Written by GRP Team202218
from flask import Flask, session, g, jsonify
import config
from exts import db, mail
from models import UserModel
from api.auth import bp as authBp
from api.userInfo import bp as userBp
from api.academic import bp as gsBp
from api.bilibili import bp as biliBp
from api.sina import bp as sinaBp

app = Flask(__name__)
app.config.from_object(config)

db.init_app(app)
mail.init_app(app)
app.register_blueprint(authBp)
app.register_blueprint(userBp)
app.register_blueprint(gsBp)
app.register_blueprint(biliBp)
app.register_blueprint(sinaBp)


@app.before_request # Cookie
def my_before_request():
    user_id = session.get("user_id")
    if user_id:
        user = UserModel.query.get(user_id)
        setattr(g, "user", user)
    else:
        setattr(g, "user", None)


@app.context_processor
def my_context_processor():
    return {"user": g.user}


@app.route("/", methods=["GET", "POST"])
def init():
    db.drop_all()
    db.create_all()
    return jsonify({"ifSuccess": True})


if __name__ == '__main__':
    app.run()
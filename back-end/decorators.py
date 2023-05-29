# Written by GRP Team202218
from functools import wraps
from flask import g, jsonify


def login_required(func):
    @wraps(func)
    def inner(*args, **kwargs):
        if g.user:
            return func(*args, **kwargs)
        else:
            return jsonify({"ifWork": "Hasn't log in"})
    return inner
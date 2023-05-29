# Written by GRP Team202218
from flask import g
from exts import db
from models import BiliExtract, SinaExtract, GSExtract, BingExtract


def control_number(select):

    if select == 1:
        Model = BiliExtract
    elif select == 2:
        Model = SinaExtract
    elif select == 3:
        Model = GSExtract
    else:
        Model = BingExtract

    index = 0
    # data = Model.query.filter_by(author=g.user).all()
    data = Model.query.all()
    length = len(data)
    while True:
        if length <= 1000:
            break
        else:
            db.session.delete(data[index])
            db.session.commit()
            index += 1
            length -= 1

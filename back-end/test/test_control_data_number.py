# Written by GRP Team202218
import pytest
import underlying.control_data_number
from exts import db
from models import BiliExtract, SinaExtract, GSExtract, BingExtract


class TestControlDataNumber:
    def test_bili(self):
        count = 0
        for i in range(1500):
            data = BiliExtract(title="title", url="url",
                               uploader="uploader",
                               view_counts="view_counts", upload_time="upload_time",
                               image="image", topic="topic", author=None)
            db.session.add(data)
            db.session.commit()
            underlying.control_data_number.control_number(1)

        datas = BiliExtract.query()

        for item in datas:
            count += 1

        if count == 1000:
            assert True
        else:
            assert False

    def test_sina(self):
        count = 0
        for i in range(1500):
            sinainfo = SinaExtract(title="title", url="url", media="media",
                                   temp_text="tempt_tesxt", datetime="datetime",
                                   topic="topic", author=None)

            db.session.add(sinainfo)
            db.session.commit()

        datas = SinaExtract.query()

        for item in datas:
            count += 1

        if count == 1000:
            assert True
        else:
            assert False

    def test_gs(self):
        count = 0
        for i in range(1500):
            gsinfo = GSExtract(title="title", link="link", pdf="pdf", content="content", topic="topic",
                               author=None)

            db.session.add(gsinfo)
            db.session.commit()

        datas = GSExtract.query()

        for item in datas:
            count += 1

        if count == 1000:
            assert True
        else:
            assert False

    def test_bing(self):
        count = 0
        for i in range(1500):
            binginfo = BingExtract(title="title", link="link", content="content", topic="topic",
                               author=None)

            db.session.add(binginfo)
            db.session.commit()

        datas = BingExtract.query()

        for item in datas:
            count += 1

        if count == 1000:
            assert True
        else:
            assert False


if __name__ == "__main__":
    pytest.main(["-s", __file__])
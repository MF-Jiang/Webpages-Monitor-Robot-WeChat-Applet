# Written by GRP Team202218
import pytest
from dateutil.relativedelta import relativedelta
import underlying.crawl_bilibili
import datetime


class TestGoogleScholar:
    def test_aviliable(self):
        result = underlying.crawl_bilibili.bilibili_monitor("音乐", 300)
        if result:
            assert True
        else:
            assert False

    def test_within_limitation(self):
        now_date = datetime.datetime.now()
        result = underlying.crawl_bilibili.bilibili_monitor("音乐", 300)
        last_time = result[len(result)-1].get("upload_time")

        if now_date - relativedelta(seconds=300) <= datetime.datetime.strptime(last_time, "%Y-%m-%d %H:%M:%S"):
            assert True
        else:
            assert False

    def test_value(self):
        result = underlying.crawl_bilibili.bilibili_monitor("音乐", 300)
        for item in result:
            if len(item) == 6:
                continue
            else:
                assert False
        assert True


if __name__ == "__main__":
    pytest.main(["-s", __file__])
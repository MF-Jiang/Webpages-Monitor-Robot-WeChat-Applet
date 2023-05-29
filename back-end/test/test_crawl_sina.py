# Written by GRP Team202218
import pytest
from dateutil.relativedelta import relativedelta

import underlying.crawl_sina
import datetime


class TestGoogleScholar:
    def test_aviliable(self):
        result = underlying.crawl_sina.sina_monitor("中国", 1200)
        if result:
            assert True
        else:
            assert False

    def test_within_limitation(self):
        now_date = datetime.datetime.now()
        result = underlying.crawl_sina.sina_monitor("中国", 1200)
        last_time = result[len(result)-1].get("upload_time")

        if now_date - relativedelta(seconds=1200) <= datetime.datetime.strptime(last_time, "%Y-%m-%d %H:%M:%S"):
            assert True
        else:
            assert False

    def test_value(self):
        result = underlying.crawl_sina.sina_monitor("中国", 1200)
        for item in result:
            if len(item) == 5:
                continue
            else:
                assert False
        assert True


if __name__ == "__main__":
    pytest.main(["-s", __file__])
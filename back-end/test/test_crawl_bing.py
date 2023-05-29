# Written by GRP Team202218
import pytest
import underlying.crawl_bing


class TestBing:
    def test_result(self):
        result = underlying.crawl_bing.bing_crawler("computer", 18)
        if len(result) == 18:
            assert True
        else:
            assert False

    def test_no_repeat(self):
        result = underlying.crawl_bing.bing_crawler("computer", 18)
        result_empty = underlying.crawl_bing.bing_crawler("computer", 0)
        if len(result_empty) == 0 and len(result) != 0:
            assert True
        else:
            assert False

    def test_value(self):
        result = underlying.crawl_bing.bing_crawler("computer", 18)
        for item in result:
            if len(item) == 3:
                continue
            else:
                assert False
        assert True


if __name__ == "__main__":
    pytest.main(["-s", __file__])
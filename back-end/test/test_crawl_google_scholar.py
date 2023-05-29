# Written by GRP Team202218
import pytest
import underlying.crawl_google_scholar


class TestGoogleScholar:
    def test_result(self):
        result = underlying.crawl_google_scholar.google_scholar_crawler("computer", 18, True)
        if len(result) == 18:
            assert True
        else:
            assert False

    def test_no_repeat(self):
        result = underlying.crawl_google_scholar.google_scholar_crawler("computer", 18, True)
        result_empty = underlying.crawl_google_scholar.google_scholar_crawler("computer", 18, False)
        if len(result_empty) == 0 and len(result) != 0:
            assert True
        else:
            assert False

    def test_value(self):
        result = underlying.crawl_google_scholar.google_scholar_crawler("computer", 18, True)
        for item in result:
            if len(item) == 4:
                continue
            else:
                assert False
        assert True


if __name__ == "__main__":
    pytest.main(["-s", __file__])
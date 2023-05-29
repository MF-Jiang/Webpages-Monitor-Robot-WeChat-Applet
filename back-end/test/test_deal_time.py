# Written by GRP Team202218
import pytest
import underlying.deal_time


class TestDealTime:

    def test_order(self):
        time = ["2023-03-26 16:31:22", "2023-03-26 16:31:28", "2023-03-26 16:35:22", "2023-03-26 11:35:22",
                "2023-03-20 11:35:22", "2023-11-26 11:35:22", "2012-03-26 11:35:22"]

        result = underlying.deal_time.time_order(time)

        if result == [5, 2, 1, 0, 3, 4, 6]:
            assert True
        else:
            assert False


if __name__ == "__main__":
    pytest.main(["-s", __file__])

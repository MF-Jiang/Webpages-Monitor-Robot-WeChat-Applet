# Written by GRP Team202218
def if_former_biggerthan_later(str1, str2):  # if str1 > str2, return true; else false

    year1 = int(str1[0:4])
    month1 = int(str1[5:7])
    day1 = int(str1[8:10])
    hour1 = int(str1[11:13])
    minute1 = int(str1[14:16])
    second1 = int(str1[17:])
    year2 = int(str2[0:4])
    month2 = int(str2[5:7])
    day2 = int(str2[8:10])
    hour2 = int(str2[11:13])
    minute2 = int(str2[14:16])
    second2 = int(str2[17:])

    if year1 > year2:
        result = True
    elif year1 < year2:
        result = False
    else:
        if month1 > month2:
            result = True
        elif month1 < month2:
            result = False
        else:
            if day1 > day2:
                result = True
            elif day1 < day2:
                result = False
            else:
                if hour1 > hour2:
                    result = True
                elif hour1 < hour2:
                    result = False
                else:
                    if minute1 > minute2:
                        result = True
                    elif minute1 < minute2:
                        result = False
                    else:
                        if second1 > second2:
                            result = True
                        else:
                            result = False
    return result


def time_order(timeOrder):  # from big to small

    result = []
    while True:
        index = 0
        for i in range(0, len(timeOrder)):
            if not if_former_biggerthan_later(timeOrder[index], timeOrder[i]):
                index = i
            else:
                continue
        timeOrder[index] = "0000-00-00 00-00-00"
        result.append(index)
        if len(result) == len(timeOrder):
            break

    return result


if __name__ == "__main__":
    time = ["2023-03-26 16:31:22", "2023-03-26 16:31:28", "2023-03-26 16:35:22", "2023-03-26 11:35:22",
            "2023-03-20 11:35:22", "2023-11-26 11:35:22", "2012-03-26 11:35:22"]

    result = time_order(time)
    print(result)

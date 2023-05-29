# Written by GRP Team202218
from lxml import etree
import requests
import datetime

LastCrawl = ""
IfRubbish = False


def dealTitle(a):
    global IfRubbish
    try:
        a.xpath('div/h2')[0].xpath('string(.)')
        IfRubbish = True
        # print("rubbish")
        return []
    except:
        pass

    global LastCrawl
    ifPDF = True
    title = a.xpath('div/h3/a')[0].xpath('string(.)')
    link = a.xpath('div/h3/a/@href')[0]
    abstract = a.xpath('div/div[2]')[0].xpath('string(.)')

    try:
        a.xpath('div[2]/h3/a')[0].xpath('string(.)')
    except:
        ifPDF = False

    if not ifPDF:
        result = [title, link, None, abstract]

    else:
        downloadThing = a.xpath('div[1]/div/div/a')[0].xpath('string(.)')
        downloadLink = a.xpath('div[1]/div/div/a/@href')[0]
        if 'PDF' in downloadThing:
            result = [title, link, downloadLink, abstract]
        else:
            result = [title, link, None, abstract]

    return result


def spider(url, number, page):
    global LastCrawl
    global IfRubbish
    output = []
    response = requests.get(url)
    selector = etree.HTML(response.text)

    for i in range(1, number + 1):
        # print(i)
        # print("ifRubbish= ", IfRubbish)
        a = selector.xpath('//*[@id="gs_res_ccl_mid"]/div[{}]'.format(i))[0]
        result = dealTitle(a)
        if len(result) != 0:
            if result[0] == LastCrawl:
                return output

            output.append(result)

        if page == 0 and i == 1:
            LastCrawl = result[0]
    if IfRubbish:
        a = selector.xpath('//*[@id="gs_res_ccl_mid"]/div[11]')[0]
        result = dealTitle(a)
        if len(result) != 0:
            if result[0] == LastCrawl:
                return output

            output.append(result)
    return output


def google_scholar_crawler(topic, number, ifnew):
    global LastCrawl
    global IfRubbish
    if ifnew:
        LastCrawl = ""
    output = []
    page = number // 10
    rest = number % 10

    if page == 0:
        url = "https://scholar.google.com/scholar?hl=en&as_sdt=0,5&q={}&scisbd=1".format(topic)
        result = spider(url, number, 0)
        for item in result:
            output.append(item)
    else:
        try:
            for i in range(0, page):
                IfRubbish = False
                url = "https://scholar.google.com/scholar?start={}0&q={}&hl=en&scisbd=1&as_sdt=0,5".format(i, topic)
                result = spider(url, 10, i)
                if len(result) != 0:
                    for item in result:
                        output.append(item)
                if len(result) != 10:
                    return output
                # print(datetime.datetime.now())
            IfRubbish = False
            url = "https://scholar.google.com/scholar?start={}0&q={}&hl=en&scisbd=1&as_sdt=0,5".format(page, topic)
            result = spider(url, rest, page)
            if len(result) != 0:
                for item in result:
                    output.append(item)
        except:
            print("No more articles")
    return output


if __name__ == "__main__":
    # topic = input("Search: ") # have to fill
    topic = 'computer'

    # number = int(input("Number: ")) # if no default 100
    number = 9

    result = google_scholar_crawler(topic, number, True)
    print(result)

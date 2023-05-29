# Written by Shujun JIANG(ssysj1)(20320552)
import copy
import datetime
import random
import time
import requests
import json
from bs4 import BeautifulSoup
from dateutil.relativedelta import relativedelta
from urllib.request import urlopen
from threading import Thread
from time import sleep
from underlying.deal_time import time_order

item_sina = []
flag = False
d = Thread()
end = 0


def getData(keyword, page):
    head = [
        "Mozilla/5.0 (Windows NT 6.0; rv:2.0) Gecko/20100101 Firefox/4.0 Opera 12.14",
        "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.0) Opera 12.14",
        "Opera/12.80 (Windows NT 5.1; U; en) Presto/2.10.289 Version/12.02",
        "Opera/9.80 (Windows NT 6.1; U; es-ES) Presto/2.9.181 Version/12.00",
        "Opera/9.80 (Windows NT 5.1; U; zh-sg) Presto/2.9.181 Version/12.00",
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36"
    ]

    headers = {"Host": "interface.sina.cn",
               "User-Agent": random.choice(head),
               "Accept": "*/*", "Accept-Language": "zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2",
               "Accept-Encoding": "gzip, deflate, br", "Connection": "keep-alive",
               "Referer": r"http://www.sina.com.cn/mid/search.shtml?range=all&c=news&q=%E6%97%85%E6%B8%B8&from=home"
                          r"&ie=utf-8",
               "Cookie": "ustat=__172.16.93.31_1580710312_0.68442000; genTime=1580710312; vt=99; "
                         "Apache=9855012519393.69.1585552043971; SINAGLOBAL=9855012519393.69.1585552043971; "
                         "ULV=1585552043972:1:1:1:9855012519393.69.1585552043971:; historyRecord={"
                         "'href':'https://news.sina.cn/','refer':'https://sina.cn/'}; SMART=0; dfz_loc=gd-default",
               "TE": "Trailers"}
    params = {"t": "", "q": keyword, "pf": "0", "ps": "0", "page": page, "stime": "2021-10-26", "etime": "2022-10-26",
              "sort": "rel", "highlight": "1", "num": "10", "ie": "utf-8"}
    response = requests.get("https://interface.sina.cn/homepage/search.d.json?", params=params, headers=headers)
    dic = json.loads(response.text)
    news = dic["result"]["list"]
    # print(page)
    # print(news)
    # print(len(news))
    return news


def gettimevalue(date):
    return datetime.datetime.strptime(date, "%Y-%m-%d %H:%M:%S").timestamp()


def getArticle(url):
    url = urlopen(url)
    soup = BeautifulSoup(url, "html.parser")
    head = soup.select(".main-title")[0].text
    date = soup.select(".date")[0].text
    article = []  # 定义列表

    if len(soup.select("#article p")) != 0:
        for p in soup.select("#article p"):
            article.append("\t" + p.text.strip() + "\n")
    else:
        if len(soup.select("#artibody p")) != 0:
            # for p in soup.select("#article")[:-1]:
            for p in soup.select("#artibody p"):
                article.append("\t" + p.text.strip() + "\n")
        else:
            for p in soup.select("#artical"):
                article.append("\t" + p.text.strip() + "\n")

    if len(article) == 1 or len(article) == 0:
        article.append(
            "\tThis news has no body and may contain media content (pictures, videos). You can click the link to "
            "watch it.")
    article = ' '.join(article)

    return article


def sina_speed(i, now_date, update_interval):
    global item_sina
    global flag
    checktime = i.get('datetime')
    strftime = datetime.datetime.strptime(checktime, "%Y-%m-%d %H:%M:%S")
    try:
        if now_date - relativedelta(seconds=update_interval) < strftime:
            d = {}
            try:
                temptext = getArticle(i.get('url'))
            except:
                temptext = "Third party web page cannot obtain the text content, if interested, you can click the " \
                           "link to visit."
            else:
                temptext = getArticle(i.get('url'))

            d['title'] = i.get('origin_title')
            d['url'] = i.get('url')
            d['media'] = i.get('media')
            d['upload_time'] = i.get('datetime')
            d['news_context'] = temptext
            item_sina.append(d)
        else:
            flag = True
    except:
        return


def sina_monitor_t(KeyWord, update_interval):
    global item_sina
    global flag
    global end
    global d
    time_monitor = time.time()
    news = []
    item_sina = []
    flag = False
    now_date = datetime.datetime.now()
    item_li_final = []
    sinapage = 1
    while sinapage <= 50:
        if time.time() - time_monitor > 40:
            d.join()
            end = 2
            return
        news = getData(KeyWord, sinapage)
        mynews = copy.deepcopy(news)
        for i in news:
            if "http" not in i["url"] or i["intro"] == '':
                mynews.remove(i)
        count = 1
        for i in mynews:
            d = Thread(target=sina_speed, args=(i, now_date, update_interval))
            d.start()
            if count % 5 == 0:
                sleep(random.uniform(0.3, 0.7))
            count += 1
            if flag:
                break
        sinapage += 1
        if (flag):
            break
        try:
            d.join()
        except:
            pass

    end = 1


def sina_monitor(KeyWord, update_interval):
    global end
    global item_sina
    start_time = time.time()
    t = Thread(target=sina_monitor_t, args=(KeyWord, update_interval))
    t.start()
    end = 0

    while time.time() - start_time <= 35 and end == 0:
        continue

    if end == 2:
        print("thread kill")
        return

    item_li_final = []
    if len(item_sina) != 0:
        timeOrder = []
        for item in item_sina:
            timeOrder.append(item.get("upload_time"))
        result = time_order(timeOrder)
        for item in result:
            item_li_final.append(item_sina[item])
    return item_li_final


def main():
    start = datetime.datetime.now()
    output = sina_monitor("NBA", 345600)
    print(output)
    print(len(output))
    print(datetime.datetime.now() - start)


if __name__ == '__main__':
    main()

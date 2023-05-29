# Written by GRP Team202218
import requests
from lxml import etree
import time
import random
from bs4 import BeautifulSoup
import datetime
from dateutil.relativedelta import relativedelta
from threading import Thread
from time import sleep
import random
import inspect
import ctypes
from underlying.deal_time import time_order

item_li = []
flag = False
d = Thread()
end = 0


def bili_thread(li, now_date, update_interval, headers):
    global flag
    global item_li
    # 提取视频名
    title = li.xpath('./a/@title')[0]
    if len(title) > 38:
        title = title[0:38] + "..."
    # 提取链接
    url = li.xpath('./a/@href')[0]
    subSoup = BeautifulSoup(requests.get('https:' + url, headers=headers).text.strip(), "html.parser")
    image = "https:" + subSoup.find(itemprop="image")["content"]
    li1 = image.split('@')
    image = li1[0] + "@672w_378h_1c_!web-search-common-cover.avif"
    upload_time = subSoup.find('span', class_="pudate-text").text.strip()
    strftime = datetime.datetime.strptime(upload_time, "%Y-%m-%d %H:%M:%S")
    # 提取播放量
    view_counts = li.xpath('./div/div[3]/span[1]/text()')[0].strip()
    # 提取弹幕数
    pop_ups = li.xpath('./div/div[3]/span[2]/text()')[0]
    uploader = li.xpath('./div/div[3]/span[4]/a/text()')[0]

    if (now_date - relativedelta(seconds=update_interval) < strftime):
        url = "https:" + url
        d = {}
        d['title'] = title
        d['url'] = url
        d['uploader'] = uploader
        d['view_counts'] = view_counts
        d["upload_time"] = upload_time
        d['image'] = image
        item_li.append(d)
    else:
        flag = True


def bilibili_monitor_t(keyword, update_interval):
    global flag
    global item_li
    global d
    global end
    time_monitor = time.time()
    i = 0
    item_li = []
    now_date = datetime.datetime.now()
    flag = False
    count = 0
    while (i <= 50):
        i += 1
        # 获取html页面
        lis = []
        temp = 0
        while (len(lis) == 0):
            time.sleep(1)
            # 获取html页面
            if (i == 1):
                # url = 'https://search.bilibili.com/all?vt=17287591&keyword=%E7%96%AB%E8%8B%97%E7%A7%91%E6%99%AE&from_source=nav_search&spm_id_from=333.851.b_696e7465726e6174696f6e616c486561646572.9&order=pubdate'
                url = 'https://search.bilibili.com/all?keyword=' + keyword + '&from_source=nav_search&spm_id_from=333.851.b_696e7465726e6174696f6e616c486561646572.9&order=pubdate'
            else:
                url = 'https://search.bilibili.com/all?keyword=' + keyword + '&from_source=nav_search&spm_id_from=333.851.b_696e7465726e6174696f6e616c486561646572.9&order=pubdate&page=' + str(
                    i)
            head = [
                "Mozilla/5.0 (Windows NT 6.0; rv:2.0) Gecko/20100101 Firefox/4.0 Opera 12.14",
                "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.0) Opera 12.14",
                "Opera/12.80 (Windows NT 5.1; U; en) Presto/2.10.289 Version/12.02",
                "Opera/9.80 (Windows NT 6.1; U; es-ES) Presto/2.9.181 Version/12.00",
                "Opera/9.80 (Windows NT 5.1; U; zh-sg) Presto/2.9.181 Version/12.00",
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36"
            ]
            headers = {
                'user-agent': random.choice(head),
                'Referer': 'https://www.bilibili.com/',
                'cookie': "_uuid=38505D66-5836-7006-B441-D8A7F44B081255211infoc; buvid3=2FA7C975-1F6B-47FC-961D-B998597045C953923infoc; sid=jtgdj478; LIVE_BUVID=AUTO5015857997467736; rpdid=|(~u|RmYY)J0J'ul)l~mm~R~; LIVE_PLAYER_TYPE=2; blackside_state=1; fingerprint=b7046ad02d6444e63a99648735729cdc; buvid_fp=2FA7C975-1F6B-47FC-961D-B998597045C953923infoc; buvid_fp_plain=2FA7C975-1F6B-47FC-961D-B998597045C953923infoc; DedeUserID=319136001; DedeUserID__ckMd5=c2fd54a2f5fbb92c; SESSDATA=edc55d5a%2C1629375534%2Caf07a*21; bili_jct=fcc932e20010531a42957e154977371f; CURRENT_FNVAL=80; bsource=search_google; finger=-166317360; arrange=list; PVID=1"
            }
            res = requests.get(url=url, headers=headers)
            res.encoding = 'utf-8'
            html = res.text

            # 解析页面，提取目标信息

            tree = etree.HTML(html)
            lis = tree.xpath('/html/body/div[3]/div/div[2]/div/div[1]/ul/li')
            temp += 1
            if (temp == 3):
                break

        if time.time() - time_monitor >= 40:
            d.join()
            end = 2
            return

        for li in lis:
            d = Thread(target=bili_thread, args=(li, now_date, update_interval, headers))
            d.start()
            count += 1
            if count % 5 == 0:
                sleep(random.uniform(0.3, 0.7))
                print(count, time.time() - time_monitor)
            if time.time() - time_monitor >= 35:
                flag = True
                break
            if flag:
                break
        try:
            d.join()
        except:
            pass
        if flag:
            break

    end = 1


def bilibili_monitor(keyword, update_interval):
    global end
    global item_li
    start_time = time.time()
    t = Thread(target=bilibili_monitor_t, args=(keyword, update_interval))
    t.start()
    end = 0

    while time.time() - start_time <= 35 and end == 0:
        continue

    if end == 2:
        print("thread kill")
        return

    item_li_final = []
    if len(item_li) != 0:
        timeOrder = []
        for item in item_li:
            timeOrder.append(item.get("upload_time"))
        result = time_order(timeOrder)
        for item in result:
            item_li_final.append(item_li[item])
    return item_li_final


if __name__ == '__main__':
    start = datetime.datetime.now()
    result = bilibili_monitor('音乐', 12000)
    # result1 = bilibili_monitor('音乐', 12000)
    end_t = datetime.datetime.now()
    print(result)
    print(len(result))
    print(end_t - start)
    # print(result1)

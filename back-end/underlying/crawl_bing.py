# Written by GRP Team202218
import re
import urllib

from bs4 import BeautifulSoup
import requests


def getData(keyword, pnumber, count):
    news = []
    topic = keyword.replace(' ','+')
    page = "{}1".format(pnumber)

    import requests

    cookies = {
        'MUID': '05FB54EBD1EF6F7735E04434D0A36E1A',
        'MUIDB': '05FB54EBD1EF6F7735E04434D0A36E1A',
        'SRCHD': 'AF=NOFORM',
        'SRCHUID': 'V=2&GUID=A59F882B5A1A4130AA6FD3C9617D7D7E&dmnchg=1',
        '_UR': 'QS=0&TQS=0',
        'MicrosoftApplicationsTelemetryDeviceId': 'd5a6e58c-c49a-4dc0-80d5-489b3771476b',
        'ANON': 'A=7379B76F7CA78E0DB3F88655FFFFFFFF&E=1bff&W=3',
        'PPLState': '1',
        'BFBUSR': 'BAWAS=1&BAWFS=1',
        'BFB': 'AhC_6eg_lZTnR5BNjiaSrONDnGC7ic1Z9sHx-ZBd_lYt8e4kiSpnfk9-eZpW_htez9qFJXical4kblXg9V6trW_-9moA01OybKHTE6MNOTGtBhfkKigjnkcKP2I2d4eehUg2C_c1B-Mlhl47bXwy5q7SW01fBsua4VyfmcW30qFRrw',
        'ANIMIA': 'FRE=1',
        'HOOKBLOCKINDICATOR': 'TRUE',
        '_clck': '1waaurr|1|f9j|0',
        '_HPVN': 'CS=eyJQbiI6eyJDbiI6OSwiU3QiOjAsIlFzIjowLCJQcm9kIjoiUCJ9LCJTYyI6eyJDbiI6OSwiU3QiOjAsIlFzIjowLCJQcm9kIjoiSCJ9LCJReiI6eyJDbiI6OSwiU3QiOjAsIlFzIjowLCJQcm9kIjoiVCJ9LCJBcCI6dHJ1ZSwiTXV0ZSI6dHJ1ZSwiTGFkIjoiMjAyMy0wMy0wMVQwMDowMDowMFoiLCJJb3RkIjowLCJHd2IiOjAsIkRmdCI6bnVsbCwiTXZzIjowLCJGbHQiOjAsIkltcCI6Njh9',
        'SUID': 'A',
        'OIDR': 'ghB_Qos7amum4vkNZr9d418be7lQDCzW1yXq2nNnOcMBpgxyhrsEsXVkG6_LjjxvhC0rki-0zoDh4lHxbyGgUzkLNKxO1qjri8uQ9u1Vu4KQktfqTdJQfoWKI_G-VRaaIm1BRwLjPMwuaCMVy_NwICtijQD8dyAlru2ztK4QybpkyDml_UU6P1enX9_G2XKct-3YsiEXoV_5JAzFzgsxHiusGrOTNQRMziKefB-H_TE5tKBz5I___4cl9pM-cWHGlRKQFK9gxYvP_LbWgW2QFv5l3M8pLjuMh871cP7YXd5hbdec3dJscHwZ36IQkdafShzx9MesWBv588Yjqxv8yS8DuthVLdemfEnnSdACntRZ16--N8xGFriFVQ4pLEXA9-AMjHE22JCUPKyaGe4vvu7RrpXN4sbIqyI7Z2jh3PG_VZCuSXQjQa1svV6oixu6qqTIOW0ffR163msKNXUMDIW1kqy-PMCG5ZRLlAyJxr93ZsncQRQQRHD9AkNhqGiieHJ3abeRQHIxLN-AfJoHtDIqOEtihyyYy2bG6w_Hmkdwfvfj3itupbzEfoystwmEY-sijtwHGjCnmkQTnxFffwsMSEQf6gpTgMStpHJ_X1oilrQLW-LgSLiDN32WCeUsjxdTO9Uc71nmaS20O6k9dpzabiCM-n5lNVd4c-OBh7TLwGe5CsCgf7coLw31w7zwZatGFippUJ8cGO5T_RC08BK9geyM-lfULckoy55LSGClda-rwEyZYx1Bkw0Low-Rds56xJvOob9m39GbLZMbu99imkxCsv2k8RWzSXR1dabdq79sJGKhaZK5a9WkO8Kbet4AgBpGUB9ls6XklifLvzDwK-J6b9-cZy2eLk9G3PvM8bQ-j03ir1D4SJi2XQe4eDs_TffhNzwsD9bGXxp_tFyCg5a8P3yMLJoRFqWUx2fuK95P_8ZBJ8TAD25Om5gsVO3oDntK2FIdFI9yxb9-KU_czISFeW5mW_Btw2HvDpDGvtLY5jSmQ8fjJwX6zxrFtvCgv1voOWExHW_kmViGpc-QJCRXYniLRrvzHmLtoRk5l-qkukoC4_Q-MPKjoYCSpjaxGEPtyJTbjwBY4qzb7oHy',
        'ACL': 'AhAKppdyjOWoTj8fOT32wMd9j0i10_A8lNezIrn2MicZ7icC0pUFtA5LLM87iFRHEyb0sneUGorYUyhKnZSlnKxY',
        'ACLUSR': 'T=1678870420000',
        'NAP': 'V=1.9&E=1bbf&C=aklQiKjsJUh8Fl74Z57muOTlPOi1S4ipiRD1MdoFuM2d83kjer6HqQ&W=4',
        'KievRPSSecAuth': 'FABSBBRaTOJILtFsMkpLVWSG6AN6C/svRwNmAAAEgAAACEbHGiAWW3HsEAQA1m2hoZL1smAK+CdDnXdUHkqreFM0EMnG8lVBSxIJUiK8l7PDCe+5e9avqMOACmh7O3CAW4oZzT9TQ3MMiNiJPzTSK076+vUlAxIHUET/9QeCc9FlKg8kz6pfyOdKYwR9EnEFv2dyr6YCSXlCnPNKm9/7zDewI/gdSVWZs0xKn+S0WsXTdWvtFyV583+PegS6MA5bY1i3tFtacDZdk5W8xHZPr4ZFqD0NBjc2wDu//6d/9kYGimYnTMcugN/JfSs70QxPf7hTdxMVQuEEDbD1bSeOqzAzMVjynzErRNfvmfszXZQzjyy4HLTrl3tcL1zp2AlbqvILuy1Nf4qCHZQfFVyeBTl5wAql3a9ENyRPt7c5yh9UT5EszAyWYdh/tIrsw+7Gq0y5jqMrniAsrXfxQoxa/oORHh1/vjBT8xV76sBq+R6Smr4w/kYu16+M6Zv2R22UahDtTIAboYYyQ+lnbc+5lQPtp6Usi3iUQuUZ2gGjRBk3tHhrWFYqYvuFMYyiobeVp0LJ53TRyKCnAoKTQnnsgLn+IIcEnyOF6YE6GRsz8OPBjiltRW8TMPs0HJL8smYsxxeUuAfCVwkdWjp5KjGnDFAXkB1u7VQQb2g7TPGXzH1wJNgVOlMO786FWo9WswkRqajfhOFMkY0b903hCwMat5sT/a4Yqfp5ifid1vOoTU/0pCmMxg3DEja4XszsmMSUa5j+orvgzJZxbE1J6DLV4v9InfC1D7mJBoNyUZQVPljznfPgonz6r/lhcxjzcAIWgNeQA56ATgeYl1wt3MCbmS0FWnn8Q6ZP6pD2XCkH61Ct4iHdgoWmrkLZH0MUeAs2tVU/ZFl8DfCj3yIqmGNwa14L+AdAUOVIi1nCq6/4o2LQf0n3Fle+BUjh52CXOaGEpEsbjVQakL57UbWvYzf8VYNEYzt2MuwoFfqfWd5iH2YjL0YrW4LSFCiEJL5mUF1koIS2nul7YsEtHrlY3VFQxKO5shbns+RqoW0+lFD28uwbhsTwB0WU2Ev/e2MuCCxD2w47NdpwMZCzQyRwSf4U3HY3/YrEg3Hg73SRFGCIHzImMH/aoEFGH0f+PQCyfKSr+cpK/htjJuVfM3MPipjbUi6tqBN7Ul/hOirXKUjKySmXifQET+NITKqTo81HAyKEcGBfCM9SZI3QDUqU6eJEmKrUghrPnc3VyrKp7iBQEb5RcKomqJVzt21W/amd4WbBub0ylzFB2DwnRpkMtp3l13uEIetLHK30QI9qcUaEn+uGEyOEmlF3Uq8W14dTv/FdBXpicNs7sNylKcK8Zoe5qq5UHpIvZy4k1sAxPikQgv5BBZnQiwimxsKtW/UPBBixUvgBxkh36r+93JHHw0kt92wpd6RD/6rwZcquphQAVz94Z1E+ziNB4yBmYDroUNvBZH8=',
        '_U': '1ncSIF413RRM6VS6SkTG0uUWGee-vuucbZqEV4QQJSfieUgI_yYi-dIgR9jV0L0Bqsr1Va9uwuclEievChU6oQBGYYAbS34ZH5BuZcxB8gFtza80rZkwAVuzFOtv62R1cx00zFJbdTg7IqwsGd6eb8IpE3jIgTc7EcqcKro6JSL52l7iImS2ecguwK8jcnPBLGogHFncIi0yVjPvB7CnnKw',
        'SRCHUSR': 'DOB=20221129&T=1676783101000&TPC=1678870418000&POEX=W',
        'WLID': 'nw63aUnPlTGxMv1wC3BMvdmyNBAMrcq3R1xr0XJgCwRbeBWs0a+o0KLMQSgL6rmkSlFp1/OVXJ67/eMSRvOfjgFXNwJFhSGcL41phHQy3Jw=',
        '_EDGE_S': 'SID=16C482639A9968E31D2590B69BB769A3',
        'WLS': 'C=543b4b95bfb58121&N=',
        '_SS': 'SID=16C482639A9968E31D2590B69BB769A3&R=90&RB=90&GB=0&RG=0&RP=90',
        'ipv6': 'hit=1678875720298&t=4',
        'OID': 'AhA8cZ4DDCwd2AnE6kyY14YiLRax_yU2TTFhz5lt-uPk7Dv6PDLrLY43a7-HCF6lsA91nWQ2hILJPc3oPDSukxKp4v9_SExVdwQgX5wNOCn19DHBlgxu6Je9DztRSZzB-Om0OqFimm9kJRKGxYVFmPKK',
        'OIDI': 'ghDzdE5WjqrqDLAKGphjSgYzo9K8Ry1QotKFARXDy-FSPiNAMcAXrc9HoQ-y7g4vJog7WdzqOsVE_9qKn3h3zxs3J6Jg-XCLUKzIjwqahGwJtpBNjIuelDoHXLyQni4AQ-9WhbVtVDRNkpqSnV0uO56sT48oXruN_HWtveq8Q6Hk0APh6grueImjWsjFXJoZgwjFPrOU5anvwvaSYRzujruRXaphDOi1iHMXkvYalghUqOGf3ahULR9UTIb8A9l1EtUX179vNPOzYkA3QSaW1hSfO2SugvHMkq9psDf1WE9dJ6sUNQ9iFkqvcU84zU3HSLFp39OyP44KId4ypalZJYJEGWx8af7sGpse0Dr74rahYMb1wmWwr7T9xziw4-73Y73jA07x2Pnhu283oEMs0GmCIMGcsUbEBDvIqIhfDv0kxTQaSqyyf3PGvuj63wCEa0DcX_9s2RbJc5ZpLPJ2mdEilut9lJNdXUnxz0u3FQI3acs0x15hKvewRj_aLxek0Z6PPRFvdhyubDVw7Dw_sEUr56cyeKFmfI5Te2t0wBmOD3QgW55yEd0dYWM44C4KK8ZkACRZAygZ_4Tm8599tGSrDtn8tG1KMtQUjBTW3qeDg-sCKZHBaA3gwy9s2V39DHtH1qrzVAA-IVCmQx57P43ZAe-b5Cz9Gk4tPi_SyMh2-CrbneZj3gKSEeG4U9jTyzSYILz2DS6rs2NzrXL95bhTe7QwLk2_7Qux0-9esEnR_Mw_qEJ_kXZcOtCViqRInuX_0XKg4cptKAeXJQkk4Aij5zNLqnHLCqdooZUR6TqylMjv1ZIE57Z2X2FR38skHfX8mZSJ6o_lo1KfQqMLIoSwtT7KPkxake5LIWr5Q4TGttf792LF4MfilH5HBvStjVQd6DQFG4VzsShBpdnMjFFyuDd1SD4t_1p7Y4okPu5ctMjrk5Ck9DsVmpC2hyP35i6IGkcKcw7HCEsURaIzcszcYLeEdGs6BSVVLcrtzLvTqe5B2e4rOiiVm9qJHuGHhQtUGxs7526dThQ_Qq3M6t-y1xIMQgrKLrlpoOyUnW_Ga5H8JwRLu0vclBugm3xCv0u-_15p-R__6NJ-FsKvooqILSeIqfWTlaYQ7eHt2oe6k7EtuCTj6RsWyMwcTgoXB14LfqFQ-e79lzUVeemDvlmD9-u8uUiyAnJcYUDFo-9WxYH48yCeI6uEtmUZL4JWfTkWRzMxbSTPsTLcE5VssfjVBaBS4HgHnSYNRvk0k6LQqsxZaX_bv7oMNyYPvpz7tx4MvXyzdx4jocrTPJn6wX6ZNlNzHsvZ3OuyXdyk3-ZZA6dvvlXbuD1Y2L1vm0Uq7T0qSkbsQTGv7BWnCciEq7uCY3uosDkzAAlI_YHIiE4jG6sOenIk4FHxjV7K4m6QWpqtK_fYjXDUgTEuJ1zq0tAwZf29ZOTrZRlVmS_0w5TD9ayJBxqKNJhKgGFHohrQ0htPAa-AX742KFkCGNyJFxRhiq1lf-RjqqXuV1uvA_tbcSv2BdpSARXlppBmIMst2c6lyN3IUh1-fsyWGIyDAP9nKXaiDt3hMWsqRjmn6McIFMLCugaKM9kLpRShu8VS48DNIyA21oIV5k0xl1FIR8A8igQxSUZ1rWEuPl02-eTIL-Ao6Vq1xdxp9WkabtM0wrRYwuQLxwH-pJj3SplQKDpNLDmubUNKoCpNUg-KKpJQKT0ah60QJQnIQl3yZRcSrs9tF2OuNhjoc1k34rDpBDCWGKM1b6QM6va_J5MNdPJpPID6tWI9Tz5e7jrSGZXO00-s8p-sCmZj7PWo5bGfg9Bw0JVJKsKKkLBo6RdQ7cJizGx-iYCgJqfzT3yfylZ3yJ0ThnS8xiw2IrlG5uPQcZoYHFrdkzfaGvCEw-83B_-kYUxD8dTxZafQTzg1p2ljCebYPCfoNEFBVG54sEKI9fykled5SZJF7rXIpg4phCkYSpBAuZHEb-DAhAAnAtdcV3Q',
        'SRCHHPGUSR': 'SRCHLANG=zh-Hans&BRW=W&BRH=M&CW=1377&CH=974&SCW=1377&SCH=974&DPR=2.0&UTC=480&DM=0&PV=13.2.1&HV=1678872271&BZA=0&PRVCW=1377&PRVCH=974&WTS=63814467218',
        '_RwBf': 'ilt=1&ihpd=0&ispd=0&rc=90&rb=90&gb=0&rg=0&pc=90&mtu=0&rbb=0.0&g=0&cid=&clo=0&v=6&l=2023-03-15T07:00:00.0000000Z&lft=0001-01-01T00:00:00.0000000&aof=0&o=0&p=bingcopilotwaitlist&c=MY00IA&t=3067&s=2023-02-13T04:23:56.5274530+00:00&ts=2023-03-15T09:23:57.7110095+00:00&rwred=0&wls=2&lka=0&lkt=1&TH=&mta=0&e=OM9-faDFMSWsZjpXl2q66KMv9o2p_cxIsB6j7RsxVXgJCq2VEZS477LKNjwtJG3rrYS6E4F1Sh88DReiJFNqvL6BnamtxGTBAIha6QAjUMA&A=7379B76F7CA78E0DB3F88655FFFFFFFF',
    }

    headers = {
        'authority': 'cn.bing.com',
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'accept-language': 'zh-CN,zh;q=0.9',
        # 'cookie': 'MUID=05FB54EBD1EF6F7735E04434D0A36E1A; MUIDB=05FB54EBD1EF6F7735E04434D0A36E1A; SRCHD=AF=NOFORM; SRCHUID=V=2&GUID=A59F882B5A1A4130AA6FD3C9617D7D7E&dmnchg=1; _UR=QS=0&TQS=0; MicrosoftApplicationsTelemetryDeviceId=d5a6e58c-c49a-4dc0-80d5-489b3771476b; ANON=A=7379B76F7CA78E0DB3F88655FFFFFFFF&E=1bff&W=3; PPLState=1; BFBUSR=BAWAS=1&BAWFS=1; BFB=AhC_6eg_lZTnR5BNjiaSrONDnGC7ic1Z9sHx-ZBd_lYt8e4kiSpnfk9-eZpW_htez9qFJXical4kblXg9V6trW_-9moA01OybKHTE6MNOTGtBhfkKigjnkcKP2I2d4eehUg2C_c1B-Mlhl47bXwy5q7SW01fBsua4VyfmcW30qFRrw; ANIMIA=FRE=1; HOOKBLOCKINDICATOR=TRUE; _clck=1waaurr|1|f9j|0; _HPVN=CS=eyJQbiI6eyJDbiI6OSwiU3QiOjAsIlFzIjowLCJQcm9kIjoiUCJ9LCJTYyI6eyJDbiI6OSwiU3QiOjAsIlFzIjowLCJQcm9kIjoiSCJ9LCJReiI6eyJDbiI6OSwiU3QiOjAsIlFzIjowLCJQcm9kIjoiVCJ9LCJBcCI6dHJ1ZSwiTXV0ZSI6dHJ1ZSwiTGFkIjoiMjAyMy0wMy0wMVQwMDowMDowMFoiLCJJb3RkIjowLCJHd2IiOjAsIkRmdCI6bnVsbCwiTXZzIjowLCJGbHQiOjAsIkltcCI6Njh9; SUID=A; OIDR=ghB_Qos7amum4vkNZr9d418be7lQDCzW1yXq2nNnOcMBpgxyhrsEsXVkG6_LjjxvhC0rki-0zoDh4lHxbyGgUzkLNKxO1qjri8uQ9u1Vu4KQktfqTdJQfoWKI_G-VRaaIm1BRwLjPMwuaCMVy_NwICtijQD8dyAlru2ztK4QybpkyDml_UU6P1enX9_G2XKct-3YsiEXoV_5JAzFzgsxHiusGrOTNQRMziKefB-H_TE5tKBz5I___4cl9pM-cWHGlRKQFK9gxYvP_LbWgW2QFv5l3M8pLjuMh871cP7YXd5hbdec3dJscHwZ36IQkdafShzx9MesWBv588Yjqxv8yS8DuthVLdemfEnnSdACntRZ16--N8xGFriFVQ4pLEXA9-AMjHE22JCUPKyaGe4vvu7RrpXN4sbIqyI7Z2jh3PG_VZCuSXQjQa1svV6oixu6qqTIOW0ffR163msKNXUMDIW1kqy-PMCG5ZRLlAyJxr93ZsncQRQQRHD9AkNhqGiieHJ3abeRQHIxLN-AfJoHtDIqOEtihyyYy2bG6w_Hmkdwfvfj3itupbzEfoystwmEY-sijtwHGjCnmkQTnxFffwsMSEQf6gpTgMStpHJ_X1oilrQLW-LgSLiDN32WCeUsjxdTO9Uc71nmaS20O6k9dpzabiCM-n5lNVd4c-OBh7TLwGe5CsCgf7coLw31w7zwZatGFippUJ8cGO5T_RC08BK9geyM-lfULckoy55LSGClda-rwEyZYx1Bkw0Low-Rds56xJvOob9m39GbLZMbu99imkxCsv2k8RWzSXR1dabdq79sJGKhaZK5a9WkO8Kbet4AgBpGUB9ls6XklifLvzDwK-J6b9-cZy2eLk9G3PvM8bQ-j03ir1D4SJi2XQe4eDs_TffhNzwsD9bGXxp_tFyCg5a8P3yMLJoRFqWUx2fuK95P_8ZBJ8TAD25Om5gsVO3oDntK2FIdFI9yxb9-KU_czISFeW5mW_Btw2HvDpDGvtLY5jSmQ8fjJwX6zxrFtvCgv1voOWExHW_kmViGpc-QJCRXYniLRrvzHmLtoRk5l-qkukoC4_Q-MPKjoYCSpjaxGEPtyJTbjwBY4qzb7oHy; ACL=AhAKppdyjOWoTj8fOT32wMd9j0i10_A8lNezIrn2MicZ7icC0pUFtA5LLM87iFRHEyb0sneUGorYUyhKnZSlnKxY; ACLUSR=T=1678870420000; NAP=V=1.9&E=1bbf&C=aklQiKjsJUh8Fl74Z57muOTlPOi1S4ipiRD1MdoFuM2d83kjer6HqQ&W=4; KievRPSSecAuth=FABSBBRaTOJILtFsMkpLVWSG6AN6C/svRwNmAAAEgAAACEbHGiAWW3HsEAQA1m2hoZL1smAK+CdDnXdUHkqreFM0EMnG8lVBSxIJUiK8l7PDCe+5e9avqMOACmh7O3CAW4oZzT9TQ3MMiNiJPzTSK076+vUlAxIHUET/9QeCc9FlKg8kz6pfyOdKYwR9EnEFv2dyr6YCSXlCnPNKm9/7zDewI/gdSVWZs0xKn+S0WsXTdWvtFyV583+PegS6MA5bY1i3tFtacDZdk5W8xHZPr4ZFqD0NBjc2wDu//6d/9kYGimYnTMcugN/JfSs70QxPf7hTdxMVQuEEDbD1bSeOqzAzMVjynzErRNfvmfszXZQzjyy4HLTrl3tcL1zp2AlbqvILuy1Nf4qCHZQfFVyeBTl5wAql3a9ENyRPt7c5yh9UT5EszAyWYdh/tIrsw+7Gq0y5jqMrniAsrXfxQoxa/oORHh1/vjBT8xV76sBq+R6Smr4w/kYu16+M6Zv2R22UahDtTIAboYYyQ+lnbc+5lQPtp6Usi3iUQuUZ2gGjRBk3tHhrWFYqYvuFMYyiobeVp0LJ53TRyKCnAoKTQnnsgLn+IIcEnyOF6YE6GRsz8OPBjiltRW8TMPs0HJL8smYsxxeUuAfCVwkdWjp5KjGnDFAXkB1u7VQQb2g7TPGXzH1wJNgVOlMO786FWo9WswkRqajfhOFMkY0b903hCwMat5sT/a4Yqfp5ifid1vOoTU/0pCmMxg3DEja4XszsmMSUa5j+orvgzJZxbE1J6DLV4v9InfC1D7mJBoNyUZQVPljznfPgonz6r/lhcxjzcAIWgNeQA56ATgeYl1wt3MCbmS0FWnn8Q6ZP6pD2XCkH61Ct4iHdgoWmrkLZH0MUeAs2tVU/ZFl8DfCj3yIqmGNwa14L+AdAUOVIi1nCq6/4o2LQf0n3Fle+BUjh52CXOaGEpEsbjVQakL57UbWvYzf8VYNEYzt2MuwoFfqfWd5iH2YjL0YrW4LSFCiEJL5mUF1koIS2nul7YsEtHrlY3VFQxKO5shbns+RqoW0+lFD28uwbhsTwB0WU2Ev/e2MuCCxD2w47NdpwMZCzQyRwSf4U3HY3/YrEg3Hg73SRFGCIHzImMH/aoEFGH0f+PQCyfKSr+cpK/htjJuVfM3MPipjbUi6tqBN7Ul/hOirXKUjKySmXifQET+NITKqTo81HAyKEcGBfCM9SZI3QDUqU6eJEmKrUghrPnc3VyrKp7iBQEb5RcKomqJVzt21W/amd4WbBub0ylzFB2DwnRpkMtp3l13uEIetLHK30QI9qcUaEn+uGEyOEmlF3Uq8W14dTv/FdBXpicNs7sNylKcK8Zoe5qq5UHpIvZy4k1sAxPikQgv5BBZnQiwimxsKtW/UPBBixUvgBxkh36r+93JHHw0kt92wpd6RD/6rwZcquphQAVz94Z1E+ziNB4yBmYDroUNvBZH8=; _U=1ncSIF413RRM6VS6SkTG0uUWGee-vuucbZqEV4QQJSfieUgI_yYi-dIgR9jV0L0Bqsr1Va9uwuclEievChU6oQBGYYAbS34ZH5BuZcxB8gFtza80rZkwAVuzFOtv62R1cx00zFJbdTg7IqwsGd6eb8IpE3jIgTc7EcqcKro6JSL52l7iImS2ecguwK8jcnPBLGogHFncIi0yVjPvB7CnnKw; SRCHUSR=DOB=20221129&T=1676783101000&TPC=1678870418000&POEX=W; WLID=nw63aUnPlTGxMv1wC3BMvdmyNBAMrcq3R1xr0XJgCwRbeBWs0a+o0KLMQSgL6rmkSlFp1/OVXJ67/eMSRvOfjgFXNwJFhSGcL41phHQy3Jw=; _EDGE_S=SID=16C482639A9968E31D2590B69BB769A3; WLS=C=543b4b95bfb58121&N=; _SS=SID=16C482639A9968E31D2590B69BB769A3&R=90&RB=90&GB=0&RG=0&RP=90; ipv6=hit=1678875720298&t=4; OID=AhA8cZ4DDCwd2AnE6kyY14YiLRax_yU2TTFhz5lt-uPk7Dv6PDLrLY43a7-HCF6lsA91nWQ2hILJPc3oPDSukxKp4v9_SExVdwQgX5wNOCn19DHBlgxu6Je9DztRSZzB-Om0OqFimm9kJRKGxYVFmPKK; OIDI=ghDzdE5WjqrqDLAKGphjSgYzo9K8Ry1QotKFARXDy-FSPiNAMcAXrc9HoQ-y7g4vJog7WdzqOsVE_9qKn3h3zxs3J6Jg-XCLUKzIjwqahGwJtpBNjIuelDoHXLyQni4AQ-9WhbVtVDRNkpqSnV0uO56sT48oXruN_HWtveq8Q6Hk0APh6grueImjWsjFXJoZgwjFPrOU5anvwvaSYRzujruRXaphDOi1iHMXkvYalghUqOGf3ahULR9UTIb8A9l1EtUX179vNPOzYkA3QSaW1hSfO2SugvHMkq9psDf1WE9dJ6sUNQ9iFkqvcU84zU3HSLFp39OyP44KId4ypalZJYJEGWx8af7sGpse0Dr74rahYMb1wmWwr7T9xziw4-73Y73jA07x2Pnhu283oEMs0GmCIMGcsUbEBDvIqIhfDv0kxTQaSqyyf3PGvuj63wCEa0DcX_9s2RbJc5ZpLPJ2mdEilut9lJNdXUnxz0u3FQI3acs0x15hKvewRj_aLxek0Z6PPRFvdhyubDVw7Dw_sEUr56cyeKFmfI5Te2t0wBmOD3QgW55yEd0dYWM44C4KK8ZkACRZAygZ_4Tm8599tGSrDtn8tG1KMtQUjBTW3qeDg-sCKZHBaA3gwy9s2V39DHtH1qrzVAA-IVCmQx57P43ZAe-b5Cz9Gk4tPi_SyMh2-CrbneZj3gKSEeG4U9jTyzSYILz2DS6rs2NzrXL95bhTe7QwLk2_7Qux0-9esEnR_Mw_qEJ_kXZcOtCViqRInuX_0XKg4cptKAeXJQkk4Aij5zNLqnHLCqdooZUR6TqylMjv1ZIE57Z2X2FR38skHfX8mZSJ6o_lo1KfQqMLIoSwtT7KPkxake5LIWr5Q4TGttf792LF4MfilH5HBvStjVQd6DQFG4VzsShBpdnMjFFyuDd1SD4t_1p7Y4okPu5ctMjrk5Ck9DsVmpC2hyP35i6IGkcKcw7HCEsURaIzcszcYLeEdGs6BSVVLcrtzLvTqe5B2e4rOiiVm9qJHuGHhQtUGxs7526dThQ_Qq3M6t-y1xIMQgrKLrlpoOyUnW_Ga5H8JwRLu0vclBugm3xCv0u-_15p-R__6NJ-FsKvooqILSeIqfWTlaYQ7eHt2oe6k7EtuCTj6RsWyMwcTgoXB14LfqFQ-e79lzUVeemDvlmD9-u8uUiyAnJcYUDFo-9WxYH48yCeI6uEtmUZL4JWfTkWRzMxbSTPsTLcE5VssfjVBaBS4HgHnSYNRvk0k6LQqsxZaX_bv7oMNyYPvpz7tx4MvXyzdx4jocrTPJn6wX6ZNlNzHsvZ3OuyXdyk3-ZZA6dvvlXbuD1Y2L1vm0Uq7T0qSkbsQTGv7BWnCciEq7uCY3uosDkzAAlI_YHIiE4jG6sOenIk4FHxjV7K4m6QWpqtK_fYjXDUgTEuJ1zq0tAwZf29ZOTrZRlVmS_0w5TD9ayJBxqKNJhKgGFHohrQ0htPAa-AX742KFkCGNyJFxRhiq1lf-RjqqXuV1uvA_tbcSv2BdpSARXlppBmIMst2c6lyN3IUh1-fsyWGIyDAP9nKXaiDt3hMWsqRjmn6McIFMLCugaKM9kLpRShu8VS48DNIyA21oIV5k0xl1FIR8A8igQxSUZ1rWEuPl02-eTIL-Ao6Vq1xdxp9WkabtM0wrRYwuQLxwH-pJj3SplQKDpNLDmubUNKoCpNUg-KKpJQKT0ah60QJQnIQl3yZRcSrs9tF2OuNhjoc1k34rDpBDCWGKM1b6QM6va_J5MNdPJpPID6tWI9Tz5e7jrSGZXO00-s8p-sCmZj7PWo5bGfg9Bw0JVJKsKKkLBo6RdQ7cJizGx-iYCgJqfzT3yfylZ3yJ0ThnS8xiw2IrlG5uPQcZoYHFrdkzfaGvCEw-83B_-kYUxD8dTxZafQTzg1p2ljCebYPCfoNEFBVG54sEKI9fykled5SZJF7rXIpg4phCkYSpBAuZHEb-DAhAAnAtdcV3Q; SRCHHPGUSR=SRCHLANG=zh-Hans&BRW=W&BRH=M&CW=1377&CH=974&SCW=1377&SCH=974&DPR=2.0&UTC=480&DM=0&PV=13.2.1&HV=1678872271&BZA=0&PRVCW=1377&PRVCH=974&WTS=63814467218; _RwBf=ilt=1&ihpd=0&ispd=0&rc=90&rb=90&gb=0&rg=0&pc=90&mtu=0&rbb=0.0&g=0&cid=&clo=0&v=6&l=2023-03-15T07:00:00.0000000Z&lft=0001-01-01T00:00:00.0000000&aof=0&o=0&p=bingcopilotwaitlist&c=MY00IA&t=3067&s=2023-02-13T04:23:56.5274530+00:00&ts=2023-03-15T09:23:57.7110095+00:00&rwred=0&wls=2&lka=0&lkt=1&TH=&mta=0&e=OM9-faDFMSWsZjpXl2q66KMv9o2p_cxIsB6j7RsxVXgJCq2VEZS477LKNjwtJG3rrYS6E4F1Sh88DReiJFNqvL6BnamtxGTBAIha6QAjUMA&A=7379B76F7CA78E0DB3F88655FFFFFFFF',
        'referer': 'https://cn.bing.com/academic?FORM=HDRSC4',
        'sec-ch-ua': '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
        'sec-ch-ua-arch': '"arm"',
        'sec-ch-ua-bitness': '"64"',
        'sec-ch-ua-full-version': '"111.0.5563.64"',
        'sec-ch-ua-full-version-list': '"Google Chrome";v="111.0.5563.64", "Not(A:Brand";v="8.0.0.0", "Chromium";v="111.0.5563.64"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-model': '""',
        'sec-ch-ua-platform': '"macOS"',
        'sec-ch-ua-platform-version': '"13.2.1"',
        'sec-fetch-dest': 'document',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-user': '?1',
        'upgrade-insecure-requests': '1',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
    }

    params = {
        "first": page,
        "sort": 2,
        'q': topic,
        'qs': 'n',
        'form': 'QBRE',
        'sp': '-1',
        'lq': '0',
        'pq': 'computrer',
        'sc': '0-9',
        'sk': '',
        'cvid': 'B73162A1498B43C4AECC114919895960',
        'ghsh': '0',
        'ghacc': '0',
        'ghpl': '',
    }

    response = requests.get('https://cn.bing.com/academic/search', params=params, cookies=cookies, headers=headers)

    #params = {"q": topic, "first": page, "sort": 2, "go": "搜索", "qs": "ds", "form": "QRBE"}



    mainSoup = BeautifulSoup(response.text, "html.parser")





    index = 0

    for item in mainSoup.find_all('li', class_="aca_algo"):
        try:
            if index == count:
                break
            index += 1
            linea = item.find('a')
            title = linea.text
            url = re.findall(r"(?<=href=\").+?(?=\")|(?<=href=\').+?(?=\')", str(linea))[0]
            content = item.find(class_='caption_abstract').text

            paper = {'title': title, 'url': url, 'content': content}

            news.append(paper)
        except:
            continue

    return news


def bing_crawler(topic, number):
    output = []
    page = number // 10
    rest = number % 10

    if page != 0:
        for i in range(0, page):
            result = getData(topic, i, 10)
            if len(result) != 0:
                for item in result:
                    output.append(item)

    result = getData(topic, page, rest)
    if len(result) != 0:
        for item in result:
            output.append(item)

    return output


if __name__ == '__main__':
    output = bing_crawler("computer", 18)
    print(output)
    print(len(output))
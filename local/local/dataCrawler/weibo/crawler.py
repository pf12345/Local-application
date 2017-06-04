
# -*- coding: utf-8 -*-

import urllib
import urllib2
from bs4 import BeautifulSoup
import re
import zlib

import settings

import sys   
_type = sys.getfilesystemencoding() 

from local.models import saveWeibo

import requests

class WEIBO(object):
	"""docstring for weibo"""
	def __init__(self, arg):
		super(WEIBO, self).__init__()
		self.arg = arg

	def unicodeDict(self, _dict):
		if _dict and isinstance(_dict,dict):
			for _key in _dict:	
				if _dict[_key] and isinstance(_dict[_key], str):
					_dict[_key] = _dict[_key].decode('unicode_escape')
				else:	
					self.unicodeDict(_dict[_key])
			print _dict		
		elif _dict and isinstance(_dict,list):	
			for _score in _dict:	
				if _score and isinstance(_score, str):
					_score = _score.decode('unicode_escape')
				else:	
					self.unicodeDict(_score)
		elif _dict and isinstance(_dict,str):
			_dict = _dict.decode('unicode_escape')
		
		return _dict		

	def getPage(self):
		try:
			url = self.arg['url']

			headers = { 
				'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
				# 'Accept-Encoding': 'gzip, deflate, sdch, br',
				'Accept-Language': 'zh-CN,zh;q=0.8,en;q=0.6',
				# 'Cookie' : 'ALF=1498721593; SCF=AmrPNOlHJ8cByfLAIqti2GRXnXC59imt5NbaEY9vdCB4Bfo8FGSbPRbnlT4f_YmDRg1dg6dQsHlPZf0K-4JSLHI.; SUB=_2A250KVBpDeThGeRH6VQU9yfLzD6IHXVX0nAhrDV6PUJbktBeLVP-kW1zIu6mkd9E-s_8b7rOFKQh3BuoaA..; SUBP=0033WrSXqPxfM725Ws9jqgMF55529P9D9WhUb.nd5zWM1R3BbcIDo1KM5JpX5o2p5NHD95QE1KzcSKM4S0MEWs4DqcjBMsqpeoeXSCH81C-4SF-RBntt; SUHB=0U1Z2bU2QAFzG3; SSOLoginState=1496129594; _T_WM=f2f12a794466dbbbcd6118a136d0add2; H5_INDEX=3; H5_INDEX_TITLE=pf12345%E9%94%8B; M_WEIBOCN_PARAMS=luicode%3D10000011%26lfid%3D2302831496814565%26featurecode%3D20000180%26oid%3D4113127190974109%26fid%3D2304131496814565_-_WEIBO_SECOND_PROFILE_WEIBO%26uicode%3D10000011',
				'Host': 'm.weibo.cn',
				'content-type': 'application/json; charset=utf-8',
				'Upgrade-Insecure-Requests': 1,
				'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
			}

			# print url

			request = urllib2.Request(url, {}, headers)
			response = urllib2.urlopen(request)

			_responseStr = response.read().decode('utf-8').encode('utf-8');

			# print _responseStr

			pattern = re.compile('false')
			pattern1 = re.compile('true')
			pattern2 = re.compile('null')
			pattern3 = re.compile('\\\/')

			_responseStr = re.sub(pattern, "False", _responseStr)
			_responseStr = re.sub(pattern1, "True", _responseStr)
			_responseStr = re.sub(pattern2, "None", _responseStr)
			_responseStr = re.sub(pattern3, "/", _responseStr)

			_response = eval(_responseStr)

			self.unicodeDict(_response)


			_result = []

			#判断是否为微博
			for _cards in _response['cards']:
				for _card in _cards['card_group']:
					if _card and _card['card_type'] is 9:
						_result.append(_card)


			for _card in _result:
				saveWeibo(_card)

			return _result

		except Exception, e:
			print e
			if hasattr(e,"reason"):
				print u"连接失败,错误原因",e.reason
				return None	

def weibo():
	return WEIBO(settings.URLS[0])


# weibo().getPage()	





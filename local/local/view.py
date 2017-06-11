# -*- coding: utf-8 -*-

from django.shortcuts import render
from django.http import HttpResponse
import json
import models
from bson.objectid import ObjectId

from dataCrawler.weibo import crawler

def index(request):
	return render(request, 'index.html')

#获取游记列表接口
def getList(request):
	articleCollection = models.getCollection('tempArticle')
	articles = articleCollection.find().sort([("_id", -1)])
	_articles = []
	for article in articles:
		_article = {
			"mblog": article['mblog'],
			"card_type": article['card_type'],
			"itemid": article['itemid'],
			"card_type_name": article['card_type_name'],
			"openurl": article['openurl'],
			"display_arrow": article['display_arrow'],
			"show_type": article['show_type'],
			"scheme": article['scheme'],
			"_id": str(article['_id'])
		}
		_articles.append(_article)

	response = HttpResponse(json.dumps({"result": "ok", "data": _articles}), content_type="application/json")

	response["Access-Control-Allow-Origin"] = "*"

	return response

def getNewData(request):
	crawler.weibo().getPage();

	return HttpResponse('获取数据成功')

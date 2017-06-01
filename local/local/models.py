# -*- coding: utf-8 -*-

from pymongo import MongoClient
import settings
import datetime

#连接
client=MongoClient('mongodb://127.0.0.1:27017/')

db = client[settings.DBNAME]

def getCollection(collection):
	if(collection):
		return db[collection]
	else:
		return None	


def saveWeibo(article):
	articleCollection = getCollection('tempArticle')
	if articleCollection.find_one({"itemid": article['itemid']}):
		print {"_id": None, "message": "已有相关数据", "isQuery": "false"}

	_id = articleCollection.insert_one(article).inserted_id

	print {"_id": str(_id), "message": "保存成功"}		
	

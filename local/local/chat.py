# -*- coding: utf-8 -*-

from django.shortcuts import render
from django.http import HttpResponse
import json
import models
from bson.objectid import ObjectId
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings
from django.core.cache import cache

@csrf_exempt
def savePosition(request):
    if request.method == 'POST':
        additem = request.POST
        print additem
        return HttpResponse(json.dumps({"result": "TRUE", "message": 'ok'}), content_type="application/json")
    else:
        return HttpResponse(json.dumps({"result": "FALSE", "message": '使用post方法'}), content_type="application/json")

#read cache user id
def read_from_cache(self, user_id):
    key = 'user_id_of_'+user_id
    value = cache.get(key)
    if value == None:
        data = None
    else:
        data = json.loads(value)
    return data
    
#write cache user id
def write_to_cache(self, user_id):
    key = 'user_id_of_'+user_id
    cache.set(key, json.dumps(user_id), settings.NEVER_REDIS_TIMEOUT)

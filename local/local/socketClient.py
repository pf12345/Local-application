# -*- coding: utf-8 -*-
import socket

obj = socket.socket()

obj.connect(("127.0.0.1",4444))

ret_bytes = obj.recv(1024)
print ret_bytes

# while True:
#     inp = input("你好请问您有什么问题？ \n >>>")
#     if inp == "q":
#         obj.sendall(bytes(inp,encoding="utf-8"))
#         break
#     else:
#         obj.sendall(bytes(inp, encoding="utf-8"))
#         ret_bytes = obj.recv(1024)
#         ret_str = str(ret_bytes,encoding="utf-8")
#         print(ret_str)

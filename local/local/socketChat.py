# -*- coding: utf-8 -*-
import  socketserver

class Myserver(socketserver.BaseRequestHandler):

    def handle(self):

        conn = self.request
        conn.sendall("你好，我是机器人")


if __name__ == "__main__":
    server = socketserver.ThreadingTCPServer(("127.0.0.1",4444),Myserver)
    server.serve_forever()

# Chat-Sockets
---
Websockets are a technology that enables two-way communication between client and server on a single TCP socket. In a way it's a good substitute for AJAX as a technology to get data from the server, since we don't have to ask for it, the server will send it to us when there are new ones.

![Image of chatsocket](https://github.com/deibyocampo/chat-sockets/blob/master/images/capture6.png)

Is a small chat connected to a local server which the person can access by entering their name and a message, so that people can chat from
a computer they want through an IP address locally

## Explanation

we built this chatsocket with `Nodejs` and with the libraries `express` and `socket.io` because it helped us to develop websockets between the client and server communication (we must have nodejs installed)

with the two libraries we installed we created a file called `server/index.js` which is our web server (these libraries must be installed with the npm command):
* npm install --save express
* npm install --save socket.io

we also specify in which port you will listen to the `localhost` server



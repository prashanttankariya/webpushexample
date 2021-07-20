var push = require('web-push');


let vapidKeys = {
    publicKey: 'BPKe6VItIE3f2QskZIeweSgA2GbzNtT7-XPTjn8Cz595rMVnlu83S5A3vDpNFP2M4nsyq-mel9KjMEdj1hW2wGY',
    privateKey: 'Oty5PN3fKPs8WhAFuNygtsPNlZYyFWXwFWZm3IVx4tI'
  }



push.setVapidDetails('mailto:leedonniee@gmail.com',vapidKeys.publicKey , vapidKeys.privateKey);

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/fZm9a9OcUM8:APA91bE0TbzvxrXFCOIS10BDZ5IwhUte9OyZsgtXDyQwARkFEW8Pwb7ZMiUlf3kzAuOF6gtXkEo0qFJUouN79Tdez6sQTCN0MttM-SZkEviQu6Uq79EkyqZVeaZI7htmXRT-4jMD3bkc","expirationTime":null,"keys":{"p256dh":"BCbkZYxigy4qp7GC8i72merCcUB0M_jrUkHqeKWKs2QgN0ZF0gPvxVLBHtch9XKpSP68kLO9Pl9EA7KzycEX-lo","auth":"JKsgUES9O6a4B56CxxiSvg"}};

push.sendNotification(sub, 'test Message');

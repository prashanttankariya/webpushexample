var push = require('web-push');


let vapidKeys = {
    publicKey: 'BPKe6VItIE3f2QskZIeweSgA2GbzNtT7-XPTjn8Cz595rMVnlu83S5A3vDpNFP2M4nsyq-mel9KjMEdj1hW2wGY',
    privateKey: 'Oty5PN3fKPs8WhAFuNygtsPNlZYyFWXwFWZm3IVx4tI'
  }



push.setVapidDetails('mailto:leedonniee@gmail.com',vapidKeys.publicKey , vapidKeys.privateKey);

let sub = {};

push.sendNotification(sub, 'test Message');

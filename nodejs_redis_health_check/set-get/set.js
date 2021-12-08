// Redis Set
const redis = require('redis');
const config = require('../config.js');
const Logger = require('../Logger.js');

const client = redis.createClient({
    host: config.redis.host,
    port: config.redis.port,
    password: config.redis.password,
    socket_keepalive: true
});

Logger.log('SET', 'Starting Redis Set Testing');

client.on("connect", function () {
    Logger.log('SET', 'Connected to Redis Server');
    client.stream.setKeepAlive(true, 3000);
});

client.on("error", function (err) {
    Logger.log('SET', 'Redis Set Error ' + err);
});

let i = 1;

client.get("TestLastNumber", (err, data) => {
    Logger.log('SET', 'Getting last number from Redis');
    if(!isNaN(parseInt(data))) {
        i = parseInt(data);
        Logger.log('SET', 'Last Number from Redis ' + i);    
    } else {
        i = 0;
        Logger.log('Last Number not set');
    }
});

setInterval(function() {
    client.set("TestValue", 'Value ' + i);
    client.set("TestLastNumber", i);
    Logger.log('SET', 'Setting ' + i);
    i++;
}, 1000);

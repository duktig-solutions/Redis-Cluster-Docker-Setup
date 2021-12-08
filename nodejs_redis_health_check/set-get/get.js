const redis = require('redis');
const config = require('../config.js');
const Logger = require('../Logger.js');

const client = redis.createClient({
    host: config.redis.host,
    port: config.redis.port,
    password: config.redis.password,
    socket_keepalive: true
});

Logger.log('GET', 'Starting Redis Get Testing');

client.on("connect", function () {
    Logger.log('GET', 'Connected to Redis Server');
    client.stream.setKeepAlive(true, 3000);
});

client.on("error", function (err) {
    Logger.log('GET', 'Redis Get Error ' + err);
});

setInterval(function() {
    client.get("TestValue", (err, data) => {
        
        if(err) {
            Logger.log('GET', 'Error: ' + err);
        } else {
            Logger.log('GET', data);
        }
                
    });
}, 1000);

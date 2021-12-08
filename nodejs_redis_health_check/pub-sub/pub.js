// Redis Publish
const redis = require('redis');
const config = require('../config.js');
const Logger = require('../Logger.js');

const publisher = redis.createClient({
    host: config.redis.host,
    port: config.redis.port,
    password: config.redis.password,
    socket_keepalive: true
});

Logger.log('PUB', 'Starting Redis Publish testing');

publisher.on("connect", function () {
    publisher.stream.setKeepAlive(true, 3000); // <timeout_value_in_milliseconds>
    Logger.log('PUB', 'Connected to Redis Server');
});

publisher.on("error", function (err) {
    Logger.log('PUB', 'Redis Pub Error ' + err);
});

let i = 1;

publisher.get("TestLastNumber", (err, data) => {
    Logger.log('PUB', 'Getting last number from Redis');
    if(!isNaN(parseInt(data))) {
        i = parseInt(data);
        Logger.log('PUB', 'Last Number from Redis ' + i);    
    } else {
        i = 0;
        Logger.log('Last Number not set');
    }
});

setInterval(function() {
    publisher.publish("notification", i + " Hi ! Notified ?");
    publisher.publish("user_data_update", i + " Working ? ");

    Logger.log('PUB', 'Data Published ' + i);

    i++;
}, 1000);

Logger.log('PUB', 'Done');

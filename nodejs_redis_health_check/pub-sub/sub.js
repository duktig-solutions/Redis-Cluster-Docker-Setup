// Redis Subscribe
const redis = require('redis');
const config = require('../config.js');
const Logger = require('../Logger.js');

const subscriber = redis.createClient({
    host: config.redis.host,
    port: config.redis.port,
    password: config.redis.password,
    socket_keepalive: true
});

Logger.log('SUB', 'Starting Redis Subscribe testing');

subscriber.on("connect", function () {
    subscriber.stream.setKeepAlive(true, 3000); // <timeout_value_in_milliseconds>
    Logger.log('SUB', 'Connected to Redis Server');
});

subscriber.on("message", function(channel, message) {
    Logger.log('SUB', 'Channel: '+channel+', Message: '+ message);    
});

subscriber.on("error", function (err) {
    Logger.log('SUB', 'Error: ' + err);
});

Logger.log('SUB', 'Subscribing to channel: ' + "notification");
subscriber.subscribe("notification");

Logger.log('SUB', 'Subscribing to channel: ' + "user_data_update");
subscriber.subscribe("user_data_update");

Logger.log('SUB', 'Done');

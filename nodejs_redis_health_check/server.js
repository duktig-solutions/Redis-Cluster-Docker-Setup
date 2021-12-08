const express = require('express');
const config = require('./config.js');

var redisStatus = require('redis-status')({
    name: 'Redis',
    host: config.redis.host,
    port: config.redis.port,
    password: config.redis.password,
});

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();

console.log('Node.js Application to test Redis functionality.');

app.get('/', (req, res) => {
  
  //res.send('Node.js Application to test Redis functionality.');

  redisStatus.checkStatus(function(err) {
    res.send(err || 'great');
  });

});

app.listen(PORT, HOST);

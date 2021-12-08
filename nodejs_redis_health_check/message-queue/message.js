// Message-Queue 
// used: https://docs.bullmq.io/guide/introduction

// Set Queue message
const Queue = require('bullmq').Queue;

// Get events from Queue
const QueueEvents = require('bullmq').QueueEvents;

// Using ioredis for Connection to redis
const Redis = require("ioredis");

const config = require('../config.js');
const Logger = require('../Logger.js');

Logger.log('MSG', 'Starting Message/Queue Testing.');

let connection = new Redis({
    host: config.redis.host,
    port: config.redis.port,
    password: config.redis.password,
    retryStrategy(times) {
        const delay = Math.min(times * 50, 2000);
        return delay;
    },
    reconnectOnError(err) {
        const targetError = "READONLY";
        if (err.message.includes(targetError)) {
          // Only reconnect when the error contains "READONLY"
          return true; // or `return 1;`
        }
    }
});

connection.on('error', err => {
    Logger.log('MSG', err.message);
});

connection.on('reconnecting', (data1, data2) => {
    Logger.log('MSG', 'Reconnecting...');    
});

// Create a queue
const queue = new Queue(
    'myqueue', { connection: connection }
);

let i = 0;
setInterval(function() {
    let message = 'This is a message/task/job ' + i;
    queue.add('message', message);
    Logger.log('MSG', 'Adding message: ' + message);
    i++;
}, 300);

queue.on('failed', (jobId, err) => {
    Logger.log('MSG', 'Failed JobId: ' + jobId + '  ' + err);
});

queue.on('error', (jobId, err) => {
    Logger.log('MSG', 'Error JobId: ' + jobId + '  ' + err);
});

// =============== Event on completion ===============

connection2 = new Redis({
    host: config.redis.host,
    port: config.redis.port,
    password: config.redis.password,
    retryStrategy(times) {
        const delay = Math.min(times * 50, 2000);
        return delay;
    },
    reconnectOnError(err) {
        const targetError = "READONLY";
        if (err.message.includes(targetError)) {
          // Only reconnect when the error contains "READONLY"
          return true; // or `return 1;`
        }
    }
});

connection2.on('error', err => {
    Logger.log('MSG', err.message);
});

connection2.on('reconnecting', (data1, data2) => {
    Logger.log('MSG', 'Reconnecting...');    
});

const queueEvents = new QueueEvents(
    'myqueue', { 
        connection: connection2 
    });

queueEvents.on('completed', job => {
    Logger.log('MSG', 'Job Event Complete: ' + job.jobId)
});

queueEvents.on('failed', (jobId, err) => {
    Logger.log('MSG', 'Job Event Failed: ' + jobId + ' ' + err);
});

queueEvents.on('error', (jobId, err) => {
    Logger.log('MSG', 'Job Event Error: ' + jobId + ' ' + err);
});

Logger.log("Done.");

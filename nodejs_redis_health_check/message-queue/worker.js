// Worker process for Messaging aka Message/Queue.
// Used: https://docs.bullmq.io/guide/introduction

const Worker = require('bullmq').Worker;
const config = require('../config.js');
const Logger = require('../Logger.js');

Logger.log('WRK', 'Testing Message/Queue Worker.');

const worker = new Worker('myqueue', async (job)=> {    
    Logger.log('WRK', 'Received: ' + job.data);
}, { connection : {
    host: config.redis.host,
    port: config.redis.port,
    password: config.redis.password,
}});

worker.on('fail', (err) => {
    Logger.log('WRK', 'Worker Fail: ' + err);
    //process.exit(1);
});

worker.on('error', (err) => {
    
    if(err.code == 'ECONNREFUSED') {
        Logger.log('WRK', 'Worker Connection Error: ' + err);
        return true;
    } else {
        Logger.log('WRK', 'Worker Error: ' + err);        
    }       

    // process.exit(1);
});

Logger.log('WRK', 'Done.');
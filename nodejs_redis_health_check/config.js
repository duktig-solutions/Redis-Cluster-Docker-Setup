// Main Configuration file
const Config = {
    redis: {
        host: process.env.REDIS_HOST || "10.211.55.3",
        port: process.env.REDIS_PORT || 6379,
        password: process.env.REDIS_PASSWORD || "re2020Duk_psGw"
    }
};

module.exports = Config;

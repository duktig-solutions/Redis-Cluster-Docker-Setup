#!/bin/sh

sed -i "s/\$REDIS_PORT/$REDIS_PORT/g" /etc/redis/master.conf
sed -i "s/\$REDIS_PASSWORD/$REDIS_PASSWORD/g" /etc/redis/master.conf
sed -i "s/\$REDIS_MASTER_PASSWORD/$REDIS_MASTER_PASSWORD/g" /etc/redis/master.conf
sed -i "s/\$REDIS_DB_FILE_PREFIX/$REDIS_DB_FILE_PREFIX/g" /etc/redis/master.conf

exec docker-entrypoint.sh redis-server /etc/redis/master.conf

#!/bin/sh

sed -i "s/\$REDIS_PORT/$REDIS_PORT/g" /etc/redis/slave.conf
sed -i "s/\$REDIS_PASSWORD/$REDIS_PASSWORD/g" /etc/redis/slave.conf
sed -i "s/\$REDIS_MASTER_PASSWORD/$REDIS_MASTER_PASSWORD/g" /etc/redis/slave.conf
sed -i "s/\$REDIS_DB_FILE_PREFIX/$REDIS_DB_FILE_PREFIX/g" /etc/redis/slave.conf
sed -i "s/\$REDIS_REPLICAOF_HOST/$REDIS_REPLICAOF_HOST/g" /etc/redis/slave.conf
sed -i "s/\$REDIS_REPLICAOF_PORT/$REDIS_REPLICAOF_PORT/g" /etc/redis/slave.conf

exec docker-entrypoint.sh redis-server /etc/redis/slave.conf

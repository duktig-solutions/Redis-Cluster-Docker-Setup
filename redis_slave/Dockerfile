FROM redis:6-alpine
LABEL maintainer "Duktig Solutions <software@duktig.dev>"
ADD slave.conf /etc/redis/slave.conf
RUN chown redis:redis /etc/redis/slave.conf
ENV REDIS_PORT 6379
ENV REDIS_PASSWORD re2020Duk_psGw
ENV REDIS_MASTER_PASSWORD re2020Duk_psGw
ENV REDIS_DB_FILE_PREFIX slave
ENV REDIS_REPLICAOF_HOST redis_master
ENV REDIS_REPLICAOF_PORT 6379

# 2020-09-04 Listening:
# Deep House 24/7: Relaxing Music • Chill Study Music
# https://www.youtube.com/watch?v=WsDyRAPFBC8

COPY slave-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/slave-entrypoint.sh
ENTRYPOINT ["slave-entrypoint.sh"]

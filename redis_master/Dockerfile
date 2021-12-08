FROM redis:6-alpine
LABEL maintainer "Duktig Solutions <software@duktig.dev>"
ADD master.conf /etc/redis/master.conf
RUN chown redis:redis /etc/redis/master.conf
ENV REDIS_PORT 6379
ENV REDIS_PASSWORD re2020Duk_psGw
ENV REDIS_DB_FILE_PREFIX master
COPY master-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/master-entrypoint.sh
ENTRYPOINT ["master-entrypoint.sh"]

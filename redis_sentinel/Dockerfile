FROM redis:6-alpine
LABEL maintainer "Duktig Solutions <software@duktig.dev>"
ADD sentinel.conf /etc/redis/sentinel.conf
RUN chown redis:redis /etc/redis/sentinel.conf
ENV SENTINEL_QUORUM 2
ENV SENTINEL_DOWN_AFTER 30000
ENV SENTINEL_FAILOVER 180000
ENV REDIS_MASTER_HOST redis_master
ENV REDIS_MASTER_PORT 6379
ENV REDIS_PASSWORD re2020Duk_psGw
COPY sentinel-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/sentinel-entrypoint.sh
EXPOSE 26379
ENTRYPOINT ["sentinel-entrypoint.sh"]

FROM haproxy:1.7-alpine
LABEL maintainer "Duktig Solutions <software@duktig.dev>"
COPY haproxy-entrypoint.sh /
RUN chmod +x /haproxy-entrypoint.sh
EXPOSE 6379
EXPOSE 9000
ENV REDIS_PASSWORD re2020Duk_psGw
ENTRYPOINT [ "/haproxy-entrypoint.sh" ]
CMD [ "haproxy", "-f", "/etc/haproxy/haproxy.cfg" ]

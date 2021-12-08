FROM node:12

RUN mkdir /app
COPY . /app/
WORKDIR /app
RUN npm install
EXPOSE 8080
ENV REDIS_HOST 172.23.0.5

CMD [ "node", "server.js" ]

# docker build -t nodejs_redis_health_check .

# docker stop redis_test_set redis_test_get
#   docker start redis_test_set
#   docker start redis_test_get
# docker rm redis_test_set redis_test_get

# WEB Server
# docker stop redis_test_web
# docker rm redis_test_web
# docker run -p 8060:8080 --name redis_test_web -d --network=intermediate_data_center_redis_exchange_net nodejs_redis_health_check
# http://10.211.55.3:8060/

# SET/GET
# docker run -e REDIS_HOST='172.23.0.5' --name redis_test_set --network=intermediate_data_center_redis_exchange_net nodejs_redis_health_check node /app/set-get/set.js
# docker run -e REDIS_HOST='172.23.0.5' --name redis_test_get --network=intermediate_data_center_redis_exchange_net nodejs_redis_health_check node /app/set-get/get.js

# PUB/SUB
# docker run -e REDIS_HOST='172.23.0.5' --name redis_test_pub --network=intermediate_data_center_redis_exchange_net nodejs_redis_health_check node /app/pub-sub/pub.js
# docker run -e REDIS_HOST='172.23.0.5' --name redis_test_sub1 --network=intermediate_data_center_redis_exchange_net nodejs_redis_health_check node /app/pub-sub/sub.js
# docker run -e REDIS_HOST='172.23.0.5' --name redis_test_sub2 --network=intermediate_data_center_redis_exchange_net nodejs_redis_health_check node /app/pub-sub/sub.js

# Message/Queue
# docker run -e REDIS_HOST='172.23.0.5' --name redis_test_message --network=intermediate_data_center_redis_exchange_net nodejs_redis_health_check node /app/message-queue/message.js
# docker run -e REDIS_HOST='172.23.0.5' --name redis_test_worker1 --network=intermediate_data_center_redis_exchange_net nodejs_redis_health_check node /app/message-queue/worker.js
# docker run -e REDIS_HOST='172.23.0.5' --name redis_test_worker2 --network=intermediate_data_center_redis_exchange_net nodejs_redis_health_check node /app/message-queue/worker.js
# docker run -e REDIS_HOST='172.23.0.5' --name redis_test_worker3 --network=intermediate_data_center_redis_exchange_net nodejs_redis_health_check node /app/message-queue/worker.js
# docker run -e REDIS_HOST='172.23.0.5' --name redis_test_worker4 --network=intermediate_data_center_redis_exchange_net nodejs_redis_health_check node /app/message-queue/worker.js
# full-stack-project

Запустите контейнер с образом MongoDB и настройками replica set (он автоматичиски скачает и запустит этот образ):

надо этот:

  docker run --name mongo \
       -p 27017:27017 \
       -e MONGO_INITDB_ROOT_USERNAME="monty" \
       -e MONGO_INITDB_ROOT_PASSWORD="pass" \
       -d prismagraphql/mongo-single-replica:5.0.3

но так как процессор не подерживает AVX ,то мы ставим старую версию.

docker run --name mongo \
       -p 27017:27017 \
       -e MONGO_INITDB_ROOT_USERNAME="monty" \
       -e MONGO_INITDB_ROOT_PASSWORD="pass" \
       -d prismagraphql/mongo-single-replica:4.4.3-bionic
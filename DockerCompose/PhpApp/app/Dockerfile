FROM ubuntu:18.04

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update

RUN apt-get install -y software-properties-common

RUN LC_ALL=C.UTF-8 add-apt-repository ppa:ondrej/php

RUN apt-get update

RUN apt-get install -y nginx php7.2-fpm php7.2-mysql

COPY ./infrastructure /etc/nginx/sites-available

CMD service php7.2-fpm start && nginx -g "daemon off;"

EXPOSE 80

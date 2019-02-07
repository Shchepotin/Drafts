FROM ubuntu:18.04

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update

RUN apt-get install -y software-properties-common

RUN LC_ALL=C.UTF-8 add-apt-repository ppa:ondrej/php

RUN apt-get update

RUN apt-get install -y curl git nginx php7.2-cli php7.2-fpm php7.2-intl php7.2-mysql php7.2-mbstring php7.2-zip php7.2-xml

COPY ./infrastructure /etc/nginx/sites-available

CMD service php7.2-fpm start && nginx -g "daemon off;"

EXPOSE 80

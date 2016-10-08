#!/usr/bin/env bash

curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
sudo apt-get -y update
sudo apt-get -y upgrade

sudo debconf-set-selections <<< 'mysql-server mysql-server/root_password password squirrel'
sudo debconf-set-selections <<< 'mysql-server mysql-server/root_password_again password squirrel'

sudo apt-get -y install mysql-server curl nodejs
sudo service networking restart


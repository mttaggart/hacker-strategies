#!/bin/bash

docker stack rm hacker_strats

sudo docker secret rm hs_ssl_cert
sudo docker secret rm hs_ssl_key

sudo letsencrypt renew

sudo docker secret create hs_ssl_cert /etc/letsencrypt/live/taggart-tech.com/fullchain.pem
sudo docker secret create hs_ssl_key /etc/letsencrypt/live/taggart-tech.com/privkey.pem


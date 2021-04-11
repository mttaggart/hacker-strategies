#!/bin/bash

docker stack rm hacker_strats

docker secret rm hs_ssl_cert
docker secret rm hs_ssl_key

sudo letsencrypt renew

docker secret create hs_ssl_cert /etc/letsencrypt/live/taggart-tech.com/fullchain.pem
docker secret create hs_ssl_key /etc/letsencrypt/live/taggart-tech.com/privkey.pem

./deploy.sh


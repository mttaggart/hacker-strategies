#!/bin/bash

docker build -t "hacker-strategies_api:latest" api/ 
docker build -t "hacker-strategies_nginx:latest" frontend/

docker stack deploy --compose-file docker-compose.yml hacker_strats

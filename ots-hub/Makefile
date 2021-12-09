
export PROJECT_DIR=${shell cd .. && pwd}
export BACKEND_DIR=${shell cd .. && cd ots-backend && pwd}
export FRONTEND_DIR=${shell cd .. && cd ots-frontend && pwd}
export DATABASE_DIR=${shell cd .. && cd ots-db && pwd}

export HUB_DIR=${shell pwd}

export SERVICE_NAME=ots
export BACKEND_PORT=7001
export REACT_APP_PORT=3000

setup:
	docker network create ots-database-net

clear-setup:
	docker network rm ots-database-net

clear-image:
	docker image rm ots-frontend-image && \
	docker image rm ots-backend-image

start:
	export $(shell grep -v '^#' env/backend.env | xargs) && \
	export $(shell grep -v '^#' env/postgres.env | xargs) && \
	export $(shell grep -v '^#' env/frontend.env | xargs) && \
	docker-compose \
	-f docker-compose.yml \
	up -d

get-db-ip:
	docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' ots-database

remove-img:
	docker rmi $(docker images --filter=reference="ots-*" -q)

stop:
	docker-compose \
	-f docker-compose.yml \
	down

start-dev:
	make start &&\
	code ../ots-frontend &&\
	code ../ots-backend
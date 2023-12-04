DOCKER_COMPOSE = cd .docker && docker compose

linux: 
	$(DOCKER_COMPOSE) -f docker-compose.linux.yml up -d --build

windows:
	$(DOCKER_COMPOSE) up -d --build
DOCKER_COMPOSE = cd .docker && docker compose

up:
	$(DOCKER_COMPOSE) up -d --build

down:
	$(DOCKER_COMPOSE) down
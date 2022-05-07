dc_up:
	docker-compose up -d --build

dc_down:
	docker-compose down

dc_dev:
	docker-compose -f docker-compose.yml -f docker-compose.development.yml up --build
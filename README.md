# Простой проект на Nodejs с использованием Docker и Mongo
## Чтобы работала загрузка картинок нужно в папке api создать каталог upload
## Отправлять картинку только через form-data
### Команды из Makefile
- dc_up --- docker-compose up -d --build
- dc_down --- docker-compose down
- dc_dev --- docker-compose -f docker-compose.yml -f docker-compose.development.yml up --build
### Пример: make dc_up

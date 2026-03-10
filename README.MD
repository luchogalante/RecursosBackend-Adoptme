# Adoptme Backend

Proyecto backend desarrollado con Node.js + Express + MongoDB para la gestión de adopciones de mascotas.

## Tecnologías

- Node.js
- Express
- MongoDB
- Swagger
- Mocha + Chai + Supertest
- Docker

## Documentación API

Disponible en:

http://localhost:8080/api/docs

## Tests

Para ejecutar los tests:

npm test

## Docker

Imagen en DockerHub:

https://hub.docker.com/r/luchogalante/adoptme-backend

### Ejecutar con Docker

docker pull luchogalante/adoptme-backend

docker run -p 8080:8080 luchogalante/adoptme-backend
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

Este es el repositorio en el cual se desarrolló un web service usando [Nest](https://github.com/nestjs/nest) como framework de TypeScript. A continuación se indican los pasos a seguir para poder usar este servicio web en tu equipo. Este web service cuenta con [Swagger](https://swagger.io/) para el uso y documentación de Endpoints y cuenta también con el uso de [PostgreSQL](https://www.postgresql.org/) como Base de Datos no relacional para la persistencia de datos usando un contenedor [Docker](https://www.docker.com/) así como también un contenedor para pgadmin. En esta sección proveeremos todos los comandos necesarios paso a paso para la exitosa ejecución de este webservice.

Empecemos.

## 1. Clonar el repositorio

Para poder usar este web service de manera local lo primero que deberá hacer es clonar el repositorio, para ello puede hacerlo utilizando el siguiente comando:

```shell
git clone git@github.com:Exodus-Titan/Web-Service.git
```

## 2. Instalar dependencias

Para instalar las dependencias se utilizará el manejador de paquetes `npm`. Es necesario que se se encuentre dentro de la carpeta del proyecto si se quedo en el paso anterior podrá hacerlo haciendo `cd Web-Service`, para instalar las dependencias entonces se ejecuta el siguiente comando:

```shell
npm install
```

## 3. Ejecutar el proyecto

Una vez instaladas las dependencias deberá ejecutar el siguiente comando para montar el servidor de desarrollo.

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## 4. Crear el contenedor Docker

Lo primero que debe hacer es verificar que se encuentra en la misma carpeta donde se encuentre el archivo docker-compose-yml. Para ello ejecute en su terminal `ls` y podrá observar los siguientes archivos:

```shell
README.md           node_modules        src                 yarn.lock
dist                package-lock.json   test
docker-compose.yml  package.json        tsconfig.build.json
nest-cli.json       postgres_data       tsconfig.json
```

## 5. Docker Compose

Realizar el siguiente comando en consola para levantar el contenedor de Postgre:
```
$ docker-compose up -d postgres
```
Una vez culmine la descarga, se levantará dicho contenedor en segundo plano.

Ahora, ejecutar el mismo comando para pgadmin
```
$ docker-compose up -d pgadmin
```
Una vez culmine la descarga, se levantará dicho contenedor en segundo plano.

Puede ejecutar `docker-compose ps` en la consola para saber el status de dichos contenedores. Ambos deben tener el `STATUS running`

# Swagger 

Para poder ver la documentación que Swagger proporciona del servicio web basta con correr `npm run start` y entrar a [localhost:3000/docs](http://localhost:3000/docs) desde el navegador. En dicho sitio podrá probar los endpoints y ver los diferentes schemas requeridos para la exitosa ejecución de dichos endpoints.

# PgAdmin

Para poder entrar a pg admin deben estar corriendo ambos contenedores y la aplicación. Entrar a [http://localhost:5050/](http://localhost:5050/) y loggear con las siguientes credenciales:
`email: root@admin.com`
`password: root`
## License

Nest is [MIT licensed](LICENSE).

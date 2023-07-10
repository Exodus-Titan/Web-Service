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

Este es el repositorio en el cual se desarrolló un web service usando [Nest](https://github.com/nestjs/nest) como framework de TypeScript. A continuación se indican los pasos a seguir para poder usar este servicio web en tu equipo. Este web service cuenta con la documentación de [Swagger](https://swagger.io/) para el uso y documentación de Endpoints y cuenta también con el uso de [PostgreSQL](https://www.postgresql.org/) como Base de Datos no relacional para la persistencia de datos usando un contenedor [Docker](https://www.docker.com/) así como también un contenedor para pgadmin. En esta sección proveeremos todos los comandos necesarios paso a paso para la exitosa ejecución de este webservice.
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

Lo primero que debe hacer es verificar que se encuentra en la misma carpeta donde se encuentre el archivo docker-compose-yml. Para ello ejecute el siguiente comando:

```shell
$ ls
```
Y podrá observar los siguientes archivos:

```shell
README.md           node_modules        src                 yarn.lock
dist                package-lock.json   test
docker-compose.yml  package.json        tsconfig.build.json
nest-cli.json       postgres_data       tsconfig.json
```

## License

Nest is [MIT licensed](LICENSE).

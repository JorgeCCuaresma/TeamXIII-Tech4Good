# BACKEND - User-API

> Aplicación de backend que permite registrar usuarios y hacer login.

## Usage
La aplicación está desarrollada en TypeScript y proporciona endpoints que permiten al cliente registrar usuarios y hacer login. Los datos de los usuarios son almacenados en una base de datos MongoDB y la autenticación se hace mediante JsonWebTokens.
Se añaden algunas rutas para la visualización y gestión de usuarios a las que solo se puede acceder con token valido y rol de administrador.


## API/Component

| Method |Common path| Endpoint | Description |Protected|
| ------ | ----------| -------- | ----------- |---------|
| POST   | {url} /api/auth | /register  | Checks the provided data against the existing DB and creates a new user if it doesn't exists. Returns a token so that client can directly grant access as if logged in to improve UI.  | By a rate limiter middleware: 5 req / 10 min |
| POST   | {url} /api/auth | /login   | Checks the provided data against the existing DB and provides a token if valid.|  By a rate limiter middleware: 5 req / 10 min |
|GET|{url} /api/users|/|Returns all users.| 2 middlewares that prevent acces if user is not authenticated and if the user is not an admin|
|GET|{url} /api/users|/:id|Returns a user based on id. | 2 middlewares that prevent acces if user is not authenticated|


Se ha incluido una colección de postman con la que poder probar los endpoints.

## Installation
Para la correcta instalación de la aplicación va a necesitar:
    
    - Node
    - MongoDB


Desgargue o clone el repositorio, abra su editor de código favorito y una terminal e instale las dependencias necesarias con el comando:
```shell
    # instala las dependencias
    npm install
```
Configure el archivo .env-template y cambie el nombre a .env

En el package.json se ha han incluido los scripts habituales para inicializar la aplicación.

```shell
    # inicia la aplicación en modo desarrollo sin transpilación previa
    npm run dev
```
```shell
    # transpila el codigo escrito en TS
    npm run build
```
```shell
    # inicia la aplicación
    npm start
```

## License 
![MIT](https://img.shields.io/npm/l/express)
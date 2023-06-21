# BACKEND - Hackaton Tech4Good - TeamXIII

This application pursues to promote Inclusive and Quality Education in the city of Barcelona, and is a proposed solution after an analysis of [municipal Open Data](https://opendata-ajuntament.barcelona.cat/) on the digital gap and existing inequalities among neighborhoodsin the city.

The app will allow for skilled volunteers to offer their time and digital expertise to the communities in neighborhoods where it will have more impact. 

The app rewards the volunteers in accordance to an assigned score to each of the neighborhoods where they invest their time. The score is obtained thanks to a most deep analysis involving machine learning tools. The app then rewards the registered volunteers with a score of their own which will be ideally exchanged for certain benefits such as discounts in public transportation and other municipal services.

## Usage

The application's back-end is developed in TypeScript and provides endpoints that allow the client to register users and perform login. User data is stored in a MongoDB database, and authentication is enabled by using JsonWebTokens.
Some routes are added for user updating, which can only be accessed with a valid token and administrator role.

In addition, the neighborhood data and the score obtained with machine learning tools is made available for the front-end to exploit.


## API

Several endpoints are made available:

| Method |Common path| Endpoint | Description |Protected|
| ------ | ----------| -------- | ----------- |---------|
| POST   | {url} /api/auth | /register  | Checks the provided data against the existing DB and creates a new user if it doesn't exists. Returns a token so that client can directly grant access as if logged in to improve UI.  | By a rate limiter middleware: 5 req / 10 min |
| POST   | {url} /api/auth | /login   | Checks the provided data against the existing DB and provides a token if valid.|  By a rate limiter middleware: 5 req / 10 min |
|POST|{url} /api/users|/update/:id|Returns a user based on id. | Middleware prevents acces if user is not authenticated|
|GET|{url} /api/stats|/all-hoods|Returns an array of objects with the neighborhoods and their score | Not specifically. Global protection with the helmet middleware against XSS |
|ALL|/ "*"||Catches all non-defined routes and returns a 404 error.|Not specifically. Global protection with the helmet middleware against XSS|




## Deployment

This app has been successfully deployed:

[Challenge 2: Inclusive and quality education. Front-End](http://mgl.albertoalmenara.com/)

[Back-End deployment](https://teamxiii-tech4good-production.up.railway.app/)


## Front-End Local Installation

Please follow the instructions specified in the following repository:

[Front-End with Angular](https://github.com/Almenara/hackaton-front)

## Back-End Local Installation
You will need to have the following software locally.
    
    - Node
    - Docker


Download or clone the repository and install the necessary dependencies using the command:
```shell
    # install dependencies
    npm install
```


Open your code editor and configure .env-template to .env.

The package.json file includes the usual scripts to initialize the application.
Run the 

```shell
    # start mongo image in Docker
    npm run up
```

```shell
    # start the application in development mode without previous transpilation
    npm run dev
```
```shell
    # transpile the TypeScript code
    npm run build
```
```shell
    # start the application
    npm start
```

## License 
![MIT](https://img.shields.io/npm/l/express)
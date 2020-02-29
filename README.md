[![Build Status](https://travis-ci.org/bihire/Broadcatser.svg?branch=develop)](https://travis-ci.org/bihire/Broadcatser)   [![Coverage Status](https://coveralls.io/repos/github/bihire/Broadcatser/badge.svg?branch=develop)](https://coveralls.io/github/bihire/Broadcatser?branch=develop)  [![Maintainability](https://api.codeclimate.com/v1/badges/ee5e9ba168c869950df1/maintainability)](https://codeclimate.com/github/bihire/Broadcatser/maintainability)   



# Broadcaster
Corruption is a huge bane to Africa’s development. African countries must develop novel and  localized solutions that will curb this menace, hence the birth of Broadcaster. Broadcaster  enables any/every citizen to bring any form of corruption to the notice of appropriate authorities  and the general public. Users can also report on things that need government intervention.


### Heroku API 
[BroadCaster link](https://broadcaster-server.herokuapp.com/)

### Documentation of APIs
[Endpoints documentation](https://documenter.getpostman.com/view/5339931/SW7aZ8jc)

## Tools Used 

[Javascript](https://javascript.info/) : Language used.

[NodeJS](https://nodejs.org/en/) : Javascript runtime.

[Express](http://expressjs.com/) : NodeJs framework.

[Mocha, Chai and Supertest](https://www.youtube.com/watch?v=MLTRHc5dk6s) : Testing Framework.

[Airbnb](https://github.com/airbnb/javascript) : Javascript style Guide.

[Travis](https://travis-ci.org/) : Continuous Integration.

[nyc](https://github.com/istanbuljs/nyc) : Test coverage.

[Coveralls](https://coveralls.io/) : Git badge.

[Codeclimate](https://codeclimate.com/) : Git badge.

[Heroku](https://www.heroku.com/) : Deployment.

[Postman](https://www.getpostman.com/) : Documentation


## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Prerequisites
TO setup the project on your local machine do the following
Install Node
``` npm install node ```

Clone the repo by running

```git clone https://github.com/bihire/Broadcatser.git```

Then install all the necessary dependencies

``` 
npm install 
``` 
or 
``` 
npm i 
```

## Database setup

```
Creata a .env file
```

Export the port number to be accessible in the file

```
{
    port: process.env.PORT || 8080
}
``` 

## Deployment

* URL = http://localhost:8080
* PORT = 8080


## Run the application

```
npm start
```

## Run tests

```
npm run test
```

## Run coveralls

```
npm run ci
```

## API ENDPOINTS

| Ressource URL | Methods  | Description  |
| ------- | --- | --- |
| / | GET | The index (welcome message) |
| /api/v1/auth/signup | POST | Signup a new User |
| /api/v1/auth/signin | POST | Signin registered User |
| /api/v1/red-flags | POST | POST an red-flag/intervention |
| /api/v1/red-flags/`red-flag-id` | GET | Get a specific red-flag/intervention for a User |
| /api/v1/red-flags/`red-flag-id`/location | PATCH | Update a specific User's red-flag/intervention location |
| /api/v1/red-flags/`red-flag-id`/comment | PATCH | Update a specific User's red-flag/intervention comment|
| /api/v1/red-flags | GET | Get all the red-flags/interventions |
| /api/v1/red-flags/`red-flag-id` | DELETE | Delete own red-flag/intervention |


## Contributor
- Bihire Jules Boris <muhireboris@yahoo.fr>

---

## License & copyright
Copyright (c) Bihire Jules Boris, Web developer

## Techwondoe

Interview Assignment

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## .env setup

create a .env file and add the below fields

```
MYSQL_HOST="localhost"
MYSQL_PORT=3306
MYSQL_USERNAME="user_name"
MYSQL_PASSWORD="password"
MYSQL_DATABASE="database"

#JWT Details
JWT_SECRET_KEY=your_jwt_secret_key
JWT_EXPIRATION_TIME=1h #86400 = 1 day
```

## Swagger Link

After running the project
open [swagger Link](http://localhost:3000/apis)


## Execution steps

After opening the swagger, first hit the auth api, it will give the access_token, add that access_token for Authentication (top right, Authorize button).

Then, we can proceed the other apis


## Note

I have not used Auth0 in this assignment, instead used JWT auth.

# TS Express rest API

A typescript starter for developing REST API with Express JS

## Usage

Install the code dependencies

```sh
npm install
```

Open .env with your favorite text editor and replace the variables values with actual data

```
ENV=                  # Type of environment the server is runnin (prod | dev)
CWD=                  # Current Working Directory
LOG_ENABLED=          # Whether or not enable pino logs (true | false)
PORT=                 # Port to listen
CORS_ALLOW_ORIGIN=    # Origins to accept CORS requests
DB_CONNECTION=        # PostgreSQL database string connection
```

To start the server run

```sh
npm start
# or to run in watch mode
npm run watch
```

## Commands

- `npm start` to start the API server locally
- `npm run serve`: to serve the API server locally
- `npm run serve-watch`: to serve the API server locally in watch mode
- `npm run watch`: to build and serve the API server locally in watch mode
- `npm run build`: to compile the API server code and copy static assets
- `npm run build-ts`: to compile the API server code only
- `npm run build-watch`: to compile the API server code in watch mode
- `npm run test`: to run tests
- `npm run test-coverage`: to run tests and generate coverage reports
- `npm run test-watch`: to run tests in watch mode
- `npm run lint`: to lint with eslint
- `npm run lint:fix`: to fix linting errors with eslint

## Technology

- typescript
- express
- dotenv-safe
- pg-promise
- pino
- jest
- husky
- commitlint / config-conventional
- prettier
- eslint
- nodemon

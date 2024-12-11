# soccer-simulator

## Installation

```bash
$ pnpm install
```

## Running the app

Start using Docker:

```bash
docker compose up
```

or (rebuilding application Docker image):

```bash
docker compose up --build
```

Access application at http://localhost:8080

Another option is to start database separately:

```bash
docker compose up db
```

and create `.env` file in repository root directory:

```dotenv
DB_HOST=localhost
DB_PORT=5432
DB_NAME=soccer-simulator
DB_USER=soccer-simulator
DB_PASSWORD=postgres
```

or build the project and create configuration file `dist/config.json`:

```bash
pnpm build
pnpm cli config
```

Start the application using:

```
pnpm start:dev
```

and access it at http://localhost:3000

## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

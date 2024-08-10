# Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

# Starting the Development Environment

You need to have .env file in root directory if not present

```bash
cp .env.example .env
```

## Running the app

```bash
# development
 docker compose -f docker-compose.dev.yaml up --build
```

## For applying migrations

Since this code is running inside docker container so first go inside your container.

```bash
# Find all the running images of docker
docker ps

#  copy the id of nest-js-dockerized-template-app image manually  then to go inside that image and then execute this command

docker exec -it <copied_id> bash

```

This will take you inside the container of docker. Now to apply migrations

```bash

#list the directory
ls

# make migrations ( if you have any changes in table or entity this will create a migration for that table)
npx typeorm -d dist/config/data-source.js migration:generate src/migrations/TestMigration


#this will generate the migration in src/migrations folder, you can go and check TestMigration.ts file in that directory

#To apply the migration
npx typeorm -d dist/config/data-source.js migration:run

# To revert the migrations
npx typeorm migration:revert --dataSource dist/config/data-source.js

```

Note: Always make and apply the initial migration first. If you create additional migrations (e.g., create migrations 1, again create migations 2, again 3 etc) without applying the initial migration, you may encounter duplicate errors. To avoid this, ensure that you make and apply the initial migration before creating any additional ones.

## Shortcut for creating a new service, module and controller

```bash
nest generate module user
nest generate service user
nest generate controller user

```

## Production (to do)

In production you dont need to apply manually the migrations

While deploying make migrations and appy if there are any

Make sure to npm run build
copy dist file to docker (only dist file)
run main.js which is inside dist file that is node dist/main.js

In docker file first apply migrations then only run node dist/main.js

command:

```
CMD [ "sh", "-c", "npx typeorm migration:run --dataSource dist/config/data-source.js && npm run start:prod" ]
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

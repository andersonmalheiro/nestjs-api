# NestJS API

Simple REST API using NestJS

---

## Running the project locally
First of all, you need to install the dependencies with:
```bash
npm install
# or
yarn install
```


### Database
You will need the database running, which you can achieve by using the following command:
```bash
docker-compose up db pgadmin
```

doing so will provide a postgres container and a pgAdmin 4 container wich you can access on the browser on [http://localhost/5050](http://localhost/5050)

### Migrations
To apply all migrations to the database, run the following command:
```bash
npx knex migrate:latest
```

## Scripts

- Run the server:
  ```
  npm start
  ```

### Technologies used in this project:

- [MailTrap](https://mailtrap.io/) provider for sending emails when an user register in the app;
- Database storage with [Postgres](https://www.postgresql.org/) and [TypeORM](https://typeorm.io/);
- Typescript;
- Data validation with [Yup](https://github.com/jquense/yup) (in progress);

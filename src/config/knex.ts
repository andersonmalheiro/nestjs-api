import knex, { Config } from "knex";
import dotenv from "dotenv";

dotenv.config();

const config: Config = {
  client: "pg",
  connection: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  },
};

export const knexInstance = knex(config);

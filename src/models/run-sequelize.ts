import { config } from "dotenv";
import { Sequelize }  from "sequelize";

console.log("======== Run sequelize ========");

config();

export const sequelize = new Sequelize({
  dialect: "postgres",
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

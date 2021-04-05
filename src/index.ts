import { config } from "dotenv";
import pkgSequelize from "sequelize";
const { Sequelize, QueryTypes } = pkgSequelize;

config();

const sequelize = new Sequelize({
  dialect: "postgres",
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

async function main() {
  try {
    await sequelize.authenticate();

    console.log("Connection has been established.");

    const result = await sequelize.query("select count(1) from movies", {
      type: QueryTypes.SELECT
    });

    console.log(result);

    await sequelize.close();

    console.log("Connection has been closed.");
  } catch (error) {
    console.error(error);
  }
}

void main();

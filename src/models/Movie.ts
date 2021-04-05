import pkg from "sequelize";
const { DataTypes, Model } = pkg;

import { sequelize } from "./run-sequelize.js";

export interface MovieAttributes {
  id: BigInt;
  name: string;
  runtime: number;
}

export class Movie extends Model<MovieAttributes>implements MovieAttributes {
  public id!: BigInt;
  public name!: string;
  public runtime!: number;
}

Movie.init(
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    runtime: {
      type: DataTypes.INTEGER
    }
  },
  {
    tableName: "movies",
    sequelize,
    timestamps: false
  }
);

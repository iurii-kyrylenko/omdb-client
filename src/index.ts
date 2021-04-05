// Raw queries
import pkg from "sequelize";
const { QueryTypes } = pkg;
import { sequelize } from "./models/run-sequelize.js";

// Models
import { Movie, MovieAttributes } from "./models/Movie.js";

interface Result {
  count: number;
  movies: MovieAttributes[];
}

function rawQuery(): Promise<Record<string, unknown>[]> {
  return sequelize.query("select * from people limit 4", {
    type: QueryTypes.SELECT
  });
}

async function useModel(): Promise<Result> {
  const count = await Movie.count();

  const movies = await Movie.findAll({
    limit: 8
  });

  const attrs: MovieAttributes[] = movies.map(m => {
    return {
      id: m.id,
      name: m.name,
      runtime: m.runtime
    };
  });

  return { count, movies: attrs };
}

async function main() {
  try {
    const people = await rawQuery();
    console.log(people);

    const movies = await useModel();
    console.log(movies);

    await sequelize.close();
  } catch (error) {
    console.error(error);
  }
}

void main();

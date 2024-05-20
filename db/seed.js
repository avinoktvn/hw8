const pool = require("../config/config.js");
const fs = require("fs");

const seed = async () => {
  const client = await pool.connect();

  try {
    const ageSql = fs.readFileSync("./db/age.sql", { encoding: "utf-8" });

    const res = await client.query(ageSql);
    console.log("Database seeded successfully");

    console.log("Query results:", res.rows);
  } catch (err) {
    console.error("Error executing query", err.stack);
  } finally {
    client.release();
  }
};

seed()
  .then(() => {
    console.log("Seeding completed");
    pool.end();
  })
  .catch((err) => {
    console.error("Seeding failed", err);
    pool.end();
  });

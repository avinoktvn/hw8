const express = require("express");
const pool = require("./database");
const router = require("./routes");
const app = express();

app.use(router);

// Endpoint untuk mendapatkan semua kategori
app.get("/categories", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM categories");
    res.json(result.rows);
  } catch (err) {
    console.error("Error executing query", err.stack);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Endpoint untuk mendapatkan kategori berdasarkan ID
app.get("/categories/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query("SELECT * FROM category WHERE category_id = $1", [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Category not found" });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error("Error executing query", err.stack);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(3000);

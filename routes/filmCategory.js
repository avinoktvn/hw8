const express = require("express");
const router = express.Router();
const pool = require("../config/config.js");

router.get("/categories/:id", async (req, res) => {
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

module.exports = router;

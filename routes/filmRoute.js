const express = require("express");
const router = express.Router();
const pool = require("../config/config.js");

router.get("/films", (req, res) => {
  const sql = `SELECT * FROM film`;

  pool.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json(result.rows);
    }
  });
});

module.exports = router;

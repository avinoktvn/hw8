const express = require("express");
const router = express.Router();
const pool = require("../config/config.js");
const film = require("../routes/filmRoute.js");
const category = require("../routes/categoryRoute.js");
const actor = require("../routes/actorRoute.js");
const filmcategory = require("./filmcategory.js");

router.use(category);
router.use(film);
router.use(actor);
router.use(filmcategory);

module.exports = router;

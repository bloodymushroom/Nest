const express = require('express');
const router = express.Router();
const Users = require("../models/User");

/* GET users listing. */
router.get('/', async (req, res, next) => {
  try {
    const users = await Users.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
});

module.exports = router;

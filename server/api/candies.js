const router = require('express').Router();
const { Candy } = require('../db/models')

module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const candies = await Candy.findAll();
    res.json(messages);
  } catch (err) {
    next(err);
  }
});

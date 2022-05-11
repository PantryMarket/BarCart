const express = require('express');
const router = express.Router();

const fridgeController = require('../controllers/fridgeController');

router.get('/', 
fridgeController.getIngredients,
 (req, res, next) => {
  return res.status(200).json(res.locals.allIngredients);
  // return res.status(200).json({test: "hello"});
})

module.exports = router;
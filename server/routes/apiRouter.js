const express = require('express');
const router = express.Router();

const apiController = require('../controllers/apiController');

router.get('/', 
apiController.getDrinks,
 (req, res, next) => {
  return res.status(200).json(res.locals.allDrinks);
  // return res.status(200).json({test: "hello"});
})

module.exports = router;
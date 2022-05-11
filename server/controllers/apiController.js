const {Recipe} = require('../models/drinkModals.js')

const apiController = {};

apiController.getDrinks = async (req, res, next) => {
  try {
    const result = await Recipe.find({});
    console.log(result);
    res.locals.allDrinks = result;
    return next();
  } catch (err) {
    return next({
      status: 400,
      message: 'Failed to retrieve all drinks'
    })
  }

}

module.exports = apiController;
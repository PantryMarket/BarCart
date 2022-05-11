const {Fridge} = require('../models/drinkModals.js')


const fridgeController = {};

fridgeController.getIngredients = async (req, res, next) => {
    try {
      res.locals.allIngredients = await Fridge.find({}).exec();
      return next();
    } catch(err) {
      return next(err);
    }
};


fridgeController.addIngredient = async (req, res, next) => {
    const { ingredientName, quantity, unit } = req.body;
    try {
      await Fridge.create({ ingredientName, quantity, unit });
      return next();
    } catch(err) {
      return next(err);
    }
};

fridgeController.updateIngredient = async (req, res, next) => {
    const { ingredientName, quantity } = req.body;
    try {
      await Fridge.updateOne({ingredientName: ingredientName}, {quantity: quantity});
      return next();
    } catch(err) {
      return next(err);
    }
};

fridgeController.deleteIngredient = async (req, res, next) => {
    const { ingredientName } = req.body;
    try {
      await Fridge.deleteOne({ingredientName: ingredientName});
      return next();
    } catch(err) {
      return next(err);
    }
};

module.exports = fridgeController;
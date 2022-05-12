const { Fridge } = require('../models/drinkModals.js');

const fridgeController = {};

fridgeController.getIngredients = async (req, res, next) => {
  try {
    res.locals.allIng = await Fridge.find({}).exec();
    return next();
  } catch (err) {
    return next({
      log: `fridgeController.getIngredients: ERROR: ${err}`,
      status: 400,
      message: { err: 'Error occurred in fridgeController.getIngredients' },
    });
  }
};

fridgeController.getIngArr = async (req, res, next) => {
  try {
    const allIng = await Fridge.find({}).exec();
    const myIngs = [];
    for (let i = 0; i < allIng.length; i++) {
      myIngs.push(allIng[i].ingredientName);
    }
    res.locals.allIng = myIngs;
    return next();
  } catch (err) {
    return next({
      log: `fridgeController.getIngredients: ERROR: ${err}`,
      status: 400,
      message: { err: 'Error occurred in fridgeController.getIngredients' },
    });
  }
};

fridgeController.findIngredient = async (req, res, next) => {
  const { ingredientName } = req.params;
  try {
    res.locals.findIng = await Fridge.findOne({ ingredientName });
    return next();
  } catch (err) {
    return next({
      log: `fridgeController.findIngredient: ERROR: ${err}`,
      status: 400,
      message: { err: 'Error occurred in fridgeController.findIngredient' },
    });
  }
};

//caveat is that you can accidentally make duplicate sambucas lol
fridgeController.addIngredient = async (req, res, next) => {
  const { ingredientName, quantity, unit } = req.body;

  try {
    res.locals.addIng = await Fridge.create({ ingredientName, quantity, unit });
    return next();
  } catch (err) {
    return next({
      log: `fridgeController.addIngredient: ERROR: ${err}`,
      status: 400,
      message: { err: 'Error occurred in fridgeController.addIngredient' },
    });
  }
};

// https://mongoosejs.com/docs/api.html#model_Model.findOneAndUpdate
fridgeController.updateIngredient = async (req, res, next) => {
  let { ingredientName, quantity, unit } = req.body;
  ingredientName = ingredientName.trim();

  const filter = { ingredientName: ingredientName };
  const update = { $inc: { quantity: quantity }, unit: unit };
  const options = {
    new: true, //if true, return the modified document rather than the original
    upsert: true, //bool - creates the object if it doesn't exist
  };
  try {
    res.locals.updatedIng = await Fridge.findOneAndUpdate(
      filter,
      update,
      options
    );
    return next();
  } catch (err) {
    return next({
      log: `fridgeController.updateIngredient: ERROR: ${err}`,
      status: 400,
      message: { err: 'Error occurred in fridgeController.updateIngredient' },
    });
  }
};

fridgeController.deleteIngredient = async (req, res, next) => {
  const { _id } = req.body;
  try {
    console.log('Deleting item with id', _id);
    res.locals.deleteIng = await Fridge.findByIdAndDelete(_id); //or .deleteOne or .remove - findOne returns deleted doc
    return next();
  } catch (err) {
    return next({
      log: `fridgeController.deleteIngredient: ERROR: ${err}`,
      status: 400,
      message: { err: 'Error occurred in fridgeController.deleteIngredient' },
    });
  }
};

module.exports = fridgeController;

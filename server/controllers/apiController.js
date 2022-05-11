const { Recipe } = require('../models/drinkModals.js');

const apiController = {};

apiController.getRecipes = async (req, res, next) => {
  try {
    const result = await Recipe.find({});
    console.log(result);
    res.locals.allRecipes = result;
    return next();
  } catch (err) {
    return next({
      status: 400,
      message: 'Failed to retrieve all drinks',
    });
  }
};

apiController.findRecipe = async (req, res, next) => {
  const { recipeName } = req.params;
  try {
    res.locals.findRecipe = await Recipe.findOne({ name: recipeName });
    return next();
  } catch (err) {
    return next({
      log: `apiController.findRecipe: ERROR: ${err}`,
      status: 400,
      message: { err: 'Error occurred in apiController.findRecipe' },
    });
  }
};

//https:stackoverflow.com/questions/66483465/how-do-i-filter-recipes-from-the-database

apiController.possibleRecipes = async (req, res, next) => {
  try {
    res.locals.possibleRecipes = await Recipe.aggregate([
      {
        $match: {
          'ingredients.ingredientName': {
            $in: res.locals.allIng,
          },
        },
      },
      {
        $addFields: {
          OtherIngredient: {
            $filter: {
              input: '$ingredients.ingredientName',
              cond: {
                $not: {
                  $in: ['$$this', res.locals.allIng],
                },
              },
            },
          },
        },
      },
      {
        $match: {
          OtherIngredient: [],
        },
      },
      {
        $project: {
          OtherIngredient: 0,
        },
      },
    ]);
    return next();
  } catch (err) {
    return next({
      log: `apiController.possibleRecipes: ERROR: ${err}`,
      status: 400,
      message: { err: 'Error occurred in apiController.possibleRecipes' },
    });
  }
};

module.exports = apiController;

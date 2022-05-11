const express = require('express');

const router = express.Router();

const apiController = require('../controllers/apiController');

//returns an array of all recipe objects
router.get('/', apiController.getRecipes, (req, res, next) => {
  return res.status(200).json(res.locals.allRecipes);
});

//returns a singular recipe obj (doesn't work if your name has symbols)
router.get('/:recipeName', apiController.findRecipe, (req, res, next) => {
  return res.status(200).json(res.locals.findRecipe);
});

module.exports = router;

// //any possible recipe (inclusive, can be missing some ings)
// db.collection.find({
//   "ingredients.ingredientName": {
//     $in: ["Grand Marnier", "Kahlua", "Baileys irish cream"],
//   },
// });

// //returns only recipes that you have all the necessary ingredients for
// db.collection.aggregate([
//   {
//     $match: {
//       "ingredients.ingredientName": {
//         $in: [
//           "Creme de Cacao",
//           "Amaretto",
//           "Triple sec",
//           "Absolut Vodka",
//           "Gin",
//           "Tonic water",
//           "Applejack",
//           "Grapefruit juice",
//         ],
//       },
//     },
//   },
//   {
//     $addFields: {
//       OtherIngredient: {
//         $filter: {
//           input: "$ingredients.ingredientName",
//           cond: {
//             $not: {
//               $in: [
//                 "$$this",
//                 [
//                   "Creme de Cacao",
//                   "Amaretto",
//                   "Triple sec",
//                   "Absolut Vodka",
//                   "Gin",
//                   "Tonic water",
//                   "Applejack",
//                   "Grapefruit juice",
//                 ],
//               ],
//             },
//           },
//         },
//       },
//     },
//   },
//   {
//     $match: {
//       OtherIngredient: [],
//     },
//   },
//   {
//     $project: {
//       OtherIngredient: 0,
//     },
//   },
// ]);

const express = require("express");

const fridgeController = require("../controllers/fridgeController");

const router = express.Router();

//returns an array of all ingredient objects
router.get("/", fridgeController.getIngredients, (req, res) =>
  res.status(200).json(res.locals.allIng)
);

//returns an individual ingredient object
router.get(
  "/:ingredientName",
  fridgeController.findIngredient,
  (req, res) => res.status(200).json(res.locals.findIng) //singular
);

//requires { ingredientName, quantity, unit } in req.body
//return res.locals.addIng to get the newly created ing obj
//* you should never add an ingredient you already have in your fridge, otherwise will end up with
//  ex. multiple 'Absolute Vodka' objs
router.post("/", fridgeController.addIngredient, (req, res) =>
  res.status(200).json("Ingredient Added")
);

//requires { ingredientName, quantity } in req.body
//return res.locals.updateIng to get the newly created ing obj
router.patch("/", fridgeController.updateIngredient, (req, res) =>
  res.status(200).json("Ingredient Quantity Updated")
);

//requires { ingredientName } in req.body
//return res.locals.deleteIng to get the newly created ing obj
router.delete("/", fridgeController.deleteIngredient, (req, res) =>
  res.status(200).json("Ingredient Deleted")
);

module.exports = router;

const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://jukim98:XfKATZh69OpubsE7@cluster0.zmnzr.mongodb.net/barcart?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'barcart'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));


const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    id: String,
    name: String,
    category: String,
    glassware: String,
    instructions: String,
    thumbnail: String,
    ingredients: [
        {
        ingredientName: String,
        quantity: Number,
        unit: String,
        }
    ],
  });
  const Recipe = mongoose.model('recipe', recipeSchema);

  const fridgeSchema = new Schema({
    ingredientName: String,
    quantity: Number,
    unit: String,
  });
  const Fridge = mongoose.model('fridge', fridgeSchema);


  module.exports = {
    Recipe,
    Fridge
  };

  /*
  idDrink:"17837",
        strDrink:"Adam",
        strCategory:"Ordinary Drink",
        strGlass:"Cocktail glass",
        strInstructions:"In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
        strDrinkThumb:"https://www.thecocktaildb.com/images/media/drink/v0at4i1582478473.jpg",
        strIngredient1:"Dark rum",
        strIngredient2:"Lemon juice",
        strIngredient3:"Grenadine",
        strMeasure1:"2 oz ",
        strMeasure2:"1 oz ",
        strMeasure3:"1 tsp ",



// const IngredientSchema = new Schema({
//     name:  String,
//     quantity: {
//         type: Number,
//         default: 0
//     },
//     measurement: String,
// })

*/
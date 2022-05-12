import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const RecipeCard = ({ allDrinks, fridge }) => {
  const { id } = useParams();

  const [currentRecipe, setCurrentRecipe] = useState({});
  const [isDone, setIsDone] = useState(false);
  const [isFinallyDone, setIsFinallyDone] = useState(false);

  useEffect(() => {
    fetch(`/api/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCurrentRecipe(data);
        setIsDone(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //   const recipe = allDrinks.find((drink) => drink._id === id)
  useEffect(() => {
    if (isDone) {
      console.log('current recipe is ', currentRecipe.ingredients);
      console.log('fridge is ', fridge);

      // const common = fridge.filter((fridgeIng) => {
      //   return currentRecipe.ingredients.some((recipeIng) => {
      //     if (fridgeIng.ingredientName === recipeIng.ingredientName) {
      //       fridgeIng.enough = recipeIng.quantity > fridgeIng.quantity ? false : true;
      //       }
      //       return;
      //     }
      //   });
      // });
      // console.log('result is', result);

      const obj = {};

      for (let i = 0; i < currentRecipe.ingredients.length; ++i) {
        for (let j = 0; j < fridge.length; ++j) {
          if (
            currentRecipe.ingredients[i].ingredientName ===
            fridge[j].ingredientName
          ) {
            currentRecipe.ingredients[i].quantity <= fridge[j].quantity
              ? (currentRecipe.ingredients[i].stock = true)
              : (currentRecipe.ingredients[i].stock = false);
          }
        }
      }

      setIsFinallyDone(true);

      console.log('currentRecipe is:', currentRecipe);
    }
  }, [isDone]);

  // const fridgeOnly = fridge.filter((fridgeIng) => {
  //   return !currentRecipe.ingredients.some((recipeIng) => {
  //     return fridgeIng.ingredientName === recipeIng.ingredientName;
  //   });
  // });

  // const recipeOnly = currentRecipe.ingredients.filter((recipeIng) => {
  //   return !fridge.some((fridgeIng) => {
  //     return recipeIng.ingredientName === fridgeIng.ingredientName;
  //   });
  // });

  return (
    isFinallyDone && (
      <div className="col-4 mb-5 mx-auto">
        <div class="card mx-auto" style={{ width: '25rem' }}>
          <img
            src={currentRecipe.thumbnail}
            class="card-img-top"
            alt={currentRecipe.name}
          />
          <div class="card-body">
            <h5 class="card-title">{currentRecipe.name}</h5>
            <p class="card-text">{currentRecipe.instructions}</p>
            <ul class="card-text">
              {currentRecipe.ingredients.map((ingredient) => {
                return (
                  <p>
                    🫒 {ingredient.ingredientName} {ingredient.quantity}{' '}
                    {ingredient.unit}{' '}
                    {ingredient.stock === true ? ' ✅' : ' ❌'}
                  </p>
                );
              })}
            </ul>
            {/* <p class="card-text">{ingredients}</p> */}
          </div>
        </div>
      </div>
    )
  );
};

export default RecipeCard;

// id:"15997",
//     name:"GG",
//     category:"Ordinary Drink",
//     glassware:"Collins Glass",
//     instructions:"Pour the Galliano liqueur over ice. Fill the remainder of the glass with ginger ale and thats all there is to it. You now have a your very own GG.",
//     thumbnail:"https://www.thecocktaildb.com/images/media/drink/vyxwut1468875960.jpg",
//     ingredients: [{
//         ingredientName: "Galliano",
//         quantity: 2.5,
//         unit: "shots"
//     },
//     {
//         ingredientName: "Ginger ale",
//         quantity: 1,
//         unit: "shots"
//     },
//     {
//         ingredientName: "Ice",
//         quantity: 1,
//         unit: "un"
//     }]
// },

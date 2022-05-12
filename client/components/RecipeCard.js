import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const RecipeCard = ({ allDrinks }) => {
  const { id } = useParams();

  const [currentRecipe, setCurrentRecipe] = useState({});

  //   const recipe = allDrinks.find((drink) => drink._id === id)
  useEffect(() => {
    fetch(`/api/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCurrentRecipe(data);
      });
  }, []);
  return (
    currentRecipe.ingredients && (
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
                    {ingredient.unit}
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

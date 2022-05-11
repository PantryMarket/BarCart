import React, { Fragment } from 'react';

const DrinkCard = (props) => {
  let { name, thumbnail, ingredients, instructions, glassware } = props.drink;
  // console.log('glassware from DrinkCard', glassware);
  if (name === 'Orgasm')
    thumbnail =
      'https://www.thecocktaildb.com/images/media/drink/vr6kle1504886114.jpg';
  return (
    <div className="col-4">
      <div class="card" style={{ width: '18rem' }}>
        <img src={thumbnail} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">{glassware}</p>
          <p class="card-text">{instructions}</p>
          {/* <p class="card-text">{ingredients}</p> */}
        </div>
      </div>
    </div>
  );
};

export default DrinkCard;

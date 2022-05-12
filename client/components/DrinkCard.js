import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const DrinkCard = (props) => {
  let { name, thumbnail, ingredients, instructions, glassware, _id } =
    props.drink;
  // console.log('glassware from DrinkCard', glassware);
  if (name === 'Orgasm')
    thumbnail =
      'https://www.thecocktaildb.com/images/media/drink/vr6kle1504886114.jpg';
  return (
    <div className="col-4 mb-5">
      <div class="card mx-auto" style={{ width: '18rem' }}>
        <Link to={`/${_id}`} id={_id}>
          <img src={thumbnail} class="card-img-top" alt={name} />
        </Link>

        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">{glassware}</p>
          {/* <p class="card-text">{ingredients}</p> */}
        </div>
      </div>
    </div>
  );
};

export default DrinkCard;

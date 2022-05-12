import React, { Fragment } from 'react';
import FridgeForm from './FridgeForm';
import Ingredients from './Ingredients';

const Fridge = (props) => {
  return (
    <Fragment>
      <FridgeForm
        handleChange={props.handleChange}
        fridgeForm={props.fridgeForm}
        handleSubmit={props.handleSubmit}
      />
      <Ingredients
        className="mt-5"
        ingredients={props.ingredients}
        handleDelete={props.handleDelete}
      />
    </Fragment>
  );
};

export default Fridge;

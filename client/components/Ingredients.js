import React, { Fragment } from 'react';
import { Button } from 'react-bootstrap';

const Ingredients = (props) => {
  const { ingredients } = props;
  return (
    <table class="table table-light">
      <thead>
        <tr>
          <th scope="col">Item</th>
          <th scope="col">Quantity</th>
          <th scope="col">Measurement</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {ingredients.map((ingredient) => {
          return (
            <tr>
              <th scope="row">{ingredient.ingredientName}</th>
              <td>{ingredient.quantity}</td>
              <td>{ingredient.unit}</td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => props.handleDelete(ingredient._id)}
                >
                  Delete Item
                </Button>{' '}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Ingredients;

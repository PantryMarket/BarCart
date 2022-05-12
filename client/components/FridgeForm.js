import React, { Fragment } from 'react';

const FridgeForm = (props) => {
  const { ingredientName, quantity, unit } = props.fridgeForm;
  return (
    <form className="mb-5" onSubmit={props.handleSubmit}>
      <div class="row">
        <div class="col">
          <input
            type="text"
            className="form-control"
            placeholder="Insert Item"
            onChange={props.handleChange}
            name="ingredientName"
            value={ingredientName}
          />
        </div>
        <div class="col">
          <input
            type="number"
            className="form-control"
            placeholder="Quantity"
            onChange={props.handleChange}
            name="quantity"
            value={quantity}
          />
        </div>
        <div class="col">
          <input
            type="text"
            className="form-control"
            placeholder="Measurement"
            onChange={props.handleChange}
            name="unit"
            value={unit}
          />
        </div>
        <div class="col">
          <button type="submit" class="btn btn-success">
            ADD
          </button>
        </div>
      </div>
    </form>
  );
};

export default FridgeForm;

{
  /* <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div> */
}

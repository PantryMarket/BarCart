import React, { Fragment } from 'react';
import DrinkCard from './DrinkCard';

//functional components
const Home = (props) => {
  const { allDrink } = props;

  return (
    <div className="row">
      {allDrink.map((drink) => {
        return <DrinkCard drink={drink} />;
      })}
      ;{/* <h1>Testing for Home</h1> */}
    </div>
  );
};

export default Home;

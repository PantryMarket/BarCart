import React, { useEffect, useState } from 'react';
import DrinkCard from './DrinkCard';

const Filter = () => {
  const [possible, setPossible] = useState([]); // data type: array of objects
  const [finishedRendering, setFinishedRendering] = useState(false);

  useEffect(() => {
    fetch('/api/possible')
      .then((data) => data.json())
      .then((data) => {
        setPossible(data);
        setFinishedRendering(true);
      });
    //when the argument is blank this is what will be ran the first time
  }, []);

  return (
    finishedRendering && (
      <div className="row justify-content-center">
        <h1 className="text-center mb-5 text-white">Drinks You Can Make</h1>
        {possible.map((drink) => {
          return <DrinkCard drink={drink} />;
        })}
      </div>
    )
  );
};
export default Filter;

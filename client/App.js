import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Ingredients from './components/Ingredients';

const App = () => {
  //this.state={}
  //componenDidMount to get data at first render from the backend
  //line 11 hook
  //allDrink is default to empty array, setAllDrink is a func to modify allDrink. naming convention: state, setState
  const [allDrink, setAllDrink] = useState([]);

  //class component equivalent
  //this.state = {
  //   allDrink: [],
  // }

  // useEffect is a hook (functional component ) = componentDidMount(class component).
  //if it starts with use its a hook that can be used with functional components
  useEffect(() => {
    //getDrinks is a function we declared to connect to the backend
    getDrinks();
  }, []);

  const getDrinks = () => {
    //fetching allDrinks from server which is in middleware apiController.getDrinks
    fetch('/api')
      // res = res.locals.allDrinks. and then we have to parse it to a json object so that FE can read the data from BE since its coming in as a string
      .then((res) => res.json())
      //class component --> this.setState({allDrinks: data})
      .then((data) => setAllDrink(data));
  };

  return (
    <BrowserRouter>
      <Fragment>
        <Navbar />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={allDrink.length > 0 && <Home allDrink={allDrink} />}
            ></Route>
            <Route path="/fridge" element={<Ingredients />} />
          </Routes>
        </div>
      </Fragment>
    </BrowserRouter>
  );
};

export default App;

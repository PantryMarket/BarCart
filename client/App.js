import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Fridge from './components/Fridge';
import RecipeCard from './components/RecipeCard';

const App = () => {
  //this.state={}
  //componenDidMount to get data at first render from the backend
  //line 11 hook
  //allDrink is default to empty array, setAllDrink is a func to modify allDrink. naming convention: state, setState
  const [allDrink, setAllDrink] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [fridgeForm, setFridgeForm] = useState({
    ingredientName: '',
    quantity: 0,
    unit: '',
  });

  //class component equivalent
  //this.state = {
  //   allDrink: [],
  // }

  // useEffect is a hook (functional component ) = componentDidMount(class component).
  //if it starts with use its a hook that can be used with functional components
  useEffect(() => {
    //getDrinks is a function we declared to connect to the backend
    getDrinks();
    getIngredients();
  }, []);

  const getDrinks = () => {
    //fetching allDrinks from server which is in middleware apiController.getDrinks
    fetch('/api')
      // res = res.locals.allDrinks. and then we have to parse it to a json object so that FE can read the data from BE since its coming in as a string
      .then((res) => res.json())
      //class component --> this.setState({allDrinks: data})
      .then((data) => setAllDrink(data));
  };

  const getIngredients = () => {
    fetch('/api/fridge')
      .then((res) => res.json())
      .then((data) => setIngredients(data));
  };

  const handleChange = (e) => {
    setFridgeForm((prevForm) => {
      return {
        ...prevForm,
        [e.target.name]:
          e.target.type === 'number'
            ? parseFloat(e.target.value)
            : e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(fridgeForm);
    fetch('/api/fridge', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      //stringify and send the state
      body: JSON.stringify(fridgeForm),
    })
      .then(() => {
        let hasDup = false;
        const arr = ingredients.reduce((acc, curr) => {
          if (curr.ingredientName === fridgeForm.ingredientName.trim()) {
            curr.quantity += fridgeForm.quantity;
            hasDup = true;
          }
          acc.push(curr);
          return acc;
        }, []);

        setIngredients((prevIngredients) => {
          return hasDup ? arr : [...prevIngredients, fridgeForm];
        });
      })
      .then(() =>
        setFridgeForm({
          ingredientName: '',
          quantity: 0,
          unit: '',
        })
      );
  };
  const handleDelete = (id) => {
    fetch('/api/fridge', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ _id: id }),
    }).then(() => {
      setIngredients((prevIngredients) => {
        return prevIngredients.filter((ingredient) => ingredient._id !== id);
      });
    });
  };

  // <BrowserRouter>
  //   <Switch>
  //     <Route path="/" exact component={component1} />
  //     <Route path="/somewhere/:something" component={component2} />
  //   </Switch>
  // </BrowserRouter>;

  // onClick = { handleCardClick };

  // let navigate = useNavigate();
  // const handleCardClick = (id) => {
  //   navigate(`/${id}`);
  // };

  // const { id } = useParams();

  // const [clickedCard, setClickedCard] = useState([]);

  // onClick = { setClickedCard };

  return (
    <BrowserRouter>
      <Fragment>
        <Navbar />
        <div className="container mt-5">
          <Routes>
            <Route
              path="/"
              element={allDrink.length > 0 && <Home allDrink={allDrink} />}
            ></Route>
            {/* <Ingredients ingredients={ingredients} is how we drill down props */}
            <Route
              path="/fridge"
              element={
                <Fridge
                  ingredients={ingredients}
                  handleChange={handleChange}
                  fridgeForm={fridgeForm}
                  handleSubmit={handleSubmit}
                  handleDelete={handleDelete}
                />
              }
            ></Route>
            <Route
              path="/:id"
              element={
                ingredients.length > 0 &&
                allDrink.length > 0 && (
                  <RecipeCard allDrink={allDrink} fridge={ingredients} />
                )
              }
            ></Route>
          </Routes>
        </div>
      </Fragment>
    </BrowserRouter>
  );
};

export default App;

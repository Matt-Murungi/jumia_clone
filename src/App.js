import { useEffect } from "react";

import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import BlackFridayProduct from "./BlackFridayProductItem/BlackFridayProduct";
import Category from "./Category/Category";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Product from "./Product/Product";
import Cart from "./Cart/Cart";
import Login from "./Login/Login";
import { auth } from "./firebase";
import { useStateValue } from "./stateManagement/StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
  const unsubscribe =  auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () =>{
      // any cleanup operations in here
      unsubscribe();
    }
  }, []);

  console.log(user);
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/cart">
            <Cart />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/">
            <Home />
            <Category />
            <BlackFridayProduct />
            <Product />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

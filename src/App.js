import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import BlackFridayProduct from "./BlackFridayProductItem/BlackFridayProduct";
import Category from "./Category/Category";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Product from "./Product/Product";
import Cart from "./Cart/Cart";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/cart">
            <Cart />
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

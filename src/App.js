import './App.css';
import BlackFridayProduct from './BlackFridayProductItem/BlackFridayProduct';
import Category from './Category/Category';
import Header from './Header/Header';
import Home from './Home/Home';
import Product from './Product/Product';

function App() {
  return (
    <div className="App">
<Header/>
<Home />
<Category />
<BlackFridayProduct />
<Product/>
    </div>
  );
}

export default App;

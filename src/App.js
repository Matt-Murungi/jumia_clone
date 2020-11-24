import './App.css';
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
<Product/>
    </div>
  );
}

export default App;

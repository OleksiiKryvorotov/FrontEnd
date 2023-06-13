
import { useState } from 'react'
import { products_data } from './data/products_data';
import './App.css';
import ProductsContainer from './components/ProductsContainer';


function App() {

  const [products, setProducts] = useState(products_data)

  const delete_product = id => setProducts(products.filter(el => el.id !== id))

  return (
    <div>
      <ProductsContainer products={products} delete_product={delete_product} />
    </div>
  );
}

export default App;

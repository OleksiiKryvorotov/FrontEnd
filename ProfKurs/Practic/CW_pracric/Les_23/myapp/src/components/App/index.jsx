import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Categories from "../../pages/Categories";
import Products from "../../pages/Products";
import ProductsDescription from "../../pages/ProductsDescription";
import NotFound from "../../pages/NotFound";
import Nav from "../Nav";

function App() {
  return (
    <>
    <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products_description' element={<ProductsDescription />} />
        <Route path='*' element={<NotFound />} />        
      </Routes>    
    </>
  );
}

export default App;

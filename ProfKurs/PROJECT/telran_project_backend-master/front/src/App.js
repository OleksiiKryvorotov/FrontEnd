import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavMenu from './components/NavMenu';
import Footer from'./components/Footer'
import MainPage from './pages/MainPage';
import AllCategoriesPage from './pages/AllCategoriesPage'
import ProductsByCategoriesPage from './pages/ProductsByCategoriesPage'
import AllProductsPage from './pages/AllProductsPage'
import SingleProductPage from './pages/SingleProductPage';
import CartPage from './pages/CartPage'
import NotFoundPage from './pages/NotFoundPage'
import { getAllCategories } from './requests/categories_req';



function App() {

  getAllCategories()


  return (
    <div>
    <NavMenu />
    <Routes>
     <Route path='/' element={<MainPage />} />
        <Route path='/categories' element={<AllCategoriesPage />} />
        <Route path='/categories/:id' element={<ProductsByCategoriesPage />} />
        <Route path='/products' element={<AllProductsPage />} />
        <Route path='/products/:id' element={<SingleProductPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='*' element={<NotFoundPage />} />
    </Routes>
    <Footer />
    </div>
  );
}

export default App;

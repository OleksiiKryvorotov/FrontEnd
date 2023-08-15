import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import ProductsPage from './pages/ProductsPage';
import WordsPage from './pages/WordsPage';
import NavMenu from './components/NavMenu';

function App() {
  return (
    <div>
      <NavMenu />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/words' element={<WordsPage />} />
      </Routes>
    </div>
  );
}

export default App;

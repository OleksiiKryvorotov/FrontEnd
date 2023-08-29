import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import SinglePostPage from './pages/SinglePostPage';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllCategories } from './requests/posts_req';

function App() {

  const dispatch = useDispatch();

  useEffect(() => dispatch(getAllCategories), []);

  return (
    <div>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/post/:post_id' element={<SinglePostPage />} />
      </Routes>
    </div>
  );
}

export default App;

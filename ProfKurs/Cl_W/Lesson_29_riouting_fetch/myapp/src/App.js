import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import TasksPage from './pages/TasksPage';
import NavMenu from './components/NavMenu';
import { useState } from 'react';
import { weekDays_data } from './data/weekDays_data';
import { Context } from './context';
import ProductsPage from './pages/ProductsPage';
import SingleProductPage from './pages/SingleProductPage';

function App() {

  const [ weekDays, setWeekDays ] = useState(weekDays_data);

  const deleteTask = (day_id, task_id) =>{
    // 1. Найти день
    const target_day = weekDays.find(el => el.id === day_id);

    // 2. У найденного дня отфлильтровать массив tasks
    target_day.tasks = target_day.tasks.filter(el => el.id !== task_id);

    // 3. Вернуть обновленное состояние
    setWeekDays([...weekDays])
  } 

  const addTask = (new_task, day_value) => {
    // 1. Найти карточку, в которую добавить задачу
    const target_day = weekDays.find(el => el.title === day_value)

    //2. У найденной карточки обратиться к массиву tasks и добавить в него new_task
    target_day.tasks.push(new_task)

    //3. Вернуть обновленное состояние
    setWeekDays([...weekDays])
  }

  return (
    <div className='app'>
      <Context.Provider value={{ weekDays, deleteTask, addTask }}>
        <NavMenu />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/tasks' element={<TasksPage />} />
          <Route path='/products' element={<ProductsPage />} />
          <Route path='/products/:item_id' element={<SingleProductPage />} />
        </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;

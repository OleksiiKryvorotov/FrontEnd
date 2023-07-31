import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import TasksPage from './pages/TasksPage';
import NavMenu from './components/NavMenu';
import { useState } from 'react';
import { weekDays_data } from './data/weekDays_data';
import { Context } from './context';

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

  return (
    <div className='app'>
      <Context.Provider value={{ weekDays, deleteTask }}>
        <NavMenu />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/tasks' element={<TasksPage />} />
        </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;

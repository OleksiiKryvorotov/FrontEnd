import { useState } from 'react';
import './App.css';
import ModalWindow from './components/ModalWindow';

function App() {

  const [ modalActive, setModaleActive ] = useState(false)

  return (
  <div>

    <button
    onClick={() => setModaleActive(true)}
    >
      Open modal window
      </button>

    <ModalWindow modalActive={modalActive} setModalActive={setModaleActive} />  

  </div>
  );
}

export default App;

/*
1. Создать состояниe modalActive(+setModalActive). Присвоить изначальное значение false
2. Если в modalActive лежит true, то диву с классом modal добавлять еще и класс active
3. При клике на кнопку Open modal window значение меняется на true.
4. При клике на Х значение меняется на false
*/


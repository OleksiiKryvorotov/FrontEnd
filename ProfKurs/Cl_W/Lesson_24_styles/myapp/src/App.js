import { useState } from 'react'
import './App.css';
import CardsContainer from './components/CardsContainer';
import { words_data } from './data/words_data';
import TriggersContainer from './components/TriggersContainer';
import AddCardForm from './components/AddCardForm';
import { Context } from './conrext';

function App() {

  const [ cards, setCards ] = useState(words_data)

  const delete_card = id => setCards(cards.filter(el => el.id !== id))

  const change_to_rus = () => setCards(cards.map(el =>{
    el.lang = 'rus'
    return el
  }))

  const change_to_eng = () => setCards(cards.map(el =>{
    el.lang = 'eng'
    return el
  }))

    // Первый метод MAP:
  const change_lang = id => setCards(cards.map(el => {
    if (el.id === id) {
      el.lang = el.lang === 'eng' ? 'rus' : 'eng'      
    }
    return el
  }))

  // Другой метод FIND:
//   const change_lang2 = id => setCards(() => {
//     // 1. Найти карточку по айди
//     const target_card = cards.find(el => el.id === id);
//     // 2. У найденной карточки изменить свойство lang на противоположное
//     target_card.lang = target_card.lang === 'eng' ? 'rus' : 'eng'
//     // 3. Вернуть обновленное состояние
//     return [...cards]
//   }
// )
 

  const add_card = new_card => setCards([...cards, new_card])

  return (
    <div>
      <Context.Provider value={{ add_card,cards, delete_card, change_lang }}>      
      <AddCardForm />
      <CardsContainer />
      <TriggersContainer  /> 
      </Context.Provider>     
    </div>
  );
}

export default App;

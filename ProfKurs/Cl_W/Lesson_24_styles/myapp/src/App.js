import { useState } from 'react'
import './App.css';
import CardsContainer from './components/CardsContainer';
import { words_data } from './data/words_data';
import TriggersContainer from './components/TriggersContainer';

function App() {

  const [ cards, setCards ] = useState(words_data)

  const delete_card = id => setCards(cards.filter(el => el.id !== id))

  return (
    <div>
      <CardsContainer cards={cards} delete_card={delete_card} />
      <TriggersContainer />        
    </div>
  );
}

export default App;

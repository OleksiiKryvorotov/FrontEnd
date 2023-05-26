
import './App.css';
import ChatsHeader from './components/ChatsHeader/ChatsHeader';


function App() {
  return (
     <div className="App">
      <div className='Chats'>
        <ChatsHeader/>
        </div>
        <div className='ChatWindow'></div>  
    </div>
  )
}

export default App;

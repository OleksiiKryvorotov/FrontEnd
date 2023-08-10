import {useDispatch, useSelector } from "react-redux";
import { depositAction } from "../../store/reducer/accountReducer";
import { withdrawtAction } from '../../store/reducer/accountReducer'
import { clearAction } from '../../store/reducer/accountReducer'
import WordsList from "../WordsList";
import AddWord from "../AddWord";

function App() {
  const account = useSelector(state => state.account) 
  const dispatch = useDispatch()

  return (
    <div>
      <p>{account}</p>
      <button onClick={() => dispatch(depositAction(10))}>+</button>
      <button onClick={() => dispatch(withdrawtAction(10))}>-</button>
      <button onClick={() => dispatch(clearAction())}>0</button> 
    <AddWord />    
    <WordsList />       
    </div>
  );
}

export default App;

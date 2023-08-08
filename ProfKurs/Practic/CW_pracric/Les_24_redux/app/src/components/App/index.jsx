import {useDispatch, useSelector } from "react-redux";
import { depositAction } from "../../store/reducer/accountReducer";
import { withdrawtAction } from '../../store/reducer/accountReducer'
import { clearAction } from '../../store/reducer/accountReducer'




function App() {

  const account = useSelector(state => state) //пока бесполезная ф-ция, когда один state
  const dispatch = useDispatch()

  return (
    <div>
      <p>{account}</p>
      <button onClick={() => dispatch(depositAction(10))}>+</button>
      <button onClick={() => dispatch(withdrawtAction(10))}>-</button>
      <button onClick={() => dispatch(clearAction())}>0</button>      
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { useSelector } from "react-redux" // hook to access the data in the store
import { useDispatch } from "react-redux" // this is where the dispatch from the action creators comes from
import { bindActionCreators } from 'redux' // this binds the action creators with dispatch
import { actionCreators } from "./state/index"


function App() {

  const state = useSelector((state) => state.bank) // takes the state and returns it (or specify which reducer to return) 

  const dispatch = useDispatch();
  // final two steps to bind dispatch with the action creators
  const { depositMoney, withdrawMoney } = bindActionCreators(actionCreators, dispatch);

  console.log(state)

  return (
    <div className="App">
      <h1>{state}</h1>
      <button onClick={() => depositMoney(1000)}>Deposit</button>
      <button onClick={() => withdrawMoney(1000)}>Withdraw</button>
    </div>
  );
}

export default App;

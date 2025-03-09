import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset, incrementByAmount } from './features/counter/counterSlice';
import { useState } from 'react';

function App() {

const [amount, setAmount] = useState(0)

 const count = useSelector((state) => state.counter.value)
 //fetching state from the slice
 const dispatch = useDispatch();

  function handleIncrementClick(){
    dispatch(increment())
  }
  function handleDecrenmentClick(){
    dispatch(decrement())
  }
  function ResetClick(){
   dispatch(reset());
  }


  function handleAmcByAmount(){
    dispatch(incrementByAmount(amount))
  }
  return (
    <div className='container'>
      <button onClick={handleIncrementClick}> + </button>
      <p>Count: {count} </p>
      <button onClick={handleDecrenmentClick}> - </button>
      <br />
      <br />
      <button onClick={ResetClick}> Rset </button>
<input 

type="number"
value={amount} 
placeholder='enter amount'
onChange={(e) => setAmount(e.target.value)}
/>

<br />
      <br />
      <button onClick={handleAmcByAmount}> IncrementByAmount </button>
    </div>
  )
}

export default App

import { useState,React} from 'react'

function State() {

  const [count, setCount] = useState(0);
  const [changeCount, setChangeCount] = useState('Invalid Value');


  //.. Increment counter
  function updateCounter() {
   setCount((nextVal) => {
        return nextVal = nextVal + 1;
   })
  };

  function decCounter() {
    setCount((preVal) => {
        return preVal = preVal - 1;
    })
  };


 


  
  return (
   
    <div className='counter'>
        <button id='btn-counter' onClick={updateCounter}>+</button>
        <h2 className='output'>{count < 0? changeCount : count}</h2>
        <button id="btn-counter" onClick={decCounter}>-</button>
    </div>
  )
}

export default State
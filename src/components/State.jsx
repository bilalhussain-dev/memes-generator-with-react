import { useState,React} from 'react'

function State() {

  const [count, setCount] = useState(0);


  //.. Increment counter
  function updateCounter() {
    setCount(count + 1);
  };

  function decCounter() {
    setCount(count - 1);
  };
  return (
   
    <div className='counter'>
        <button id='btn-counter' onClick={updateCounter}>+</button>
        <h2 className='output'>{count}</h2>
        <button id="btn-counter" onClick={decCounter}>-</button>
    </div>
  )
}

export default State
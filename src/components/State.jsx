import { useState,React} from 'react'

function State() {

  const [count, setCount] = useState(0);
  const [changeCount, setChangeCount] = useState('Invalid Value');
  const [ menuOpen, setMenuOpen ] =  useState(false
    );


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


  //.. Open Hamburger Menu Example
  function openHamburgerMenu() {
    setMenuOpen((opened) => !opened)
  };


 


  
  return (
   
   <>
      <div className='counter'>
        <button id='btn-counter' onClick={updateCounter}>+</button>
        <h2 className='output'>{count < 0? changeCount : count}</h2>
        <button id="btn-counter" onClick={decCounter}>-</button>
     </div>

     <div className="state-test">
        <button id='btn-test-state' onClick={openHamburgerMenu}>{menuOpen? "Opened" : "Closed"}</button>
     </div>

   </>
   
  )
}

export default State
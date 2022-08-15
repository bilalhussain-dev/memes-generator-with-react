import React from 'react'

function Meme() {
  return (
    <div className='main-app'>
        <form action="#" className="app-form">
            <input 
                type="text" 
                className="input-form input-form-1" 
                placeholder='First Text'/>
            <input 
                type="text" 
                className="input-form input-form-2" 
                placeholder='Last Text'/>
            <button className="btn btn-app-button">Generate A Meme</button>
        </form>
    </div>
  )
}

export default Meme
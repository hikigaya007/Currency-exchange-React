import React from 'react'
import './App.css';
const App = () => {
  return (
    <div className='container'>
        <div className='inner-container' >
            <div className="textbox1-container">
                <p>From</p>
                <input type="text" className="textbox1" />
            </div>
            <div className="textbox2-container">
                <p>To</p>
                <input type="text" className="textbox2" />
            </div>
        </div>
    </div>
  )
}

export default App
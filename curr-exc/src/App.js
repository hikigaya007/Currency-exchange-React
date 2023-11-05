import React from 'react'
import './App.css';
// https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/inr.json
const App = () => {
  
  return (
    <div className='container'>
        <div className='inner-container' >
            <div className="textbox1-container">
                <div className="textbox1-container1">
                  <p style={{marginLeft:'10px'}}>From</p>
                  <input type="text" className="textbox1" />
                </div>
                <div className="textbox1-container2">
                  Currency Type:
                  <select>
                    <option value="2">hello</option>
                    <option value="2"></option>
                    <option value="2"></option>
                  </select>
                </div>
            </div>
            <div className="textbox1-container">
                <div className="textbox1-container1">
                  <p style={{marginLeft:'10px'}}>To</p>
                  <input type="text" className="textbox1" />
                </div>
                <div className="textbox1-container2">
                  Currency Type:
                  <select>
                    <option value="USD">USD</option>
                    <option value="2"></option>
                    <option value="2"></option>
                  </select>
                </div>
            </div>
            <input type="button" value={"CONVERT"} className='convert-button' />
        </div>
    </div>
  )
}

export default App
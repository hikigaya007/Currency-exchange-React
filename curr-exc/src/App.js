import React, { useEffect, useState, useId} from 'react';
import './App.css'
const App = () => {
  const [data, setData] = useState({});
  const [amount, setAmount] = useState();
  const [selectedCurrency, setSelectedCurrency] = useState('usd');
  const [convertCurrency, setConvertCurrency] = useState('inr');
  const [convertedAmount , setConvertedAmount] = useState();
  async function useCurrencyInfo(currency) {
    useEffect(() => {
      async function fetchData() {
        try {
          const response = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`);
          const responseData = await response.json();
          setData(responseData[currency]);
        } catch (error) {
          console.error(error);
        }
      }
  
      fetchData();
    }, [currency]);
  }
  

  const convert = () => {
    const exchangeRate = data[convertCurrency] ;
    console.log(data[convertCurrency]);
    setConvertedAmount(amount * exchangeRate);
  }

  useCurrencyInfo(selectedCurrency);

  const currencyOptions = Object.keys(data);

  const amountInputId = useId();

  const onAmountChange = (newAmount) => {
    setAmount(newAmount);
  };

  const onCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  const onOutputCurrency = (e)=> {
    setConvertCurrency(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className='container'>
      <p className='title'>Currency Exchange</p>
        <div className='inner-container' >
            <div className="textbox1-container">
                <div className="textbox1-container1">
                  <p style={{marginLeft:'10px'}}>From</p>
                  <input 
                  id={amountInputId}
                  type="text" 
                  className="textbox1" 
                  placeholder='Amount' 
                  value={amount}
                  onChange={(e) => onAmountChange && onAmountChange((e.target.value))}/>
                </div>
                <div className="textbox1-container2">
                  Currency Type:
                  <select  style={{marginTop:'-20px'}} onChange={(e) => onCurrencyChange(e)}>
                    {currencyOptions.map((currency) => (
                      <option key={currency} value={currency}>{currency.toUpperCase()}
                      </option>
                    ))}
                    
                  </select>
                </div>
            </div>
            <div className="textbox1-container">
                <div className="textbox1-container1">
                  <p style={{marginLeft:'10px'}}>To</p>
                  <input 
                  type="text" 
                  className="textbox2" 
                  readOnly={true}
                  value={convertedAmount}/>
                </div>
                <div className="textbox1-container2">
                  Currency Type:
                  <select style={{marginTop:'-20px'}} onChange={(e) => onOutputCurrency(e)} >
                    {currencyOptions.map((currency) => (
                      <option key={currency} value={currency}>{currency.toUpperCase()}</option>
                    ))}
                  </select>
                </div>
            </div>
            <input 
            type="button" 
            value={"CONVERT"} 
            className='convert-button' 
            onClick={convert}
            />
        </div>
    </div>
  )
}

export default App
import { useState } from 'react';
import InputBox from './Components/InputBox';
import useCurrencyInfo from './hooks/useCurrencyInfo';

import './App.css'

function App() {
    const [amount , setAmount]=useState(0);
    const [from ,setFrom]=useState("usd");
    const [to ,setTo]=useState("inr");
    const [convertedAmount ,setConvertedAmount]=useState(0);
    const currencyInfo=useCurrencyInfo(from);
    const options=Object.keys(currencyInfo);
    const swap=()=>{
      setAmount(convertedAmount);
      setConvertedAmount(amount);
      setFrom(to);
      setTo(from);
    }
    const convert=()=>setConvertedAmount( amount * currencyInfo[to]);

  return (
      <div
          className=" w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat "
          style={{
              background: `url('${"https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_1280.jpg"}') no-repeat center center/cover`,
          }}
      >
          <div className="w-full">
              <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-[#295029]">
                  <form
                      onSubmit={(e) => {
                          e.preventDefault();
                          convert();
                         
                      }}
                  >
                      <div className="w-full mb-1">
                          <InputBox
                              label="From"
                              disabled={false}
                              currencyOptions={options}
                              amount={amount}
                              onCurrencyChange={(currency)=>{setFrom(currency)}}
                              selectCurrency={from}
                              onAmountChange={(amount)=>{
                                if(amount<0)
                                return;
                               else
                               setAmount(amount)}}
                              
                          />
                      </div>
                      <div className="relative w-full h-0.5">
                          <button
                              type="button"
                              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-[#242414] text-white px-2 py-0.5"
                              onClick={swap}
                          >
                              swap
                          </button>
                      </div>
                      <div className="w-full mt-1 mb-4">
                          <InputBox
                              label="To"
                              amount={convertedAmount}
                              onCurrencyChange={(currency)=>{setTo(currency)}}
                              disabled={true}
                              currencyOptions={options}
                              selectCurrency={to}
                          /> 
                      </div>
                      <button type="submit" className="w-full bg-[#242414] text-white px-4 py-3 rounded-lg">
                          Convert 
                      </button>
                  </form>
              </div>
          </div>
      </div>
  );

}

export default App

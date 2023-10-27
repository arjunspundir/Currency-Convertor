import React from 'react'


function InputBox({
    label,
    amount ,
    onAmountChange ,
    onCurrencyChange ,
    currencyOptions=[],
    selectCurrency ="usd",
    disabled , 
    className = "",
}) {
    return (
        <div className={`bg-[#b9b9b9]  p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label  className="text-black/40 mb-2 inline-block color-white">
                    {label}
                </label>
                <input
                    
                    className="outline-none w-full bg-transparent py-1.5 color-white"
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange ={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
                    disabled={disabled}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full color-white">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none bg-[green] text-white"
                    value={selectCurrency}
                    onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
                >
                    {currencyOptions.map((value)=>(
                         <option key ={value} 
                         value={value}>
                         {value}
                         
                     </option>
                    ))}
                       
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;

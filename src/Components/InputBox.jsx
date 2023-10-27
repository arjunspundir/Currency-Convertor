import React from 'react';

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  disabled
}) {
  return (
    <div className={`bg-gray-200 p-3 rounded-lg text-sm flex `}>
      <div className="w-1/2">
        <label className="text-gray-800 mb-2 inline-block text-black-900">
          {label}
        </label>
        <input
          className="outline-none w-full bg-transparent py-2 text-gray-900 placeholder-gray-500 focus:ring focus:ring-green-400 focus:ring-opacity-50 rounded-lg"
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
          disabled={disabled}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-gray-800 mb-2 w-full text-black-900">Currency Type</p>
        <select
          className="rounded-lg px-2 py-2 bg-green-800 hover:bg-green-600 cursor-pointer outline-none text-white"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;

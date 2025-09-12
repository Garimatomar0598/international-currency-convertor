
function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
}) {
  return (
    <div className="bg-white p-4 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow">
      {/* Amount */}
      <div className="w-full sm:w-1/2">
        <label className="block text-gray-700 font-medium mb-1">{label}</label>
        <input
          type="number"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>

      {/* Currency Dropdown */}
      <div className="w-full sm:w-1/2">
        <label className="block text-gray-700 font-medium mb-1">
          Currency
        </label>
        <select
          className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;

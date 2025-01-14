import { useState } from "react";

function LoanCalc() {
  const [loanAmount, setLoanAmount] = useState(15000);
  const [repayAmount, setRepayAmount] = useState(15000);

  const handleLoanChange = (e) => {
    const value = Number(e.target.value);
    setLoanAmount(value);
    setRepayAmount(value);
  };

  return (
    <div className="relative flex items-center justify-center py-10">
      <div className="bg-white w-[268px] h-[135px] rounded-[35px] shadow-lg absolute right-[37.40%] top-1 flex flex-col justify-center p-4 gap-1 border border-gray-300">
        <div>
          <span className="text-sm text-gray-500">Сумма займа</span>
          <div className="flex items-center justify-between border-t">
            <span className="text-lg font-semibold text-[#4E4E66]">
              Берёте:
            </span>
            <span className="text-lg font-semibold text-[#4E4E66]">
              {loanAmount.toLocaleString()} ₽
            </span>
          </div>
          <div className="">
            <input
              type="range"
              min="1000"
              max="50000"
              step="1000"
              value={loanAmount}
              onChange={handleLoanChange}
              className="w-full h-[1px] bg-gray-300 rounded-full appearance-none accent-green-500"
            />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between border-t">
            <span className="text-lg font-semibold text-[#4E4E66]">
              Отдаёте:
            </span>
            <span className="text-lg font-semibold text-[#4E4E66]">
              {repayAmount.toLocaleString()} ₽
            </span>
          </div>
          <div className="">
            <input
              type="range"
              min="1000"
              max="50000"
              step="1000"
              value={repayAmount}
              onChange={(e) => setRepayAmount(Number(e.target.value))}
              className="w-full h-[1px] bg-gray-300 rounded-full appearance-none accent-green-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoanCalc;

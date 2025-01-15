import { financeCard } from "../data/financeCard";

function FinanceCardContent() {
  return (
    <>
      {financeCard.map((card) => (
        <div
          className="px-[12px] py-[16px] leading-[157%] w-[280px] font-Montserrat text-[#2f2f2f] rounded-[16px] bg-[#f8fafd] border border-[#6a6e7e] flex flex-col gap-3 transition-all duration-300 hover:bg-[#e6f0ff] hover:border-[#4a90e2] hover:shadow-lg cursor-pointer"
          key={card}
        >
          <p className="font-[600]">{card.licenseName}</p>
          <p>{card.licenseNumber}</p>
          <p>{card.licenseAddress}</p>
          <p>{card.licenseInn}</p>
          <p>{card.licenseContact}</p>
        </div>
      ))}
    </>
  );
}

export default FinanceCardContent;

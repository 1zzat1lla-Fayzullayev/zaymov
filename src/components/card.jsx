import { cardData } from "../data/cardData";

function Card() {
  let startIndex = 0;
  let endIndex = 12;

  if (window.location.pathname === "/more-cards") {
    startIndex = 12;
    endIndex = 24;
  } else if (window.location.pathname === "/other-mfo") {
    startIndex = 24;
    endIndex = 36;
  }

  return (
    <>
      {cardData.slice(startIndex, endIndex).map((card) => (
        <a
          className="offer offer_usp_inside block w-[288px] transition-transform transform hover:scale-105 hover:shadow-lg duration-300"
          target="_blank"
          rel="noopener noreferrer"
          href={card.cardLink}
          key={card.cardName} 
        >
          <div className="border border-[#6a6e7e] flex flex-col justify-between rounded-[16px] overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
            <span className="inline-block ml-[16px] mr-[16px] px-[6px] py-[3px] break-words text-center leading-[16px] font-[600] bg-[#6a6e7e] text-white rounded-b-[16px]">
              Первый займ бесплатно
            </span>

            <div className="offer__row">
              <div className="px-[16px] pt-[16px]">
                <div className="flex items-center gap-[10px]">
                  <div className="flex items-center justify-center flex-shrink-0 w-[64px] h-[64px] overflow-hidden rounded-[12px] bg-white border border-gray-200">
                    <img
                      src={card.cardImage}
                      className="object-contain w-full h-full"
                      alt={card.cardName}
                    />
                  </div>
                  <p className="text-[#2f2f2f] font-semibold truncate text-[16px]">
                    {card.cardName}
                  </p>
                </div>

                <div className="flex flex-col mt-[12px] space-y-[8px]">
                  <span className="flex justify-between items-center text-[14px] font-medium text-[#6a6e7e] border-b border-dashed border-[#6a6e7e] pb-1">
                    Сумма
                    <span className="text-[#2f2f2f] text-[16px] font-bold">
                      {card.cardPrice}
                    </span>
                  </span>

                  <span className="flex justify-between items-center text-[14px] font-medium text-[#6a6e7e] border-b border-dashed border-[#6a6e7e] pb-1">
                    Срок
                    <span className="text-[#2f2f2f] text-[16px] font-bold">
                      {card.cardDedline}
                    </span>
                  </span>

                  <span className="flex justify-between items-center text-[14px] font-medium text-[#6a6e7e] border-b border-dashed border-[#6a6e7e] pb-1">
                    Возраст
                    <span className="text-[#2f2f2f] text-[16px] font-bold">
                      {card.cardYear}
                    </span>
                  </span>
                </div>
              </div>

              <span className="mt-[16px] my-[12px] mx-[16px] flex items-center justify-center px-[10px] py-[12px] font-semibold text-[16px] leading-[22px] rounded-[10px] tracking-wide border border-[#fca33b] bg-[#fca33b] text-white cursor-pointer hover:bg-[#ffb64c] hover:shadow-md transition-colors duration-300">
                Получить займ
              </span>
            </div>
          </div>
        </a>
      ))}
    </>
  );
}

export default Card;

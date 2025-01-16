/* eslint-disable react/prop-types */
function Thanks({ closeModal }) {
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-[#EBEBEB] font-Inter w-full max-w-[600px] p-8 rounded-lg text-center shadow-xl transform transition-all duration-300 ease-in-out scale-95 hover:scale-100 h-[500px] relative z-[1000]">
          <img
            src="/close.svg"
            className="w-[50px] absolute right-0 top-0 cursor-pointer"
            onClick={closeModal}
          />
          <div className="flex flex-col items-center justify-center">
            <img src="/Check-mark.png" className="max-w-[120px] mb-6" />
            <h2 className="text-[32px] font-semibold text-[#333] ">
              Спасибо за заявку!
            </h2>
            <p className="font-semibold text-[#555] ">
              Наш менеджер свяжется с вами в течение 15 минут для уточнения
              деталей
            </p>
            <p className="mt-5 text-[#777] ">
              Подписывайтесь на наши соц сети, чтобы быть в курсе важных
              новостей
            </p>
          </div>

          <div className="">
            <a href="https://t.me/leadssuYado_bot" target="_blank">
              <button className="relative bg-[#2DA5E1] text-white rounded-xl w-full max-w-[380px] py-3 flex justify-center items-center font-semibold text-lg mx-auto transition-all duration-300 ease-in-out hover:bg-[#1d90c3] mt-2">
                <span className="text-[20px] sm:text-[24px] md:text-[28px]">
                  Больше займов в Telegram
                </span>
              </button>
            </a>

            <div className="flex items-center justify-center mt-2">
              <a href="#" download className="relative flex items-center">
                <button className="bg-[#22CA00] text-white rounded-xl w-full max-w-[380px] flex justify-center items-center font-semibold text-lg mx-auto transition-all duration-300 ease-in-out hover:bg-[#1e9c00]">
                  <span className="text-[20px] md:py-3 sm:text-[24px] md:text-[28px]">
                    Скачать PDF инструкцию
                  </span>
                </button>
                <img src="/pdf.png" className="w-[50px] md:w-[70px] ml-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Thanks;

import { useEffect, useState } from "react";
import Wrapper from "../layout/wrapper";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => setOpenMenu(!openMenu);

  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openMenu]);

  return (
    <>
      <Wrapper>
        <div className="flex items-center justify-between py-3 border-b border-b-black mx-[20px] xl:mx-0 relative z-[999]">
          <div className="flex items-center gap-3 cursor-pointer">
            <img src="/wallet.png" className="max-w-[30px] md:max-w-[50px]" />
            <span className="lg:text-[20px] xl:text-[25px] font-[600]">
              Рейтинг займов
            </span>
          </div>

          <div className="items-center gap-3 hidden md:flex">
            <img src="/star.png" className="max-w-[30px]" />
            <span className="cursor-pointer">Лучшие МФО</span>
          </div>
          <div className="items-center gap-3 hidden md:flex">
            <img src="/gift.png" className="max-w-[30px]" />
            <span className="cursor-pointer">Малоизвестные МФО</span>
          </div>
          <div className="items-center gap-3 hidden md:flex">
            <img src="/queastion.png" className="max-w-[30px]" />
            <span className="text-[#828282] cursor-pointer">
              Ответы на вопросы
            </span>
          </div>

          <div
            className={`burger ${openMenu ? "open" : ""} block md:hidden`}
            onClick={toggleMenu}
          >
            <div className="w-[25px] h-[2px] rounded-full bg-[#000] transition-transform duration-300"></div>
            <div className="w-[25px] h-[2px] rounded-full bg-[#000] transition-opacity duration-300"></div>
            <div className="w-[25px] h-[2px] rounded-full bg-[#000] transition-transform duration-300"></div>
          </div>
        </div>
      </Wrapper>

      <div
        className={`menu duration-300 h-full xl:w-[calc(100%-170px)] lg:hidden max-w-xl xl:max-w-none xl:h-auto bg-white fixed inset-0 z-[99] pt-20 lg:pt-24 px-5 pb-6 flex flex-col justify-between dark:bg-[#fff] ${
          openMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex gap-3 flex-col items-center justify-center h-full">
          <a href="#" onClick={toggleMenu} className="text-[18px] font-[600]">
            Лучшие МФО
          </a>
          <a href="#" onClick={toggleMenu} className="text-[18px] font-[600]">
            Малоизвестные МФО
          </a>
          <a href="#" onClick={toggleMenu} className="text-[18px] font-[600]">
            Ответы на вопросы
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;

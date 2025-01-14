/* eslint-disable react/prop-types */
function BlueButton({ buttonName }) {
    return (
      <button className="relative w-full max-w-[455px] h-[70px] sm:h-[80px] md:h-[90px] rounded-[16px] sm:rounded-[18px] md:rounded-[22px] bg-[#2DA5E1] font-Inter text-white text-[20px] sm:text-[24px] md:text-[30px] text-center flex justify-center items-center px-4">
        <span>{buttonName}</span>
        <img
          src="/tg.png"
          alt="Telegram Icon"
          className="absolute right-2 sm:right-[-5%] md:right-[-10%] "
        />
      </button>
    );
  }
  
  export default BlueButton;
  
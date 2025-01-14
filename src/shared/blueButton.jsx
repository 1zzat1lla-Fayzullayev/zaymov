/* eslint-disable react/prop-types */
function BlueButton({ buttonName }) {
    return (
      <>
      <button className="text-[white] bg-[#2DA5E1] rounded-[22px] max-w-[455px] h-[90px] flex justify-center items-center font-Inter flex-col px-4 w-full relative">
        <span className="text-[20px] sm:text-[24px] md:text-[30px] max-w-[200px] md:max-w-[300px]">{buttonName}</span>
        <img
          src="/tg.png"
          alt="Telegram Icon"
          className="absolute md:right-[-10%] w-[60px] md:w-[80px] right-[-15%] "
        />
      </button>
      </>
    );
  }
  
  export default BlueButton;
  
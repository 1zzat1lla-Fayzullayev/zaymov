/* eslint-disable react/prop-types */
function GreenButton({ buttonName, secondName }) {
  return (
    <>
      <button className="text-[white] bg-[#22CA00] rounded-[22px] max-w-[455px] h-[90px] flex justify-center items-center font-Inter flex-col px-4">
        <span className="text-[20px] sm:text-[24px] md:text-[30px]">{buttonName}</span>
        <span className="text-[15px]">{secondName}</span>
      </button>
    </>
  );
}

export default GreenButton;

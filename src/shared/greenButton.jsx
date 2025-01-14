/* eslint-disable react/prop-types */
function GreenButton({ buttonName, secondName }) {
  return (
    <>
      <button className="text-[white] bg-[#22CA00] rounded-[22px] w-[355px] h-[90px] flex justify-center items-center font-Inter flex-col">
        <span className="text-[30px]">{buttonName}</span>
        <span className="text-[15px]">{secondName}</span>
      </button>
    </>
  );
}

export default GreenButton;

import { useNavigate } from "react-router-dom"; 
import { useEffect } from "react"; 
import Wrapper from "../layout/wrapper";
import BlueButton from "../shared/blueButton";
import GreenButton from "../shared/greenButton";
import Card from "./card";

function CardSection() {
  const navigate = useNavigate(); 

  const handleGreenButtonClick = (path) => {
    navigate(path);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [window.location.pathname]);

  return (
    <>
      <Wrapper>
        <div className="flex flex-col" id="mfo">
          <div className="flex items-center flex-col text-center mt-[100px]">
            <h2 className="text-[#2f2f2f] text-[32px] font-[500]">
              20 лучших МФО с первым займом 0%
            </h2>
            <p className="max-w-[650px] ml-auto mr-auto mt-[15px]">
              Сравните условия, сроки и порядок погашения займа на сайте МФО,
              затем отправьте заявку на получение займа. Заявки в несколько МФО
              повысят вероятность одобрения
            </p>
          </div>
          <div
            className="mt-[50px] flex flex-wrap items-start justify-center xl:justify-start gap-[15px]"
            data-aos-delay="200"
          >
            <Card />
          </div>
          <div
            className="flex flex-col items-center justify-center mt-[20px] gap-[20px] w-full"
            data-aos-delay="400"
          >
            <GreenButton
              buttonName={
                window.location.pathname === "/more-cards"
                  ? "Малоизвестные МФО"
                  : window.location.pathname === "/other-mfo"
                  ? "МФО с лучшим одобрением"
                  : "ПОКАЗАТЬ ЕЩЁ ЗАЙМЫ"
              }
              secondName={
                window.location.pathname !== "/other-mfo" &&
                "(меньший % одобряемости)"
              }
              onClick={() => handleGreenButtonClick("/other-mfo")} 
            />
            <a href="https://t.me/leadssuYado_bot" target="_blank">
              <BlueButton buttonName={"Больше займов в Telegram"} />
            </a>
          </div>

          {window.location.pathname === "/other-mfo" && (
            <div className="dive-secrete flex flex-col justify-center items-center gap-6 mt-8 mx-[20px] xl:mx-0">
              <p className="text-[#000] text-[25px] lg:text-[30px] font-extrabold font-Inter text-center">
                Хотите перейти в профессиональный сервис подбора МФО?{" "}
              </p>
              <a
                href="https://pxl.leads.su/click/ed2b35401f19332da48611c7e2aede68?erid=LjN8K2L9U"
                target="_blank"
              >
                <button className="text-[#fff] text-[31px] font-Inter font-normal bg-[#22CA00] rounded-[22px] leading-[normal] py-[2px] px-[18px]">
                  Открыть
                </button>
              </a>
            </div>
          )}
        </div>
      </Wrapper>
    </>
  );
}

export default CardSection;

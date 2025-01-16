import Wrapper from "../layout/wrapper";
import LoanCalc from "./loanCalc";
import "aos/dist/aos.css";

function Hero() {

  return (
    <div id="t" className="bg-[#f9fafe] px-[20px] xl:px-0">
      <Wrapper>
        <div className="flex items-center flex-col">
          <h2
            className="text-[24px] text-center lg:text-start lg:text-[35px] font-[500] text-[#2f2f2f] my-[50px]"
            data-aos="fade-up"
          >
            Поможем подобрать выгодный займ в МФО!
          </h2>
          <div className="flex items-center flex-col lg:flex-row">
            <div className="flex flex-col items-start gap-[40px]">
              <div className="flex items-center gap-4" data-aos="fade-up">
                <img src="/money.png" className="w-[60px]" />
                <div>
                  <p className="text-[20px] font-[600] uppercase text-[#2f2f2f]">
                    Займы бесплатно
                  </p>
                  <p className="text-[14px] max-w-[400px] mt-2 text-[#2f2f2f]">
                    Первый займ всем под 0%, без скрытых комиссий и платежей!
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4" data-aos="fade-up" data-aos-delay="200">
                <img src="/star_hero.png" className="w-[60px]" />
                <div>
                  <p className="text-[20px] font-[600] uppercase text-[#2f2f2f]">
                    Актуально и надёжно
                  </p>
                  <p className="text-[14px] max-w-[400px] mt-2 text-[#2f2f2f]">
                    Только проверенные предложения от надёжных МФО с лицензией
                    ЦБ!
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4" data-aos="fade-up" data-aos-delay="400">
                <img src="/like_hand.png" className="w-[60px]" />
                <div>
                  <p className="text-[20px] font-[600] uppercase text-[#2f2f2f]">
                    Удобное сравнение
                  </p>
                  <p className="text-[14px] max-w-[400px] mt-2 text-[#2f2f2f]">
                    Вся информация предоставлена максимально прозрачно, чтобы вы
                    могли сделать лучший выбор!
                  </p>
                </div>
              </div>
            </div>
            <div className="relative" data-aos="fade-up" data-aos-delay="600">
              <img
                src="/calculatorBg.svg"
                className="absolute right-[37%] hidden lg:block"
              />
              <div className="rounded-[35px] absolute right-[37.40%] top-0 hidden lg:block">
                <LoanCalc />
              </div>
              <img src="/hero_bg.png" className="mt-5 lg:mt-0 " />
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default Hero;

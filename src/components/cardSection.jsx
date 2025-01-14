import Wrapper from "../layout/wrapper";
import Card from "./card";

function CardSection() {
  return (
    <>
      <Wrapper>
        <div className="flex flex-col">
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
          <div className="mt-[50px] flex flex-wrap items-start justify-center xl:justify-start  gap-[15px]">
            <Card />
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default CardSection;

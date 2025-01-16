import Wrapper from "../layout/wrapper";

function FirstTexts() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <Wrapper>
        <div className="mt-[50px] mx-[20px] xl:mx-0">
          <div>
            <h2
              className="custom_text text-[25px] md:text-[35px]"
              data-text="Как максимально повысить шансы на получение займа:"
            >
              Как максимально повысить шансы на получение займа:
            </h2>
            <ul className="ml-[30px] md:ml-[50px] mt-5">
              <li className="list-disc italic font-Inter text-[18px] md:text-[20px] leading-[35px]">
                Подавать заявку в компании с максимальным одобрением, но если
                Вам отказали там - это не значит, что откажут другие МФО (у
                каждого свои методы скорринга)
              </li>
              <li className="list-disc italic font-Inter text-[18px] md:text-[20px] leading-[35px]">
                Внимательно проверять все вводимые данные, так как ошибка скорее
                всего приведет к отказу
              </li>
              <li className="list-disc italic font-Inter text-[18px] md:text-[20px] leading-[35px]">
                Если есть возможность авторизоваться на сайте МФО через
                Госуслуги - это повысит вероятность одобрения!
              </li>
              <li className="list-disc italic font-Inter text-[18px] md:text-[20px] leading-[35px]">
                Если нужна крупная сумма займа, то лучше разбить ее на несколько
                частей и подать заявки в разные МФО. Чем меньше запрашиваемая
                сумма, тем больше вероятность одобрения! При закрытие долга -
                можете подать заявку повторно, сумма займа будет увеличена!
              </li>
            </ul>
          </div>

          <div className="mt-5">
            <h2
              className="custom_text text-[25px] md:text-[35px]"
              data-text=" Почему одобрена меньшая сумма, чем была нужна?"
            >
              Почему одобрена меньшая сумма, чем была нужна?
            </h2>
            <ul className="ml-[30px] md:ml-[50px] mt-5">
              <li className="list-disc italic font-Inter text-[18px] md:text-[20px] leading-[35px]">
                Микрофинансовая кампания хочет, но не готова полностью доверить
                большие суммы для новых клиентов. Поэтому более крупные займы
                Вам выдадут при повторных обращениях. Погасив займ - в следующий
                раз сумма выдачи будет выше.
              </li>
              <li className="list-disc italic font-Inter text-[18px] md:text-[20px] leading-[35px]">
                Вы можете обратиться в несколько кампаний для увеличения суммы
                займа
              </li>
            </ul>
          </div>

          <div className="mt-5">
            <h2
              className="custom_text text-[25px] md:text-[35px]"
              data-text="Почему отказали в получении микрозайма, что делать?"
            >
              Почему отказали в получении микрозайма, что делать?
            </h2>
            <ul className="ml-[30px] md:ml-[50px] mt-5">
              <li className="list-disc italic font-Inter text-[18px] md:text-[20px] leading-[35px]">
                У каждой микрофинансовой организации свои условия выдачи,
                поэтому любая МФО может как одобрить, так и отказать в получении
                микрозайма. Попробуйте подать заявку в другую компанию!
              </li>
              <li className="list-disc italic font-Inter text-[18px] md:text-[20px] leading-[35px]">
                Вы могли ошибочно заполнить данные анкеты, будьте внимательны!
              </li>
              <li className="list-disc italic font-Inter text-[18px] md:text-[20px] leading-[35px]">
                Вы запросили слишком большую сумму для первого займа
              </li>
              <li className="list-disc italic font-Inter text-[18px] md:text-[20px] leading-[35px]">
                В некоторых МФО так же смотрят на кредитную историю, она может
                быть отрицательной или с высокой нагрузкой
              </li>
              <li className="list-disc italic font-Inter text-[18px] md:text-[20px] leading-[35px]">
                Рекомендуем обратиться в другие МФО, какая-то из списка 100%
                одобрит Вам необходимую сумму!
              </li>
            </ul>
          </div>

          <div
            className="flex justify-center items-center mt-[30px]"
            onClick={scrollTop}
          >
            <a href="#mfo">
              <button className="text-[white] bg-[#22CA00] rounded-[22px] max-w-[455px] h-[90px] flex justify-center items-center font-Inter flex-col px-4">
                <span className="text-[20px] sm:text-[24px] md:text-[30px]">
                  Вернуться к списку МФО
                </span>
                <span className="text-[15px]">(меньший % одобряемости)</span>
              </button>
            </a>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default FirstTexts;

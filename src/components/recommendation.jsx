import Wrapper from "../layout/wrapper";

function Recommendation() {
  return (
    <Wrapper>
      <div className="mt-[50px] mx-[20px] xl:mx-0">
        <div className="flex items-stretch gap-[10px]">
          <div className="bg-[#d2f0cf] w-[15px] rounded-[5px] hidden md:block"></div>

          <div className="flex-1">
            <h2 className="text-[25px] md:text-[30px] font-bold leading-tight">
              <span className="bg-[#78cc66] text-white px-2 py-1 rounded-md">
                Рекоменда
              </span>
              <span className="text-[#475366]">ция</span>
            </h2>
            <ul className="mt-5">
              <li className="list-disc md:list-none ml-[20px] md:ml-0">
                <p className="mt-[10px] text-[#475366]">
                  Если у вас хорошая кредитная история, то разумным решением
                  будет оформить кредитную карту банка, или кредитный лимит в
                  МФО. Для получения кредитной карты нужен достаточно высокий
                  кредитный рейтинг. Подобрать кредитку можно, например, с
                  помощью{" "}
                  <a
                    href="https://pxl.leads.su/click/1b966724cd811200f3858600fb36ed23?erid=2W5zFJNY9K6"
                    target="_blank"
                    className="text-[#0b8c00] underline font-[700]"
                  >
                    Мастера подбора карт
                  </a>{" "}
                  от финансового портала{" "}
                  <a
                    href="https://pxl.leads.su/click/1b966724cd811200f3858600fb36ed23?erid=2W5zFJNY9K6"
                    target="_blank"
                    className="text-[#475366] font-bold"
                  >
                    Банки.ру.
                  </a>
                </p>
              </li>
              <li className="list-disc md:list-none ml-[20px] md:ml-0">
                <p className="mt-[15px] text-[#475366]">
                  Кредитный лимит в МФО получить проще, чем кредитную карту.
                  Подключив его, вы можете в любое время переводить себе на
                  карту любую сумму в рамках лимита. Причем, платите вы только
                  тогда, когда пользуетесь деньгами, в остальное же время услуга
                  бесплатная. Одно из лучших предложений на рынке сейчас{" "}
                  <a
                    href="https://trkleads.ru/click/a377c873409e9e80a7f8a0a796d1b95e?erid=2W5zFHLk67A"
                    target="_blank"
                    className="text-[#0b8c00] underline font-[700]"
                  >
                    Кредитный лимит
                  </a>{" "}
                  от МФО{" "}
                  <span className="text-[#475366] font-bold">А Деньги</span>.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Recommendation;

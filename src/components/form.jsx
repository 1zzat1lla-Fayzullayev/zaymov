import { useState } from "react";
import Wrapper from "../layout/wrapper";
import toast from "react-hot-toast";

export function formatPhoneNumber(input) {
  const digitsOnly = input.replace(/\D/g, "");
  const formattedNumber = digitsOnly.startsWith("7")
    ? digitsOnly
    : "7" + digitsOnly.slice(0, 10);

  let result = "+" + formattedNumber.slice(0, 1);
  if (formattedNumber.length > 1) {
    result += " (" + formattedNumber.slice(1, 4);
    if (formattedNumber.length > 4) {
      result += ") " + formattedNumber.slice(4, 7);
      if (formattedNumber.length > 7) {
        result += "-" + formattedNumber.slice(7, 9);
        if (formattedNumber.length > 9) {
          result += "-" + formattedNumber.slice(9, 11);
        }
      }
    }
  }
  return result;
}

export const phoneValidate = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    amount: "",
    phone: "",
    snils: "",
    inn: "",
    agreement: false,
    photos: [],
    situation: "",
  });

  const [errors, setErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    let formattedValue = value;

    if (name === "phone") {
      formattedValue = formatPhoneNumber(value);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : formattedValue,
    }));
  };

  const handlePhotoUpload = (e) => {
    const index = parseInt(e.target.id.split("-")[2]) - 1;
    const file = e.target.files[0];

    if (file) {
      setFormData((prev) => {
        const updatedPhotos = [...prev.photos];
        updatedPhotos[index] = URL.createObjectURL(file);

        return {
          ...prev,
          photos: updatedPhotos,
        };
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const phoneRegex = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;

    if (!formData.name) newErrors.name = "Это поле обязательно.";
    if (!formData.amount || isNaN(formData.amount))
      newErrors.amount = "Введите корректную сумму.";
    if (!phoneRegex.test(formData.phone))
      newErrors.phone = "Введите телефон в формате +7 (XXX) XXX-XX-XX.";
    if (!/^\d{11}$/.test(formData.snils))
      newErrors.snils = "СНИЛС должен быть 11 цифр.";
    if (!/^\d{12}$/.test(formData.inn))
      newErrors.inn = "ИНН должен быть 12 цифр.";
    if (!formData.agreement)
      newErrors.agreement = "Необходимо принять соглашение.";
    if (!formData.situation.trim())
      newErrors.situation = "Опишите вашу ситуацию.";
    if (formData.photos.length < 3)
      newErrors.photos = "Загрузите минимум 3 фотографии.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsModalOpen(true);
    } else {
      toast.error("Пожалуйста, заполните все поля правильно.");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({
      name: "",
      amount: "",
      phone: "",
      snils: "",
      inn: "",
      agreement: false,
      photos: [],
      situation: "",
    });
  };

  return (
    <>
      <Wrapper>
        <div className="mt-[100px] mx-[20px] xl:mx-0">
          <div>
            <h2 className="font-Inter text-[25px] md:text-[30px] italic font-extrabold leading-[35px]">
              Нужна помощь в получении денежных средств? Заполните данные, и наш
              менеджер поможет Вам взять необходимую сумму!
            </h2>
            <h2 className="font-Inter text-[25px] md:text-[30px] italic font-extrabold leading-[35px] mt-[40px]">
              Или скачайте файл PDF формата с нашими рекомендациями и
              контактами! Мы обязательно Вам поможем!
            </h2>
            <div className="flex items-center gap-4 mt-[20px] text-[25px] md:text-[30px] font-Inter">
              <button className="bg-[#22CA00] rounded-[22px] w-[159px] h-[35px] flex justify-center items-center text-white">
                СКАЧАТЬ
              </button>
              <img
                src="/pdf.png"
                alt="PDF Icon"
                className="w-[35px] h-[35px]"
              />
            </div>
          </div>

          <form
            className="font-Inter italic text-[25px] mt-[40px]"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-[10px] mb-[20px]">
              <label className="text-[18px] lg:text-[20px]" htmlFor="name">Фамилия Имя Отчество</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="bg-[#D9D9D9] h-[63px] px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#22CA00] text-[20px]"
              />
              {errors.name && (
                <span className="text-red-500 text-sm">{errors.name}</span>
              )}
            </div>

            <div className="flex flex-col gap-[10px] mb-[20px]">
              <label className="text-[18px] lg:text-[20px]" htmlFor="amount">Необходимая сумма займа:</label>
              <input
                type="number"
                name="amount"
                id="amount"
                value={formData.amount}
                onChange={handleInputChange}
                required
                className="bg-[#D9D9D9] h-[63px] px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#22CA00] text-[20px]"
              />
              {errors.amount && (
                <span className="text-red-500 text-sm">{errors.amount}</span>
              )}
            </div>

            <div className="flex flex-col gap-[10px] mb-[20px]">
              <label className="text-[18px] lg:text-[20px]" htmlFor="phone">Введите телефон:</label>
              <input
                type="text"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+7 (___) ___-__-__"
                className="bg-[#D9D9D9] h-[63px] px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#22CA00] text-[20px]"
              />
              {errors.phone && (
                <span className="text-red-500 text-sm">{errors.phone}</span>
              )}
            </div>

            <div className="flex flex-col gap-[10px] mb-[20px]">
              <label className="text-[18px] lg:text-[20px]" htmlFor="snils">Ваш СНИЛС:</label>
              <input
                type="text"
                name="snils"
                id="snils"
                value={formData.snils}
                onChange={handleInputChange}
                required
                placeholder="XXXXXXXXXXX"
                className="bg-[#D9D9D9] h-[63px] px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#22CA00] text-[20px]"
              />
              {errors.snils && (
                <span className="text-red-500 text-sm">{errors.snils}</span>
              )}
            </div>

            <div className="flex flex-col gap-[10px] mb-[20px]">
              <label className="text-[18px] lg:text-[20px]" htmlFor="inn">Ваш ИНН:</label>
              <input
                type="text"
                name="inn"
                id="inn"
                value={formData.inn}
                onChange={handleInputChange}
                required
                placeholder="Введите ИНН"
                className="bg-[#D9D9D9] h-[63px] px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#22CA00] text-[20px]"
              />
              {errors.inn && (
                <span className="text-red-500 text-sm">{errors.inn}</span>
              )}
            </div>

            <div className="flex flex-col gap-[10px] mb-[20px]">
              <label className="text-[18px] lg:text-[20px]" htmlFor="situation">Опишите Вашу ситуацию:</label>
              <textarea
                name="situation"
                id="situation"
                value={formData.situation}
                onChange={handleInputChange}
                required
                placeholder="Например: срочно нужны деньги на...есть/нету просрочек..куда пробовали обращаться? "
                className="bg-[#D9D9D9] h-[100px] px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#22CA00] text-[16px] lg:text-[20px]"
              />
              {errors.situation && (
                <span className="text-red-500 text-sm">{errors.situation}</span>
              )}
            </div>
            <div className="flex items-center gap-[10px] mb-[20px]">
              <input
                type="checkbox"
                name="agreement"
                id="agreement"
                checked={formData.agreement}
                onChange={handleInputChange}
              />
              <label className="text-[18px] lg:text-[20px]" htmlFor="agreement">
                <span className="">Я принимаю условия</span>{" "}
                <span className="text-[orange]">
                  пользовательского соглашения
                </span>
              </label>
              {errors.agreement && (
                <span className="text-red-500 text-sm">{errors.agreement}</span>
              )}
            </div>

            <p className="text-[20px] lg:text-[25px]">Загрузите Фото:</p>
            <ul className="font-[200] text-[18px] lg:text-[20px]">
              <li>1) 2-3 страница паспорта</li>
              <li>2) Прописка</li>
              <li>3) СНИЛС</li>
            </ul>

            <div className="flex flex-col lg:flex-row items-center lg:gap-[150px] space-y-4">
              <div>
                <div className="relative mb-2">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    id="file-input-1"
                  />
                  <label
                    htmlFor="file-input-1"
                    className="bg-[#4CEC6E] w-[236px] h-[45px] flex items-center justify-center cursor-pointer transition-all relative"
                  >
                    {formData.photos[0] ? (
                      <>
                        <img
                          src={formData.photos[0]}
                          alt="Upload 1"
                          className="w-[50px] absolute h-[50px] right-[-60px] object-cover rounded-sm"
                        />
                        <span className="text-black font-Inter font-[200] text-[20px]">
                          Загружено
                        </span>
                      </>
                    ) : (
                      <span className="text-black font-Inter font-[200] text-[25px]">
                        Загрузить фото
                      </span>
                    )}
                  </label>
                </div>

                <div className="relative mb-2">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    id="file-input-2"
                  />
                  <label
                    htmlFor="file-input-2"
                    className="bg-[#4CEC6E] w-[236px] h-[45px] flex items-center justify-center cursor-pointer transition-all relative"
                  >
                    {formData.photos[1] ? (
                      <>
                        <img
                          src={formData.photos[1]}
                          alt="Upload 2"
                          className="w-[50px] absolute h-[50px] right-[-60px] object-cover rounded-sm"
                        />
                        <span className="text-black font-Inter font-[200] text-[20px]">
                          Загружено
                        </span>
                      </>
                    ) : (
                      <span className="text-black font-Inter font-[200] text-[25px]">
                        Загрузить фото
                      </span>
                    )}
                  </label>
                </div>

                <div className="relative mb-2">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    id="file-input-3"
                  />
                  <label
                    htmlFor="file-input-3"
                    className="bg-[#4CEC6E] w-[236px] h-[45px] flex items-center justify-center cursor-pointer transition-all relative"
                  >
                    {formData.photos[2] ? (
                      <>
                        <img
                          src={formData.photos[2]}
                          alt="Upload 3"
                          className="w-[50px] absolute h-[50px] right-[-60px] object-cover rounded-sm"
                        />
                        <span className="text-black font-Inter font-[200] text-[20px]">
                          Загружено
                        </span>
                      </>
                    ) : (
                      <span className="text-black font-Inter font-[200] text-[25px]">
                        Загрузить фото
                      </span>
                    )}
                  </label>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="bg-[#4CEC6E] w-[236px] h-[45px] rounded-[22px] transition-all"
                >
                  ОТПРАВИТЬ
                </button>
              </div>

              {errors.photos && (
                <span className="text-red-500 text-sm">{errors.photos}</span>
              )}
            </div>
          </form>
        </div>
      </Wrapper>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Спасибо!</h2>
            <p>Форма успешно отправлена.</p>
            <button
              className="mt-4 bg-[#4CEC6E] px-4 py-2 rounded-md"
              onClick={closeModal}
            >
              Закрыть
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Form;

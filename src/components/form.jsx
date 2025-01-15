import { useState } from "react";
import Wrapper from "../layout/wrapper";

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

  const isFormValid =
    formData.name &&
    formData.amount &&
    /^\+7\d{10}$/.test(formData.phone) &&
    /^[0-9]{11}$/.test(formData.snils) &&
    /^[0-9]{12}$/.test(formData.inn) &&
    formData.photos.length >= 3 &&
    formData.agreement &&
    formData.situation.trim() !== "";

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        photos: [...prev.photos, URL.createObjectURL(file)],
      }));
    }
  };

  const handleValidation = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Поле обязательно для заполнения.";
    if (!formData.amount) newErrors.amount = "Поле обязательно для заполнения.";
    if (!/^\+7\d{10}$/.test(formData.phone))
      newErrors.phone = "Неверный формат телефона.";
    if (!/^[0-9]{11}$/.test(formData.snils))
      newErrors.snils = "СНИЛС должен содержать 11 цифр.";
    if (!/^[0-9]{12}$/.test(formData.inn))
      newErrors.inn = "ИНН должен содержать 12 цифр.";
    if (formData.photos.length < 3)
      newErrors.photos = "Загрузите минимум 3 фотографии.";
    if (!formData.agreement)
      newErrors.agreement = "Вы должны принять условия соглашения.";
    if (formData.situation.trim() === "")
      // textarea validatsiyasi
      newErrors.situation = "Поле обязательно для заполнения.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      alert("Форма успешно отправлена!");
      window.location.href = "/thank-you";
    } else {
      alert("Пожалуйста, заполните все поля правильно.");
    }
  };

  return (
    <Wrapper>
      <div className="mt-[100px]">
        {/* Header Section */}
        <div>
          <h2 className="font-Inter text-[30px] italic font-extrabold leading-[35px]">
            Нужна помощь в получении денежных средств? Заполните данные, и наш
            менеджер поможет Вам взять необходимую сумму!
          </h2>
          <h2 className="font-Inter text-[30px] italic font-extrabold leading-[35px] mt-[40px]">
            Или скачайте файл PDF формата с нашими рекомендациями и контактами!
            Мы обязательно Вам поможем!
          </h2>
          <div className="flex items-center gap-4 mt-[20px] text-[30px] font-Inter">
            <button className="bg-[#22CA00] rounded-[22px] w-[159px] h-[35px] flex justify-center items-center text-white">
              СКАЧАТЬ
            </button>
            <img src="/pdf.png" alt="PDF Icon" className="w-[35px] h-[35px]" />
          </div>
        </div>

        {/* Form Section */}
        <form
          className="font-Inter italic text-[25px] mt-[40px]"
          onSubmit={handleSubmit}
        >
          {/* Input Fields */}
          <div className="flex flex-col gap-[10px] mb-[20px]">
            <label htmlFor="name">Фамилия Имя Отчество</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="bg-[#D9D9D9] h-[63px] px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#22CA00]"
            />
            {errors.name && (
              <span className="text-red-500 text-sm">{errors.name}</span>
            )}
          </div>

          <div className="flex flex-col gap-[10px] mb-[20px]">
            <label htmlFor="amount">Необходимая сумма займа:</label>
            <input
              type="number"
              name="amount"
              id="amount"
              value={formData.amount}
              onChange={handleInputChange}
              required
              className="bg-[#D9D9D9] h-[63px] px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#22CA00]"
            />
            {errors.amount && (
              <span className="text-red-500 text-sm">{errors.amount}</span>
            )}
          </div>

          <div className="flex flex-col gap-[10px] mb-[20px]">
            <label htmlFor="phone">Введите телефон:</label>
            <input
              type="text"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              placeholder="+7XXXXXXXXXX"
              className="bg-[#D9D9D9] h-[63px] px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#22CA00]"
            />
            {errors.phone && (
              <span className="text-red-500 text-sm">{errors.phone}</span>
            )}
          </div>

          <div className="flex flex-col gap-[10px] mb-[20px]">
            <label htmlFor="snils">Ваш СНИЛС:</label>
            <input
              type="text"
              name="snils"
              id="snils"
              value={formData.snils}
              onChange={handleInputChange}
              required
              placeholder="XXXXXXXXXXX"
              className="bg-[#D9D9D9] h-[63px] px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#22CA00]"
            />
            {errors.snils && (
              <span className="text-red-500 text-sm">{errors.snils}</span>
            )}
          </div>

          <div className="flex flex-col gap-[10px] mb-[20px]">
            <label htmlFor="inn">Ваш ИНН:</label>
            <input
              type="text"
              name="inn"
              id="inn"
              value={formData.inn}
              onChange={handleInputChange}
              required
              placeholder="Введите ИНН"
              className="bg-[#D9D9D9] h-[63px] px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#22CA00]"
            />
            {errors.inn && (
              <span className="text-red-500 text-sm">{errors.inn}</span>
            )}
          </div>

          <div className="flex flex-col gap-[10px] mb-[20px]">
            <label htmlFor="situation">Опишите Вашу ситуацию:</label>
            <textarea
              name="situation"
              id="situation"
              value={formData.situation}
              onChange={handleInputChange}
              required
              placeholder="Например: срочно нужны деньги на...есть/нету просрочек..куда пробовали обращаться? "
              className="bg-[#D9D9D9] h-[100px] px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#22CA00]"
            />
            {errors.situation && (
              <span className="text-red-500 text-sm">{errors.situation}</span>
            )}
          </div>

          {/* File Upload */}
          <div className="flex flex-col gap-[10px] mb-[20px]">
            <label>Загрузите Фото:</label>
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoUpload}
              className="block mb-2"
            />
            {errors.photos && (
              <span className="text-red-500 text-sm">{errors.photos}</span>
            )}
            <div className="grid grid-cols-3 gap-4 mt-4">
              {formData.photos.map((photo, index) => (
                <img
                  key={index}
                  src={photo}
                  alt={`Upload ${index + 1}`}
                  className="w-[100px] h-[100px] object-cover border"
                />
              ))}
            </div>
          </div>

          {/* Agreement Checkbox */}
          <div className="flex items-center gap-[10px] mb-[20px]">
            <input
              type="checkbox"
              name="agreement"
              id="agreement"
              checked={formData.agreement}
              onChange={handleInputChange}
            />
            <label htmlFor="agreement">Я принимаю условия пользовательского соглашения </label>
            {errors.agreement && (
              <span className="text-red-500 text-sm">{errors.agreement}</span>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`bg-[#4CEC6E] w-[236px] h-[45px] rounded-[22px] transition-all ${
              isFormValid
                ? "hover:bg-[#3BAA56]"
                : "opacity-50 cursor-not-allowed"
            }`}
            disabled={!isFormValid}
          >
            ОТПРАВИТЬ
          </button>
        </form>
      </div>
    </Wrapper>
  );
}

export default Form;

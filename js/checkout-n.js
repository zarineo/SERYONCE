const stages = document.querySelectorAll(".stage");
const changeButtons = document.querySelectorAll(".stage .change-button");
const button = document.querySelector(".form-button");

// STAGE ONE
const inputName = stages[0].querySelector("#name-input");
const inputSurname = stages[0].querySelector("#surname-input");
const inputPatronymic = stages[0].querySelector("#patronymic-input");
const inputEmail = stages[0].querySelector("#email-input");
const inputPhone = stages[0].querySelector("#phone-input");

// STAGE TWO
const inputCity = stages[1].querySelector("#city-input");
const inputCityTips = inputCity.querySelector("datalist");
const inputStreet = stages[1].querySelector("#street-input");
const inputHouse = stages[1].querySelector("#house-input");
const inputApartment = stages[1].querySelector("#apartment-input");
// select country
const countrySelector = document.querySelector(".country-select");
const countryInput = document.querySelector(".country-select .select-preview");
const countryList = document.querySelector(".country-select .select-items");
const countryItems = document.querySelectorAll(".country-select .select-item");

const formData = {
  userInfo: {
    name: inputName.querySelector("input").value,
    surname: inputSurname.querySelector("input").value,
    patronymic: inputPatronymic.querySelector("input").value,
    email: inputEmail.querySelector("input").value,
    phone: inputPhone.querySelector("input").value,
  },
  addressInfo: {
    country: "",
    city: "",
    street: "",
    house: "",
    apartment: "",
  },
};

let stage = 0;

// возврат на прошлый этап
changeButtons.forEach((item, index) => {
  item.addEventListener("click", () => {
    stage = index;
    button.innerHTML = "Далее";
    stages.forEach((stage, i) => {
      if (i === index) {
        stage.classList.remove("filled");
      } else if (i > index) {
        stage.classList.remove("is--active");
        stage.classList.remove("filled");
      }
    });
  });
});

// кнопка далее
button.addEventListener("click", (e) => {
  e.preventDefault();
  if (stage < 3 && checkValidations(stage)) {
    updateStage();
    if (stage === 3) {
      button.innerHTML = "Оплатить";
    }
  }
});

// STAGE ONE
// save values stage one
inputName.querySelector("input").addEventListener("input", (event) => {
  formData.userInfo.name = event.target.value;
});
inputSurname.querySelector("input").addEventListener("input", (event) => {
  formData.userInfo.surname = event.target.value;
});
inputPatronymic.querySelector("input").addEventListener("input", (event) => {
  formData.userInfo.patronymic = event.target.value;
});
inputEmail.querySelector("input").addEventListener("input", (event) => {
  formData.userInfo.email = event.target.value;
});
inputPhone.querySelector("input").addEventListener("input", (event) => {
  formData.userInfo.phone = event.target.value;
});

// STAGE TWO
// select country
countryInput.addEventListener("click", () => {
  countryList.classList.toggle("is--active");
});

countryItems.forEach((item) => {
  item.addEventListener("click", () => {
    countryItems.forEach((otherItem) => {
      otherItem.classList.remove("is--active");
    });
    countryInput.textContent = item.textContent;
    formData.addressInfo.country = item.textContent;
    item.classList.add("is--active");
    countryList.classList.remove("is--active");
    inputCity.classList.remove("disabled");
    inputCity.querySelector("input").disabled = false;
  });
});

// save values stage two
inputCity.querySelector("input").addEventListener("input", (event) => {
  const url =
    "http://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
  const token = "52f5fea4e58e7ddc49b94af98475bb870f8d6ef8";
  const value = event.target.value;
  formData.addressInfo.city = value;

  let options = {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Token " + token,
    },
    body: JSON.stringify({
      query: value,
      locations: [{ country: formData.addressInfo.country }],
      count: 5,
    }),
  };

  fetch(url, options)
    .then((response) => response.text())
    .then((result) => {
      const cityTips = JSON.parse(result).suggestions;
      inputCityTips.innerHTML = "";

      cityTips.forEach((city) => {
        const option = document.createElement("option");
        option.value = city.value;
        inputCityTips.appendChild(option);
      });
    })
    .catch((error) => console.log("error", error));
});
inputStreet.querySelector("input").addEventListener("input", (event) => {
  formData.addressInfo.street = event.target.value;
});
inputHouse.querySelector("input").addEventListener("input", (event) => {
  formData.addressInfo.house = event.target.value;
});
inputApartment.querySelector("input").addEventListener("input", (event) => {
  formData.addressInfo.apartment = event.target.value;
});

// stage validate functions
function checkValidations(stage) {
  if (stage === 0) {
    return checkUserInfoValidation();
  }
  if (stage === 1) {
    return checkAddressInfoValidation();
  }
}

function checkUserInfoValidation() {
  let isValid = true;
  updateInput(inputName, checkText(formData.userInfo.name));
  updateInput(inputSurname, checkText(formData.userInfo.surname));
  updateInput(inputPatronymic, checkText(formData.userInfo.patronymic));
  updateInput(inputEmail, checkEmail(formData.userInfo.email));
  updateInput(inputPhone, checkPhone(formData.userInfo.phone));

  if (
    !checkText(formData.userInfo.name).isValid ||
    !checkText(formData.userInfo.surname).isValid ||
    !checkText(formData.userInfo.patronymic).isValid ||
    !checkEmail(formData.userInfo.email).isValid ||
    !checkPhone(formData.userInfo.phone).isValid
  ) {
    isValid = false;
  }

  return isValid;
}

function checkAddressInfoValidation() {
  let isValid = true;
  updateInput(countrySelector, checkAddressValue(formData.addressInfo.country));
  updateInput(inputCity, checkAddressValue(formData.addressInfo.city));
  updateInput(inputStreet, checkAddressValue(formData.addressInfo.street));
  updateInput(inputHouse, checkAddressValue(formData.addressInfo.house));

  if (
    !checkAddressValue(formData.addressInfo.country).isValid ||
    !checkAddressValue(formData.addressInfo.city).isValid ||
    !checkAddressValue(formData.addressInfo.street).isValid ||
    !checkAddressValue(formData.addressInfo.house).isValid
  ) {
    isValid = false;
  }

  return isValid;
}

// validate value functions
function checkText(text) {
  console.log(formData, text);
  const textRegular = /^[А-Яа-я\s-]{2,}$/;

  if (text.length === 0) {
    return {
      isValid: false,
      message: "Поле не может быть пустым",
    };
  }

  if (text.length < 3) {
    return {
      isValid: false,
      message: "Поле не может содержать меньше двух символов",
    };
  }

  if (!textRegular.test(text.trim())) {
    return {
      isValid: false,
      message: 'Поле может содержать только кириллицу и символ "-"',
    };
  }

  return {
    isValid: true,
    message: "",
  };
}

function checkEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.length === 0) {
    return {
      isValid: false,
      message: "Поле не может быть пустым",
    };
  }
  if (!emailRegex.test(email.trim())) {
    return {
      isValid: false,
      message: "Введите правильный email",
    };
  }
  return {
    isValid: true,
    message: "",
  };
}

function checkPhone(phone) {
  const phoneRegex = /^(\d{3})(\d{3})(\d{2})(\d{2})$/;
  const cleanedPhone = phone.replace(/[\s-]/g, "");

  if (cleanedPhone.length === 0) {
    return {
      isValid: false,
      message: "Поле не может быть пустым",
    };
  }

  if (!phoneRegex.test(cleanedPhone)) {
    return {
      isValid: false,
      message: "Введите правильный телефон",
    };
  }

  return {
    isValid: true,
    message: "",
  };
}

function checkAddressValue(value) {
  if (value.length === 0) {
    return {
      isValid: false,
      message: "Поле не может быть пустым",
    };
  }

  return {
    isValid: true,
    message: "",
  };
}

// other
function updateInput(element, validation) {
  if (validation.isValid) {
    element.classList.remove("is--error");
  } else {
    element.classList.add("is--error");
    element.querySelector(".error-message__text").textContent =
      validation.message;
  }
}

function updateStage() {
  const activeStage = stages[stage];
  activeStage.classList.add("filled");

  if (stage === 0) {
    activeStage.querySelector(".filled-v .name").textContent =
      formData.userInfo.name;
    activeStage.querySelector(".filled-v .surname").textContent =
      formData.userInfo.surname;
    activeStage.querySelector(".filled-v .patronymic").textContent =
      formData.userInfo.patronymic;
    activeStage.querySelector(".filled-v .email").textContent =
      formData.userInfo.email;
    activeStage.querySelector(".filled-v .phone").textContent =
      formData.userInfo.phone;
  }

  if (stage === 1) {
    activeStage.querySelector(".filled-v .country").textContent =
      formData.addressInfo.country;
    activeStage.querySelector(".filled-v .city").textContent =
      formData.addressInfo.city;
    let street = `${formData.addressInfo.street}, ${formData.addressInfo.house}`;
    if (formData.addressInfo.apartment) {
      street += `, ${formData.addressInfo.apartment}`;
    }
    activeStage.querySelector(".filled-v .street").textContent = street;
  }

  stage++;
  stages[stage].classList.add("is--active");
}

const stages = document.querySelectorAll(".stage");
const changeButtons = document.querySelectorAll(".stage .change-button");
const button = document.querySelector(".form-button");

let stage = 0;

button.addEventListener("click", (e) => {
  e.preventDefault();
  const activeStage = stages[stage];
  if (stage < 3 && checkValidations(stage, activeStage)) {
    activeStage.classList.add("filled");
    stage++;
    stages[stage].classList.add("is--active");
    if (stage === 3) {
      button.innerHTML = "Оплатить";
    }
  }
});

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

function checkValidations(stage, activeStage) {
  return true;
}

let counterValue = 0;

const eventCounter = document.querySelector("#value");
const buttonMinus = document.querySelector(".btn-min");
const buttonPlus = document.querySelector(".btn-plus");

buttonMinus.addEventListener("click", () => {
	counterValue--
    eventCounter.textContent = counterValue;
})

buttonPlus.addEventListener("click", () => {
	counterValue++
    eventCounter.textContent = counterValue;
})
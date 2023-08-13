const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", inputElChange);

function inputElChange(event) {
    outputEl.textContent = event.currentTarget.value;
    if (event.target.value === "") {
        outputEl.textContent = "Anonymous";
	}
}
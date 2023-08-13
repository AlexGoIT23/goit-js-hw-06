const inputChange = document.querySelector('#font-size-control');
const textSizeChange = document.querySelector('#text');

inputChange.addEventListener('change', el => {
    textSizeChange.style.fontSize = `${el.target.value}px`;
}
)
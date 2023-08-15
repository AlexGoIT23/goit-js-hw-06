const inputFocus = document.querySelector("#validation-input");
console.log(inputFocus);

inputFocus.addEventListener('blur', (event) => { 
    if (event.currentTarget.value.length == inputFocus.getAttribute('data-length')) {
        event.currentTarget.classList.add("valid");
        event.currentTarget.classList.remove("invalid");
    } else {
        event.currentTarget.classList.add("invalid");
        event.currentTarget.classList.remove("valid");

  }
  
});
console.log(inputFocus);




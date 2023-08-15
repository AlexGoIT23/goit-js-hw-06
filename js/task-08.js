const addForm = document.querySelector('.login-form');

addForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const {elements: { email, password },
    } = event.currentTarget

    if (email.value === '' || password.value === '') {
        return alert('Будь-ласка, заповніть всі поля!')
    }
    const userDetails = { email: email.value, Password: password.value }
    
    console.log(userDetails)
    event.currentTarget.reset()
}
);
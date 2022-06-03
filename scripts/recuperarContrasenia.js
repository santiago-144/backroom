const expresiones = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');
const emailError = document.querySelector('#email-error');
const statusInfo = {
    email: false,
}

inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        e.preventDefault();
        console.log(e.target.name);
        switch (e.target.name) {
            case 'email':
                if(expresiones.email.test(e.target.value)) {
                    statusInfo.email = true;
                    emailError.textContent = '';
                } else {
                    statusInfo.email = false;
                    emailError.textContent = 'Email invalido';
                    setTimeout(() =>{
                        emailError.textContent = ' ';
                    },3000);
                }
            default:
                break;
        }
    });
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    Object.values(statusInfo).includes(false) ? alert('Existen campos vacíos'): alert('Todos los campos son validos'); 
});
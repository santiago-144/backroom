const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const statusInfo = {
    name: false,
    phone: false,
    email: false,
}

const form = document.querySelector('form')
const inputs = document.querySelectorAll('input')
const nameError = document.querySelector('#name-error')
const lastnameError = document.querySelector('#lastname-error')
const phoneError = document.querySelector('#phone-error')
const emailError = document.querySelector('#email-error')

inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        e.preventDefault()
        switch (e.target.name) {
            case 'nombre':
                if (expresiones.nombre.test(e.target.value)) {
                    statusInfo.name = true
                    nameError.textContent = ''
                } else {
                    statusInfo.name = false
                    nameError.textContent = 'Sólo se aceptan letras'
                    setTimeout(() =>{
                        nameError.textContent = ' ';
                    },3000);
                }
                break
            case 'apellido':
                if (expresiones.nombre.test(e.target.value)) {
                    statusInfo.name = true
                    lastnameError.textContent = ''
                } else {
                    statusInfo.name = false
                    lastnameError.textContent = 'Solo se aceptan letras'
                    setTimeout(() =>{
                        lastnameError.textContent = ' ';
                    },3000);
                }
                break
            case 'telefono':
                if (expresiones.telefono.test(e.target.value)) {
                    statusInfo.phone = true
                    phoneError.textContent = ''
                } else {
                    statusInfo.phone = false
                    phoneError.textContent = 'Telefono no valido'
                    setTimeout(() =>{
                        phoneError.textContent = ' ';
                    },3000);
                }
                break
            case 'email':
                if (expresiones.email.test(e.target.value)) {
                    statusInfo.email = true
                    emailError.textContent = ''
                } else {
                    statusInfo.email = false
                    emailError.textContent = 'Email invalido'
                    setTimeout(() =>{
                        emailError.textContent = ' ';
                    },3000);
                }
                break
            default:
                break
        }
    })
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    Object.values(statusInfo).includes(false) ? alert('Existen campos vacíos o hay valores incorrectos'): alert('Todos los campos son validos'); 
});
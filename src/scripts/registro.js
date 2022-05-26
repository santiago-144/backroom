const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/,
    contrasenia: /^.{4,12}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

const statusInfo = {
    name: false,
    user: false,
    password: false,
    email: false,
}

const form = document.querySelector('form')
const inputs = document.querySelectorAll('input')
const nameError = document.querySelector('#name-error')
const userError = document.querySelector('#user-error')
const emailError = document.querySelector('#email-error')
const passwordError = document.querySelector('#password-error')

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
                    nameError.textContent = 'Nombre invalido'
                }
                break
            case 'usuario':
                if (expresiones.usuario.test(e.target.value)) {
                    statusInfo.user = true
                    userError.textContent = ''
                } else {
                    statusInfo.user = false
                    userError.textContent = 'Usuario invalido'
                }
                break
            case 'contrasenia':
                if (expresiones.contrasenia.test(e.target.value)) {
                    statusInfo.password = true
                    passwordError.textContent = ''
                } else {
                    statusInfo.password = false
                    passwordError.textContent = 'Contraseña invalida'
                }
                break
            case 'email':
                if (expresiones.email.test(e.target.value)) {
                    statusInfo.email = true
                    emailError.textContent = ''
                } else {
                    statusInfo.email = false
                    emailError.textContent = 'Email invalido'
                }
                break
            default:
                break
        }
    })
})
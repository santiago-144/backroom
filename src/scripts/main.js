import {router} from '../router/index.router'
import Login from '../controllers/login.controller'
// import '../main.scss'

// document.querySelector('#app').innerHTML = `
//   <p id='unP'>HOLA MUNDO</p>
// `

window.addEventListener('hashchange', () => {
  router(window.location.hash)
})

window.addEventListener('load', () => {
  document.querySelector('#app').appendChild(Login())
  window.location.hash = '#/login'
  router(window.location.hash)
})

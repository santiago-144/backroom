import loginView from '../views/login.html?raw'

export default () => {
  const loginComponent = document.createElement('div')
  loginComponent.innerHTML = loginView
  return loginComponent
}

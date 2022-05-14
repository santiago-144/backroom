import registerView from '../views/register.html?raw'

export default () => {
  const registerComponent = document.createElement('div')
  registerComponent.innerHTML = registerView
  return registerComponent
}

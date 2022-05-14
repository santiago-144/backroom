import notfoundView from '../views/404.html?raw'

export default () => {
  const notfoundComponent = document.createElement('div')
  notfoundComponent.innerHTML = notfoundView
  return notfoundComponent
}
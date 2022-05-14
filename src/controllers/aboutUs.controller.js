import aboutView from '../views/aboutUs.html?raw'

export default () => {
  const aboutComponent = document.createElement('div')
  aboutComponent.innerHTML = aboutView
  return aboutComponent
}

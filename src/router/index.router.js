// import Home from '../controllers/index.controller'
import Login from '../controllers/login.controller'
import Register from '../controllers/register.controller'
import AboutUs from '../controllers/aboutUs.controller'
import notFound from '../controllers/404.controller'

const router = (route) => {
  let content = document.getElementById('app')
  content.innerHTML = ''

  switch (route) {
    // case '#/':
    //   return content.appendChild(Home())
    case '#/login':
      return content.appendChild(Login())
    case '#/register':
      return content.appendChild(Register())
    case '#/aboutUs':
      return content.appendChild(AboutUs())
    default:
      return content.appendChild(notFound())
  }
}

export { router }

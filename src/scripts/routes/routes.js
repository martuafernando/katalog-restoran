import All from '../views/pages/all'
import Detail from '../views/pages/detail'
import Favorite from '../views/pages/favorite'

const routes = {
  '/': All, // default page
  '/detail/:id': Detail,
  '/favorite': Favorite
}

export default routes

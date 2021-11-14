import loadable from "../hooks/useLoadble"

const Home = loadable(() => import("../page/home"))
const Base = loadable(() => import("../page/base"))

const routes = [
  {
    path: '/home',
    exact: false,
    name: 'Home',
    component: Home,
    auth: [1]
  },
  {
    path: '/base',
    exact: false,
    name: 'Base',
    component: Base,
    auth: [1]
  }
]

export default routes

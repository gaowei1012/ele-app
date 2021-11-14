import React from 'react'
import { HashRouter as Router, Route, Switch } from "react-router-dom"
import loadable from './hooks/useLoadble'

const BaseLayout = loadable(
  () => import(/* webpackChunkName: 'default' */ "./containers/BaseLayout")
);

const App = () => {

  return (
    <Router>
      <Switch>
        <Route component={BaseLayout} />
      </Switch>
    </Router>
  )
}

export default App
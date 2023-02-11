import {Switch, Route} from 'react-router-dom'

import HomeRoute from './components/HomeRoute'
import AboutRoute from './components/AboutRoute'
import StateSpecificDetails from './components/StateSpecificDetails'
import Vaccination from './components/Vaccination'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={HomeRoute} />
    <Route exact path="/state/:stateCode" component={StateSpecificDetails} />
    <Route exact path="/about" component={AboutRoute} />
    <Route exact path="/vaccination" component={Vaccination} />
    <Route component={NotFound} />
  </Switch>
)

export default App

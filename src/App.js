import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from './components/Login'
import JokesPage from './components/JokesPage'

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={JokesPage} />
        </Switch>
      </div>
    </Router>
  )
}

export default App

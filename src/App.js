import React, { Component } from 'react'
import ArtPage from './components/ArtPage'
import Hist from './components/Hist'
import Home from './components/Home'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <header>
          <h1></h1>
          <nav>
            <ul className="nav-bar">
              <li className="nav-link">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-link">
                <Link to="/Hist">History</Link>
              </li>
              <li className="nav-link">
                <Link to="/ArtPage">Collection</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/Hist" component={Hist}></Route>
          <Route exact path="/ArtPage" component={ArtPage}></Route>
        </Switch>
      </Router>
    )
  }
}

export default App

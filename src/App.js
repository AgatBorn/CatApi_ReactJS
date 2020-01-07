import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import NavBarContainer from './components/NavBarContainer'
import CatVotesContainer from './components/CatVotesContainer'
import BreedsContainer from './components/BreedsContainer'
import SearchContainer from './components/SearchContainer'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBarContainer />
          <Switch>
            <Route path="/" exact component={CatVotesContainer}></Route>
            <Route path="/breeds" component={BreedsContainer}></Route>
            <Route path="/search" component={SearchContainer}></Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;

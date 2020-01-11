import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './App.css';
import { getStore } from "./store"
import NavBarContainer from './components/NavBarContainer'
import CatVotesContainer from './components/CatVotesContainer'
import BreedsContainer from './components/BreedsContainer'
import SearchContainer from './components/SearchContainer'
import BreedDetailsContainer from './components/BreedDetailsContainer';

const store = getStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <NavBarContainer />
            <Switch>
              <Route path="/" exact component={CatVotesContainer}></Route>
              <Route path="/breeds" exact component={BreedsContainer}></Route>
              <Route path="/breeds/:id" component={BreedDetailsContainer}></Route>
              <Route path="/search" component={SearchContainer}></Route>
            </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

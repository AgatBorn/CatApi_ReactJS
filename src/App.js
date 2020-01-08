import React from 'react';
import { Provider } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import './App.css';
import { getStore, history } from "./redux/store"
import { ConnectedRouter } from 'connected-react-router'
import NavBarContainer from './components/NavBarContainer'
import CatVotesContainer from './components/CatVotesContainer'
import BreedsContainer from './components/BreedsContainer'
import SearchContainer from './components/SearchContainer'

const store = getStore();

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div className="App">
          <NavBarContainer />
            <Switch>
              <Route path="/" exact component={CatVotesContainer}></Route>
              <Route path="/breeds" component={BreedsContainer}></Route>
              <Route path="/search" component={SearchContainer}></Route>
            </Switch>
        </div>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;

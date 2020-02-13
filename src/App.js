import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';

import './App.css';
import NavBarContainer from './components/NavBarContainer'
import CatVotesContainer from './components/CatVotesContainer'
import BreedsContainer from './components/BreedsContainer'
import SearchContainer from './components/SearchContainer'
import BreedDetailsContainer from './components/BreedDetailsContainer';
import messages from './locale/messages';
import { setCurrentLanguage } from './redux';


class App extends Component {

  setStateToLocalStorage = () => {
    localStorage.setItem('CatApiLang', this.props.currentLang);
    window.removeEventListener("beforeunload", this.setStateToLocalStorage);
  }

  componentDidMount() {
    window.addEventListener('beforeunload', this.setStateToLocalStorage);
    var savedLang = localStorage.getItem('CatApiLang');
    console.log(`Language saved in Storage: ${savedLang}`);
    if (savedLang != null) {
      this.props.setNewLang(savedLang);
    }
  }

  componentWillUnmount() {
    this.setStateToLocalStorage();
  }

  render() {
    return (
          <div className="App">
            <IntlProvider locale={this.props.currentLang} messages={messages[this.props.currentLang]}>
              <NavBarContainer />
              <Switch>
                <Route path="/" exact component={CatVotesContainer}></Route>
                <Route path="/breeds" exact component={BreedsContainer}></Route>
                <Route path="/breeds/:id" component={BreedDetailsContainer}></Route>
                <Route path="/search" component={SearchContainer}></Route>
              </Switch>
            </IntlProvider>
          </div>
    )
  }
}

const mapPropsToState = state => {
  return {
    currentLang: state.locale.lang
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setNewLang: newLang => {
      dispatch(setCurrentLanguage(newLang))
    }
  }
}

export default connect(mapPropsToState, mapDispatchToProps)(App);

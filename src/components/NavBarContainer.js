import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLanguage, faCat, faVoteYea, faSearch } from '@fortawesome/free-solid-svg-icons'
import { setCurrentLanguage } from '../redux';

function NavBarContainer(props) {
  return (
    <Navbar collapseOnSelect bg="dark" variant="dark" expand="sm">
      <Navbar.Brand as={Link} to="/">CatAPI</Navbar.Brand>
      <Navbar.Toggle aria-controls="#mainMenu"></Navbar.Toggle>
      <Navbar.Collapse id="mainMenu">
        <Nav className="d-inline-flex mr-auto align-items-center">
          <FontAwesomeIcon className="text-muted" icon={faVoteYea} />
          <Nav.Link as={Link} to="/"><FormattedMessage id="catVotes.navbarButton" defaultMessage="Cat Votes" /></Nav.Link>

          <FontAwesomeIcon className="text-muted ml-2" icon={faCat} />
          <Nav.Link as={Link} to="/breeds"><FormattedMessage id="search.breedsTitle" defaultMessage="Breeds" /></Nav.Link>

          <FontAwesomeIcon className="text-muted ml-2" icon={faSearch} />
          <Nav.Link as={Link} to="/search"><FormattedMessage id="search.buttonSearch" defaultMessage="Search" /></Nav.Link>
        </Nav>
        <Form inline>
        <FontAwesomeIcon className="text-muted" icon={faLanguage} />
          {props.currentLang !== "en" && (
          <Button className="mr-0 pb-2 text-muted" variant="link" onClick={() => props.changeLanguage("en")}>EN</Button>
          )}
          {props.currentLang !== "de" && (<Button className="ml-0 text-muted" variant="link" onClick={() => props.changeLanguage("de")}>DE</Button>)}
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

const mapPropsToState = state => {
  return {
    currentLang: state.locale.lang
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeLanguage: lang => {
      dispatch(setCurrentLanguage(lang))
    }
  }
}

export default connect(mapPropsToState, mapDispatchToProps)(NavBarContainer);
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FormattedMessage } from "react-intl";
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { getCatRequest, voteCatRequest } from '../redux'

function CatVotesContainer(props) {
  useEffect(() => {
    if (props.getNextImage === true) {
      props.getCat()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.getNextImage])

  return (
   <div>
      <Jumbotron fluid className="p-3 bg-primary text-light">
        <h1 className="h2"><FormattedMessage id="catVotes.title" defaultMessage="Vote for your favourite cats!" /></h1>
        <p><FormattedMessage id="catVotes.description" defaultMessage="Click 'YES' if you like this cat, 'NO' if you don't like it." /></p>
      </Jumbotron>
    <Container fluid>
      <div className="imgContainer">
        { props.loading ? 
        <div>
          <Spinner className="mt-5" animation="border" variant="primary" />
        </div>
        : 
        <div>
          <img className="voteImg" width="500" height="700" src={props.cat.url} alt="" />
        </div>}
      </div>
      <Button className="mr-1 mt-3" variant="primary" style={{ width: '100px'}} onClick={() => props.voteYes(props.cat.id, 1)}>
        <FormattedMessage id="catVotes.voteYes" defaultMessage="YES" />
      </Button>
      <Button className="ml-1 mt-3" variant="danger" style={{ width: '100px'}} onClick={() => props.voteYes(props.cat.id, 0)}>
        <FormattedMessage id="catVotes.voteNo" defaultMessage="NO" />
      </Button> 
    </Container> 
    </div>
  );
}

CatVotesContainer.prototypes = {
  getCat: PropTypes.func,
  getNextImage: PropTypes.bool,
  loading: PropTypes.bool,
  cat: PropTypes.shape({
    url: PropTypes.string,
    id: PropTypes.string
  })
}

const mapPropsToState = (state) => {
  return {
    getNextImage: state.votes.getNextImage,
    loading: state.votes.loading,
    cat: state.votes.cat
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCat: () => {
      dispatch(getCatRequest())
    },
    voteYes: (id, vote) => dispatch(voteCatRequest(id, vote))
  }
}

export default connect(mapPropsToState, mapDispatchToProps)(CatVotesContainer)
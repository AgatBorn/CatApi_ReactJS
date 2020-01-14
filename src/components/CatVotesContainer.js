import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getCatRequest, voteCatRequest } from '../redux'
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function  CatVotesContainer(props) {
  useEffect(() => {
    if (props.data.getNextImage === true) {
      props.getCat()
    }
  }, [props.data.getNextImage])
 return (
    <Container fluid>
      <Jumbotron fluid className="p-3 bg-light text-dark">
        <h1 className="h2">Vote for your favourite cats!</h1>
        <p>Click 'YES' if you like this cat, 'NO' if you don't like it.</p>
      </Jumbotron>
      <div className="imgContainer">
        { props.data.loading ? 
        <div>
          <Spinner animation="border" variant="primary" />
        </div>
        : 
        <div>
          <img className="voteImg" width="500" height="700" src={props.data.cat.url} />
        </div>}
      </div>
      <Button className="mr-1 mt-3" variant="primary" style={{ width: '100px'}} onClick={() => props.voteYes(props.data.cat.id, 1)}>YES</Button>
      <Button className="ml-1 mt-3" variant="outline-secondary" style={{ width: '100px'}} onClick={() => props.voteYes(props.data.cat.id, 0)}>NO</Button> 
    </Container> 
  );
}

const mapPropsToState = (state) => {
  return {
    data: state.votes
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
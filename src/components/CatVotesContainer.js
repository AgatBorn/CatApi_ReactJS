import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getCatRequest, voteCatRequest } from '../redux'
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

function  CatVotesContainer(props) {
  
  useEffect(() => {
    if (props.data.getNextImage === true) {
      props.getCat()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.data.getNextImage])
 return (
   <div>
      <Jumbotron fluid className="p-3 bg-primary text-light">
        <h1 className="h2">Vote for your favourite cats!</h1>
        <p>Click 'YES' if you like this cat, 'NO' if you don't like it.</p>
      </Jumbotron>
    <Container fluid>
      <div className="imgContainer">
        { props.data.loading ? 
        <div>
          <Spinner className="mt-5" animation="border" variant="primary" />
        </div>
        : 
        <div>
          <img className="voteImg" width="500" height="700" src={props.data.cat.url} alt="" />
        </div>}
      </div>
      <Button className="mr-1 mt-3" variant="primary" style={{ width: '100px'}} onClick={() => props.voteYes(props.data.cat.id, 1)}>YES</Button>
      <Button className="ml-1 mt-3" variant="danger" style={{ width: '100px'}} onClick={() => props.voteYes(props.data.cat.id, 0)}>NO</Button> 
    </Container> 
    </div>
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
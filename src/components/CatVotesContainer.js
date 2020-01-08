import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { getCatRequest, voteCatRequest } from '../redux'
import { withRouter } from 'react-router-dom';

function  CatVotesContainer(props) {
  useEffect(() => {
    console.log("use effect")
    console.log(props)
    props.getCat()
  }, [])
 return (
    <div>
      <h2>Vote!</h2>
      { props.data.loading ? 
      <div>
        <h3>loading...</h3>
      </div> 
      : 
      <div>
      <div>
        <img src={props.data.cat.url} alt='no' />
      </div>
      <button onClick={() => props.voteYes(true)}>YES</button>
      <button onClick={() => props.voteYes(false)}>NO</button> 
      </div>}
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
      console.log("here")
      console.log(getCatRequest())
      console.log(dispatch)
      dispatch(getCatRequest())
      console.log("here2")
    },
    voteYes: (vote) => dispatch(voteCatRequest(vote))
  }
}

export default withRouter(connect(mapPropsToState, mapDispatchToProps)(CatVotesContainer))
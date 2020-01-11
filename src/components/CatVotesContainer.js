import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getCatRequest, voteCatRequest } from '../redux'

function  CatVotesContainer(props) {
  useEffect(() => {
    if (props.data.getNextImage === true) {
      props.getCat()
    }
  }, [props.data.getNextImage])
 return (
    <div>
      <h2>Vote!</h2>
      <div className="imgContainer">
        { props.data.loading ? 
        <div>
          <h3>loading...</h3>
        </div> 
        : 
        <div>
          <img className="voteImg" width="500" height="700" src={props.data.cat.url} />
        </div>}
      </div>
      <button onClick={() => props.voteYes(props.data.cat.id, 1)}>YES</button>
      <button onClick={() => props.voteYes(props.data.cat.id, 0)}>NO</button> 
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
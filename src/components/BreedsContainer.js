import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAllBreedsRequest } from '../redux'


function BreedsContainer(props) {
  useEffect(() => {
    props.getBreeds()
  }, [])

 return (
    <div>
      <h2>Breeds!</h2>
      {props.breeds && (
        <div>
          {props.breeds.breeds.map(breed => (
            <div key={breed.id}>
               <Link to={`/breeds/${breed.id}`}><h3>{ breed.name } ({ breed.origin })</h3></Link>
               <h4>{ breed.temperament }</h4>
               <p>{ breed.description }</p>
               <a href={breed.wikipedia_url}>wikipedia</a>
            </div>
          ))}
        </div>
      )}
    </div> 
  );
}

const mapPropsToState = (state) => {
  return {
    breeds: state.breeds
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBreeds: () => dispatch(getAllBreedsRequest())
  }
}

export default connect(mapPropsToState, mapDispatchToProps)(BreedsContainer)
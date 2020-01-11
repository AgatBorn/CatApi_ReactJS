import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { getBreedDetailsRequest } from '../redux'

function BreedDetailsContainer(props) {
    useEffect(() => {
        props.getDetails(props.match.params.id)
    }, [])
    return (
        props.loading ? 
        <div>
            <h3>loading...</h3>
        </div>
        : 
        <div key={props.breed.id}>
                <h3>{ props.breed.name } ({ props.breed.origin })</h3>
                <h4>{ props.breed.temperament }</h4>
                <div>
                    <h4>Basic Info</h4>
                    <p>{ props.breed.description }</p>
                    <p>Natural: { props.breed.natural }</p>
                    <p>Experimental: { props.breed.experimental }</p>
                    <p>Rare: { props.breed.rare }</p>
                </div>

                <div>
                    <h4>Appearance</h4>
                    <p>Hairless: { props.breed.hairless }</p>
                    <p>Short legs: { props.breed.short_legs }</p>
                    <p>Suppressed tail: { props.breed.suppressed_tail }</p>
                </div>

                <div>
                    <h4>Behaviour</h4>
                    <p>Life span: { props.breed.life_span }</p>
                    <p>Affection level: { props.breed.affection_level }</p>
                    <p>Energy level: { props.breed.energy_level }</p>
                    <p>Intelligence: { props.breed.intelligence }</p>
                    <p>Social needs: { props.breed.social_needs }</p>
                    <p>Indoor: { props.breed.indoor }</p>
                    <p>Vocalisation: { props.breed.vocalisation }</p>
                    <p>Shedding level: { props.breed.shedding_level }</p>
                </div>

                <div>
                    <h4>Health</h4>
                    <p>Hypoallergenic: { props.breed.hypoallergenic }</p>
                    <p>Health issues: { props.breed.health_issues }</p>
                </div>

                <div>
                    <h4>Friendliness</h4>
                    <p>Child friendly: { props.breed.child_friendly }</p>
                    <p>Dog friendly: { props.breed.dog_friendly }</p>
                    <p>Stranger friendly: { props.breed.stranger_friendly }</p>
                </div>

                <a href={props.breed.wikipedia_url}>wikipedia</a>
            </div>
    )
}

const mapPropsToState = (state) => {
    return {
        loading: state.breedDetails.loading,
        breed: state.breedDetails.details
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getDetails: (id) => dispatch(getBreedDetailsRequest(id))
    }
}

export default connect(mapPropsToState, mapDispatchToProps)(BreedDetailsContainer)
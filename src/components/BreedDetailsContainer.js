import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Jumbotron from 'react-bootstrap/Jumbotron';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import { getBreedDetailsRequest } from '../redux';

function BreedDetailsContainer(props) {
    useEffect(() => {
        props.getDetails(props.match.params.id)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getVariantAttr = (value) => {
        switch(value)
        {
            case 0:
            case 1:
                return ("danger")
            case 2:
                return ("warning")
            case 3:
                return ("info")
            case 4:
                return ("primary")
            default:
                return ("success")
        }
    }
    const getVariantAttr01 = (value) => {
        switch(value)
        {
            case 0:
                return ("dark")
            default:
                return ("success")
        }
    }

    return (
        props.loading ? 
        <div>
          <Spinner className="mt-5" animation="border" variant="primary" />
        </div>
        : 
        <Container key={props.breed.id}>
            <Row className=" mb-0 mt-2">
                <Col>
                    <img className="w-100" src={props.breed.img} alt=""></img>
                </Col>
            </Row>
            <Jumbotron fluid className="p-3 bg-dark text-light">
                <h3 className="text-uppercase">{ props.breed.name } ({ props.breed.origin })</h3>
                <p className="lead">{ props.breed.temperament }</p>
                <p>{ props.breed.description }</p>
                
                <p>
                    <span className="mr-2">Natural: {props.breed.natural === 0 ? "NO" : "YES"}</span>
                    <span className="mr-2">Experimental: {props.breed.experimental === 0 ? "NO" : "YES"}</span>
                    <span>Rare: {props.breed.rare === 0 ? "NO" : "YES"}</span>
                </p>
            </Jumbotron>

            <Row>
                <Col>
                    <h4>Appearance</h4>
                    <p>Hairless
                        <ProgressBar variant={getVariantAttr01(props.breed.hairless)} now={1} min={0} max={1} label={props.breed.hairless === 0 ? "NO" : "YES"} />
                    </p>
                    <p>Short legs
                        <ProgressBar variant={getVariantAttr01(props.breed.short_legs)} now={1} min={0} max={1} label={props.breed.short_legs === 0 ? "NO" : "YES"} />
                    </p>
                    <p>Suppressed tail                       
                        <ProgressBar variant={getVariantAttr01(props.breed.suppressed_tail)} now={1} min={0} max={1} label={props.breed.suppressed_tail === 0 ? "NO" : "YES"} />
                    </p>
                </Col>

                <Col>
                    <h4>Friendliness</h4>
                    <p>Child friendly
                        <ProgressBar variant={getVariantAttr(props.breed.child_friendly)} now={props.breed.child_friendly} min={0} max={5} label={props.breed.child_friendly} />
                    </p>
                    <p>Dog friendly
                        <ProgressBar variant={getVariantAttr(props.breed.dog_friendly)} now={props.breed.dog_friendly} min={0} max={5} label={props.breed.dog_friendly} />
                    </p>
                    <p>Stranger friendly
                        <ProgressBar variant={getVariantAttr(props.breed.stranger_friendly)} now={props.breed.stranger_friendly} min={0} max={5} label={props.breed.stranger_friendly} />
                    </p>
                </Col>

                <Col>
                    <h4>Health</h4>
                    <p>Hypoallergenic
                        <ProgressBar variant={getVariantAttr01(props.breed.hypoallergenic)} now={1} min={0} max={1} label={props.breed.hypoallergenic === 0 ? "NO" : "YES"} />
                    </p>
                    <p>Health issues
                        <ProgressBar variant={getVariantAttr(props.breed.health_issues)} now={props.breed.health_issues} min={0} max={5} label={props.breed.health_issues} />
                    </p>
                    
                    <p className="mb-0">Life span</p>
                    <p className="mt-0">{ props.breed.life_span }</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h4>Behaviour</h4>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>Affection level
                        <ProgressBar variant={getVariantAttr(props.breed.affection_level)} now={props.breed.affection_level} min={0} max={5} label={props.breed.affection_level} />
                    </p>
                    <p>Energy level
                        <ProgressBar variant={getVariantAttr(props.breed.energy_level)} now={props.breed.energy_level} min={0} max={5} label={props.breed.energy_level} />
                    </p>
                    <p>Intelligence
                        <ProgressBar variant={getVariantAttr(props.breed.intelligence)} now={props.breed.intelligence} min={0} max={5} label={props.breed.intelligence} />
                    </p>
                </Col>
                <Col>
                    <p>Indoor
                        <ProgressBar variant={getVariantAttr01(props.breed.indoor)} now={1} min={0} max={1} label={props.breed.indoor === 0 ? "NO" : "YES"} />
                    </p>
                    <p>Vocalisation
                        <ProgressBar variant={getVariantAttr01(props.breed.vocalisation)} now={1} min={0} max={1} label={props.breed.vocalisation === 0 ? "NO" : "YES"} />
                    </p>
                    <p>Social needs
                        <ProgressBar variant={getVariantAttr(props.breed.social_needs)} now={props.breed.social_needs} min={0} max={5} label={props.breed.social_needs} />
                    </p>
                </Col>
            </Row>

        <div className="bg-dark mb-5" >  
            <a className="text-light" href={props.breed.wikipedia_url}>wikipedia</a>
        </div>  
        </Container>
    )
}

BreedDetailsContainer.propTypes = {
    getDetails: PropTypes.func,
    loading: PropTypes.bool,
    breed: PropTypes.shape({
        img: PropTypes.string,
        id: PropTypes.string.isRequired,
        name: PropTypes.string,
        origin: PropTypes.string,
        temperament: PropTypes.string,
        description: PropTypes.string,

        natural: PropTypes.number,
        experimental: PropTypes.number,
        rare: PropTypes.number,

        hairless: PropTypes.number,
        short_legs: PropTypes.number,
        suppressed_tail: PropTypes.number,

        child_friendly: PropTypes.number,
        dog_friendly: PropTypes.number,
        stranger_friendly: PropTypes.number,

        hypoallergenic: PropTypes.number,
        health_issues: PropTypes.number,
        life_span: PropTypes.string,

        affection_level: PropTypes.number,
        energy_level: PropTypes.number,
        intelligence: PropTypes.number,

        indoor: PropTypes.number,
        vocalisation: PropTypes.number,
        social_needs: PropTypes.number,
        
        wikipedia_url: PropTypes.string
    })
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
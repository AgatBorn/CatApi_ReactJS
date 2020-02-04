import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { getAllBreedsRequest } from '../redux';

function BreedsContainer(props) {
  useEffect(() => {
    props.getBreeds()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

 return (
    <div className="mt-3">
      {props.loading ?
      <div>
        <Spinner className="mt-5" animation="border" variant="primary" />
      </div>
      :
      <Container>
        <Row>
          {props.breeds.map(breed => (
          <Col key={breed.id} sm={4} className="align-items-stretch mb-3">
            <Card className="h-100">
              <Card.Header className="text-uppercase">{ breed.name } ({ breed.origin })</Card.Header>
              <Card.Img variant="top" src={breed.url} />
              <Card.Body>
                <Card.Text>
                { breed.description }
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Card.Link as={Link} to={`/breeds/${breed.id}`}>Details</Card.Link>
                <Card.Link href={breed.wikipedia_url}>Wikipedia</Card.Link>
              </Card.Footer>
            </Card>
          </Col>
          ))}
        </Row>
      </Container>
      }
    </div> 
  );
}

BreedsContainer.propTypes = {
  getBreeds: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  breeds: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    origin: PropTypes.string,
    url: PropTypes.string,
    description: PropTypes.string,
    wikipedia_url: PropTypes.string
  }))
}

const mapPropsToState = (state) => {
  return {
    breeds: state.breeds.breeds,
    loading: state.breeds.loading,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBreeds: () => dispatch(getAllBreedsRequest())
  }
}

export default connect(mapPropsToState, mapDispatchToProps)(BreedsContainer)
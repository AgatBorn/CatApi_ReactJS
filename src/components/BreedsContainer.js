import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAllBreedsRequest } from '../redux'
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import CardColumns from 'react-bootstrap/CardColumns';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function BreedsContainer(props) {
  useEffect(() => {
    props.getBreeds()
  }, [])

 return (
    <div className="mt-3">
      {props.breeds.loading ?
      <div>
        <Spinner className="mt-5" animation="border" variant="info" />
      </div>
      :
      <Container>
        <Row>
          {props.breeds.breeds.map(breed => (
          <Col sm={4} className="align-items-stretch mb-3">
            <Card className="h-100">
              <Card.Header className="text-uppercase">{ breed.name } ({ breed.origin })</Card.Header>
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
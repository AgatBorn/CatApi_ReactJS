import React, {useState, useEffect}  from 'react';
import { connect } from 'react-redux'
import { getBreedsAndCategoriesRequest, searchRequest } from '../redux'
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function SearchContainer(props) {
  const [selectedBreed, setSelectedBreed] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedType, setSelectedType] = useState('ALL');
  const [selectedOrder, setSelectedOrder] = useState('random');
  
  useEffect(() => {
    props.getBreedsAndCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
      props.search.loading ? 
      <Spinner className="mt-5" animation="border" variant="primary" />
      : 
      <Container>
      <Form className="mt-4 text-left">
        <Form.Group as={Row} controlId="breed">
          <Form.Label column sm="2">
            Breed
          </Form.Label>
          <Col sm={10}>
            <Form.Control as="select" value={selectedBreed} onChange={(e) => setSelectedBreed(e.target.value)} >
              <option value=''></option>
              {props.search.breeds.map(breed => (
                <option value={breed.id}>{breed.name}</option>
              ))}
            </Form.Control>
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="category"> 
          <Form.Label column sm="2">
            Category
          </Form.Label>
          <Col sm={10}>
          <Form.Control as="select" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value=''></option>
            {props.search.categories.map(category => (
              <option value={category.id}>{category.name}</option>
            ))}
          </Form.Control>
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="type"> 
          <Form.Label column sm={2}>
            Type
          </Form.Label>
          <Col sm={10}>
            <Form.Control as="select" value={selectedType} onChange={(e) => setSelectedType(e.target.value)} >
              <option value="gif,jpg,png">ALL</option>
              <option value="jpg,png">STATIC</option>
              <option value="gif">ANIMATED</option>
            </Form.Control>
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="order"> 
          <Form.Label column sm={2}>
            Order
          </Form.Label>
          <Col sm={10}>
            <Form.Control as="select" value={selectedOrder} onChange={(e) => setSelectedOrder(e.target.value)} >
              <option value="RANDOM">random</option>
              <option value="ASC">asc</option>
              <option value="DESC">desc</option>
            </Form.Control>
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Col className="text-right" sm={{ span: 2, offset: 10 }}>
            <Button onClick={() => props.searchImages(selectedCategory, selectedBreed, selectedType, selectedOrder)}>Search</Button>
          </Col>
        </Form.Group>
      </Form>
      {props.search.loading_images ?
      <Spinner className="mt-5" animation="border" variant="primary" />
      :
      <div className="parentImgGallery">
        {props.search.images && props.search.images.map(image => (
          <img className="imgImgGallery mt-1" height="300" src={image.url} alt=""></img>
        ))}
      </div>}
    </Container>
    
  );
}

const mapPropsToState = (state) => {
  return {
    search: state.search
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBreedsAndCategories: () => dispatch(getBreedsAndCategoriesRequest()),
    searchImages: (category, breed, type, order) => dispatch(searchRequest(category, breed, type, order))
  }
}

export default connect(mapPropsToState, mapDispatchToProps)(SearchContainer);
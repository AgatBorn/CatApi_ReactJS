import React, {useState, useEffect}  from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Pagination from 'react-bootstrap/Pagination';
import { getBreedsAndCategoriesRequest, searchRequest } from '../redux';

function SearchContainer(props) {
  const [selectedBreed, setSelectedBreed] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedType, setSelectedType] = useState('ALL');
  const [selectedOrder, setSelectedOrder] = useState('random');
  const [currentPage, setCurrentPage] = useState(0);

  const maxPage = Math.floor(props.imgCount / 10);
  
  useEffect(() => {
    props.getBreedsAndCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getNextPage = (page) => {
    setCurrentPage(page);
    props.searchImages(selectedCategory, selectedBreed, selectedType, selectedOrder, page);
  }

  const getNewSearch = () => {
    setCurrentPage(0);
    props.searchImages(selectedCategory, selectedBreed, selectedType, selectedOrder);
  }

  return (
    props.loading ? 
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
              {props.breeds.map(breed => (
                <option key={breed.id} value={breed.id}>{breed.name}</option>
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
            {props.categories.map(category => (
              <option key={category.id} value={category.id}>{category.name}</option>
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
            <Button onClick={() => getNewSearch()}>Search</Button>
          </Col>
        </Form.Group>
      </Form>
      { props.imgCount > 0 && <Col className="text-center" sm={{ span: 2, offset: 5 }}>
        <Pagination className="mx-auto">
        {currentPage > 0 && <Pagination.Prev onClick={() => getNextPage(currentPage - 1)} /> }
        {currentPage > 0 && <Pagination.Item onClick={() => getNextPage(currentPage - 1)}>{currentPage}</Pagination.Item>}
        <Pagination.Item active onClick={() => getNextPage(currentPage)}>{currentPage + 1}</Pagination.Item>
        {currentPage !== maxPage && <Pagination.Item onClick={() => getNextPage(currentPage + 1)}>{currentPage + 2}</Pagination.Item>}
        {currentPage !== maxPage && <Pagination.Next onClick={() => getNextPage(currentPage + 1)} />}
      </Pagination> </Col>}
      {props.loading_images ?
      <Spinner className="mt-5 mx-auto" animation="border" variant="primary" />
      :
      <div className="parentImgGallery">
        {props.images && props.images.map(image => (
          <img key={image.url} className="imgImgGallery mt-1" height="300" src={image.url} alt=""></img>
        ))}
      </div>}
    </Container>
    
  );
}

SearchContainer.propTypes = {
  getBreedsAndCategories: PropTypes.func.isRequired,
  searchImages: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  imgCount: PropTypes.number,
  images: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired
  })),
  loading_images: PropTypes.bool,
  categories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string
  })),
  breeds: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string
  }))
}

const mapPropsToState = (state) => {
  return {
    loading: state.search.loading,
    categories: state.search.categories,
    breeds: state.search.breeds,
    loading_images: state.search.loading_images,
    imgCount: state.search.imgCount,
    images: state.search.images
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBreedsAndCategories: () => dispatch(getBreedsAndCategoriesRequest()),
    searchImages: (category, breed, type, order, page) => dispatch(searchRequest(category, breed, type, order, page))
  }
}

export default connect(mapPropsToState, mapDispatchToProps)(SearchContainer);
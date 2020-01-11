import React, {useState, useEffect}  from 'react';
import { connect } from 'react-redux'
import { getBreedsAndCategoriesRequest, searchRequest } from '../redux'


function SearchContainer(props) {
  const [selectedBreed, setSelectedBreed] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedType, setSelectedType] = useState('ALL');
  const [selectedOrder, setSelectedOrder] = useState('random');
  
  useEffect(() => {
    props.getBreedsAndCategories();
  }, [])

  return (
    <div>
      <h2>Search</h2>
      { props.search.loading ? 
      <div><h3>loading...</h3></div>
      : 
      <div>
        <div> Breed
          <select value={selectedBreed} onChange={(e) => setSelectedBreed(e.target.value)} >
            <option value=''></option>
            {props.search.breeds.map(breed => (
              <option value={breed.id}>{breed.name}</option>
            ))}
          </select>
        </div>
        <div> Category
          <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} >
            <option value=''></option>
            {props.search.categories.map(category => (
              <option value={category.id}>{category.name}</option>
            ))}
          </select>
        </div>
        <div> Type
          <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)} >
            <option value="gif,jpg,png">ALL</option>
            <option value="jpg,png">STATIC</option>
            <option value="gif">ANIMATED</option>
          </select>
        </div>
        <div> Order
          <select value={selectedOrder} onChange={(e) => setSelectedOrder(e.target.value)} >
            <option value="RANDOM">random</option>
            <option value="ASC">asc</option>
            <option value="DESC">desc</option>
          </select>
        </div>
        <button onClick={() => props.searchImages(selectedCategory, selectedBreed, selectedType, selectedOrder)}>Search</button>
        {props.search.loading_images ?
        <div><h3>searching...</h3></div>
        :
        <div>
          {props.search.images && props.search.images.map(image => (
            <a href={image.url}><img className="voteImg" width="200" height="300" src={image.url}></img></a>
          ))}
        </div>}
      </div>}
    </div>
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
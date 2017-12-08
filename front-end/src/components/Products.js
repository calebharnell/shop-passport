import React, { Component } from 'react';
import { api } from '../api/init';
import '../App.css';

class Products extends Component {
  constructor(props){
    super(props)
    this.state = {
    	products: []
    }
  }

  render() {
    return (
      this.state.products.map((product) => 	<div key={product._id}>
      																				<p>{product.name}</p>
      																				<p>{product.brandName}</p>
      																			</div>)
    )
  }

  componentDidMount(){
  	api.get('/products')
  		.then((response) => {
  			this.setState({
  				products: response.data
  			})
  		})
  		.catch((error) => {
  			console.log('An error occured retrieving products.', error)
  		})
  }
}

export default Products;

import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import ProductDetail from './ProductDetail';

class ProductList extends Component {
	state = { products: [] };		

	componentWillMount() {
		axios.get('https://core.polviks.com/api/products')
			.then(response => this.setState({ products: response.data }));
	}

	renderProducts() {
		const products = this.state.products.data;

		if (products) {
			return products.map(product => 
				<ProductDetail key={product.identifier} product={product} />
			);			
		}
	}

	render() {
		return (
			<View>
				{this.renderProducts()}
			</View>
		);
	}
}

export default ProductList;
import React, { Component } from 'react';
import { View, Text } from 'react-native';

const ProductDetail = (props) => {
	return (
		<View>
			<Text>{props.product.title}</Text>
		</View>
	);
};

export default ProductDetail;
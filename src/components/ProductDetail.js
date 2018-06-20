import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const ProductDetail = (props) => {
	return (
		<Card>
			<CardSection>
				<View></View>
				<View style={styles.headerContentStyle}>
					<Text>{props.product.title}</Text>
					<Text>{props.product.details}</Text>
				</View>
			</CardSection>
		</Card>
	);
};

const styles = {
	headerContentStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	}
}

export default ProductDetail;
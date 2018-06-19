// Import libraries
import React from 'react';
import { View, AppRegistry } from 'react-native';

// Components
import Header from './src/components/Header';
import ProductList from './src/components/ProductList';

// Create component
const App = () => (
	<View>
		<Header headerText={'Services'} />
		<ProductList />
	</View>
);

AppRegistry.registerComponent('polviks', () => App);
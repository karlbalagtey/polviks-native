import React, { Component } from 'react';
import { View } from 'react-native';

// Components
import { Header } from './components/common';
// import ProductList from './components/ProductList';
import LoginForm from './components/LoginForm';

class App extends Component {
	render() {
		return (
			<View style={{ flex: 1 }}>
				<Header headerText={'Polviks'} />
				<LoginForm />
			</View>
		);
	}
}

export default App;

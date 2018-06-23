import React, { Component } from 'react';
import { View } from 'react-native';
import SInfo from 'react-native-sensitive-info';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

// Components
import { Header, Button, Spinner } from './components/common';
// import ProductList from './components/ProductList';
import LoginForm from './components/LoginForm';

const store = createStore(reducers);

class App extends Component {
	state = { loggedIn: null };

	componentWillMount() {
		SInfo.getItem('authenticated', {}).then(value => {
			if (value) {
				this.setState({ loggedIn: true });
			} else {
				this.setState({ loggedIn: false });				
			}
		});
	}

	logoutUser() {
		SInfo.deleteItem('authenticated', {});
		SInfo.deleteItem('accessToken', {});
		SInfo.deleteItem('refreshToken', {});
		this.setState({ loggedIn: false });
	}

	renderContent() {
		switch (this.state.loggedIn) {
			case true:
				return (
					<Button whenPress={this.logoutUser.bind(this)}>
						Log Out
					</Button>
				);
			case false:
				return <LoginForm />;
			case null:
				return <Spinner size="large" />;
		}
	}

	render() {
		return (
			<Provider store={store}>
				<View style={{ flex: 1 }}>
					<Header headerText={'Polviks'} />
					{this.renderContent()}
				</View>
			</Provider>
		);
	}
}

export default App;

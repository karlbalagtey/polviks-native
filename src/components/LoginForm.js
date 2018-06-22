import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
	state = { email: '', password: '' };

	render() {
		return (
			<Card>
				<CardSection>
					<Input 
						placeholder="example@polviks.com"
						label="Email:"
						value={this.state.email}
						onChangeText={text => this.setState({ email: text })}
					/>
				</CardSection>

				<CardSection>
					<Input
						secureText
						placeholder="**********"
						label="Password:"
						value={this.state.password}
						onChangeText={password => this.setState({ password })}
					/>
				</CardSection>

				<CardSection>
					<Button>Login</Button>
				</CardSection>
			</Card>
		);
	}
}

export default LoginForm;

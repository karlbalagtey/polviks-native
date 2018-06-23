import React, { Component } from 'react';
import { Text } from 'react-native';
import axios from 'axios';
import SInfo from 'react-native-sensitive-info';
import { Button, Card, CardSection, Input, Spinner } from './common';
import apiConfig from './services/api/config';

class LoginForm extends Component {
    state = { email: '', password: '', error: '', loading: false, };

    onButtonPress() {
        const { email, password } = this.state;

        this.setState({ error: '', loading: true });

        axios.post(apiConfig.tokenUrl, {
            username: email, 
            password: password,
            grant_type: 'password',
            client_id: apiConfig.clientId,
            client_secret: apiConfig.clientSecret,
            provider: 'customers'
        })
        .then(response => this.onLoginSuccess(response))
        .catch(error => this.onLoginFail(error));
    }

    onLoginFail(error) {
        this.setState({
            error: error.response.data.message,
            loading: false
        });
    }

    onLoginSuccess(response) {
        const accessToken = response.data.access_token;

        SInfo.setItem('accessToken', accessToken, {
            sharedPreferencesName: 'mySharedPrefs',
            keychainService: 'myKeychain'
        });

        SInfo.setItem('authenticated', 'true', {});

        this.setState({
            email: '',
            password: '',
            loading: false,
            error: '',
            accessToken: ''
        });
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner size="small" />;
        }

        return (
            <Button whenPress={this.onButtonPress.bind(this)}>
                Login
            </Button>
        );
    }

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

                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 16,
        alignSelf: 'center',
        color: 'red'
    }
};

export default LoginForm;

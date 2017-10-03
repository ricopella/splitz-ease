import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import firebase from 'firebase';
import {Button, Card, CardSection, Input, Spinner} from './common';
import {Banner} from "./WelcomeBanner";

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    },
    textStyle1: {
        fontSize: 50,
        color: '#EA9683',
        alignSelf: "center",
        paddingTop: 125
    },
    textStyle2: {
        fontSize: 50,
        alignSelf: "center",
        paddingBottom: 40
    }
};

class LoginForm extends Component {
    state = {
        email: '',
        password: '',
        error: '',
        loading: false
    };

    onButtonPress() {
        const {email, password} = this.state;

        this.setState({error: '', loading: true});

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase
                    .auth()
                    .createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFail.bind(this));
            });
    }

    onLoginFail() {
        this.setState({error: 'Authentication Failed', loading: false});
    }

    onLoginSuccess() {
        this.setState({email: '', password: '', loading: false, error: ''});
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner size="small"/>;
        }

        return (
            <Button
                onPress={this
                .onButtonPress
                .bind(this)}>
                Log In
            </Button>
        );
    }

    render() {
        return (
            <KeyboardAwareScrollView
                resetScrollToCoords={{
                x: 0,
                y: 0
            }}
                contentContainerStyle={styles.container}
                scrollEnabled={false}>
                <Banner/>

                <CardSection>
                    <Input
                        placeholder="user@gmail.com"
                        label="Email"
                        value={this.state.email}
                        onChangeText={email => this.setState({email})}/>
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        placeholder="password"
                        label="Password"
                        value={this.state.password}
                        onChangeText={password => this.setState({password})}/>
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
                <View style={{
                    height: 60
                }}/>
            </KeyboardAwareScrollView>
        );
    }
}

export default LoginForm;
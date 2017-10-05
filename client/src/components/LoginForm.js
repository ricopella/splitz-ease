import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import firebase from 'firebase';
import {connect} from 'react-redux';
import {emailChanged, passwordChanged, loginUser} from '../actions';
import {Button, Card, CardSection, Input, Spinner} from './common';
import {Banner} from "./WelcomeBanner";

const styles = {
    containerStyle: {
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    },
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
    onEmailChange(text) {
        this
            .props
            .emailChanged(text);
    }

    onPasswordChange(text) {
        this
            .props
            .passwordChanged(text);
    }

    onButtonPress() {
        const {email, password} = this.props;

        this
            .props
            .loginUser({email, password});
    }

    onLoginFail() {
        this.setState({error: 'Authentication Failed', loading: false});
    }

    onLoginSuccess() {
        this.setState({email: '', password: '', loading: false, error: ''});
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

                <View style={styles.containerStyle}>
                    <Banner/>

                    <CardSection>
                        <Input
                            placeholder="user@gmail.com"
                            label="Email"
                            value={this.props.email}
                            onChangeText={this
                            .onEmailChange
                            .bind(this)}/>
                    </CardSection>

                    <CardSection>
                        <Input
                            secureTextEntry
                            placeholder="password"
                            label="Password"
                            value={this.props.password}
                            onChangeText={this
                            .onPasswordChange
                            .bind(this)}/>
                    </CardSection>

                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>

                    <CardSection>
                        <Button
                            onPress={this
                            .onButtonPress
                            .bind(this)}>
                            Log In
                        </Button>
                    </CardSection>
                    <View style={{
                        height: 60
                    }}/>
                </View>
            </KeyboardAwareScrollView>
        );
    }
}

const mapStateToProps = ({auth}) => {
    const {email, password, error, loading} = auth;

    return {email, password, error, loading};
};

export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser})(LoginForm);
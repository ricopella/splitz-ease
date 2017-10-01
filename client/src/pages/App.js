import React, {Component} from 'react';
import {View, Text} from 'react-native';
import firebase from 'firebase';
import {Header, Button, Spinner} from "../components/common";
import LoginForm from '../components/LoginForm';

class App extends Component {
    state = {
        loggedIn: null
    };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyCChQI4JivNOHkakjY0Yx1R9CziFJh_9cg",
            authDomain: "splitz-ease.firebaseapp.com",
            databaseURL: "https://splitz-ease.firebaseio.com",
            projectId: "splitz-ease",
            storageBucket: "",
            messagingSenderId: "348025455260"
        });
        firebase
            .auth()
            .onAuthStateChanged((user) => {
                if (user) {
                    console.log("We're Logged in");
                    this.setState({loggedIn: true});
                } else {
                    console.log("We're not logged in");
                    this.setState({loggedIn: false});
                }
            });
    }
    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <Button onPress={() => firebase.auth().signOut()}>
                        Log Out
                    </Button>
                );
            case false:
                return <LoginForm/>;
            default:
                return <Spinner size="large"/>;
        }
    }

    render() {
        return (
            <View>
                <View>
                    <Header headerText="Welcome"/>
                </View>

                {this.renderContent()}
            </View>
        );
    }

}

export default App;
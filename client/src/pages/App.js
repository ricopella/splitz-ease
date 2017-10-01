import React, {Component} from 'react';
import {View, Text} from 'react-native';
import firebase from 'firebase';
import {Header, Button, Spinner} from "../components/common";
import LoginForm from '../components/LoginForm';

const styles = {
    containerStyle: {
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
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
    // containerText: {     flex: 1,     justifyContent: "center" }
};

// Auth login
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
                    <Text style={styles.textStyle1}>splitz</Text>
                    <Text style={styles.textStyle2}>ease</Text>
                </View>
                <View style={styles.containerStyle}>
                    {this.renderContent()}
                </View>
            </View>
        );
    }

}

export default App;
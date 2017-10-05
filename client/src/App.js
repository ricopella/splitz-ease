import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: "AIzaSyCChQI4JivNOHkakjY0Yx1R9CziFJh_9cg",
            authDomain: "splitz-ease.firebaseapp.com",
            databaseURL: "https://splitz-ease.firebaseio.com",
            projectId: "splitz-ease",
            storageBucket: "",
            messagingSenderId: "348025455260"
        };
        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <Router/>
            </Provider>
        )
    }
}

export default App;
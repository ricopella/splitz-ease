import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import AuthPage from './pages/AuthPage';
import grabReciept from './pages/grabReciept';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="main">
                <Scene key="login" component={AuthPage} title="Login"/>
                <Scene key="scanReciept" component={grabReciept} title="Grab Reciept"/>
            </Scene>
        </Router>
    )

}

export default RouterComponent;
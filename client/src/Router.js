import React from 'react';
import {Scene, Router, Actions, Stack} from 'react-native-router-flux';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import grabReciept from './pages/grabReciept';
import SplitEvenly from './pages/splitEvenly1';

const RouterComponent = () => {
    return (
        <Router>
            <Stack key="root" hideNavBar={true}>
                <Scene key="SplitEvenly" component={SplitEvenly} initial/>

                <Scene key="auth">
                    <Scene
                        key="loginPage"
                        component={LoginForm}
                        hideNavBar={true}
                        navigationBarStyle={{
                        backgroundColor: 'transparent',
                        marginTop: 8
                    }}/>
                </Scene>

                <Scene key="main">
                    <Scene
                        key="scanReciept"
                        component={grabReciept}
                        title="Grab Reciept"
                        onRight={() => firebase.auth().signOut().then(Actions.loginPage())}
                        rightTitle="Sign Out"/>
                </Scene>
            </Stack>
        </Router>
    )
}

export default RouterComponent;
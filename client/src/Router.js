import React from 'react';
import {Scene, Router, Actions, Stack} from 'react-native-router-flux';
import AuthPage from './pages/AuthPage';
import grabReciept from './pages/grabReciept';

const RouterComponent = () => {
    return (
        <Router>
            <Stack key="root" hideNavBar={true}>

                <Scene key="auth">
                    <Scene
                        key="login"
                        component={AuthPage}
                        title="Login"
                        navigationBarStyle={{
                        backgroundColor: 'transparent',
                        marginTop: 8
                    }}/>
                </Scene>

                <Scene key="main">
                    <Scene key="scanReciept" component={grabReciept} title="Grab Reciept"/>
                </Scene>
            </Stack>
        </Router>
    )
}

export default RouterComponent;
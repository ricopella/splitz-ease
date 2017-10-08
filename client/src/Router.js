import React from 'react';
import {Scene, Router, Actions, Stack} from 'react-native-router-flux';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import grabReciept from './pages/grabReciept';
import SplitEvenly from './pages/splitEvenly1';
import SplitEvenlyRequest from './pages/splitEventlyRequest';
import home from './pages/Home';
import ConfirmItemDetails from './pages/ConfirmItems';
import CategorizeItems from './pages/CategorizeItems';
import AddTax from './pages/AddTax';
import settings from './pages/Settings'

const RouterComponent = () => {
    return (
        <Router>
            <Stack key="root" hideNavBar={true}>
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

                    <Scene key="home" component={home} hideNavBar={true}/>
                    <Scene
                        key="scanReciept"
                        component={grabReciept}
                        title="Grab Reciept"
                        onRight={() => firebase.auth().signOut().then(Actions.loginPage())}
                        rightTitle="Sign Out"/>
                    <Scene key="ConfirmItemDetails" component={ConfirmItemDetails}/>
                    <Scene key="SplitEvenly" component={SplitEvenly}/>
                    <Scene key="CategorizeItems" component={CategorizeItems}/>
                    <Scene key="AddTip" component={AddTax}/>
                    <Scene key="splitEvenlyRequest" component={SplitEvenlyRequest}/>
                </Scene>

                <Scene key="settings" component={settings}/>
            </Stack>
        </Router>
    )
}

export default RouterComponent;
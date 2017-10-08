import React, {Component} from 'react';
// import Router from './Router';
import Home from './pages/Home';
import Camera from 'react-native-camera';
import { Image, Platform, PixelRatio, StyleSheet, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Badge, Thumbnail } from 'native-base';
import ConfirmItems from './pages/ConfirmItems';
import CategorizeItems from './pages/CategorizeItems';
import Settings from './pages/Settings';
import AddTax from './pages/AddTax';

class App extends Component {
    render() {
        return (<Settings/>)
    }
}

export default App;
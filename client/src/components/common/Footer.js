import React from 'react';
import {Text, View} from 'react-native';
import Button from './Button';

const styles = {
    footerStyle: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0
    }
}

const Footer = () => {
    const {footerStyle} = styles;
    return (
        <View style={footerStyle}>
            <Button>HOME</Button>
            <Button>SPLIT</Button>
            <Button>REQUEST</Button>
            <Button>SETTINGS</Button>
        </View>
    )
}

export {Footer};
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 20,
        paddingBottom: 20
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#EA9683',
        marginLeft: 5,
        marginRight: 5
    }
};

const Button = ({onPress, children}) => {
    const {buttonStyle, textStyle} = styles;

    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

export {Button};
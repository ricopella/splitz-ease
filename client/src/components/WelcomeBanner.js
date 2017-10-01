import React from 'react';
import {Text, View} from 'react-native';

const styles = {
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
};

const Banner = () => {
    return (

        <View>
            <Text style={styles.textStyle1}>splitz</Text>
            <Text style={styles.textStyle2}>ease</Text>
        </View>
    )
}

export {Banner};
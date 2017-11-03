import React from 'react';
import {Image, View} from 'react-native';

const styles = {
    ImageStyle: {
        marginTop: 150,
        marginBottom: 100,
        alignSelf: "center"
    }
};

const Banner = () => {
    return (

        <View>
            <Image
                source={require("../../public/assets/images/splitz-blue.png")}
                style={styles.ImageStyle}/>
        </View>
    )
}

export {Banner};
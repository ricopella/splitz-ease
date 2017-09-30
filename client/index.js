import React, {Component} from 'react';

// import {     Image,     Platform,     PixelRatio,     StyleSheet,     Text,
// TouchableNativeFeedback,     TouchableOpacity,     View } from
// 'react-native';

import Image from 'react-native';
import Platform from 'react-native';
import PixelRatio from 'react-native';
import StyleSheet from 'react-native';
import Text from 'react-native';
import TouchableNativeFeedback from 'react-native';
import TouchableOpacity from 'react-native';
import View from 'react-native';
import ImagePicker from 'react-native-image-picker';
import RNTesseractOcr from 'react-native-tesseract-ocr';

var Button = (Platform.OS === 'android')
    ? TouchableNativeFeedback
    : TouchableOpacity;

class App extends Component {
    state = {
        imgSource: null,
        ocrResult: null
    };

    selectPhoto() {
        const options = {
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
                skipBackup: true
            }
        };

        RNTesseractOcr
            .startOcr("./public/assets/images/food.jpg", "LANG_ENGLISH")
            .then((result) => {
                this.setState({ocrResult: result});
                console.log("OCR Result: ", result);
            })
            .catch((err) => {
                console.log("OCR Error: ", err);
            })
            .done();
    }
}

render() {
    return (
        <View style={styles.container}>
            <Button onPress={this
                .selectPhoto
                .bind(this)}>
                <View
                    style={[
                    styles.img,
                    styles.imgContainer, {
                        marginBottom: 20
                    }
                ]}>
                    {this.state.imgSource === null
                        ? <Text>Select a Photo</Text>
                        : <Image style={styles.img} source={this.state.imgSource}/>
}
                </View>
            </Button>

            <Text>OCR Result: {this.state.ocrResult}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgContainer: {
        borderColor: '#9B9B9B',
        borderWidth: 1 / PixelRatio.get(),
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        borderRadius: 75,
        width: 150,
        height: 150
    }
});

module.exports = App;
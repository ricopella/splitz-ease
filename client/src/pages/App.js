import React, {Component} from 'react';
import {
    Image,
    Platform,
    PixelRatio,
    StyleSheet,
    Text,
    TouchableNativeFeedback,
    TouchableOpacity,
    View
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import RNTesseractOcr from 'react-native-tesseract-ocr';
import {Header} from '../components/common';

var Button = (Platform.OS === 'android')
    ? TouchableNativeFeedback
    : TouchableOpacity;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        backgroundColor: "#8FC2C3"
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

class App extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            imgSource: null,
            ocrResult: null
        };
    }

    selectPhoto() {
        console.log("Reached me!");
        const options = {
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
                skipBackup: true
            }
        };

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled photo picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                var source;

                if (Platform.OS === 'android') {
                    source = {
                        uri: response.uri,
                        isStatic: true
                    };
                } else {
                    source = {
                        uri: response
                            .uri
                            .replace('file://', ''),
                        isStatic: true
                    };
                }

                this.setState({imgSource: source});

                RNTesseractOcr
                    .startOcr(response.path, "LANG_ENGLISH")
                    .then((result) => {
                        this.setState({ocrResult: result});
                        console.log("OCR Result: ", result);
                    })
                    .catch((err) => {
                        console.log("OCR Error: ", err);
                    })
                    .done();
            }
        });
    }

    render() {
        console.log("Hello1");
        console.log(this.state.ocrResult);
        const {container, img, imgContainer} = styles;
        return (
            <View style={container}>
                {this.state.imgSource === null
                    ? <Button
                            onPress={this
                            .selectPhoto
                            .bind(this)}>
                            <View
                                style={[
                                img,
                                imgContainer, {
                                    marginBottom: 20
                                }
                            ]}>
                                <Image style={img} source={require('../../public/assets/images/barcam.png')}/>
                            </View>
                        </Button>
                    : <Text>OCR Result: {this.state.ocrResult}</Text>
}
            </View>
        );
    }
}

export default App;
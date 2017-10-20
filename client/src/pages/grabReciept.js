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
import firebase from 'firebase';
import RNTesseractOcr from 'react-native-tesseract-ocr';
import Camera from 'react-native-camera';
import {Actions} from 'react-native-router-flux';
import {saveReceipt} from '../actions';
import {connect} from 'react-redux';
import {
    Container,
    Title,
    Content,
    Left,
    Right,
    Body,
    Badge,
    Thumbnail,
    TextInput,
    Input,
    Spinner,
    Header,
    Icon
} from 'native-base';

var Button = (Platform.OS === 'android')
    ? TouchableNativeFeedback
    : TouchableOpacity;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    imgContainer: {
        padding: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        padding: 60,
        width: 150,
        height: 150
    },
    bgImageContainer: {},
    lightHeaderText: {
        color: '#5E5E5E',
        fontWeight: '100',
        fontSize: 24,
        textAlign: 'center'
    },
    backdropView: {},
    backdropText: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: '500'
    },
    imageWrapper: {
        left: 0,
        right: 0,
        marginBottom: 60
    }
});

class grabReciept extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            imgSource: null
        };
    }

    componentWillMount() {
        console.log("This User:", this.props.user.uid);
    }
    saveReceipt(ocrResult) {
        this
            .props
            .saveReceipt(ocrResult);
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

                        const regex = /\d+.?\d*$/; //regex matching decimal value at end of line
                        let newResult = result;
                        console.log(newResult);

                        return newResult
                            .replace(/[|'"]+/g, '')
                            .split('\n')
                            .map(line => {
                                line = line.trim(); //trim whitespace
                                let index = line.search(regex); //returns index of beginning of match
                                return [
                                    line
                                        .substring(0, index)
                                        .trim(),
                                    line
                                        .substring(index)
                                        .trim()
                                ]; //return array of two trimmed strings
                            });

                    })
                    .then((result) => {
                        this.saveReceipt(result);
                        Actions.ConfirmItemDetails();
                    })
                    .catch((err) => {
                        console.log("OCR Error: ", err);
                    })
                    .done(console.log("done!"));
            }
        });
    }

    render() {
        console.log(this.state.ocrResult);
        const {
            container,
            img,
            imgContainer,
            bgImageContainer,
            imageWrapper,
            backdropText,
            backdropView,
            lightHeaderText
        } = styles;
        return (
            <View style={container}>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon
                                name='menu'
                                style={{
                                color: "#fff"
                            }}/>
                        </Button>
                    </Left>
                    <Body>
                        <View>
                            <Title>Grab Reciept</Title>
                        </View>

                    </Body>
                    <Right/>
                </Header>

                <View>
                    <Text
                        style={[
                        lightHeaderText, {
                            marginTop: 90
                        }
                    ]}>Select an image from your image library to get started.</Text>
                </View>
                <View style={imageWrapper}></View>
                <View>
                    {this.state.imgSource === null
                        ? <Button
                                onPress={this
                                .selectPhoto
                                .bind(this)}>
                                <View
                                    style={[
                                    img,
                                    imgContainer, {
                                        marginBottom: 20,
                                        marginLeft: 125
                                    }
                                ]}>
                                    <Image source={require('../../public/assets/images/scan.png')}/>
                                </View>

                            </Button>
                        : <Spinner color='blue'/>
}
                </View>

            </View>
        );
    }
}

const mapStateToProps = ({auth, saveReceipt}) => {
    const {user} = auth;
    const {ocrResult} = saveReceipt;

    return {user, ocrResult};
};

export default connect(mapStateToProps, {saveReceipt})(grabReciept);
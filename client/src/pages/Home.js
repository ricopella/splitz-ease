import React, { Component } from 'react';
import {
    Image,
    Platform,
    PixelRatio,
    StyleSheet,
    // Text,
    TouchableNativeFeedback,
    TouchableOpacity,
    View
} from 'react-native';

import {
    Container,
    Header,
    Title,
    Content,
    Footer,
    FooterTab,
    Button,
    Left,
    Right,
    Body,
    Icon,
    Text,
    Badge, 
    Thumbnail
} from 'native-base';

// import ImagePicker from 'react-native-image-picker';
// import firebase from 'firebase';
// import RNTesseractOcr from 'react-native-tesseract-ocr';
// import { Header } from '../components/common';

// var Button = (Platform.OS === 'android')
//     ? TouchableNativeFeedback
//     : TouchableOpacity;

const styles = StyleSheet.create({
    actionButtons: {
        width: 140,
        alignItems: 'center'
    },
    currentBalance: {
        fontWeight: '800',
        fontSize: 40,
        color: '#8FC2C3'
    },
    paymentHeader: {
        fontWeight: '800',
        fontSize: 25,
        color: '#626262'
    },
    negativePayment: {
        fontWeight: '300',
        fontSize: 22,
        color: '#FF8989',
        alignSelf: 'flex-end'
    },
    friendImage: {
        paddingRight: 20
    },
    paddIt: {
        paddingTop: 20,
        paddingLeft: 10
    }
});

class home extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            imgSource: null,
            ocrResult: null
        };
    }

    render() {

        const {
            actionButtons,
            currentBalance,
            paymentHeader,
            negativePayment,
            friendImage,
            paddIt
        } = styles;
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Home</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    {/* Current Balance */}
                    <View style={[{ flex: 1, flexDirection: 'row' }, paddIt]}>
                        <Text>Current Balance</Text>
                        <Text style={currentBalance}>$54.45</Text>
                    </View>
                    {/* Action buttons */}
                    <View style={[{ flex: 1, flexDirection: 'row' }]}>
                        <Button style={actionButtons} primary><Text> Pay </Text></Button>
                        <Button style={actionButtons} success><Text> Request </Text></Button>
                        <Button style={actionButtons} danger><Text> Transfer </Text></Button>
                    </View>
                    {/* Recent Activity */}
                    <View style={[{ flex: 1, flexDirection: 'row' }, paddIt]}>
                        <View style={friendImage}>
                            <Thumbnail source={require('./../../public/assets/images/emily.jpeg')} />
                        </View>
                        <Text>
                            <Text style={paymentHeader}>Paid Emily{"\n"}</Text>
                            <Text>2 days ago</Text>
                        </Text>
                        <Text style={negativePayment}>-23.45</Text>
                    </View>
                </Content>

                <Footer>
                    <FooterTab>
                        <Button vertical active>
                            <Icon name="home" />
                            <Text>Home</Text>
                        </Button>
                        <Button vertical>
                            <Icon name="shuffle" />
                            <Text>Split</Text>
                        </Button>
                        <Button badge vertical>
                            <Badge><Text>2</Text></Badge>
                            <Icon active name="list" />
                            <Text>Requests</Text>
                        </Button>
                        <Button vertical>
                            <Icon name="person" />
                            <Text>Settings</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

export default home;
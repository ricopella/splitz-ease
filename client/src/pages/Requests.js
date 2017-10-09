import React, { Component } from 'react';
import { Image, StyleSheet, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native';
import { Container, Header, Title, Content, Button, Left, Right, Body, Icon, Text, Badge, Thumbnail } from 'native-base';
import Nav from './../components/common/Nav';

const styles = StyleSheet.create({
    actionButtons: {
        width: 140,
        alignItems: 'center'
    },
    currentBalanceAmount: {
        fontWeight: '800',
        fontSize: 40,
        color: '#8FC2C3'
    },
    currentBalanceText: {
        fontWeight: '100',
        fontSize: 22,
        color: '#5A5A5A'
    },
    alignRight: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingRight: 20
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
    positivePayment: {
        fontWeight: '300',
        fontSize: 22,
        color: '#70CB9D',
        alignSelf: 'flex-end'
    },
    friendImage: {
        paddingRight: 20
    },
    paddIt: {
        padding: 20
    }
});

class Requests extends Component {
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
            currentBalanceAmount,
            currentBalanceText,
            paymentHeader,
            negativePayment,
            friendImage,
            paddIt,
            alignRight,
            positivePayment
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
                    {/* Recent Activity */}
                    <View style={[{ flex: 1, flexDirection: 'row' }, paddIt]}>
                        <View style={friendImage}>
                            <Thumbnail source={require('./../../public/assets/images/emily.jpeg')} />
                        </View>
                        <View>
                            <Text>
                                <Text style={paymentHeader}>Paid Emily{"\n"}</Text>
                                <Text>2 days ago</Text>
                            </Text>
                        </View>
                        <View style={alignRight}>
                            <Text style={negativePayment}>-23.45</Text>
                        </View>
                    </View>
                    <View style={[{ flex: 1, flexDirection: 'row' }, paddIt]}>
                        <View style={friendImage}>
                            <Thumbnail source={require('./../../public/assets/images/connor.jpeg')} />
                        </View>
                        <View>
                            <Text>
                                <Text style={paymentHeader}>Connor Paid{"\n"}</Text>
                                <Text>2 days ago</Text>
                            </Text>
                        </View>
                        <View style={alignRight}>
                            <Text style={positivePayment}>13.32</Text>
                        </View>
                    </View>
                
                    <View style={[{ flex: 1, flexDirection: 'row' }, paddIt]}>
                        <View style={friendImage}>
                            <Thumbnail source={require('./../../public/assets/images/emily.jpeg')} />
                        </View>
                        <View>
                            <Text>
                                <Text style={paymentHeader}>Paid Emily{"\n"}</Text>
                                <Text>2 days ago</Text>
                            </Text>
                        </View>
                        <View style={alignRight}>
                            <Text style={negativePayment}>-23.45</Text>
                        </View>
                    </View>
                    <View style={[{ flex: 1, flexDirection: 'row' }, paddIt]}>
                        <View style={friendImage}>
                            <Thumbnail source={require('./../../public/assets/images/connor.jpeg')} />
                        </View>
                        <View>
                            <Text>
                                <Text style={paymentHeader}>Connor Paid{"\n"}</Text>
                                <Text>2 days ago</Text>
                            </Text>
                        </View>
                        <View style={alignRight}>
                            <Text style={positivePayment}>13.32</Text>
                        </View>
                    </View>
                
                    <View style={[{ flex: 1, flexDirection: 'row' }, paddIt]}>
                        <View style={friendImage}>
                            <Thumbnail source={require('./../../public/assets/images/emily.jpeg')} />
                        </View>
                        <View>
                            <Text>
                                <Text style={paymentHeader}>Paid Emily{"\n"}</Text>
                                <Text>2 days ago</Text>
                            </Text>
                        </View>
                        <View style={alignRight}>
                            <Text style={negativePayment}>-23.45</Text>
                        </View>
                    </View>
                    <View style={[{ flex: 1, flexDirection: 'row' }, paddIt]}>
                        <View style={friendImage}>
                            <Thumbnail source={require('./../../public/assets/images/connor.jpeg')} />
                        </View>
                        <View>
                            <Text>
                                <Text style={paymentHeader}>Connor Paid{"\n"}</Text>
                                <Text>2 days ago</Text>
                            </Text>
                        </View>
                        <View style={alignRight}>
                            <Text style={positivePayment}>13.32</Text>
                        </View>
                    </View>
                
                    <View style={[{ flex: 1, flexDirection: 'row' }, paddIt]}>
                        <View style={friendImage}>
                            <Thumbnail source={require('./../../public/assets/images/emily.jpeg')} />
                        </View>
                        <View>
                            <Text>
                                <Text style={paymentHeader}>Paid Emily{"\n"}</Text>
                                <Text>2 days ago</Text>
                            </Text>
                        </View>
                        <View style={alignRight}>
                            <Text style={negativePayment}>-23.45</Text>
                        </View>
                    </View>
                    <View style={[{ flex: 1, flexDirection: 'row' }, paddIt]}>
                        <View style={friendImage}>
                            <Thumbnail source={require('./../../public/assets/images/connor.jpeg')} />
                        </View>
                        <View>
                            <Text>
                                <Text style={paymentHeader}>Connor Paid{"\n"}</Text>
                                <Text>2 days ago</Text>
                            </Text>
                        </View>
                        <View style={alignRight}>
                            <Text style={positivePayment}>13.32</Text>
                        </View>
                    </View>
                
                </Content>
                {/* <Nav /> */}
                <Nav />
            </Container>
        );
    }
    /* takePicture() {
        const options = {};
        //options.location = ...
        this.camera.capture({ metadata: options })
            .then((data) => console.log(data))
            .catch(err => console.error(err));
    } */
}

export default Requests;
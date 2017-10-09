import React, { Component } from 'react';
import { StyleSheet, TouchableNativeFeedback, TouchableOpacity, View, Image } from 'react-native';

import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Left,
    Right,
    Body,
    Icon,
    Text
} from 'native-base';
import Nav from './../components/common/Nav';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
    paddIt: {
        padding: 20
    },
    lightHeaderText: {
        color: '#5E5E5E',
        fontWeight: '400',
        fontSize: 24,
        textAlign: 'center'
    },
    successText: {
        fontSize: 18, 
        color: '#5E5E5E',
        textAlign: 'center'
    }
});

class ConfirmItems extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {

        };
    }


    render() {

        const {
            paddIt,
            successText,
            lightHeaderText
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
                        <View>
                            <Title>Congrats!</Title>
                        </View>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    {/* Sub heading */}
                    <View style={{justifyContent: 'center',
                            alignItems: 'center'}}>
                        <Image style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: 80
                        }} source={require('./../../public/assets/images/congrats.png')} />
                    </View>
                    <View
                        style={[
                            {
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "center"
                            },
                            paddIt
                        ]}>
                        <View>
                            <Text style={lightHeaderText}>You've Splitzeased!</Text>
                        </View>
                        <View style={paddIt}>
                            <Text style={successText}>Your payment requests have successfully been sent to your friends. Thanks for using Splitsease!</Text>
                        </View>
                    </View>

                </Content>
                <Nav />
            </Container>
        );
    }
}

export default ConfirmItems;
import React, { Component } from 'react';
import { StyleSheet, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native';

import { Container, Header, Title, Content, Button, Left, Right, Body, Icon, Text, Badge } from 'native-base';
import Nav from './../components/common/Nav';

const styles = StyleSheet.create({
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
    paddIt: {
        padding: 20
    },
    lightHeaderText: {
        color: '#5E5E5E',
        fontWeight: '100',
        fontSize: 24,
        textAlign: 'center'
    },
    itemText: {
        fontSize: 22
    },
    itemPrice: {
        fontSize: 22
    },
    itemPadding: {
        paddingTop: 5,
        paddingBottom: 5,
        paddingRight: 20,
        paddingLeft: 20
    },
    splitButton: {
        alignSelf: 'center'
    }
});

class ConfirmItems extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            imgSource: null,
            ocrResult: null
        };
    }

    render() {

        const {
            paddIt,
            alignRight,
            lightHeaderText,
            itemText,
            itemPrice,
            itemPadding,
            splitButton
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
                            <Title>Confirm Details</Title>
                        </View>
                        
                    </Body>
                    <Right />
                </Header>
                <Content>
                    {/* Sub heading */}
                    <View style={[{flex: 1,justifyContent: "center", alignItems: "center"}, paddIt]}>
                        <View>
                            <Text style={lightHeaderText}>Do these prices look right?</Text>
                        </View>
                    </View>
                    {/* Recent Activity */}
                    <View style={[{ flex: 1, flexDirection: 'row' }, itemPadding]}>
                        <View>
                            <Text style={itemText}>Levian Bread</Text>
                        </View>
                        <View style={alignRight}>
                            <Text style={itemPrice}>4.00</Text>
                        </View>
                    </View>
                    <View style={[{ flex: 1, flexDirection: 'row' }, itemPadding]}>
                        <View>
                            <Text style={itemText}>Doughnuts</Text>
                        </View>
                        <View style={alignRight}>
                            <Text style={itemPrice}>8.00</Text>
                        </View>
                    </View>
                    <View style={[{ flex: 1, flexDirection: 'row' }, itemPadding]}>
                        <View>
                            <Text style={itemText}>Lasagne</Text>
                        </View>
                        <View style={alignRight}>
                            <Text style={itemPrice}>14.00</Text>
                        </View>
                    </View>
                    <View style={[{ flex: 1, flexDirection: 'row' }, itemPadding]}>
                        <View>
                            <Text style={itemText}>Bread Pudding</Text>
                        </View>
                        <View style={alignRight}>
                            <Text style={itemPrice}>9.00</Text>
                        </View>
                    </View>
                    <View style={[{ flex: 1, flexDirection: 'row' }, itemPadding]}>
                        <View>
                            <Text style={itemText}>Tax</Text>
                        </View>
                        <View style={alignRight}>
                            <Text style={itemPrice}>3.33</Text>
                        </View>
                    </View>
                    <View style={[{ flex: 1, flexDirection: 'row' }, itemPadding]}>
                        <View>
                            <Text style={itemText}>Total</Text>
                        </View>
                        <View style={alignRight}>
                            <Text style={itemPrice}>38.38</Text>
                        </View>
                    </View>
                    <View style={[paddIt, splitButton]}>
                        <Button success><Text style={itemText}> Splitz These </Text></Button>
                    </View>
                    {/* <View>
                        <Camera ref={(cam) => { this.camera = cam; }} style={styles.preview} aspect={Camera.constants.Aspect.fill}>
                            <Text onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
                        </Camera>
                    </View> */}
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

export default ConfirmItems;
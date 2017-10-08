import React, { Component } from 'react';
import { Image, Platform, PixelRatio, StyleSheet, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native';
import { Root, Container, Header, Title, Content, FooterTab, Button, Left, Right, Body, Icon, Text, Badge, Thumbnail, ActionSheet, List, ListItem } from 'native-base';
import Camera from 'react-native-camera';
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
        // paddingLeft: 30
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
        fontSize: 20
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

class Settings extends Component {
    // .then(response => this.setState({ albums: response.data }));

    constructor(props) {
        super(props);
        // this.state = {};
    }
    componentWillMount() {
        console.log("mounting comp");
    }

    render() {
        console.log(this.state);

        const {
            paddIt,
            alignRight,
            itemText,
            splitButton,
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
                            <Title>Settings</Title>
                        </View>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    {/* <View style={[{ flex: 1, justifyContent: "center", alignItems: "center" }, paddIt]}>
                        <View>
                            <Text style={lightHeaderText}>Please categorize the orders.</Text>
                        </View>
                    </View>

                    <View style={[paddIt, splitButton]}>
                        <Button success><Text style={itemText}> Send Requests </Text></Button>
                    </View> */}
                    <List>
                        <ListItem>
                            <Text>My Account</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Social Applications</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Sign Out</Text>
                        </ListItem>
                    </List>
                </Content>
                <Nav />
            </Container>
        );
    }
}

export default Settings;
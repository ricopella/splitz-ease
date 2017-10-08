import React, { Component } from 'react';
import { StyleSheet, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native';
import { Root, Container, Header, Title, Content, Button, Left, Right, Body, Icon, Text, ActionSheet } from 'native-base';
import Camera from 'react-native-camera';
import Nav from './../components/common/Nav';

const BUTTONS = [
    { text: "Person 1", icon: "american-football", iconColor: "#2c8ef4" },
    { text: "Person 2", icon: "analytics", iconColor: "#f42ced" },
    { text: "Person 3", icon: "aperture", iconColor: "#ea943b" },
    { text: "Person 4", icon: "trash", iconColor: "#fa213b" },
    { text: "Cancel", icon: "close", iconColor: "#25de5b" }
];
const DESTRUCTIVE_INDEX = 3;
const CANCEL_INDEX = 4;
const ICON_SIZE = 24;


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

class ConfirmItems extends Component {
    
    state = { 
        data: [],
        itemOne: 0,
        itemTwo: 0,
        itemThree: 0
    };
    
    // .then(response => this.setState({ albums: response.data }));

    constructor(props) {
        super(props);
        // this.state = {};
    }
    componentWillMount () {
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
            <Root>
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
                    <View style={[{flex: 1,justifyContent: "center", alignItems: "center"}, paddIt]}>
                        {/* <View> */}
                            <Text style={lightHeaderText}>Please categorize the orders.</Text>
                        {/* </View> */}
                    </View>
                        <View style={[{ flex: 1, flexDirection: 'row' }, paddIt]}>
                            <View>
                                <Text>
                                    <Text style={itemText}>Doughnuts{'\n'}</Text>
                                    <Text>8.00</Text>
                                </Text>
                            </View>
                                <View style={alignRight}>
                                    <Button
                                        onPress={() =>
                                            ActionSheet.show(
                                                {
                                                    options: BUTTONS,
                                                    cancelButtonIndex: CANCEL_INDEX,
                                                    destructiveButtonIndex: DESTRUCTIVE_INDEX,
                                                    title: "Testing ActionSheet"
                                                },
                                                buttonIndex => {
                                                    this.setState({ clicked: BUTTONS[buttonIndex] });
                                                    console.log(this.state);
                                                })}>
                                        <Text>0</Text>
                                    </Button>
                                {/* </Content> */}
                            </View>
                        </View>

                        <View style={[{ flex: 1, flexDirection: 'row' }, paddIt]}>
                            <View>
                                <Text>
                                    <Text style={itemText}>Levian Bread{'\n'}</Text>
                                    <Text>4.00</Text>
                                </Text>
                            </View>
                            <View style={alignRight}>
                                    <Button
                                        onPress={() =>
                                            ActionSheet.show(
                                                {
                                                    options: BUTTONS,
                                                    cancelButtonIndex: CANCEL_INDEX,
                                                    destructiveButtonIndex: DESTRUCTIVE_INDEX,
                                                    title: "Testing ActionSheet"
                                                },
                                                buttonIndex => {
                                                    this.setState({ clicked: BUTTONS[buttonIndex] });
                                                })}>
                                        <Text>1</Text>
                                    </Button>
                                {/* </Content> */}
                            </View>
                        </View>

                        <View style={[{ flex: 1, flexDirection: 'row' }, paddIt]}>
                            <View>
                                <Text>
                                    <Text style={itemText}>Lasagne{'\n'}</Text>
                                    <Text>14.00</Text>
                                </Text>
                            </View>
                            <View style={alignRight}>
                                    <Button
                                        onPress={() =>
                                            ActionSheet.show(
                                                {
                                                    options: BUTTONS,
                                                    cancelButtonIndex: CANCEL_INDEX,
                                                    destructiveButtonIndex: DESTRUCTIVE_INDEX,
                                                    title: "Testing ActionSheet"
                                                },
                                                buttonIndex => {
                                                    this.setState({ clicked: BUTTONS[buttonIndex] });
                                                })}>
                                        <Text>0</Text>
                                    </Button>
                                {/* </Content> */}
                            </View>
                        </View>

                        <View style={[{ flex: 1, flexDirection: 'row' }, paddIt]}>
                            <View>
                                <Text>
                                    <Text style={itemText}>Bread Pudding{'\n'}</Text>
                                    <Text>6.00</Text>
                                </Text>
                            </View>
                            <View style={alignRight}>
                                    <Button
                                        onPress={() =>
                                            ActionSheet.show(
                                                {
                                                    options: BUTTONS,
                                                    cancelButtonIndex: CANCEL_INDEX,
                                                    destructiveButtonIndex: DESTRUCTIVE_INDEX,
                                                    title: "Testing ActionSheet"
                                                },
                                                buttonIndex => {
                                                    this.setState({ clicked: BUTTONS[buttonIndex] });
                                                })}>
                                        <Text>0</Text>
                                    </Button>
                                {/* </Content> */}
                            </View>
                        </View>

                        <View style={[{ flex: 1, flexDirection: 'row' }, paddIt]}>
                            <View>
                                <Text>
                                    <Text style={itemText}>Levian Bread{'\n'}</Text>
                                    <Text>4.00</Text>
                                </Text>
                            </View>
                            <View style={alignRight}>
                                    <Button
                                        onPress={() =>
                                            ActionSheet.show(
                                                {
                                                    options: BUTTONS,
                                                    cancelButtonIndex: CANCEL_INDEX,
                                                    destructiveButtonIndex: DESTRUCTIVE_INDEX,
                                                    title: "Testing ActionSheet"
                                                },
                                                buttonIndex => {
                                                    this.setState({ clicked: BUTTONS[buttonIndex] });
                                                })}>
                                        <Text>0</Text>
                                    </Button>
                                {/* </Content> */}
                            </View>
                        </View>

                        <View style={[{ flex: 1, flexDirection: 'row' }, paddIt]}>
                            <View>
                                <Text>
                                    <Text style={itemText}>Levian Bread{'\n'}</Text>
                                    <Text>4.00</Text>
                                </Text>
                            </View>
                            <View style={alignRight}>
                                    <Button
                                        onPress={() =>
                                            ActionSheet.show(
                                                {
                                                    options: BUTTONS,
                                                    cancelButtonIndex: CANCEL_INDEX,
                                                    destructiveButtonIndex: DESTRUCTIVE_INDEX,
                                                    title: "Testing ActionSheet"
                                                },
                                                buttonIndex => {
                                                    this.setState({ clicked: BUTTONS[buttonIndex] });
                                                })}>
                                        <Text>0</Text>
                                    </Button>
                                {/* </Content> */}
                            </View>
                        </View>
                        
                        <View style={[paddIt, splitButton]}>
                            <Button success><Text style={itemText}> Send Requests </Text></Button>
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
            </Root>
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
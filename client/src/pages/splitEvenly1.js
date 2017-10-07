import React, {Component} from 'react';
import {
    Image,
    Platform,
    PixelRatio,
    StyleSheet,
    TouchableNativeFeedback,
    TouchableOpacity,
    View
} from 'react-native';
import {Actions} from 'react-native-router-flux';

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
    Text,
    Badge,
    Thumbnail,
    Picker,
    Form,
    Item as FormItem
} from 'native-base';
import Nav from './../components/common/Nav';

const Item = Picker.Item;

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
    pickerStyles: {
        width: 75,
        alignSelf: "center"
    },
    lightHeaderText: {
        color: '#5E5E5E',
        fontWeight: '100',
        fontSize: 24,
        textAlign: 'center',
        width: 250
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
        alignSelf: 'center',
        marginTop: 30
    }
});

class SplitEvenly extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            selected: undefined
        };
    }

    onValueChange2(value : string) {
        this.setState({selected: value});
    }
    onButtonPress() {
        Actions.splitEvenlyRequest({selected: this.state.selected});
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
            positivePayment,
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
                            <Icon name='menu'/>
                        </Button>
                    </Left>
                    <Body>
                        <View>
                            <Title>Split Evenly</Title>
                        </View>

                    </Body>
                    <Right/>
                </Header>
                <Content>
                    {/* Sub heading */}
                    <View
                        style={[
                        {
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: 100
                        },
                        paddIt
                    ]}>
                        <View>
                            <Text style={lightHeaderText}>How many people in your party?</Text>
                        </View>
                    </View>
                    <Form>
                        <Picker
                            mode="dropdown"
                            style={styles.pickerStyles}
                            placeholder="Select One"
                            selectedValue={this.state.selected}
                            onValueChange={this
                            .onValueChange2
                            .bind(this)}>
                            <Item label="1" value="1"/>
                            <Item label="2" value="2"/>
                            <Item label="3" value="3"/>
                            <Item label="4" value="4"/>
                            <Item label="5" value="5"/>
                            <Item label="6" value="6"/>
                            <Item label="7" value="7"/>
                            <Item label="8" value="8"/>
                            <Item label="9" value="9"/>
                            <Item label="10" value="10"/>

                        </Picker>
                    </Form>

                    {/* Recent Activity */}
                    <View style={[paddIt, splitButton]}>
                        <Button
                            success
                            onPress={this
                            .onButtonPress
                            .bind(this)}>
                            <Text style={itemText}>
                                Total Up
                            </Text>
                        </Button>
                    </View>
                </Content>
                {/* <Nav /> */}
                <Nav/>
            </Container>
        );
    }
}

export default SplitEvenly;
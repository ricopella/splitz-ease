import React, {Component} from 'react';
import {StyleSheet, TouchableNativeFeedback, TouchableOpacity, View, ScrollView} from 'react-native';

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
    Input
} from 'native-base';
import Nav from './../components/common/Nav';
import {Actions} from 'react-native-router-flux';

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
    },
    textInput: {
        width: 218,
        height: 40,
        backgroundColor: "#fff",
        fontSize: 18,
        marginRight: 45,
        paddingLeft: 10
    },
    numInput: {
        width: 80,
        height: 40,
        backgroundColor: "#fff",
        fontSize: 18,
        marginRight: 45,
        paddingLeft: 10
    }
});

class ConfirmItems extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            imgSource: null,
            ocrResult: null,
            total: undefined,
            tax: undefined
        };
    }

    // update items
    handleInputChange(i, value) {

        let updatedItem = this.props.ocrResult[i];
        updatedItem[0] = value;

        this.setState({ocrResult: updatedItem});
    }

    // update prices
    handleInputChange1(i, value) {
        console.log(i);
        let updatedItem1 = this.props.ocrResult[i];
        updatedItem1[1] = value;
        // this.generateTotal();
        this.setState({ocrResult: updatedItem1});
    }

    componentWillMount() {
        console.log(this.props);
        this.generateTotal();
    }

    generateTotal() {
        let totalAmount = 0;
        for (let i = 0; i < this.props.ocrResult.length; i++) {
            console.log(totalAmount);
            totalAmount += Number(this.props.ocrResult[i][1]);
        }

        let taxAmount = (totalAmount * .095).toFixed(2);
        totalAmount = (Number(totalAmount) + Number(taxAmount)).toFixed(2);
        console.log("Tax: ", taxAmount);
        console.log("Total: ", totalAmount);
        this.setState({total: totalAmount, tax: taxAmount});

    }

    goToNextPage() {
        Actions.SplitEvenly({ocrResult: this.props.ocrResult, total: this.state.total, tax: this.state.tax, uid: this.props.uid});
    }

    render() {

        const {
            paddIt,
            alignRight,
            lightHeaderText,
            itemText,
            itemPrice,
            itemPadding,
            splitButton,
            textInput,
            numInput
        } = styles;

        return (
            <ScrollView scrollEnabled={false}>
                <Container>
                    <Header>
                        <Left>
                            <Button transparent>
                                <Icon name='menu'/>
                            </Button>
                        </Left>
                        <Body>
                            <View>
                                <Title>Confirm Details</Title>
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
                                alignItems: "center"
                            },
                            paddIt
                        ]}>
                            <View>
                                <Text style={lightHeaderText}>Do these prices look right?</Text>
                            </View>
                        </View>
                        {/* Recent Activity */}

                        {this
                            .props
                            .ocrResult
                            .map((val, i) => (
                                <View
                                    key={i}
                                    style={[
                                    {
                                        flex: 1,
                                        flexDirection: 'row'
                                    },
                                    itemPadding
                                ]}>
                                    <View key={i}>
                                        <Input
                                            key={i}
                                            style={textInput}
                                            onChangeText={this
                                            .handleInputChange
                                            .bind(this, i)}
                                            value={val[0]}/>
                                    </View>
                                    <View>
                                        <Input
                                            key={val}
                                            style={numInput}
                                            keyboardType={'numeric'}
                                            onChangeText={this
                                            .handleInputChange1
                                            .bind(this, i)}
                                            value={(this.props.ocrResult)[i][1].toString()}/>
                                    </View>
                                </View>
                            ))}

                        <View
                            style={[
                            {
                                flex: 1,
                                flexDirection: 'row'
                            },
                            itemPadding
                        ]}>
                            <View>
                                <Text style={itemText}>Tax</Text>
                            </View>
                            <View style={alignRight}>
                                <Text style={itemPrice}>{this.state.tax}</Text>
                            </View>
                        </View>
                        <View
                            style={[
                            {
                                flex: 1,
                                flexDirection: 'row'
                            },
                            itemPadding
                        ]}>
                            <View>
                                <Text style={itemText}>Total</Text>
                            </View>
                            <View style={alignRight}>
                                <Text style={itemPrice}>{this.state.total}</Text>
                            </View>
                        </View>
                        <View style={[paddIt, splitButton]}>
                            <Button
                                success
                                onPress={this
                                .goToNextPage
                                .bind(this)}>
                                <Text style={itemText}>
                                    Splitz These
                                </Text>
                            </Button>
                        </View>
                    </Content>
                    <Nav/>
                </Container>
            </ScrollView>
        );
    }
}

export default ConfirmItems;
import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Nav from './../components/common/Nav';
import {updateTip, updateReceipt} from '../actions';
import {connect} from 'react-redux';
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
    Radio,
    Item,
    Input
} from 'native-base';

const styles = StyleSheet.create({
    alignRight: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
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
        fontSize: 22,
        marginTop: 0,
        paddingTop: 0
    },
    itemPrice: {
        fontSize: 20
    },
    radioStyle: {
        paddingRight: 20
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
    numInput: {
        width: 150,
        height: 40,
        backgroundColor: "#fff",
        fontSize: 18,
        marginRight: 10,
        marginLeft: 80,
        paddingLeft: 10
    }
});

class AddTax extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tipAmount: {
                tenPercent: false,
                fifteenPercent: false,
                twentyPercent: false,
                custom: false
            },
            customTip: null
        }
    }
    componentWillMount() {
        let tipTen = (this.props.total * .10).toFixed(2);
        let tipFifteen = (this.props.total * .15).toFixed(2);
        let tipTwenty = (this.props.total * .20).toFixed(2);
        this
            .props
            .updateTip(tipTen, tipFifteen, tipTwenty);
    }

    nextComponent() {
        Actions.splitEvenlyRequest({customTip: this.state.customTip, tipAmount: this.state.tipAmount})
    }

    handleInputChange(value) {
        this.setState({customTip: value});
    }

    render() {

        const {
            paddIt,
            alignRight,
            itemText,
            splitButton,
            lightHeaderText,
            radioStyle,
            numInput
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
                            <Title>Confirm Details</Title>
                        </View>
                    </Body>
                    <Right/>
                </Header>
                <Content>
                    {/* Title */}
                    <View
                        style={[
                        {
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center"
                        },
                        paddIt
                    ]}>
                        {/* <View> */}
                        <Text style={lightHeaderText}>How much tip would you like to add?</Text>
                        {/* </View> */}
                    </View>
                    {/* Content */}
                    <View>
                        <View
                            style={[
                            {
                                flex: 1,
                                flexDirection: 'row'
                            },
                            paddIt
                        ]}>
                            <View style={radioStyle}>
                                <Radio
                                    selected={this.state.tipAmount.tenPercent}
                                    onPress={() => this.setState({
                                    tipAmount: {
                                        tenPercent: !this.state.tipAmount.tenPercent
                                    }
                                })}
                                    style={{
                                    padding: 10
                                }}/>
                            </View>
                            <View>
                                <Text >
                                    <Text style={itemText}>Service Sucked{'\n'}</Text>
                                    <Text>10% Tip</Text>
                                </Text>
                            </View>
                            <View style={alignRight}>
                                <Text style={itemText}>${this.props.tipTen}</Text>
                            </View>
                        </View>
                        <View
                            style={[
                            {
                                flex: 1,
                                flexDirection: 'row'
                            },
                            paddIt
                        ]}>
                            <View style={radioStyle}>
                                <Radio
                                    selected={this.state.tipAmount.fifteenPercent}
                                    onPress={() => this.setState({
                                    tipAmount: {
                                        fifteenPercent: !this.state.tipAmount.fifteenPercent
                                    }
                                })}
                                    style={{
                                    padding: 10
                                }}/>
                            </View>
                            <View>
                                <Text >
                                    <Text style={itemText}>Good Service{'\n'}</Text>
                                    <Text>15% Tip</Text>
                                </Text>
                            </View>
                            <View style={alignRight}>
                                <Text style={itemText}>${this.props.tipFifteen}</Text>
                            </View>
                        </View>
                        <View
                            style={[
                            {
                                flex: 1,
                                flexDirection: 'row'
                            },
                            paddIt
                        ]}>
                            <View style={radioStyle}>
                                <Radio
                                    selected={this.state.tipAmount.twentyPercent}
                                    onPress={() => this.setState({
                                    tipAmount: {
                                        twentyPercent: !this.state.tipAmount.twentyPercent
                                    }
                                })}
                                    style={{
                                    padding: 10
                                }}/>
                            </View>
                            <View>
                                <Text >
                                    <Text style={itemText}>Great Service{'\n'}</Text>
                                    <Text>20% Tip</Text>
                                </Text>
                            </View>
                            <View style={alignRight}>
                                <Text style={itemText}>${this.props.tipTwenty}</Text>
                            </View>
                        </View>

                        <View
                            style={[
                            {
                                flex: 1,
                                flexDirection: 'row'
                            },
                            paddIt
                        ]}>
                            <View style={radioStyle}>
                                <Radio
                                    selected={this.state.tipAmount.custom}
                                    onPress={() => this.setState({
                                    tipAmount: {
                                        custom: !this.state.tipAmount.custom
                                    }
                                })}
                                    style={{
                                    padding: 10
                                }}/>
                            </View>
                            <View>
                                <Text >
                                    <Text style={itemText}>Custom Tip{'\n'}</Text>
                                </Text>
                            </View>
                            <View style={alignRight}>
                                <Input
                                    style={[itemText, numInput]}
                                    keyboardType={'numeric'}
                                    placeholder='$0.00'
                                    onChangeText={this
                                    .handleInputChange
                                    .bind(this)}
                                    value={this.state.customTip}/>
                            </View>
                        </View>

                        <View style={[paddIt, splitButton]}>
                            <Button
                                success
                                onPress={this
                                .nextComponent
                                .bind(this)}>
                                <Text style={itemText}>
                                    Add Tip
                                </Text>
                            </Button>
                        </View>
                    </View>
                </Content>
                {/* <Nav /> */}
                <Nav/>
            </Container>
        );
    }
}

const mapStateToProps = ({updateTip, updateReceipt}) => {
    const {tipTen, tipFifteen, tipTwenty} = updateTip;
    const {total, tax} = updateReceipt;

    return {tipTen, tipFifteen, tipTwenty, total, tax};
};

export default connect(mapStateToProps, {updateTip, updateReceipt})(AddTax);
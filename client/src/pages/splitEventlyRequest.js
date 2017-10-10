import React, {Component} from 'react';
import {StyleSheet, TouchableNativeFeedback, TouchableOpacity, View} from 'react-native';

import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Left,
    Right,
    Body,
    Text,
    Badge,
    Thumbnail,
    TextInput,
    Input
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Nav from './../components/common/Nav';
import {Actions} from 'react-native-router-flux';
import Communications from 'react-native-communications';

const styles = StyleSheet.create({
    paddIt: {
        padding: 20
        // paddingLeft: 30
    },
    alignRight: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingRight: 20
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
    itemPadding: {
        paddingTop: 5,
        paddingBottom: 5,
        paddingRight: 20,
        paddingLeft: 20
    },
    splitButton: {
        alignSelf: 'center',
        marginTop: 30
    },
    itemPrice: {
        fontSize: 22
    },
    textInput: {
        width: 50,
        height: 50,
        backgroundColor: "#fff",
        fontSize: 25,
        marginRight: 45,
        paddingLeft: 10
    }
});

class SplitEvenlyRequest extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            imgSource: null,
            ocrResult: null,
            myNumber: Array(this.props.selected).fill(''),
            tipPer: 0,
            tip: 0,
            perPerson: 0
        };
    }

    // onChanged(text) { // code to remove non-numeric characters from text let
    // newText = '';     let numbers = '0123456789';     for (var i = 0; i <
    // text.length; i++) {         if (numbers.indexOf(text[i]) > -1) { newText =
    // newText + text[i];         } else { // your call back function alert("please
    // enter numbers only");         } this.setState({[myNumber]: newText});     } }

    // TODO VENMO
    // https://venmo.com/?txn=pay&audience=private&recipients=1234567890&amount=10&n
    // o te=dinner

    componentWillMount() {
        let tip = 0;
        let tipPer = 0;
        if (this.props.tipAmount.tenPercent) {
            tip = (this.props.total * .10).toFixed(2);
            tipPer = (this.props.selected / tip).toFixed(2);
            this.setState({tipPer: tipPer, totalTip: tip})
        } else if (this.props.tipAmount.fifteenPercent) {
            tip = (this.props.total * .15).toFixed(2);
            console.log("TIP: ", tip);
            tipPer = (this.props.selected / tip).toFixed(2);
            console.log("TIP PER: ", tipPer);
            this.setState({tipPer: tipPer, totalTip: tip})
        } else if (this.props.tipAmount.twentyPercent) {
            tip = (this.props.total * .20).toFixed(2);
            tipPer = (this.props.selected / tip).toFixed(2);
            this.setState({tipPer: tipPer, totalTip: tip})
        }
        let perPerson = (this.state.total + tip) / this.props.selected
        this.setState({perPerson: perPerson});

    }

    nextComponent() {

        Communications.web(`https://venmo.com/?txn=charge&amount=${this.state.perPerson}&note=for+testing&recipients=${this.state.myNumber}`)
        Actions.ThankYou();
        // Actions.AddTip({     selected: this.props.selected,     ocrResults:
        // this.props.ocrResult,     tax: this.props.tax,     total: this.props.total,
        // myNumber0: this.state.myNumber0,     myNumber1: this.state.myNumber1,
        // myNumber2: this.state.myNumber2,     myNumber3: this.state.myNumber3,
        // myNumber4: this.state.myNumber4,     myNumber5: this.state.myNumber5,
        // myNumber6: this.state.myNumber6,     myNumber7: this.state.myNumber7,
        // myNumber8: this.state.myNumber8,     myNumber9: this.state.myNumber9 })
    }

    handleInputChange(i, value) {
        console.log('i is', i);
        console.log('value is', value);

        let updatedNumbers = this.state.myNumber;
        updatedNumbers[i] = value;

        this.setState({myNumber: updatedNumbers});
    }

    render() {

        const {
            alignRight,
            paddIt,
            lightHeaderText,
            itemText,
            splitButton,
            textInput,
            itemPadding,
            itemPrice
        } = styles;

        return (

            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='navicon' size={28} color="#fff"/>
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
                            alignItems: "center"
                        },
                        paddIt
                    ]}>
                        <View>
                            <Text style={lightHeaderText}>Who should we send reciepts to?</Text>
                        </View>
                    </View>
                    <View>

                        <View
                            style={[
                            {
                                flex: 1,
                                flexDirection: 'row'
                            },
                            itemPadding
                        ]}>
                            <View>
                                <Text style={itemText}>Tip Per Person</Text>
                            </View>
                            <View style={alignRight}>
                                <Text style={itemPrice}>{this.state.tipPer}</Text>
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
                                <Text style={itemText}>Total Per Person</Text>
                            </View>
                            <View style={alignRight}>
                                <Text style={itemPrice}>{this.state.perPerson}</Text>
                            </View>
                        </View>
                    </View>

                    {/* Request Area */}
                    {this
                        .state
                        .myNumber
                        .map((data, i) => {
                            return (
                                <View
                                    key={i}
                                    style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    paddingLeft: 75,
                                    marginBottom: 5
                                }}>
                                    <Badge
                                        style={{
                                        marginRight: 10,
                                        marginTop: 10
                                    }}>
                                        <Text>{i + 1}</Text>
                                    </Badge>
                                    <Icon
                                        size={30}
                                        name="phone"
                                        style={{
                                        paddingLeft: 10,
                                        paddingRight: 10,
                                        marginTop: 10
                                    }}/>
                                    <Input
                                        style={textInput}
                                        placeholder="XXX-XXX-XXXX"
                                        keyboardType='numeric'
                                        key={i}
                                        onChangeText={this
                                        .handleInputChange
                                        .bind(this, i)}
                                        value={this.state.myNumber[i]}
                                        maxLength={10}/>
                                </View>
                            )
                        })}

                    {/* Recent Activity */}
                    <View style={[paddIt, splitButton]}>
                        <Button
                            success
                            onPress={this
                            .nextComponent
                            .bind(this)}>
                            <Text style={itemText}>
                                Send Requests
                            </Text>
                        </Button>
                    </View>
                </Content>
                <Nav/>
            </Container>
        );
    }
}

export default SplitEvenlyRequest;
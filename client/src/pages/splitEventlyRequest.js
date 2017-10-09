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

const styles = StyleSheet.create({
    paddIt: {
        padding: 20
        // paddingLeft: 30
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
    splitButton: {
        alignSelf: 'center',
        marginTop: 30
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
            myNumber0: '',
            myNumber1: '',
            myNumber2: '',
            myNumber3: '',
            myNumber4: '',
            myNumber5: '',
            myNumber6: '',
            myNumber7: '',
            myNumber8: '',
            myNumber9: '',
            selectedArray: []
        };
    }

    onChanged(text) { // code to remove non-numeric characters from text let
        newText = '';
        let numbers = '0123456789';
        for (var i = 0; i < text.length; i++) {
            if (numbers.indexOf(text[i]) > -1) {
                newText = newText + text[i];
            } else { // your call back function
                alert("please enter numbers only");
            }
            this.setState({[myNumber]: newText});
        }
    }

    nextComponent() {
        Actions.AddTip({
            selected: this.props.selected,
            ocrResults: this.props.ocrResult,
            tax: this.props.tax,
            total: this.props.total,
            myNumber0: this.state.myNumber0,
            myNumber1: this.state.myNumber1,
            myNumber2: this.state.myNumber2,
            myNumber3: this.state.myNumber3,
            myNumber4: this.state.myNumber4,
            myNumber5: this.state.myNumber5,
            myNumber6: this.state.myNumber6,
            myNumber7: this.state.myNumber7,
            myNumber8: this.state.myNumber8,
            myNumber9: this.state.myNumber9
        })
    }

    componentWillMount() {
        console.log(this.props);
        const selected = this.props.selected;
        let newArr = [];

        for (let i = 0; i < selected; i++) {
            newArr.push(i);
        }
        this.setState({selectedArray: newArr});
    }

    handleInputChange = (state) => (event, value) => {
        console.log(event);
        newText = '';
        let numbers = '0123456789';
        for (var i = 0; i < event.length; i++) {
            if (numbers.indexOf(event[i]) > -1) {
                newText = newText + event[i];
            } else { // your call back function
                alert("please enter numbers only");
            }
            this.setState({[state]: newText});
        }
    }

    render() {

        const {paddIt, lightHeaderText, itemText, splitButton, textInput} = styles;

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

                    {/* Request Area */}
                    {this
                        .state
                        .selectedArray
                        .map((data, i) => {
                            return (
                                <View
                                    key={this.state.selectedArray[data]}
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
                                        <Text>{this.state.selectedArray[data] + 1}</Text>
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
                                        key={this.state.selectedArray[data]}
                                        onChangeText={this.handleInputChange(`myNumber${this.state.selectedArray[data]}`)}
                                        value={this.state.myNumber + i}
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
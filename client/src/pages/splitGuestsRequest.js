import React, {Component} from 'react';
import {StyleSheet, TouchableNativeFeedback, TouchableOpacity, View} from 'react-native';
import {updatePhone, updateReceipt, saveReceipt} from '../actions';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import Nav from './../components/common/Nav';
import {Actions} from 'react-native-router-flux';
import Communications from 'react-native-communications';
import axios from 'axios';
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
      myNumber: this.props.myNumber
    };
  }

  componentWillMount() {
    this.generateTotals();
    console.log(this.props.tipAmount, this.props.customTip);

    let tip;

    if (this.props.tipAmount.tenPercent) {
      tip = (this.props.total * .10);

    } else if (this.props.tipAmount.fifteenPercent) {
      tip = (this.props.total * .15);
    } else if (this.props.tipAmount.twentyPercent) {
      tip = (this.props.total * .20);
    } else if (this.props.tipAmount.custom) {
      console.log(this.props.customTip);
      tip = (parseFloat(this.props.customTip));
    }

    let tipPer = (tip / this.props.selected);
    let perPerson = (parseFloat(this.props.total) + parseFloat(tip)) / this.props.selected
    this
      .props
      .updatePhone(tipPer, tip, perPerson);
    this
      .props
      .updateReceipt(tip + parseFloat(this.props.total), this.props.tax);
  }

  generateTotals() {
    let perPersonArr = Array(parseInt(this.props.selected)).fill(0);

    for (let index = 0; index <= this.props.ocrResult.length; index++) {
      let element = this.props.ocrResult[index];
      if (element[2][index].checked === true) {
        console.log("Add this one")
        perPersonArr[index] += element[1]
      }
    }
    console.log("PER PERSON: ")
    console.log(perPersonArr);
  }

  nextComponent() {

    Communications.web(`https://venmo.com/?txn=charge&amount=${this.props.perPerson}&note=for+dinner&recipients=${this.state.myNumber}`)
    Actions.ThankYou({});

    axios
      .post('https://peaceful-oasis-94736.herokuapp.com/transaction/', {
      userID: this.props.user.uid,
      ocrResult: this.props.ocrResult,
      tax: this.props.tax,
      total: this.props.total,
      myNumber: this.state.myNumber,
      tipPer: this.props.tipPer,
      tip: this.props.tip,
      perPerson: this.props.perPerson
    })
      .then((response) => console.log(response))
      .catch((error) => console.log(error))
  }

  handleInputChange(i, value) {
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
              <Title>Split Amongst</Title>
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
                <Text style={itemPrice}>${this.props.tipPer}</Text>
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
                <Text style={itemText}>Total Bill</Text>
              </View>
              <View style={alignRight}>
                <Text style={itemPrice}>${this.props.total}</Text>
              </View>
            </View>
          </View>

          {/* Request Area */}
          {this
            .props
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
                    value={this.props.myNumber[i]}
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

const mapStateToProps = ({
  auth,
  updatePhone,
  updateReceipt,
  selectedParty,
  saveTipAmount,
  updateCustomTip,
  saveReceipt
}) => {
  const {user} = auth;
  const {tip, tipPer, perPerson} = updatePhone;
  const {total, tax} = updateReceipt;
  const {selected, myNumber} = selectedParty;
  const {tipAmount} = saveTipAmount;
  const {customTip} = updateCustomTip;
  const {ocrResult} = saveReceipt;

  return {
    user,
    tip,
    tipPer,
    perPerson,
    total,
    tax,
    selected,
    myNumber,
    tipAmount,
    customTip,
    ocrResult
  }
};

export default connect(mapStateToProps, {updatePhone, updateReceipt, saveReceipt})(SplitEvenlyRequest);
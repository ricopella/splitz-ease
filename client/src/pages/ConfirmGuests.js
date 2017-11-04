import React, {Component} from 'react';
import {StyleSheet, TouchableNativeFeedback, TouchableOpacity, View, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {saveReceipt, updateReceipt} from '../actions';
import Nav from './../components/common/Nav';
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
  Input
} from 'native-base';

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
    width: 220,
    borderBottomWidth: 1,
    borderBottomColor: '#D8D8D8',
    marginRight: 30,
    // height: 40,
    // backgroundColor: "#fff",
    fontSize: 20
    // marginRight: 45,
    // paddingLeft: 40
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

class ConfirmGuests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ocrResult: this.props.ocrResult
    }
  }
  // update items
  handleInputChange(i, value) {
    let updatedItem = this.props.ocrResult[i];
    updatedItem[0] = value;
    this.setState({ocrResult: updatedItem});
  }

  // update prices
  handleInput(i, value) {
    let updatedItem1 = this.props.ocrResult[i];
    updatedItem1[1] = value;
    this.generateTotal();
    this.setState({ocrResult: updatedItem1});
  }

  componentWillMount() {
    this.generateTotal();
    let guestsArr = Array(parseInt(this.props.selected)).fill('');
    guestsArr = guestsArr.map((x, i) => {
      return {guest: i, checked: true}
    });
    let updatedOCR = this.props.ocrResult;

    for (i in updatedOCR) {
      updatedOCR[i].push(guestsArr);
    }
    this
      .props
      .saveReceipt(updatedOCR);
    this.setState({ocrResult: updatedOCR});
  }

  generateTotal() {
    let totalAmount = 0;
    for (let i = 0; i < this.props.ocrResult.length; i++) {
      totalAmount += Number(this.props.ocrResult[i][1]); // add each item in receipt
    }

    let taxAmount = (totalAmount * .095).toFixed(2); // california tax
    totalAmount = (Number(totalAmount) + Number(taxAmount)).toFixed(2);
    this
      .props
      .updateReceipt(totalAmount, taxAmount);

  }

  goToCheckBox(val, i) {
    Actions.Checkbox({item: i, value: val});
  }

  goToNextPage() {
    this
      .props
      .saveReceipt(this.props.ocrResult);
    Actions.AddTipGuests();
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
                <Title>Confirm Guests</Title>
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
                <Text style={lightHeaderText}>Choose Who Is Paying for Each Item</Text>
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
                      key={"i" + i}
                      style={textInput}
                      onChangeText={this
                      .handleInputChange
                      .bind(this, i)}
                      value={val[0]}/>
                  </View>
                  <View>
                    <Button success onPress={() => this.goToCheckBox(val, i)}>
                      <Text style={itemText}>
                        + Guest
                      </Text>
                    </Button>
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
                <Text style={itemPrice}>{this.props.tax}</Text>
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
                <Text style={itemPrice}>{this.props.total}</Text>
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

const mapStateToProps = ({updateReceipt, saveReceipt, selectedParty}) => {
  const {ocrResult} = saveReceipt;
  const {total, tax} = updateReceipt;
  const {selected} = selectedParty;

  return {ocrResult, total, tax, selected};
};

export default connect(mapStateToProps, {updateReceipt, saveReceipt})(ConfirmGuests);
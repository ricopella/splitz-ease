import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import {saveReceipt} from '../../actions';
import {View, StyleSheet} from 'react-native';
import {
  Container,
  Header,
  Content,
  ListItem,
  CheckBox,
  Text,
  Body,
  Button
} from 'native-base';
const styles = StyleSheet.create({

  paddIt: {
    padding: 20
  },
  splitButton: {
    alignSelf: 'center'
  },
  itemText: {
    fontSize: 22
  }
});

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ocrResult: this.props.ocrResult,
      item: this.props.item
    }
  }

  componentWillMount() {
    // debugger;

  }

  goBack() {
    console.log(this);
    this
      .props
      .saveReceipt(this.state.ocrResult);
    Actions.ConfirmGuests();
  }

  addGuest(val, i) {
    console.log("ITEM: ", this.props.item)
    let newOCR = this.state.ocrResult;
    let updateItem = newOCR[this.state.item][2][i]
    console.log(val, i)
    val.checked
      ? updateItem.checked = false
      : updateItem.checked = true;
    newOCR[this.state.item][2][i] = updateItem;
    this.setState({ocrResult: newOCR});
    console.log(this.state.ocrResult);

  }

  render() {
    const {itemText, paddIt, splitButton} = styles;

    return (
      <Container>
        <Header/>
        <Content>
          {this
            .state
            .ocrResult[this.state.item][2]
            .map((val, i) => (
              <ListItem key={i}>
                <CheckBox checked={val.checked} onPress={() => this.addGuest(val, i)}/>
                <Body>
                  <Text>Guest: {val.guest}</Text>
                </Body>
              </ListItem>
            ))}
        </Content>
        <View style={[paddIt, splitButton]}>
          <Button success onPress={this
            .goBack
            .bind(this)}>
            <Text style={itemText}>
              Return
            </Text>
          </Button>
        </View>

      </Container>
    );
  }
}

const mapStateToProps = ({selectedParty, saveReceipt}) => {
  const {ocrResult} = saveReceipt;
  const {selected} = selectedParty;

  return {selected, ocrResult};
};

export default connect(mapStateToProps, {saveReceipt})(Checkbox);
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

  componentWillMount() {
    console.log(this.props.ocrResult[this.props.item][2]);
  }

  goBack() {
    console.log(this);
  }

  addGuest(val, i) {
    console.log(val, i)
    let item = this.props.item;
    console.log(item)
    let updateGuest = this.props.ocrResult;
    console.log(updateGuest[item][2][i].checked);
    !val.checked
      ? updateGuest[item][2][i].checked = true
      : updateGuest[item][2][i].checked = false;
    console.log(updateGuest);
    this
      .props
      .saveReceipt(updateGuest);
  }

  render() {
    const {itemText, paddIt, splitButton} = styles;

    return (
      <Container>
        <Header/>
        <Content>
          {this
            .props
            .ocrResult[this.props.item][2]
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
              Splitz These
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
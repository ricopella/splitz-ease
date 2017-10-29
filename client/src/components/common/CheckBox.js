import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
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
      guests: null
    }
  }

  componentWillMount() {
    let guestsArr = Array(parseInt(this.props.selected)).fill('');
    guestsArr = guestsArr.map((x, i) => {
      return {
        guest: "Guest " + i,
        checked: false
      }
    });
    console.log(guestsArr);
    this.setState({guests: guestsArr});
  }

  goBack() {
    console.log(this);
  }

  addGuest(val, i) {
    console.log(val, i)
    let updateGuest = this.state.guests;
    !val.checked
      ? updateGuest[i].checked = true
      : updateGuest[i].checked = false;
    this.setState({guests: updateGuest})
  }

  render() {
    const {itemText, paddIt, splitButton} = styles;

    return (
      <Container>
        <Header/>
        <Content>
          {this
            .state
            .guests
            .map((val, i) => (
              <ListItem key={i}>
                <CheckBox checked={val.checked} onPress={() => this.addGuest(val, i)}/>
                <Body>
                  <Text>{val.guest}</Text>
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

const mapStateToProps = ({selectedParty}) => {

  const {selected} = selectedParty;

  return {selected};
};

export default connect(mapStateToProps)(Checkbox);
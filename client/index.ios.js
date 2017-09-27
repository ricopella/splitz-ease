import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import Header from "./src/components/header";

export default class client extends Component {
  render() {
    return (<Header/>)
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  welcomeHead: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    fontSize: 40
  }
})

AppRegistry.registerComponent('client', () => client);
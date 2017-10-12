import React, { Component } from 'react';
import { StyleSheet, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native';
import { Container, Header, Title, Content, Button, Left, Right, Body, Icon, Text, List, ListItem, Item } from 'native-base';
import Nav from './../components/common/Nav';
import firebase from 'firebase';
import {Scene, Router, Actions, Stack} from 'react-native-router-flux';


const styles = StyleSheet.create({
    itemStyle: {
        padding: 20
    }
});


class Settings extends Component {
    // .then(response => this.setState({ albums: response.data }));

    constructor(props) {
        super(props);
        // this.state = {};
    }
    componentWillMount() {
        console.log("mounting comp");
    }

    render() {
        console.log(this.state);
        const {
            itemStyle
        } = styles;
    

        // const { paddIt } = styles;

        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <View>
                            <Title>Settings</Title>
                        </View>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <List>
                        <Item style={itemStyle}>
                            <Text>My Account</Text>
                        </Item>
                        <Item style={itemStyle}>
                            <Text>Social Applications</Text>
                        </Item>
                        <Item style={itemStyle}>
                            <Text onPress={() => firebase.auth().signOut().then(Actions.loginPage())}>Sign Out</Text>
                        </Item>
                    </List>
                </Content>
                <Nav />
            </Container>
        );
    }
}

export default Settings;
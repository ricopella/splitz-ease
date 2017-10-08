import React, { Component } from 'react';
import { StyleSheet, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native';
import { Container, Header, Title, Content, Button, Left, Right, Body, Icon, Text, List, ListItem } from 'native-base';
import Nav from './../components/common/Nav';

const styles = StyleSheet.create({
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
                    {/* <View style={[{ flex: 1, justifyContent: "center", alignItems: "center" }, paddIt]}>
                        <View>
                            <Text style={lightHeaderText}>Please categorize the orders.</Text>
                        </View>
                    </View>

                    <View style={[paddIt, splitButton]}>
                        <Button success><Text style={itemText}> Send Requests </Text></Button>
                    </View> */}
                    <List>
                        <ListItem>
                            <Text>My Account</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Social Applications</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Sign Out</Text>
                        </ListItem>
                    </List>
                </Content>
                <Nav />
            </Container>
        );
    }
}

export default Settings;
import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';

class Nav extends Component {
// const Nav = () => {
    // const { footerStyle } = styles;
    render () {
        return (
            <Footer>
                <FooterTab>
                    <Button vertical active>
                        <Icon name="home" />
                        <Text>Home</Text>
                    </Button>
                    <Button vertical>
                        <Icon name="shuffle" />
                        <Text>Split</Text>
                    </Button>
                    <Button badge vertical>
                        <Badge><Text>2</Text></Badge>
                        <Icon active name="list" />
                        <Text>Requests</Text>
                    </Button>
                    <Button vertical>
                        <Icon name="person" />
                        <Text>Settings</Text>
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}

export default Nav;
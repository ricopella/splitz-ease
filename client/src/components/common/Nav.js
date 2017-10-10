import React, {Component} from 'react';
import {
    Footer,
    FooterTab,
    Button,
    Icon,
    Text,
    Badge
} from 'native-base';
import {Actions} from 'react-native-router-flux';

class Nav extends Component {
    // const Nav = () => { const { footerStyle } = styles;
    render() {
        return (
            <Footer>
                <FooterTab>
                    <Button onPress={Actions.home} vertical active>
                        <Icon name="home"/>
                        <Text>Home</Text>
                    </Button>
                    <Button onPress={Actions.scanReciept} vertical>
                        <Icon name="shuffle"/>
                        <Text>Split</Text>
                    </Button>
                    <Button badge onPress={Actions.request} vertical>
                        <Badge>
                            <Text>2</Text>
                        </Badge>
                        <Icon active name="list"/>
                        <Text>Requests</Text>
                    </Button>
                    <Button onPress={Actions.settings} vertical>
                        <Icon name="person"/>
                        <Text>Settings</Text>
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}

export default Nav;

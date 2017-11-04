import React, {Component} from 'react';
import {StyleSheet, TouchableNativeFeedback, TouchableOpacity, View, ScrollView, Image} from 'react-native';
import {saveReceipt, updateReceipt} from '../actions';
import {connect} from 'react-redux';
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
    taxText: {
        fontSize: 18,
        // marginTop: 10,
        padding: 5
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
        width: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#D8D8D8',
        // height: 40,
        // backgroundColor: "#fff",
        fontSize: 20
        // marginRight: 45,
        // paddingLeft: 40
    }
});

class ConfirmItems extends Component {

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

    goToNextPage() {
        this
            .props
            .saveReceipt(this.props.ocrResult);
        Actions.SplitEvenly();
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
            numInput,
            taxText
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
                                <Title>Confirm Details</Title>
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
                                <Image
                                    style={{margin: 10}}
                                    source={require('./../../public/assets/images/check-blue.png')}
                                />
                            </View>
                            <View>
                                <Text style={lightHeaderText}>Do these prices look right?</Text>
                                <Text>Please confirm and make any adjustments.</Text>
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
                                    <View style={{paddingLeft: 50}}>
                                        <Input
                                            key={"p" + i}
                                            keyboardType={'numeric'}
                                            style={numInput}
                                            onChangeText={this
                                            .handleInput
                                            .bind(this, i)}
                                            value={(val[1]).toString()}/>
                                    </View>
                                </View>
                            ))}

                        <View
                            style={[
                            {
                                flex: 1,
                                flexDirection: 'row',
                                marginTop: 15
                            },
                            itemPadding
                        ]}>
                            <View>
                                <Text style={taxText}>Tax</Text>
                            </View>
                            <View style={alignRight}>
                                <Text style={taxText}>{this.props.tax}</Text>
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
                                <Text style={[itemText, {padding: 5, fontWeight: 'bold'}]}>Total</Text>
                            </View>
                            <View style={alignRight}>
                                <Text style={[itemPrice, {fontWeight: 'bold'}]}>{this.props.total}</Text>
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

const mapStateToProps = ({updateReceipt, saveReceipt}) => {
    const {ocrResult} = saveReceipt;
    const {total, tax} = updateReceipt;

    return {ocrResult, total, tax};
};

export default connect(mapStateToProps, {updateReceipt, saveReceipt})(ConfirmItems);
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { ImageBackground, Image, StyleSheet, TouchableWithoutFeedback, StatusBar, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Slider } from 'react-native-elements';
import { Item, Input, Icon, Label, Button } from 'native-base';
import styles from '../Styles/Styles';
import Toast, { DURATION } from 'react-native-easy-toast';
import Modal from "react-native-modal";

import { test } from '../Converter';
export default class Register3 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Bligequity: 1,
            Investorequity: 0.4,
            Loanfinancing: 0,
            Term: 0,
            maxvalue: 99,
            isModalVisible: false,
            isModalVisible1: false,
            isModalVisible2: false,
            isModalVisible3: false,
        }
    }
    componentDidMount = () => {
        this.setState({ Bligequity: this.props.obj[0], Investorequity: this.props.obj[1], Loanfinancing: this.props.obj[2], Term: this.props.obj[3] })
    }
    gotoReg2 = () => {
        this.props.Screenno(2)
    }
    gotoReg4 = () => {
        if (this.state.Loanfinancing > 0 | this.state.Term > 0) {
            if (this.state.Term > 0 & this.state.Loanfinancing > 0) {
                this.props.senddata(3, this.state)
                this.props.Screenno(4)
            } else {
                if (this.state.Term == 0) {
                    this.refs.toast.show('Recheck the Term', DURATION.LENGTH_LONG);
                } else {
                    this.refs.toast.show('Recheck the Loan', DURATION.LENGTH_LONG);
                }
            }
        } else {
            this.props.senddata(3, this.state)
            this.props.Screenno(4)
        }
    }
    updatebligequity = (value) => {
        // alert(value)

        this.setState({
            Bligequity: Math.ceil(value)
        })

    }
    updateInvestorequity = (value) => {
        this.setState({
            maxvalue: 100 - this.state.Bligequity,
            Investorequity: Math.ceil(value)
        })
    }
    updateLoanFinancing = (value) => {
        this.setState({
            Loanfinancing: Math.ceil(value)
        })
    }
    updateLoanFinancingValidate = (value) => {
        const num = /^[0-9]+$/
        if (num.test(value) && value <= 1000000) {
            this.setState({
                Loanfinancing: Math.ceil(value)
            })
        }
        else {
            alert('Please enter your amount in digits upto £1M')
            this.setState({
                Loanfinancing: ''
            })
            // this.refs.toast.show('enter amount in digits upto L1M');
        }
    }
    EquityValidate = (value) => {
        const num = /^[0-9]+$/
        if (num.test(value) && value <= 50) {
            this.setState({
                Bligequity: Math.ceil(value)
            })
        }
        else {
            alert('Please enter equity in digits upto 50')
            this.setState({
                Bligequity: '1'
            })
            // this.refs.toast.show('enter amount in digits upto L1M');
        }
    }
    PlaceEquityValidate = (value) => {
        const num = /^[0-9]+$/
        if (num.test(value) && value <= 100) {
            this.setState({
                Investorequity: Math.ceil(value)
            })
        }
        else {
            alert('Please enter place equity in digits upto 100')
            this.setState({
                Investorequity: ''
            })
            // this.refs.toast.show('enter amount in digits upto L1M');
        }
    }
    TermValidate = (value) => {
        const num = /^[0-9]+$/
        if (num.test(value) && value <= 60) {
            this.setState({
                Term: Math.ceil(value)
            })
        }
        else {
            alert('Please enter term upto 60 months')
            this.setState({
                Term: ''
            })
            // this.refs.toast.show('enter amount in digits upto L1M');
        }
    }
    updateMonth = (value) => {
        this.setState({
            Term: Math.ceil(value)
        })
    }
    toggleModal = () => {
        // alert('here')
        this.setState({
            isModalVisible: !this.state.isModalVisible
        });
    };
    toggleModal1 = () => {
        // alert('here')
        this.setState({
            isModalVisible1: !this.state.isModalVisible1
        });
    };
    toggleModal2 = () => {
        // alert('here')
        this.setState({
            isModalVisible2: !this.state.isModalVisible2
        });
    };
    toggleModal3 = () => {
        // alert('here')
        this.setState({
            isModalVisible3: !this.state.isModalVisible3
        });
    };
    render() {
        console.disableYellowBox = ['Warning: Each', 'Warning: Failed']
        return (
            <View style={styles.container}>
                <StatusBar hidden={false} backgroundColor="black" />
                <ImageBackground resizeMode="stretch" source={require('../images/breg3.png')} style={styles.imagebackground}>
                    <Image source={require('../images/reg3.png')} style={styles.image} />
                    <View style={styles.mainviewE3}>
                        <Text allowFontScaling={false} style={styles.textE3}>Give Black Lion investment</Text>
                        <Text allowFontScaling={false} style={styles.textstyle}>group equity stake</Text>

                        <Slider
                            style={{ width: '70%' }}
                            trackStyle={styles.track}
                            animateTransitions={true}
                            value={this.state.Bligequity}
                            maximumTrackTintColor="black"
                            minimumTrackTintColor="white"
                            thumbTintColor="white"
                            thumbStyle={styles.thumb}
                            minimumValue={1}
                            maximumValue={50}
                            thumbTouchSize={{ width: 50, height: 50 }}
                            onValueChange={(value) => this.setState({ Bligequity: Math.ceil(value) })}
                        />
                        <Modal isVisible={this.state.isModalVisible1} backdropOpacity={0} style={{ width: '80%', height: '30%', alignSelf: 'center', position: "absolute", }}>
                            <View style={{ backgroundColor: '#ec9705', width: '100%', height: '100%', alignItems: 'center', borderRadius: 20, padding: 30 }}>
                                <Item style={{ width: '60%', height: 30 }}>
                                    <Input keyboardType="numeric" value={this.state.Bligequity} onChangeText={(value) => this.EquityValidate(value)} placeholder="type here..." style={{ color: 'white' }}></Input>
                                </Item>
                                <View style={{ marginTop: 20, width: '100%', alignItems: 'center' }}>
                                    <Button rounded onPress={() => this.toggleModal1()} style={{ width: '40%', backgroundColor: '#1F1724', justifyContent: 'center' }}>
                                        <Text style={{ color: 'white' }}> Save </Text>
                                    </Button>
                                </View>
                            </View>
                        </Modal>
                        <TouchableWithoutFeedback onPress={() => this.toggleModal1()}>

                            <Text allowFontScaling={false} style={styles.text1}>{this.state.Bligequity}%</Text>
                        </TouchableWithoutFeedback>
                        <Text allowFontScaling={false} style={styles.textE3}>Place equity stake on Black Lion</Text>
                        <Text allowFontScaling={false} style={styles.textstyle}>for investor raise</Text>
                        <Slider
                            style={{ width: '70%' }}
                            trackStyle={styles.track}
                            animateTransitions={true}
                            value={this.state.Investorequity}
                            maximumTrackTintColor="black"
                            minimumTrackTintColor="white"
                            thumbTintColor="white"
                            minimumValue={1}
                            maximumValue={this.state.maxvalue}
                            thumbStyle={styles.thumb}
                            thumbTouchSize={{ width: 50, height: 50 }}
                            onValueChange={(value) => this.updateInvestorequity(value)}
                        />
                        <Modal isVisible={this.state.isModalVisible2} backdropOpacity={0} style={{ width: '80%', height: '30%', alignSelf: 'center', position: "absolute", }}>
                            <View style={{ backgroundColor: '#ec9705', width: '100%', height: '100%', alignItems: 'center', borderRadius: 20,padding:30 }}>
                                <Item style={{ width: '60%', height: 30 }}>
                                    <Input keyboardType="numeric"  value={this.state.Investorequity} onChangeText={(value) => this.PlaceEquityValidate(value)}  placeholder="type here..." style={{ color: 'white' }}></Input>
                                </Item>
                                <View style={{marginTop:20, width: '100%',alignItems:'center' }}>
                                    <Button rounded onPress={() => this.toggleModal2()} style={{ width: '40%', backgroundColor: '#1F1724', justifyContent: 'center' }}>
                                        <Text style={{ color: 'white'}}> Save </Text>
                                    </Button>
                                </View>
                            </View>
                        </Modal>
                        <TouchableWithoutFeedback onPress={() => this.toggleModal2()}>

                        <Text allowFontScaling={false} style={styles.text1}>{this.state.Investorequity}%</Text>
                        </TouchableWithoutFeedback>

                        <Text allowFontScaling={false} style={styles.textE3}>Venture Loan Financing</Text>

                        <Slider
                            style={{ width: '70%' }}
                            trackStyle={styles.track}
                            animateTransitions={true}
                            value={this.state.Loanfinancing}
                            maximumTrackTintColor="black"
                            minimumTrackTintColor="white"
                            minimumValue={0}
                            maximumValue={1000000}
                            thumbTintColor="white"
                            thumbStyle={styles.thumb}
                            thumbTouchSize={{ width: 50, height: 50 }}
                            onValueChange={(value) => this.updateLoanFinancing(value)}
                        />
                        <TouchableWithoutFeedback onPress={() => this.toggleModal()}>
                            <Text allowFontScaling={false} style={styles.text1}>£{test(this.state.Loanfinancing)}</Text>

                        </TouchableWithoutFeedback>

                        <Modal isVisible={this.state.isModalVisible} backdropOpacity={0} style={{ width: '80%', height: '30%', alignSelf: 'center', position: "absolute", }}>
                            <View style={{ backgroundColor: '#ec9705', width: '100%', height: '100%', alignItems: 'center', borderRadius: 20, padding: 30 }}>
                                <Item style={{ width: '60%', height: 30 }}>
                                    <Input keyboardType="numeric" value={this.state.Loanfinancing} onChangeText={(value) => this.updateLoanFinancingValidate(value)} placeholder="type here..." style={{ color: 'white' }}></Input>
                                </Item>
                                <View style={{ marginTop: 20, width: '100%', alignItems: 'center' }}>
                                    <Button rounded onPress={() => this.toggleModal()} style={{ width: '40%', backgroundColor: '#1F1724', justifyContent: 'center' }}>
                                        <Text style={{ color: 'white' }}> Save </Text>
                                    </Button>
                                </View>
                            </View>
                        </Modal>

                        <Text allowFontScaling={false} style={styles.textE3}>Term</Text>

                        <Slider
                            style={{ width: '70%' }}
                            trackStyle={styles.track}
                            animateTransitions={true}
                            value={this.state.Term}
                            maximumTrackTintColor="black"
                            minimumTrackTintColor="white"
                            thumbTintColor="white"
                            minimumValue={0}
                            maximumValue={60}
                            thumbStyle={styles.thumb}
                            thumbTouchSize={{ width: 50, height: 50 }}
                            onValueChange={value => this.updateMonth(value)}
                        />
                         <Modal isVisible={this.state.isModalVisible3} backdropOpacity={0} style={{ width: '80%', height: '30%', alignSelf: 'center', position: "absolute", }}>
                            <View style={{ backgroundColor: '#ec9705', width: '100%', height: '100%', alignItems: 'center', borderRadius: 20, padding: 30 }}>
                                <Item style={{ width: '60%', height: 30 }}>
                                    <Input keyboardType="numeric" value={this.state.Term} onChangeText={(value) => this.TermValidate(value)} placeholder="type here..." style={{ color: 'white' }}></Input>
                                </Item>
                                <View style={{ marginTop: 20, width: '100%', alignItems: 'center' }}>
                                    <Button rounded onPress={() => this.toggleModal3()} style={{ width: '40%', backgroundColor: '#1F1724', justifyContent: 'center' }}>
                                        <Text style={{ color: 'white' }}> Save </Text>
                                    </Button>
                                </View>
                            </View>
                        </Modal>
                        <TouchableWithoutFeedback onPress={() => this.toggleModal3()}>

                        <Text allowFontScaling={false} style={styles.text1}>{this.state.Term} Months</Text>
                        </TouchableWithoutFeedback>
                    </View>

                    <View style={styles.v4ER8}>
                        <TouchableWithoutFeedback onPress={this.gotoReg2}>
                            <Image source={require('../images/left.png')} style={styles.imgsize} />
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={this.gotoReg4}>
                            <Image source={require('../images/right.png')} style={styles.imgsize} />
                        </TouchableWithoutFeedback>
                    </View>
                    <Toast
                        ref="toast"
                        style={{ backgroundColor: 'black' }}
                        position='bottom'
                        //  positionValue={60}
                        // fadeInDuration={7}
                        // fadeOutDuration={1000}
                        opacity={0.8}
                        textStyle={{ color: 'white' }}
                    />
                </ImageBackground>
            </View>
        );
    }
}


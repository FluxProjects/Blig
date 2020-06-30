/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { ImageBackground, Image, ScrollView, TouchableWithoutFeedback, StatusBar, Button, Text, View } from 'react-native';
import { Item, Input, Icon, Label,Textarea } from 'native-base';
import Pic10 from '../images/reg10.png'
import Pic6 from '../images/reg7.png'
import styles from '../Styles/Styles'
import { Actions } from 'react-native-router-flux';
import NavigationService from '../navigation/NavigationService.js'
import {screens} from '../navigation/screens.js';



export default class WACC1 extends Component {
    gotoWACC2(){
        // alert(222);
        Actions.WACC2();
    }
    constructor(props) {
        super(props);
        this.state = {
            img: Pic6,
            text: 'Lorem Ipsum Text here',
            colorvalue: ['#643F00', 'black', 'black', 'black'],
            checked: true,
            Amount: [300, 600, 900, 1200],
            //url:Uri//'http://192.168.100.4:80'// 'http://ec2-18-222-128-84.us-east-2.compute.amazonaws.com',
            CurrencySelected: '',
            PlanSelected: '',
            membershipCost: 0,
            forx_rate: 150,
            exchanged_forx_rate: 0,
        }
    }

    

    UNSAFE_componentWillMount = async () => {
        await fetch(this.state.url + '/Subscription/GetSub_Plan')
            .then(response => response.json())
            .then(res => {
                if (res.Successful) {
                    let data = []
                    for (let index = 0; index < res.data.length; index++) {
                        data.push(res.data[index].subs_amount)
                    }
                    this.setState({ Amount: data })
                }
            })
            .catch(err => alert(err))

        if (this.props.Type == 'Investor') {
            //  console.log("component=>"+this.props.index)  
            let temp = ['black', 'black', 'black', 'black']
            temp[this.props.index] = '#643F00'
            this.setState({ img: Pic6, colorvalue: temp })
        }
        else if (this.props.Type == 'Entrepreneur') {
            let temp = ['black', 'black', 'black', 'black']
            temp[this.props.index] = '#643F00'
            this.setState({ img: Pic10, colorvalue: temp })
        }
    }
    
    render() {
        console.disableYellowBox = ['Warning: Each', 'Warning: Failed']
        return (
            <View style={styles.container}>
                <StatusBar hidden={false} backgroundColor="black" />
                <ImageBackground resizeMode="stretch" source={require('../images/breg8.png')} style={styles.imagebackground}>
                    {/* ============================ */}
                    {/* =========== BODY =========== */}
                    {/* ============================ */}
                    
                   

                    <View style={styles.mainview}>
                        <Text allowFontScaling={false} style={styles.text3}>WACC CALCULATOR</Text>
                        {/* ============== Current Market Price ============== */}
                        <View style={{ flexDirection:'row', width:'100%' }}>
                            <View style={{width:'100%',flexDirection: "column"}}>
                                <Item style={[styles.itemstyle, { marginTop: 30 }]} floatingLabel>
                                    <Label style={styles.username}>Current Market Price</Label>
                                    <Input allowFontScaling={false} placeholder="ABC" style={styles.input} />
                                </Item>
                            </View>
                        </View>
                        {/* ============== Total number of Equity shares ============== */}
                        <View style={{ flexDirection:'row', width:'100%' }}>
                            <View style={{width:'100%',flexDirection: "column"}}>
                                <Item style={[styles.itemstyle, { marginTop: 15 }]} floatingLabel>
                                    <Label style={styles.username}>Total number of Equity shares</Label>
                                    <Input allowFontScaling={false} placeholder="ABC" style={styles.input} />
                                </Item>
                            </View>
                        </View>
                        {/* ============== Total Equity Share Capital  ============== */}
                        <View style={{ flexDirection:'row', width:'100%' }}>
                            <View style={{width:'100%',flexDirection: "column"}}>
                                <Item style={[styles.itemstyle, { marginTop: 15 }]} floatingLabel>
                                    <Label style={styles.username}>Total Equity Share Capital </Label>
                                    <Input allowFontScaling={false} placeholder="ABC" style={styles.input} />
                                </Item>
                            </View>
                        </View>
                        {/* ============== Total Debt  ============== */}
                        <View style={{ flexDirection:'row', width:'100%' }}>
                            <View style={{width:'100%',flexDirection: "column"}}>
                                <Item style={[styles.itemstyle, { marginTop: 15 }]} floatingLabel>
                                    <Label style={styles.username}>Total Debt </Label>
                                    <Input allowFontScaling={false} placeholder="ABC" style={styles.input} />
                                </Item>
                            </View>
                        </View>
                        {/* ============== Tax Rate (%)  ============== */}
                        <View style={{ flexDirection:'row', width:'100%' }}>
                            <View style={{width:'100%',flexDirection: "column"}}>
                                <Item style={[styles.itemstyle, { marginTop: 15 }]} floatingLabel>
                                    <Label style={styles.username}>Tax Rate (%) </Label>
                                    <Input allowFontScaling={false} placeholder="ABC" style={styles.input} />
                                </Item>
                            </View>
                        </View>


                    </View>
                    {/* ========================================= */}
                    {/* =========== NAVIGATOR BUTTONS =========== */}
                    {/* ========================================= */}
                    <View style={styles.vl}>
                        <TouchableWithoutFeedback onPress={this.gotoWACC2} >
                            <Image source={require('../images/right.png')} style={styles.imgsize} />
                        </TouchableWithoutFeedback>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}


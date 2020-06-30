/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { ImageBackground, Image, ScrollView, TouchableWithoutFeedback, StatusBar, Text, View } from 'react-native';
import { Item, Input, Icon, Label,Textarea, Button } from 'native-base';
import styles from '../Styles/Styles'
export default class WACC2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //url:Uri//'http://192.168.100.4:80'// 'http://ec2-18-222-128-84.us-east-2.compute.amazonaws.com',
            market_Risk_Premium:0,
            WACC_Discount_rate:0,
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
                        <ScrollView>
                            {/* ============== Current Market Price ============== */}
                            <View style={{ flexDirection:'row', width:'100%' }}>
                                <View style={{width:'100%',flexDirection: "column"}}>
                                    <Item style={[styles.itemstyle, { marginTop: 30 }]} floatingLabel>
                                        <Label style={styles.username}>Current Market Price</Label>
                                        <Input allowFontScaling={false} placeholder="ABC" style={styles.input} />
                                        <Icon name='stepbackward' style={{fontSize: 20, color: 'red'}}/>
                                    </Item>
                                </View>
                            </View>
                            {/* ============== Risk Free Rate (Rf) %  ============== */}
                            <View style={{ flexDirection:'row', width:'100%' }}>
                                <View style={{width:'100%',flexDirection: "column"}}>
                                    <Item style={[styles.itemstyle, { marginTop: 15 }]} floatingLabel>
                                        <Label style={styles.username}>Risk Free Rate (Rf) % </Label>
                                        <Input allowFontScaling={false} placeholder="ABC" style={styles.input} />
                                    </Item>
                                </View>
                            </View>
                            {/* ============== Beta (β)  ============== */}
                            <View style={{ flexDirection:'row', width:'100%' }}>
                                <View style={{width:'100%',flexDirection: "column"}}>
                                    <Item style={[styles.itemstyle, { marginTop: 15 }]} floatingLabel>
                                        <Label style={styles.username}>Beta (β) </Label>
                                        <Input allowFontScaling={false} placeholder="ABC" style={styles.input} />
                                    </Item>
                                </View>
                            </View>
                            {/* ============== Expected rate of Market Return (Rm) %  ============== */}
                            <View style={{ flexDirection:'row', width:'100%' }}>
                                <View style={{width:'100%',flexDirection: "column"}}>
                                    <Item style={[styles.itemstyle, { marginTop: 15 }]} floatingLabel>
                                        <Label style={styles.username}>Expected rate of Market Return (Rm) % </Label>
                                        <Input allowFontScaling={false} placeholder="ABC" style={styles.input} />
                                    </Item>
                                </View>
                            </View>
                            {/* ============== Cost of Equity (Ke) %  ============== */}
                            <View style={{ flexDirection:'row', width:'100%' }}>
                                <View style={{width:'100%',flexDirection: "column"}}>
                                    <Item style={[styles.itemstyle, { marginTop: 15 }]} floatingLabel>
                                        <Label style={styles.username}>Cost of Equity (Ke) % </Label>
                                        <Input allowFontScaling={false} placeholder="ABC" style={styles.input} />
                                    </Item>
                                </View>
                            </View>
                            {/* ============== Cost of Debt (Kd) %  ============== */}
                            <View style={{ flexDirection:'row', width:'100%' }}>
                                <View style={{width:'100%',flexDirection: "column"}}>
                                    <Item style={[styles.itemstyle, { marginTop: 15 }]} floatingLabel>
                                        <Label style={styles.username}>Cost of Debt (Kd) % </Label>
                                        <Input allowFontScaling={false} placeholder="ABC" style={styles.input} />
                                    </Item>
                                </View>
                            </View>
                            {/* ============== CALCULATE  ============== */}
                            <View style={styles.vl}>
                                <TouchableWithoutFeedback onPress={this.Reverse}>
                                    <Button style={styles.modalbtn}><Text style={{ color:'#fff' }}>CALCULATE</Text></Button>
                                </TouchableWithoutFeedback>
                            </View>
                            {/* ============== OUTPUT  ============== */}
                            <View style={{ flexDirection:'row', width:'100%', marginTop:50 }}>
                                <View style={{width:'100%',flexDirection: "column"}}>
                                    <Text style={{ color:'white',marginLeft:30 }}>Market Risk Premium: {this.state.market_Risk_Premium}</Text>
                                </View>
                            </View>

                            <View style={{ flexDirection:'row', width:'90%', marginTop:10 }}>
                                <View style={{width:'100%',flexDirection: "column"}}>
                                    <Text style={{ color:'white',marginLeft:30 }}>WACC (Discount rate %): {this.state.WACC_Discount_rate}</Text>
                                </View>
                            </View>
                            {/* ========================================= */}
                            {/* =========== NAVIGATOR BUTTONS =========== */}
                            {/* ========================================= */}
                            <View style={[styles.vl,{marginTop:30}]}>
                                <TouchableWithoutFeedback onPress={this.Reverse}>
                                    <Image source={require('../images/left.png')} style={styles.imgsize} />
                                </TouchableWithoutFeedback>
                                <TouchableWithoutFeedback onPress={this.Forward}>
                                    <Image source={require('../images/right.png')} style={styles.imgsize} />
                                </TouchableWithoutFeedback>

                            </View>
                        </ScrollView>



                        {/* <View style={styles.v4}>

                            <View style={styles.v9}>
                                <TouchableWithoutFeedback onPress={() => this.selectedbox(0)}>
                                    <View style={[styles.v5, { backgroundColor: this.state.colorvalue[0] }]}>
                                        <Text allowFontScaling={false} style={styles.text4}>${this.state.Amount[0]}</Text>
                                        <Text allowFontScaling={false} style={styles.duration}>Per Month</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>

                            <View style={styles.v9}>
                                <TouchableWithoutFeedback onPress={() => this.selectedbox(1)}>
                                    <View style={[styles.v5, { backgroundColor: this.state.colorvalue[1] }]}>
                                        <Text allowFontScaling={false} style={styles.text4}>${this.state.Amount[1]}</Text>
                                        <Text allowFontScaling={false} style={styles.duration}>Quarterly</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>
                        </View>
                        <View style={styles.v4}>

                            <View style={styles.v9}>
                                <TouchableWithoutFeedback onPress={() => this.selectedbox(2)}>
                                    <View style={[styles.v5, { backgroundColor: this.state.colorvalue[2] }]}>
                                        <Text allowFontScaling={false} style={styles.text4}>${this.state.Amount[2]}</Text>
                                        <Text allowFontScaling={false} style={styles.duration}>Half a year</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>

                            <View style={styles.v9}>
                                <TouchableWithoutFeedback onPress={() => this.selectedbox(3)}>
                                    <View style={[styles.v5, { backgroundColor: this.state.colorvalue[3] }]}>
                                        <Text allowFontScaling={false} style={styles.text4}>${this.state.Amount[3]}</Text>
                                        <Text allowFontScaling={false} style={styles.duration}>Yearly</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>
                        </View> */}
                    </View>
                    
                </ImageBackground>
            </View>
        );
    }
}


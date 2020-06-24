/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { ImageBackground, Image, ScrollView, TouchableWithoutFeedback, StatusBar, Button, Text, View } from 'react-native';
import { Picker, Spinner } from 'native-base';
import Pic10 from '../images/reg10.png'
import Pic6 from '../images/reg7.png'
import styles from '../Styles/Styles'
import { Actions } from 'react-native-router-flux';
import Uri from '../DeviceIp'
export default class RegSubscription extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: Pic6,
            text: 'Lorem Ipsum Text here',
            colorvalue: ['#643F00', 'black', 'black', 'black'],
            checked: true,
            Amount: [300, 600, 900, 1200],
            url:Uri,
            CurrencySelected: '',
            PlanSelected: '',
            membershipCost: 0,
            forx_rate: 0,
             membershipplans: [
            //     {
            //         "id": "9",
            //         "type": 0,
            //         "membership_name": "Gold",
            //         "membership_duration": "2",
            //         "membership_description": "abc",
            //         "membership_cost": "5",
            //         "role_group_id": 67,
            //         "created_at": "2020-06-10T05:25:34.000Z",
            //         "updated_at": "2020-06-10T05:43:37.000Z"
            //     },
            //     {
            //         "id": "10",
            //         "type": 0,
            //         "membership_name": "Silver",
            //         "membership_duration": "6",
            //         "membership_description": null,
            //         "membership_cost": "10",
            //         "role_group_id": 67,
            //         "created_at": "2020-06-12T03:10:57.000Z",
            //         "updated_at": "2020-06-12T03:10:57.000Z"
            //     }
            ],
        }
    }
    componentDidMount = () =>{
        this.MembershipPlan(76)
    }
    MembershipPlan= async (role_id) => {
        console.log('========== role id ==========');
        let data={
            id:role_id
        }
       
        await fetch('http://192.168.1.4:3000/membership/get_assigned_membership', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ data }),
        }).then(res => res.json())
          .then((resjson) => {

                this.setState({
                    membershipplans:resjson,
                });
        })
        .catch(err => {
            console.log('failed', err)
        })
    }
    getCurrency = async (value) => {


        await fetch('https://api.exchangeratesapi.io/latest?base=GBP', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        }).then(res => res.json())
          .then((resjson) => {
              this.setState({
                CurrencySelected: value,
                forx_rate: resjson.rates[value],
                exchanged_forx_rate: this.state.membershipCost*this.state.forx_rate,
              });
        })
        .catch(err => {
            console.log('failed', err)
        })

        
    }
    getMembershipPlan (value) {
        let data=value.split('-');
        this.state.membershipCost=data[2];
        this.setState({
            PlanSelected : value
        });
    }

    Reverse = () => {
        this.props.Screenno(9) // 8 is 6 in Investor case
    }
    Forward = () => {
        this.props.Register();
        //    Actions.SubPayment();
    }
    render() {
        console.disableYellowBox = ['Warning: Each', 'Warning: Failed']
        return (
            <View style={styles.container}>
                <StatusBar hidden={false} backgroundColor="black" />
                <ImageBackground resizeMode="stretch" source={require('../images/breg8.png')} style={styles.imagebackground}>
                    <Image source={this.state.img} style={styles.image} />
                    {/* ============================ */}
                    {/* =========== BODY =========== */}
                    {/* ============================ */}
                    
                   

                    <View style={styles.mainview}>
                        <Text allowFontScaling={false} style={styles.text3}>Subscription Plan</Text>

                        <View style={{ flexDirection:'row', width:'90%' }}>
                            <View style={{width:'100%',flexDirection: "column",borderBottomColor: '#EC9705', borderBottomWidth: 1,}}>
                            <Picker
                                    style={{ color:'#fff' }}
                                    iosHeader="Select one"
                                    mode="dropdown"
                                    selectedValue={this.state.CurrencySelected}
                                    onValueChange={this.getCurrency.bind(this)}>
                                    <Picker.Item label="Exchange To" value="" />
                                    <Picker.Item label="HKD" value="HKD" />
                                    <Picker.Item label="ISK" value="ISK" />
                                    <Picker.Item label="PHP" value="PHP" />
                                    <Picker.Item label="DKK" value="DKK" />
                                    <Picker.Item label="HUF" value="HUF" />
                                    <Picker.Item label="CZK" value="CZK" />
                                    <Picker.Item label="GBP" value="GBP" />
                                    <Picker.Item label="RON" value="RON" />
                                    <Picker.Item label="SEK" value="SEK" />
                                    <Picker.Item label="IDR" value="IDR" />
                                    <Picker.Item label="INR" value="INR" />
                                    <Picker.Item label="BRL" value="BRL" />
                                    <Picker.Item label="RUB" value="RUB" />
                                    <Picker.Item label="HRK" value="HRK" />
                                    <Picker.Item label="JPY" value="JPY" />
                                    <Picker.Item label="THB" value="THB" />
                                    <Picker.Item label="CHF" value="CHF" />
                                    <Picker.Item label="EUR" value="EUR" />
                                    <Picker.Item label="MYR" value="MYR" />
                                    <Picker.Item label="BGN" value="BGN" />
                                    <Picker.Item label="TRY" value="TRY" />
                                    <Picker.Item label="CNY" value="CNY" />
                                    <Picker.Item label="NOK" value="NOK" />
                                    <Picker.Item label="NZD" value="NZD" />
                                    <Picker.Item label="ZAR" value="ZAR" />
                                    <Picker.Item label="USD" value="USD" />
                                    <Picker.Item label="MXN" value="MXN" />
                                    <Picker.Item label="SGD" value="SGD" />
                                    <Picker.Item label="AUD" value="AUD" />
                                    <Picker.Item label="ILS" value="ILS" />
                                    <Picker.Item label="KRW" value="KRW" />
                                    <Picker.Item label="PLN" value="PLN" />
                            </Picker>
                            </View>
                        </View>

                        <View style={{ flexDirection:'row', width:'90%', marginTop:20 }}>
                            <View style={{width:'100%',flexDirection: "column",borderBottomColor: '#EC9705', borderBottomWidth: 1,}}>
                            <Picker
                                    style={{ color:'#fff' }}
                                    iosHeader="Select one"
                                    mode="dropdown"
                                    selectedValue={this.state.PlanSelected}
                                    onValueChange={this.getMembershipPlan.bind(this)}>
                                        <Picker.Item label="Membership Plan" value="" />
                                        {
                                            this.state.membershipplans.map((data, index) => (
                                                <Picker.Item label={data.membership_name} value={data.id+'-'+data.membership_name+'-'+data.membership_cost} />
                                            ))
                                        }
                            </Picker>
                            </View>
                        </View>

                        <View style={{ flexDirection:'row', width:'90%', marginTop:50 }}>
                            <View style={{width:'100%',flexDirection: "column"}}>
                                <Text style={{ color:'white' }}>Membership Cost: {this.state.membershipCost} GBP</Text>
                            </View>
                        </View>
                        

                        <View style={{ flexDirection:'row', width:'90%', marginTop:10 }}>
                            <View style={{width:'100%',flexDirection: "column"}}>
                                <Text style={{ color:'white' }}>Exchange: {this.state.membershipCost} GBP to {this.state.membershipCost*this.state.forx_rate.toFixed(3)} {this.state.CurrencySelected}</Text>
                            </View>
                        </View>





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
                    {/* ========================================= */}
                    {/* =========== NAVIGATOR BUTTONS =========== */}
                    {/* ========================================= */}
                    <View style={styles.vl}>
                        <TouchableWithoutFeedback onPress={this.Reverse}>
                            <Image source={require('../images/left.png')} style={styles.imgsize} />
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={this.Forward}>
                            <Image source={require('../images/right.png')} style={styles.imgsize} />
                        </TouchableWithoutFeedback>

                    </View>
                </ImageBackground>
            </View>
        );
    }
}


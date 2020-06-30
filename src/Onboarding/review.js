import React, { Component } from 'react';
import { ImageBackground, BackHandler,Image, StatusBar, Dimensions, ActivityIndicator, ScrollView, TouchableWithoutFeedback, Text, View, ToastAndroid } from 'react-native';
import { Item, Input, Icon, Label,Textarea,Picker } from 'native-base';
import styles from '../Styles/Styles'
import { Actions } from 'react-native-router-flux';
import Toast, { DURATION } from 'react-native-easy-toast';
import DeviceInfo from 'react-native-device-info';
import Uri from '../DeviceIp'
import right from '../images/right.png'
import left from '../images/left.png'

export default class LogIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      level: ['Yes', 'No'],
      selected2: undefined,

      im_r:right,
      im_l:left,
      url:Uri //'http://192.168.100.4:80'//'http://ec2-18-222-128-84.us-east-2.compute.amazonaws.com'
    }
    
  }
  
  onValueChange2(value) {
    this.setState({
        selected2: value
    });
}
  
  render() {
    return (

      <View style={styles.containerlogin}>
        <StatusBar hidden={false} backgroundColor="black" barStyle="light-content" />
        <ImageBackground resizeMode="stretch" source={require('../images/signup.png')} style={styles.bgimg}>
          <ScrollView >
            <View style={styles.vmargin_c}>

            <Text allowFontScaling={false} style={[styles.ltext_c, { alignSelf:'center',marginTop:'30%' }]}>Your Application Status</Text>
            <Text allowFontScaling={false} style={[styles.ltext_c, { alignSelf:'center',color:'red' }]}>Pending</Text>
            <Text allowFontScaling={false} style={[styles.ltext_c, { alignSelf:'center',fontSize: 15}]}>Please Check Back Your status</Text>

            </View>
            <View style={[styles.vl,{marginTop:'20%'}]}>

<TouchableWithoutFeedback onPress={() => Actions.LogIn()}>
  <View style={{justifyContent:'center',alignItems:'center',width:150,height:70,borderWidth:.5,borderRadius:70,backgroundColor:'#EC9705'}}>
    <Text style={{color:'white'}}> Log Out</Text>
  </View>
</TouchableWithoutFeedback>

</View>
          </ScrollView>
         

        </ImageBackground>
        
      </View>

    );
  }
}
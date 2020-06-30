import React, { Component } from 'react';
import { ImageBackground, BackHandler,Image, StatusBar, Dimensions, ActivityIndicator, ScrollView, TouchableWithoutFeedback, Text, View, ToastAndroid } from 'react-native';
import { Item, Input, Icon, Label,Textarea } from 'native-base';
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
     
      im_r:right,
      im_l:left,
      url:Uri //'http://192.168.100.4:80'//'http://ec2-18-222-128-84.us-east-2.compute.amazonaws.com'
    }
    
  }
  

  
  render() {
    return (

      <View style={styles.containerlogin}>
        <StatusBar hidden={false} backgroundColor="black" barStyle="light-content" />
        <ImageBackground resizeMode="stretch" source={require('../images/signup.png')} style={styles.bgimg}>
          <ScrollView >
            <View style={styles.vmargin_c}>
              <Text allowFontScaling={false} style={[styles.ltext_c, { alignSelf:'center' }]}>Company Information </Text>
             
              <Textarea  allowFontScaling={false} rowSpan={5}  placeholder="Investment already done" placeholderTextColor="#878787" style={[styles.v33, { color: 'white', height: 180 }]} />

              <View style={[styles.vl,{marginTop:20}]}>

              <TouchableWithoutFeedback >
                            <Image source={this.state.im_l} style={styles.imgsize} />
                        </TouchableWithoutFeedback>
                        
              <TouchableWithoutFeedback >
                            <Image source={this.state.im_r} style={styles.imgsize} />
                        </TouchableWithoutFeedback>
                        </View>

            </View>

          </ScrollView>
         

        </ImageBackground>
        
      </View>

    );
  }
}
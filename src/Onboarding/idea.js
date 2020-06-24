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
              <Text allowFontScaling={false} style={[styles.ltext_c, { alignSelf:'center' }]}>Idea</Text>
              <Textarea  allowFontScaling={false} rowSpan={5}  placeholder="Why this idea was picked up" placeholderTextColor="#878787" style={[styles.v33, { color: 'white', height: 180 }]} />
              <Textarea  allowFontScaling={false} rowSpan={5}  placeholder="Do you have any expertise in this area" placeholderTextColor="#878787" style={[styles.v33, { color: 'white', height: 180 }]} />
              <Textarea  allowFontScaling={false} rowSpan={5}  placeholder="What's new or unique in the idea" placeholderTextColor="#878787" style={[styles.v33, { color: 'white', height: 180 }]} />
              <Textarea  allowFontScaling={false} rowSpan={5}  placeholder="How you are different from others" placeholderTextColor="#878787" style={[styles.v33, { color: 'white', height: 180 }]} />
              <Textarea  allowFontScaling={false} rowSpan={5}  placeholder="Why will you succeed over others? What do you understand that others don’t?" placeholderTextColor="#878787" style={[styles.v33, { color: 'white', height: 180 }]} />
              <Item style={[styles.itemstyle,  { marginTop: 30 }]} floatingLabel>
                <Label allowFontScaling={false} style={styles.username}>Who are your competitors</Label>
                <Input  allowFontScaling={false}   style={styles.input} />
              </Item>
            

              <View style={[styles.vl,{marginTop:'10%'}]}>

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
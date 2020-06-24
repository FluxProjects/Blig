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
              <Text allowFontScaling={false} style={[styles.ltext_c, { alignSelf:'center' }]}>Progress </Text>
              <Item style={[styles.itemstyle, { marginTop: 30 }]} floatingLabel>
                <Label  style={styles.username}>Duration Number of years/Months</Label>
                <Input  allowFontScaling={false}   style={styles.input} />
              </Item>
            
              <Item style={[styles.itemstyle,  { marginTop: 30 }]} floatingLabel>
                <Label allowFontScaling={false} style={styles.username}>Any Revenue Generated(Optional)</Label>
                <Input  allowFontScaling={false}   style={styles.input} />
              </Item>



              <View>
                          
                                    <Item picker style={{ width: '80%',marginTop:20, borderWidth: 1,borderBottomColor:'#EC9705',alignSelf:'center' }} >
                                        <Picker
                                            mode="dropdown"
                                            iosIcon={<Icon name="arrow-down" />}
                                            style={{ width: undefined,color:'white' }}
                                            placeholder="Gender"
                                            placeholderStyle={{ color: "red" }}
                                            placeholderIconColor="red"
                                            selectedValue={this.state.selected2}
                                            onValueChange={(v) => this.onValueChange2(v)}
                                        >
                                            <Picker.Item label="Are people using service already" value="key0" />
                                            {
                                                this.state.level.map((data, index) => (
                                                    <Picker.Item label={data} value={index} />
                                                ))
                                            }
                                        </Picker>
                                    </Item>
                                </View>
              <View style={[styles.vl,{marginTop:90}]}>

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
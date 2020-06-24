
import React, { Component } from 'react';
import { ImageBackground, BackHandler, ActivityIndicator, Dimensions, TouchableWithoutFeedback, ToastAndroid, StatusBar, Text, View, ScrollView } from 'react-native';
import { Item, Input, Icon, Label } from 'native-base';
import { Actions } from 'react-native-router-flux';
import styles from './src/Styles/Styles'
import Toast, { DURATION } from 'react-native-easy-toast';
//import Uri from '../DeviceIp'
export default class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      pass: '',
      confirmpass: '',
      emailValidate: true,
      passValidate: true,
      confirmpassValidate: true,
      showpass: true,
      showconfirmpass: true,
      loading: false,
     // url:Uri //'http://192.168.100.4:80'//'http://ec2-18-222-128-84.us-east-2.compute.amazonaws.com'

    }
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  
  }
  componentDidMount = () => {
    console.log("will mount calling")
 }

  gotoLogIn2 = () => {
    Actions.LogIn()
  }
  Validation = (v, type) => {
    const email = /^[a-zA-Z0-9@.]+$/
    if (type == 'email') {
      if (email.test(v)) {
        this.setState({
          email: v,
          emailValidate: true
        })
      }
      else if (v.length == 0) {
        this.setState({
          email: '',
          emailValidate: false
        })
      }
    }
    else if (type == 'password') {
      this.setState({
        pass: v,
        passValidate: true

      })
      if (v.length == 0) {
        this.setState({
          pass: '',
          passValidate: false
        })
      }

    }
    else if (type == 'confrimpassword') {
      this.setState({
        confirmpass: v,
        confirmpassValidate: true

      })
      if (v.length == 0) {
        this.setState({
          confirmpass: '',
          confirmpassValidate: false
        })
      }

    }
  }
  passvalidate=(v)=>{
    const CapsLtr = /^[A-Z]+$/
    const num = /^[0-9]+$/
    const special = /^[@.#!$%^&*()_+{}":';?/><,`~]+$/
    const char = /^[a-zA-Z]+$/
    let c = v
    console.log('false',c.charCodeAt(0))

    //   if (CapsLtr.test(v) && num.test(v)&&special.test(v)&&char.test(v))
    //   {
    //       console.log('password:',v)
    //   }
    //   else {
    //       console.log('false',v.charCodeAt(0))
    //   }
  }
  render() {
    return (
      <View style={styles.containerlogin}>
        <StatusBar hidden={false} backgroundColor="black" />
        <ImageBackground resizeMode="stretch" source={require('./src/images/signup.png')} style={styles.bgimg}>
          <ScrollView>
            <View style={styles.vmargin}>
              <Text allowFontScaling={false} style={[styles.ltext, { marginLeft: 10 }]}>Example </Text>
              <Item style={[styles.itemstyle, !this.state.emailValidate ? styles.error : null, { marginTop: 30 }]} floatingLabel>
                <Label allowFontScaling={false} style={styles.username}>Email</Label>
                <Input keyboardType="email-address" allowFontScaling={false} onChangeText={(value, ) => this.Validation(value, 'email')}
                onEndEditing={() => {
                   if (/^[a-z0-9][a-z0-9-_\.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/.test(this.state.email.toLowerCase())) {
                  //  if (/"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"/.test(this.state.email)) {

                  } else {
                      alert('Invalid Email Address')
                      this.setState({ email: '' })
                  }
              }}
                value={this.state.email} style={styles.input} />
              </Item>
              <View style={[styles.v, { width: '80%', alignSelf: 'center' }]}>
                <Item style={[styles.item2, !this.state.passValidate ? styles.error : null,]} floatingLabel>
                  <Label allowFontScaling={false} style={styles.username}>Password</Label>
                  <Input allowFontScaling={false} secureTextEntry={this.state.showpass} onChangeText={(pass) => this.passvalidate(pass)} style={styles.input} />
                </Item>
                <Icon onPress={() => this.setState({ showpass: !this.state.showpass })} name='eye' style={styles.icon} type="AntDesign" />
              </View>
              <View style={[styles.v, { width: '80%', alignSelf: 'center' }]}>
                <Item style={[styles.item2, !this.state.confirmpassValidate ? styles.error : null,]} floatingLabel>
                  <Label allowFontScaling={false} style={styles.username}>Confirm Password</Label>
                  <Input allowFontScaling={false} onChangeText={(pass) => this.Validation(pass, 'confrimpassword')} value={this.state.confirmpass} secureTextEntry={this.state.showconfirmpass} style={styles.input} />
                </Item>
                <Icon onPress={() => this.setState({ showconfirmpass: !this.state.showconfirmpass })} name='eye' style={styles.icon} type="AntDesign" />
              </View>
              <TouchableWithoutFeedback onPress={() => this.gotoLogIn()}>
                <ImageBackground source={require('./src/images/buttoncolor.png')} style={styles.btnimage2}>
                  <Text allowFontScaling={false} onPress={() => this.gotoLogIn()} style={styles.ltext2}>SIGN UP</Text>
                </ImageBackground>
              </TouchableWithoutFeedback>
              <Text allowFontScaling={false} style={styles.alreadyAcount} onPress={() => this.gotoLogIn2()}>Already have an account? / Login</Text>
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
          </ScrollView>
          {
            this.state.loading ?
              <View style={{ position: 'absolute', backgroundColor: "rgba(0,0,0,0.4)", width: Dimensions.get('window').width, height: Dimensions.get('window').height, }}>
                <ActivityIndicator size="large" color="#EC9705" style={{ position: 'absolute', top: (Dimensions.get('window').height / 2) - 40, left: (Dimensions.get('window').width / 2) - 20 }} />

              </View>
              : null
          }

        </ImageBackground>
      </View>

    );
  }
}


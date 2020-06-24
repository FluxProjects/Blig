
import React, { Component } from 'react';
import { ImageBackground, BackHandler, ActivityIndicator, Dimensions, TouchableWithoutFeedback, ToastAndroid, StatusBar, Text, View, ScrollView } from 'react-native';
import { Item, Input, Icon, Label } from 'native-base';
import { Actions } from 'react-native-router-flux';
import styles from '../Styles/Styles'
import Toast, { DURATION } from 'react-native-easy-toast';
import Uri from '../DeviceIp'
export default class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      pass: '',
      confirmpass: '',
      phone:'',
      emailValidate: true,
      passValidate: true,
      confirmpassValidate: true,
      showpass: true,
      showconfirmpass: true,
      loading: false,
      url:Uri //'http://192.168.100.4:80'//'http://ec2-18-222-128-84.us-east-2.compute.amazonaws.com'

    }
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  
  }
  componentDidMount = () => {
    console.log("will mount calling")
 }
  onBackPress = () => {
   // console.log("on back calling")
    //console.log('index1=>',Actions.state.index)
  
    // on back button press has disabled if return true
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
    Actions.pop()
    return false
  }
  gotoLogIn = async () => {
    //alert('clicked')
    if (!this.state.loading) {
     // alert('clicked')
 
      if (this.state.email === '' | this.state.pass === '' | this.state.confirmpass === '') {
        this.refs.toast.show('Enter the Email and Password', DURATION.LENGTH_LONG);
      }
      else {
        this.setState({ loading: true })
        if (this.state.pass == this.state.confirmpass) {
          Actions.verify({email:this.state.email,pass:this.state.pass})
        }
        else {
          this.setState({ loading: false })
          this.refs.toast.show("password not match!", DURATION.LENGTH_LONG);
        }
      }
    }
  }
  gotoLogIn2 = () => {
    Actions.LogIn()
  }
  Validation = (v, type) => {
    const email = /^[a-zA-Z0-9@.]+$/
    const phone=/^[0-9]+$/
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
   else if (type == 'phone') {

       if(this.state.phone.length<9){  
      if (phone.test(v)) {
        this.setState({
          phone: v,
        })
      }
      else if (v.length == 0) {
        this.setState({
          phone: '',
        })
      }
    }
    else{
      alert("maximum length of number is 9")
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

  send_sms=async()=>{
    console.log('sms sending')
    let apiKey,sender,message,numbers
    apiKey = encodeURI('CG720VX1l2c-NoHhfVtaTHw6ailaTM3h9rMW0P6s12');
	console.log(apiKey)
    // Message details
    numbers = [447482877837];
    sender = encodeURI('Flux');
    console.log(sender)
    message = encodeURIComponent('This is your activation code 675831');
   console.log(message)
    numbers = numbers.join();
   
    // Prepare data for POST request
    var data ={'apikey': apiKey, 'numbers' :numbers, "sender" :sender, "message" :message,"test":true};
   
    // Send the POST request with cURL
    //ch = curl_init('https://api.txtlocal.com/send/');
     
    console.log(data)

    await fetch('https://api.txtlocal.com/send/', {
      method: 'POST',
      headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data}),
  
  })
  .then(res => res.json())
  .then(resjson => {
    console.log('API Response',resjson)
    if(resjson.status==true){

    }
    

     }).catch(err => {
    alert('Error');
    console.log(err);
  })
  }
  render() {
    return (
      <View style={styles.containerlogin}>
        <StatusBar hidden={false} backgroundColor="black" />
        <ImageBackground resizeMode="stretch" source={require('../images/signup.png')} style={styles.bgimg}>
          <ScrollView>
            <View style={styles.vmargin}>
              <Text allowFontScaling={false} style={[styles.ltext, { marginLeft: 10 }]}>SIGN UP </Text>
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

              <Item style={[styles.itemstyle, !this.state.emailValidate ? styles.error : null, { marginTop: 30 }]} floatingLabel>
                <Label allowFontScaling={false} style={styles.username}>Phone Number</Label>
                <Input  allowFontScaling={false} onChangeText={(value, ) => this.Validation(value, 'phone')}
                
                value={this.state.phone} style={styles.input} />
              </Item>

              <View style={[styles.v, { width: '80%', alignSelf: 'center' }]}>
                <Item style={[styles.item2, !this.state.passValidate ? styles.error : null,]} floatingLabel>
                  <Label allowFontScaling={false} style={styles.username}>Password</Label>
                  <Input allowFontScaling={false} secureTextEntry={this.state.showpass} onChangeText={(pass) => this.Validation(pass, 'password')} style={styles.input} />
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
                <ImageBackground source={require('../images/buttoncolor.png')} style={styles.btnimage2}>
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


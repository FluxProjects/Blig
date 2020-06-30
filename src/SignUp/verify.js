
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
      number:'',
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

     if(this.state.number==123456){
      
          await fetch(this.state.url + '/SignUp/SignUp', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              Email: this.props.email,
              Pass: this.props.pass,
              phone:this.props.phone
            }),
          })
            .then(res => res.json())
            .then(resjson => {
              alert(111);
              if (resjson.Successful) {
               // console.log('successful')
                this.setState({ loading: false })
                alert('Sign up has been complete.')
                Actions.LogIn()
              }
              else {
                this.setState({ loading: false })
              //  console.log('failed');
                this.refs.toast.show(resjson.Message, DURATION.LENGTH_LONG);
              }
            }
            ).catch(err => {
              this.setState({ loading: false })
              console.log(err.toString())
              this.refs.toast.show('Network Request Failed!', DURATION.LENGTH_LONG);

            })
          }
          else{
            alert('Code is not correct')
          }
        
  }
  
  Validation = (v, type) => {
    const number = /^[0-9]+$/
    if(this.state.number.length<7){
    if (type == 'number') {
      if (number.test(v)) {
        this.setState({
          number: v,
        })
      }
      else if (v.length == 0) {
        alert('Please Enter  6 Digits code')
       this.setState({
          number: '',
        })
      }
    }
  }
else{
  alert('Please Enter  6 Digits code')
}
    
  }
  
  render() {
    return (
      <View style={styles.containerlogin}>
        <StatusBar hidden={false} backgroundColor="black" />
        <ImageBackground resizeMode="stretch" source={require('../images/signup.png')} style={styles.bgimg}>
          <ScrollView>
            <View style={styles.vmargin}>
              <Text allowFontScaling={false} style={[styles.ltext, { marginLeft: 10 }]}>Verify </Text>
              <Item style={[styles.itemstyle, !this.state.emailValidate ? styles.error : null, { marginTop: 30 }]} floatingLabel>
                <Label allowFontScaling={false} style={styles.username}>Code</Label>
                <Input keyboardType="email-address" allowFontScaling={false} onChangeText={(value, ) => this.Validation(value, 'number')}
                
                value={this.state.number} style={styles.input} />
              </Item>
            
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


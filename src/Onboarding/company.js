import React, { Component } from 'react';
import { ImageBackground, BackHandler,Image, StatusBar, Dimensions, ActivityIndicator, ScrollView, TouchableWithoutFeedback, Text, View, ToastAndroid } from 'react-native';
import { Item, Input, Icon, Label,Textarea, Button } from 'native-base';
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
      _x:0,
      _max_length:0,
      im_r:right,
      im_l:left,
      url:Uri,
      _data:[],
      _toggle:[],


      data:[],
      k:0,
      temp:'',
      question:'',
      q_id:null,

      category:'',
      type:'',
      c_id:'',


    }

     setTimeout(()=>{
        this.setState({
          _max_length:this.state._toggle.length
        });
       // alert(this.state._max_length)
     },1500); 
  }
  

  componentDidMount=()=>{
    this.get_questions();
}    





store_values_input=(v,key,q,id,cat,type,cat_id)=>{

  const name = /^[a-zA-Z]+$/
if(name.test(v)){


  if(this.state.k==key){
    console.log('in if')
    this.setState({
      temp:v
    })
    console.log(this.state.temp)
}
  else{
    console.log('in ele')
    
  this.state.data.push({answer:this.state.temp,q_id:this.state.q_id,question:this.state.question,category:this.state.category,type:this.state.type,cat_id:this.state.c_id})

  
    console.log(this.state.data)
  

  }


  this.setState({
    k:key
  })
  this.setState({
    question:q
  })
  this.setState({
    q_id:id
  })

  this.setState({
    category:cat
  })
  this.setState({
    type:type
  })
  this.setState({
    c_id:cat_id
  })

}
else if (v.length == 0) {
  this.setState({ temp: '' })
}
}



store_values_email=(v,key,q,id,cat,type,cat_id)=>{


  if(this.state.k==key){
    console.log('in if')
    this.setState({
      temp:v
    })
    console.log(this.state.temp)
}
  else{
    console.log('in ele')
    
  this.state.data.push({answer:this.state.temp,q_id:this.state.q_id,question:this.state.question,category:this.state.category,type:this.state.type,cat_id:this.state.c_id})

  
    console.log(this.state.data)
  

  }


  this.setState({
    k:key
  })
  this.setState({
    question:q
  })
  this.setState({
    q_id:id
  })

  this.setState({
    category:cat
  })
  this.setState({
    type:type
  })
  this.setState({
    c_id:cat_id
  })
}




store_values_text_area=(v,key,q,id,cat,type,cat_id)=>{


  if(this.state.k==key){
    console.log('in if')
    this.setState({
      temp:v
    })
    console.log(this.state.temp)
}
  else{
    console.log('in ele')
    
  this.state.data.push({answer:this.state.temp,q_id:this.state.q_id,question:this.state.question,category:this.state.category,type:this.state.type,cat_id:this.state.c_id})

  
    console.log(this.state.data)
  

  }


  this.setState({
    k:key
  })
  this.setState({
    question:q
  })
  this.setState({
    q_id:id
  })

  this.setState({
    category:cat
  })
  this.setState({
    type:type
  })
  this.setState({
    c_id:cat_id
  })

}





insert_db_answers=async()=>{
  console.log(this.state.data)
  
  
  for (let i = 0; i < this.state.data.length; i++) {
    
  
  
    let data = {
      
      user_id:1,
      question_id:this.state.data[i].q_id,
      cat_id:this.state.data[i].cat_id,
      category:this.state.data[i].category,
      question:this.state.data[i].question,
      answer:this.state.data[i].answer,
  }
    await fetch(this.state.url + '/E_Question/inser_answers', {
      method: 'POST',
      headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data }),
  
  })
  .then(res => res.json())
  .then(resjson => {
     }).catch(err => {
    alert('Error');
    console.log(err);
  })
  }
  
  }




get_questions = async () => {
    await fetch(this.state.url + '/E_Question/Entrepreneur_questions', {
        method: 'POST',
        headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        },
    })
    .then(res => res.json())
    .then(resjson => {
        this.setState({
          _data:resjson.data,
        });
        console.log(this.state._data[0])

    }).catch(err => {
      alert('Error');
      console.log(err);
    })
}
_next = () =>{
  console.log(this.state._max_length);
  console.log(this.state._x)
  if(this.state._x==this.state._max_length){
    Actions.review()
  }
  if(  this.state._x < this.state._max_length-1 ){
    this.state._toggle[this.state._x].hide=1;

    // let prev_hide=this.state._x;
    // prev_hide--;
    console.log(this.state._x);
    // this.state._toggle[prev_hide].hide=1;

    this.state._x++;
    this.setState({ _x : this.state._x });

    this.state._toggle[this.state._x].hide=0;
    

    this.setState({
      _toggle:this.state._toggle
    });
    console.log(this.state._toggle);
  }
  else{
    Actions.review()
  }
}


_prev = () =>{
  if(  this.state._x > 0){

        this.state._toggle[this.state._x].hide=1;

        // let prev_hide=this.state._x;
        // prev_hide--;
        console.log(this.state._x);
        // this.state._toggle[prev_hide].hide=1;
      
        this.state._x--;
        this.setState({ _x : this.state._x });
      
        this.state._toggle[this.state._x].hide=0;
      
        this.setState({
          _toggle:this.state._toggle
        });
        console.log(this.state._toggle);    
    }
}

  render() {
    return (

      <View style={styles.containerlogin}>
        <StatusBar hidden={false} backgroundColor="black" barStyle="light-content" />
        <ImageBackground resizeMode="stretch" source={require('../images/signup.png')} style={styles.bgimg}>
          <ScrollView >
            <View style={styles.vmargin_c}>
         
              {
                this.state._data.map((val, i) => (
                  <View>
                    <Text>{ i==0 ? this.state._toggle.push({hide:0}) : this.state._toggle.push({hide:1}) }</Text>
                    <View>
                      {
                        this.state._toggle[i].hide==0 ?
                        (
                          <View>
                            <View>
                        <Text allowFontScaling={false} style={[styles.ltext_c,styles.text_white, { alignSelf:'center' }]}>{val.e_questions[0].category}</Text>
                      </View>
                        {
                            val.e_questions.map((q, j) => (
                              q.type=='text_area' ? 
                              <View>
                          <Textarea onChangeText={(value) => this.store_values_text_area(value,j,q.question_description,q.id,q.category,q.type,q.cat_id)}  allowFontScaling={false} rowSpan={5}  placeholder={q.question_description} placeholderTextColor="#878787" style={[styles.v33, { color: 'white', height: 180 }]} />
                              </View> 
                              :
                              q.type=='int' ? 
                              <View></View>
                              :
                              q.type=='text' ? 
                              <View>
                                <Item style={[styles.itemstyle, { marginTop: 30 }]} floatingLabel>
                                <Label  style={styles.username}>{q.question_description}</Label>
                                <Input   allowFontScaling={false} onChangeText={(value) => this.store_values_input(value,j,q.question_description,q.id,q.category,q.type,q.cat_id)}   style={styles.input} />
                                </Item>
                              </View>
                              :
                              q.type=='dropdown' ? 
                              <View></View>
                              :
                              q.type=='radio' ? 
                              <View></View>
                              :
                              q.type=='checkbox' ? 
                              <View></View>
                              :
                              q.type=='email' ? 
                              <View>
                                <Item style={[styles.itemstyle, { marginTop: 30 }]} floatingLabel>
                                <Label  style={styles.username}>{q.question_description}</Label>
                                <Input onChangeText={(value) => this.store_values_email(value,j,q.question_description,q.id,q.category,q.type,q.cat_id)} allowFontScaling={false}   style={styles.input} />
                                </Item>
                              </View>
                              :
                              q.type=='phone' ? 
                              <View>
                                <Item style={[styles.itemstyle, { marginTop: 30 }]} floatingLabel>
                                <Label  style={styles.username}>{q.question_description}</Label>
                                <Input  allowFontScaling={false}   style={styles.input} />
                                </Item>
                              </View>
                              :
                              val.e_questions[0].type=='percentage' ? 
                              <View>
                                <Item style={[styles.itemstyle, { marginTop: 30 }]} floatingLabel>
                                <Label  style={styles.username}>{val.e_questions[0].question_description}</Label>
                                <Input  allowFontScaling={false}   style={styles.input} />
                                </Item>
                              </View>
                              :<View></View>
                            ))

                        }
                          </View>
                        ):
                        <View></View>
                      }
                    </View>  
                  </View>

                ))

              }
            </View>
            <View style={[styles.vl]}>

              <TouchableWithoutFeedback onPress={() => this._prev()}>
                <Image source={this.state.im_l} style={styles.imgsize} />
              </TouchableWithoutFeedback>
          
              <TouchableWithoutFeedback onPress={() => this._next()}>
                <Image source={this.state.im_r} style={styles.imgsize} />
              </TouchableWithoutFeedback>
            </View>
            
          </ScrollView>
         

        </ImageBackground>
        
      </View>

    );
  }
}
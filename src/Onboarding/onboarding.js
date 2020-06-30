import React, { Component } from 'react';
import { ImageBackground, BackHandler,Image, StatusBar, Dimensions, ActivityIndicator, ScrollView, TouchableWithoutFeedback, Text, View, ToastAndroid } from 'react-native';
import DatePicker from 'react-native-datepicker' 
import { Item, Input, Icon, Label,Textarea, Button, Picker, Radio, ListItem, CheckBox } from 'native-base';
import styles from '../Styles/Styles'
import { RadioButton } from 'react-native-paper';
import { Actions } from 'react-native-router-flux';
import Toast, { DURATION } from 'react-native-easy-toast';
import Uri from '../DeviceIp'
import right from '../images/right.png'
import left from '../images/left.png'

export default class LogIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      num_category:null,
      _x:0,
      _max_length:0,
      im_r:right,
      im_l:left,
      url:Uri,
      _data:[],
      _toggle:[],
      demy_data:[],
      data:[],
      multi_inp_data:[],
      k:0,
      selected:'',
      check_value: [],
      temp:'',
      question:'',
      q_id:null,
      sub_array:[],
      category:'',
      type:'',
      c_id:'',
      _ans_data:[],
      _ans2_data:[],
      abc:[
        {abc:'Ali Hy'}
      ],
      pre_button:false,
      _show_checkbox: 0
    }

     setTimeout(()=>{
        this.setState({
          _max_length:this.state._toggle.length
        });
     },1500); 
  }
  
  componentDidMount=()=>{
    this.get_questions();
    this.multi_input_data();
    this.mandatory_input_data();
    
    console.log('Answer Array:',this.state._ans_data)
    console.log('User ID:',35)
}    


store_values_input=(v,key,q,id,cat,type,cat_id)=>{
const name = /^[a-zA-Z]+$/
if(name.test(v)){
  if(this.state.k==key){
    this.setState({
      temp:v
    })
  }
  else{   
    this.state.data.push({answer:this.state.temp,q_id:this.state.q_id,question:this.state.question,category:this.state.category,type:this.state.type,cat_id:this.state.c_id})
    console.log("Data Array",this.state.data)
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
    this.setState({
      temp:v
    })
    console.log(this.state.temp)
  }
  else{
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
    this.setState({
      temp:v
    })
  }
  else{
    this.state.data.push({answer:this.state.temp,q_id:this.state.q_id,question:this.state.question,category:this.state.category,type:this.state.type,cat_id:this.state.c_id})
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


check_status=async()=>{
  let data = {
  user_id:35,
  cat_id:this.state.num_category,
  }
  await fetch(this.state.url + '/E_Question/Entrepreneur_question_get', {
    method: 'POST',
    headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data }),
})
.then(res => res.json())
.then(resjson => {
  if(resjson.data.length!=0){
    alert();
    console.log(Actions)
    Actions.review()
  }
}).catch(err => {
  alert('Error Entrepreneur_question_get');
  })
}

insert_db_answers=async()=>{
  console.log("Answer Array",this.state.data)
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
    alert('Error insert_db_answers');
    })
  }
}

check(key){
  
      if (this.state.check_value[key]['status'] == false) {
        this.state.check_value[key]['status']= true;
      } else {
        this.state.check_value[key]['status']=false;
      }
      
      this.setState({
        check_value: this.state.check_value
      })
      
      setTimeout(()=>{
        console.log(this.state.check_value);
        console.log(this.state.check_value[key].status=true);
        console.log(key);
      },3000);

      


      
    
}

get_questions = async () => {
  fetch(this.state.url+'/E_Question/Entrepreneur_questions', {
  method: 'get',
  headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            },
  })
  .then(res => res.json())
  .then(resjson => {

    console.log('No of Pages:',resjson.category)
    this.setState({
      num_category:resjson.category
    })

    setTimeout(()=>{
    this.setState({
    _data:resjson.data,
    });
    for( var i=0; i < this.state._data.length; i++ ){
      this.state._ans_data.push([]);
      for( var j=0; j < this.state._data[i].e_questions.length; j++ ){
      this.state._ans_data[i].push({ 
        id: this.state._data[i].e_questions[j].id,
        cat_id: this.state._data[i].e_questions[j].cat_id,
        question: this.state._data[i].e_questions[j].question_description,
        answere:'',
          });
        }
      }
      console.log(this.state._ans_data)
    },500);
  }).catch(err => {
    alert('Error'+'Entrepreneur_questions');
  })
}

_next = async() =>{
if(this.state._toggle[0].hide==0){
  this.setState({
  pre_button:true
})
  }
  if(this.state.pre_button==false){
    this.setState({
      pre_button:true
    })
  }
  if(this.state._x < this.state._max_length-1 ){
    this.state._toggle[this.state._x].hide=1;
    for (let i = 0; i < this.state._ans_data[this.state._x].length; i++) {
        let data = {
          user_id:35,
          question_id:this.state._ans_data[this.state._x][i].id,
          cat_id:this.state._ans_data[this.state._x][i].cat_id,
          category:this.state._ans_data[this.state._x][i].category,
          question:this.state._ans_data[this.state._x][i].question,
          answer:this.state._ans_data[this.state._x][i].answere,
        }
      //   await fetch(this.state.url + '/E_Question/insert_answers', {
      //     method: 'POST',
      //     headers: {
      //             Accept: 'application/json',
      //             'Content-Type': 'application/json',
      //             },
      //     body: JSON.stringify({ data }),
      //   })
      // .then(res => res.json())
      // .then(resjson => {
      //    }).catch(err => {
      //   alert('Error '+err );
      // })
    }
    this.state._x++;
    this.setState({ _x : this.state._x });
    this.state._toggle[this.state._x].hide=0;
    this.setState({
      _toggle:this.state._toggle
    });   
  }
  else{
    alert('redirect421342424244243');
    Actions.review()
    for (let i = 0; i < this.state._ans_data[this.state._x].length; i++) {
      let data = {
        user_id:35,
        question_id:this.state._ans_data[this.state._x][i].id,
        cat_id:this.state._ans_data[this.state._x][i].cat_id,
        category:this.state._ans_data[this.state._x][i].category,
        question:this.state._ans_data[this.state._x][i].question,
        answer:this.state._ans_data[this.state._x][i].answere,
      }
      console.log(data);
    //   await fetch(this.state.url + '/E_Question/insert_answers', {
    //     method: 'POST',
    //     headers: {
    //             Accept: 'application/json',
    //             'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ data }),
    // })
    // .then(res => res.json())
    // .then(resjson => {
    //    }).catch(err => {
    //   alert('Error'+'insert_answers');
    // })
  }
    alert('redirect421342424244243');
    console.log('=============================================================')
    console.log(Actions)
    console.log('=============================================================')
    Actions.review()
  }
}

_prev = () =>{
  if(this.state._x > 0){
        this.state._toggle[this.state._x].hide=1;
        this.state._x--;
        this.setState({ _x : this.state._x });      
        this.state._toggle[this.state._x].hide=0;
        this.setState({
          _toggle:this.state._toggle
        });
    }
  if(this.state._toggle[0].hide==0){
    this.setState({
      pre_button:false
    })
  }
}

_validate = (value,i,j,validator,_max_length) =>{
  const email=/^[a-z0-9@._]+$/;
  const phone=/^[0-9+()]+$/;
  if( value.length <= _max_length ){
    switch (validator){
      case email:
        if( email.test(value) ){
          this._validator(value,i,j);
        }
        break;
        case phone:
        if( phone.test(value) && value.length <= 12 ){
          this._validator(value,i,j);
        }
        break;
      default:
          this._validator(value,i,j);
        break;
    }
  }
}

_validator = (value,i,j) =>{
  this.state._ans_data[i][j].answere=value;
  this.setState({
    _ans_data:this.state._ans_data
  }); 
}


_validate2 = (value,i,j,validator,max_length) =>{
  const email=/^[a-z0-9@._]+$/;
  const phone=/^[0-9+()]+$/;
  if( value.length <= max_length ){
    switch (validator){
      case email:
        if( email.test(value) ){
          this._validator2(value,i,j);
        }
        break;
        case phone:
        if( phone.test(value) && value.length <= 12 ){
          this._validator2(value,i,j);
        }
        break;
      default:
          this._validator2(value,i,j);
        break;
    }
  }
}

_validator2 = (value,i,j) =>{
 console.log("Answer Value",value)
  this.state._ans_data[i][j].answere=value;
  this.setState({
    _ans2_data:this.state._ans_data
  }); 
}

multiPickerChange(value) {
  this.setState({
    multi_select: value
  });
}
multi_input_data=async()=>{

  await fetch(this.state.url + '/E_Question/Entrepreneur_questions_multiple', {
    method: 'get',
    headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              },
  })
.then(res => res.json())
.then(resjson => {
 console.log('Multi-Inputs Questions Array:',resjson.data);

 this.setState({
  demy_data:resjson.data
});
   }).catch(err => {
  alert('Error'+'Entrepreneur_questions_multiple');
  console.log(err);
});
}
mandatory_input_data=async()=>{
  await fetch(this.state.url + '/E_Question/Entrepreneur_questions_mandatory', {
    method: 'get',
    headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    },
})
.then(res => res.json())
.then(resjson => {
      console.log('Mandatory Questions Array:',resjson.data)

   }).catch(err => {
  alert('Error'+'mandatory');
  console.log(err);
});
}


displayItems(value){
  console.log ("Question ID:",value)
  this.state.sub_array =[];
  let copy=[];
  console.log(this.state.demy_data);
  for (let i = 0; i < this.state.demy_data.length; i++) {
    this.state.copy="";
      if(this.state.demy_data[i].entreprenuer_q_inputs[0].f_key==value){
        // console.log("FKey ID:",this.state.demy_data[i].entreprenuer_q_inputs[0].f_key)
        copy.push(this.state.demy_data[i].entreprenuer_q_inputs) ;
      }
      if(copy.length > 0 || copy != ""){
           this.state.sub_array.push(copy[0]);
      }
  }
}

render_checkbox_data(key){
  this.state.check_value.push({
    key: key,
    status: false
  })
} 

gotoSignUp = () => {
  // console.log('=================================')
  //   console.log(Actions)
  //   console.log('=================================')
    Actions._Login();
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
                    <Text style={ [{ position:"absolute",opacity:0 }] }>{ i==0 ? this.state._toggle.push({hide:0}) : this.state._toggle.push({hide:1}) }</Text>
                      <View>
                      {
                        this.state._toggle[i].hide==0 ?
                        (
                          <View>
                            <View>
                              <Text allowFontScaling={false} style={[styles.ltext_c,styles.text_white, { alignSelf:'center',marginTop:20,fontSize: 21,backgroundColor:'#F59500',paddingHorizontal:10,borderRadius:10,paddingBottom:5  }]}>{val.e_questions[0].category}</Text>
                            </View>
                            <View>
                            </View>
                          {
                            val.e_questions.length > 0 ?
                             (
                              val.e_questions.map((q, j) => (   
                                
                                <View> 
                                  
                                {
                                  q.type=='text_area' ? 
                                    <View>
                                      <Textarea onChangeText={ (value) => this._validate(value,i,j,q.max_length) } value={ this.state._ans_data.length > 0 ? this.state._ans_data[i][j] : "" } placeholder={q.question_description} placeholderTextColor="#878787" style={[styles.v33, { color: 'white', height: 80 }]} />
                                    </View> 
                                  
                                    :
                                    q.type=='int' ? 
                                    <View>
                                      <Item style={[styles.itemstyle, { marginTop: 30 }]} floatingLabel>
                                      <Label  style={styles.username}>{q.question_description}</Label>
                                        <Input allowFontScaling={false} placeholder={q.question_description} onChangeText={ (value) => this._validate(value,i,j,q.max_length)} value={ this.state._ans_data.length > 0 ? this.state._ans_data[i][j] : "" }   style={styles.input} />
                                      </Item>
                                    </View>
                                    
                                    :
                                    q.type=='Text' ? 
                                    <View>
                                      <Item style={[styles.itemstyle, { marginTop: 30 }]} floatingLabel>
                                        <Label  style={styles.username}>{q.question_description}</Label>
                                        <Input  allowFontScaling={false} onChangeText={ (value) => this._validate(value,i,j,q.max_length)} value={ this.state._ans_data.length > 0 ? this.state._ans_data[i][j] : "" }   style={styles.input} />
                                      </Item>
                                    </View>
                                    
                                    :
                                    q.type=='dropdown' ? 
                                    <View>
                                    {this.displayItems(q.id)}
                                    <Label  style={[styles.username,styles.itemstyle,{ borderBottomWidth:0,marginTop: 30 }]}>{q.question_description}</Label>
                                      <Item picker style={{ width: '80%', height: 25, alignSelf: 'center', paddingRight: 12, borderTopWidth: 1, borderLeftWidth: 1, borderRightWidth: 1, borderRadius: 5, marginTop: 10 }} >
                                        <Picker
                                          mode="dropdown"
                                          iosIcon={<Icon name="arrow-down" />}
                                          placeholder={q.question_description}
                                          placeholderStyle={{ color: "#bfc6ea" }}
                                          placeholderIconColor="#007aff"
                                          selectedValue={ this.state._ans2_data.length > 0 ? this.state._ans2_data[i][j].answere : "" }
                                          onValueChange={(value) => this._validator2(value,i,j)} > 
                                          {
                                                  (
                                                      this.state.sub_array[0].map((val, key) => (
                                                      <Picker.Item label={val.label} value={val.values} />
                                                          
                                                      ))
                                                  )
                                          }
                                        </Picker>
                                      </Item>
                                    </View>
                                    
                                    :
                                    q.type=='radio' ? 
                                    <View style={{
                                      flex: 1,
                                      flexDirection: 'column',
                                      justifyContent: 'center',
                                      alignItems: 'stretch',
                                    }}>

                                    {this.displayItems(q.id)}
                                      <Label  style={styles.username}>{q.question_description}</Label>
                                      <RadioButton.Group
                                      onValueChange={value => this._validator2(value,i,j)}
                                        value={this.state.value}
                                      >
                                        {console.log("Value Console",this.state._ans2_data)}
                                      {
                                        this.state.sub_array[0].map((val, key) => (
                                          <View key={key} style={{flexDirection:'row'}}>
                                            <Text style={styles.username}>{val.label}</Text>
                                            <RadioButton
                                              onPress={this.state._ans2_data.length > 0 ? this.state._ans2_data[i][j].answere : "" }
                                              value={val.values}
                                            />
                                          </View>
                                        )) 
                                      }   
                                      </RadioButton.Group>
                                    </View>
                                    
                                    :
                                    q.type=='checkbox' ? 
                                    
                                    <View>                           
                                      {this.displayItems(q.id)}
                                      <Item style={[styles.itemstyle, { marginTop: 30 }]} floatingLabel></Item>
                                      <Label  style={styles.username}>{q.question_description}</Label>
                                        
                                        {
                                          this.state.sub_array[0].map((val, key) => (
                                            
                                            <ListItem style={{ borderBottomWidth: 0 }}>
                                              <Text>
                                              
                                              { this.render_checkbox_data(key) }
                                              
                                              </Text>
                                              <CheckBox checked={true} onPress={() => this.check(key)} 
                                                checked={this.state.check_value[key].status}
                                                />
                                              <Text style={styles.username}>{val.label}</Text>
                                            </ListItem>
                                          ))
                                        } 
                                    </View>
                                    :
                                    q.type=='datepicker' ? 
                                    <View>
                                      <Item style={[styles.itemstyle, { marginTop: 30 }]} floatingLabel></Item>
                                      <Label  style={styles.username}>{q.question_description}</Label>
                                      <DatePicker
                                          date={this.state.date}
                                          mode="date"
                                          placeholder={q.question_description}
                                          format="YYYY-MM-DD"
                                          confirmBtnText="Confirm"
                                          cancelBtnText="Cancel"
                                          customStyles={{
                                            dateIcon: {
                                              position: 'absolute',
                                              left: 0,
                                              top: 4,
                                              marginLeft: 0
                                            },
                                            dateInput: {
                                              marginLeft: 36
                                            }
                                          }}
                                          value={this.state._ans2_data.length > 0 ? this.state._ans2_data[i][j] : "" }
                                          onDateChange={ (value) => this._validator2(value,i,j) }
                                      />
                                    </View>
                                    
                                    :
                                    q.type=='email' ? 
                                    <View>
                                      <Item style={[styles.itemstyle, { marginTop: 30 }]} floatingLabel>
                                        <Label  style={styles.username}>{q.question_description}</Label>
                                        <Input allowFontScaling={false} placeholder={q.question_description} onChangeText={ (value) => this._validate2(value,i,j,q.max_length)} value={ this.state._ans2_data.length > 0 ? this.state._ans2_data[i][j] : "" }   style={styles.input} />
                                      </Item>
                                    </View>
                      
                                    :
                                    q.type=='number' ? 
                                    <View>
                                      <Item style={[styles.itemstyle, { marginTop: 30 }]} floatingLabel>
                                        <Label  style={styles.username}>{q.question_description}</Label>
                                        <Input allowFontScaling={false} placeholder={q.question_description} onChangeText={ (value) => this._validate2(value,i,j,q.max_length)} value={ this.state._ans2_data.length > 0 ? this.state._ans2_data[i][j] : "" }   style={styles.input} />
                                      </Item>
                                    </View>
                                    
                                    :
                                    q.type=='percentage' ? 
                                    <View>
                                      <Item style={[styles.itemstyle, { marginTop: 30 }]} floatingLabel>
                                        <Label  style={styles.username}>{val.e_questions[0].question_description}</Label>
                                        <Input allowFontScaling={false} placeholder={q.question_description} onChangeText={ (value) => this._validate(value,i,j,q.max_length)} value={ this.state._ans_data.length > 0 ? this.state._ans_data[i][j] : "" }   style={styles.input} />
                                      </Item>
                                    </View>
                                    
                                    :
                                    <View></View>
                                  }
                                </View>
                              
                              ))
                             )
                            :('')
                          }
                        </View>
                      )
                      :
                      <View>
                      </View>
                    }
                  </View>  
                </View>
              ))
            }
          </View>
          <View style={[styles.vl,{ marginTop:20 }]}>
            {
              this.state.pre_button==true ? 
                <View>
                  <TouchableWithoutFeedback onPress={() => this._prev()}>
                    <Image source={this.state.im_l} style={styles.imgsize} />
                  </TouchableWithoutFeedback>  
                </View>
              :
              <View>
              </View>
            }
          
            <TouchableWithoutFeedback onPress={() => Actions.review()}>
              <Image source={this.state.im_r} style={styles.imgsize} />
            </TouchableWithoutFeedback>
            <Text allowFontScaling={false} style={styles.alreadyAcount} onPress={() => this.gotoSignUp()}>Create new Acount? / SignUp</Text>
          </View>
            
        </ScrollView>
      </ImageBackground>
    </View>

    );
  }
}
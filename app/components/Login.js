import React from 'react';
import { StyleSheet, 
    Text, 
    View,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity,
    AsyncStorage, } from 'react-native';
import {StackNavigator} from 'react-navigation';
import { CheckBox } from 'react-native-elements'
//import t from 'tcomb-form-native';
//var Form = t.form.Form;
//import validation from '../../app/validations/Validate'
//import validate from  '../../app/validations/validate_wrapper'

//var loginCheck=t.struct({
  //  username:t.String,
  //  password:t.String,
//})
export default class Login extends React.Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            usernameError:'',
            password:'',
            passwordError: ''
        }
    }
    componentDidMount(){
        this._loadInitialState().done();
    }
    _loadInitialState=async()=>{
        var value=await AsyncStorage.getItem('user');
        if(value !== null){
            this.props.navigation.navigate('profile');
        }
    }
  render() {
    return (
        <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
            <View style={styles.container}>
           
                <Text style={styles.header}>Login </Text>
                <TextInput 
                    style={styles.textInput} 
                    placeholder='User Name'
                    onChangeText={(username)=>this.setState({username})}
                    error={this.state.usernameError}
                    
                    underlineColorAndroid='transparent'/>
                <TextInput 
                    secureTextEntry={true}
                    style={styles.textInput} 
                    placeholder='Password'
                    onChangeText={(password)=>this.setState({password})}
                    error={this.state.passwordError}

                    underlineColorAndroid='transparent'/>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={this.callLoginAuthenticationService}>
                    <Text>Log in</Text>
                </TouchableOpacity>

                <CheckBox
                 style={styles.checkbox}
                 onClick={()=>{
                   
                 }}
                 isChecked={this.state.t_notifications}
                 checkedImage={checked}
                 unCheckedImage={unchecked}
             />

                <CheckBox
                    style={{flex: 1, padding: 10}}
                    onClick={()=>{
                        this.setState({
                            isChecked:!this.state.isChecked
                           
                        })
                    }}
                    isChecked={this.state.isChecked}                    
                    //checkedImage={checked}
                    //unCheckedImage={unchecked}
                    leftText={"Instructor"}
                />
            </View>
        </KeyboardAvoidingView>
    
    );
  }
onCallin=()=>{
    var value = this.refs.form.getValue();
    if (value) { // if validation fails, value will be null
      console.log(value); // value here is an instance of Person
    }
}
  validateFields() {
    const emailError = validate('email', this.state.email)
    const passwordError = validate('password', this.state.password)

    this.setState({
      emailError: emailError,
      passwordError: passwordError
    })

    if (!emailError && !passwordError) {
      alert('Details are valid!')
    }
  }
  callLoginAuthenticationService=()=>{
   // this.validateFields()
    console.log("-----");
    var details = {
        user:this.state.username,
        pass:this.state.password,
    };
    console.log(this.state.username)
    var formBody = [];
    for (var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    var responseBody = [];

    var authenticationUrl = "";
    authenticationUrl ='https://umkc.edu/intapps/attendance-app/json/login-authentication.aspx';

  return fetch(authenticationUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: formBody
    }).then((response) => response.json())
    .then((responseJson) =>{
        console.log(responseJson.status)
    if (responseJson.status == '1'){
     //alert(responseJson.status);
      this.props.navigation.navigate('Profile',{username:this.state.username});
     // this.props.navigation.navigate('Home', { name: 'Tejkumar' })
      this.setState({
        isLoggedin : true,
        authToken : JSON.stringify(responseJson.status),
        emplId : JSON.stringify(responseJson.authToken),
        lastName : JSON.stringify(responseJson.lastName),
        lastName : JSON.stringify(responseJson.firstName),
        sso : JSON.stringify(responseJson.sso)
      })
    }
    else
    {
        alert('Please enter correct username / password');
        this.setState({
            password:''
        })
    }
      responseBody.push(responseJson);
      this.setState({
          isLoggedin: responseJson.status != 1 ? false : true,
          dataSource: responseBody
      }, function(){
      });

    })
  }

  login=()=>{
      //fetch('https://umkc.edu/intapps/attendance-app/jsonInstructor/login-authentication.aspx',{
       fetch('https://umkc.edu/intapps/attendance-app/json/login-authentication.aspx',{
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body:JSON.stringify({
                user:this.state.username,
                pass:this.state.password,
            })
        })
        .then((response)=>response.json())
        .then((res)=>{
            if(res.status=='2'){
                //AsyncStorage.setItem('Status',res.status);
                console.log('Status: '+res.status)
              //  this.props.navigation.navigate('Profile');
                this.props.navigation.navigate('TabNavigator', { username: 'Tejkumar' })
                //this.props.navigation.navigate('TabNavigator', {
                  //  NameOBJ: this.state.username,
                   
                 // });
               
            }
            else{
                console.log('Status: '+res.status)
                alert(res.message);
            }
        })
        .done();  
  }
}


const styles=StyleSheet.create({
    wrapper:{
        flex:1,
    },
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#2896d3',
        paddingLeft:40,
        paddingRight:40,

    },
    header:{
        fontSize:24,
        marginBottom:60,
        color:'#fff',
        fontWeight:'bold',
    },
    textInput:{
        alignSelf:'stretch',
        padding:16,
        marginBottom:20,
        backgroundColor:'#fff',
    },
    btn:{
        alignSelf:'stretch',
        backgroundColor:'#01c853',
        padding:20,
        alignItems:'center'
    }
});



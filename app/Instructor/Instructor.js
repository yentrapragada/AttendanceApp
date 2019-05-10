import React from 'react';
import { StyleSheet, 
    Text, 
    View,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity,
    AsyncStorage, } from 'react-native';
import {createStackNavigator, NavigationActions } from 'react-navigation';
import InstructorDetailsScreen from '../../app/Instructor/InstructorDetails'

export default class Instructor extends React.Component {
    constructor(props){
        super(props);
        this.state={
          dummy:'',
        }
    }
    componentDidMount(){
        this._loadInitialState().done();
    }
    _loadInitialState=async()=>{       
        this.props.navigation.navigate('InstructorDetails');        
    }
  render() {
    return (
        <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
            <View style={styles.container}>
                <Text style={styles.header}>Instructor </Text>
               
                <TouchableOpacity
                    style={styles.btn}
                    onPress={this.getCourseDetails}>
                    <Text>Get Courses Details</Text>
                </TouchableOpacity>               
            </View>
        </KeyboardAvoidingView>    
    );
  }
  reset = () => {
    const { navigate } = this.props.navigation
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'InstructorDetailsScreen' })
      ],
      key: null
    });
    this.props.navigation.dispatch(resetAction);
}
  getCourseDetails=()=>{
    //this.props.navigation.dispatch(
     //   NavigationActions.navigate({ routeName: "InstructorDetails" })
     //  );
   this.props.navigation.navigate('InstructorDetails');
    console.log('Dummy');
    alert('Course Details')
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



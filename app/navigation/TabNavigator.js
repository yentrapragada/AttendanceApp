import React from 'react';
import { Text, View } from 'react-native';
import { StackNavigator,createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import LocationScreen from '../../app/components/Location'
import AboutScreen from '../../app/screens/About'
import InstructorScreen from '../../app/Instructor/Instructor'
import InstructorDetails from '../../app/Instructor/InstructorDetails'
//import LoginScreen from '../../app/components/Login'
import SchoolScreen from '../../app/Instructor/schools'
//import Profile from '../../app/components/Profile'
//import console = require('console');
class HomeScreen extends React.Component {
  render() {
    const { navigation, screenProps } = this.props
    console.log( screenProps.user.username)
    //console.log(screenProps)
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Welcome {screenProps.user.username}</Text>
        
      </View>
    );
  }
}
//const TabNavigator = createBottomTabNavigator({
 // Home: {screen:HomeScreen} ,
  //About: {screen:AboutScreen},
  //Location: {screen:LocationScreen},
  //Instructor: {screen:InstructorScreen},
  //Schools:{screen:SchoolScreen},
//});
//export default createAppContainer(TabNavigator);

const StackNaviApp = createStackNavigator({
 
  TabNavigator: {
   screen: createBottomTabNavigator({
    Home: {screen:HomeScreen} ,
    About: {screen:AboutScreen},
    Location: {screen:LocationScreen},
    Instructor: {screen:InstructorScreen},
    Schools:{screen:SchoolScreen}, 
   }  
  )
   },
   InstructorDetails:{screen:InstructorDetails}
  });
   export default createAppContainer(StackNaviApp);
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <View style={styles.container}>
       

        <View style={styles.tabBarInfoContainer}>
          <Text style={styles.tabBarInfoText}>Welcome  {this.props.navigation.getParam('username', 'Some Error occured')}</Text>

        
        </View>
      </View>
    );
  }
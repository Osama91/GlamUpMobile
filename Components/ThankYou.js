import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {Button,Icon } from 'native-base';



import YouTube from 'react-native-youtube'
import { styles } from './styles'
class ThankYou extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
       header: null,
      headerMode: 'none',

    };
  };
 
  

  render() {
    return (

     
      <View style={styles.container}>
        

      <View style={styles.Icontainer}>
        <Text style={size= '30'}> Thank You! </Text>
      </View> 
      
      <Icon type='FontAwesome'
      name='smile-o'
      size={20}
      color='White'
    />
       </View>
    );

  }
  SignUp = () => {
    let r = this.props.navigation.navigate('SignUp');

  }

  Profile = () => {
    let r = this.props.navigation.navigate('Profile');
    
}

}
export default ThankYou;
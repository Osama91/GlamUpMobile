import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, TouchableOpacity,Image } from 'react-native';
import YouTube from 'react-native-youtube'
import { styles } from './styles'
class SignUp extends Component {
  render() {
    return (
      <View style={styles.container}>     
<image  source={require('Assets/images/SignUpBg.png')}  >

</image>



        <View style={styles.BottomView}>
          <View style={styles.BottomViewRowFlexDirection}  >
            <TouchableOpacity style={styles.WhiteBotton} >
              <Text style={{color:'#FFFFFF'}} >Skip</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.SignUp} style={styles.WhiteBotton}  >
              <Text style={{color:'#FFFFFF'}} >Sign Up</Text></TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
  SignUp = () => {
    let r = this.props.navigation.navigate('SignUp');
    
  }
}


export default SignUp;
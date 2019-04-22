import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity   } from 'react-native';
 import {  Icon } from 'react-native-elements';
 import { Button    } from 'native-base';
 
import ScalableText, { scaleText } from 'react-native-text';
import CustomHeader from './CustomHeader';

import YouTube from 'react-native-youtube'
import { styles } from './styles'


const style = scaleText({
  deviceBaseWidth: 360,
  fontSize: 50,

});
class ThankYou extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
       header: null,
      headerMode: 'none',

    };
  };
 
  

  render() {
    return (

 <View style={styles.containerFull}>
 
       <View  style={{      alignItems: 'center'   }}>
        
              <View paddingVertical={30} />

                  <Text style={{fontSize: style.fontSize, color: 'black' }}> Thank You! </Text>
                  <View paddingVertical={10} />

                  <Text style={ {  color: 'black' }}> Your account has been created. </Text>
                  <View paddingVertical={10} />

                  <Text style={{  color: 'black' }}>  Have a nice day! </Text>
                  <View paddingVertical={10} />


              <Icon type='font-awesome'
              name='smile-o'
              size={100}
            />
       </View>
 
     
                <View style={{flex:1 , justifyContent:'flex-end'}}>
                    <Button 
                    uppercase={false}  
                    rightIcon={{name: 'arrow'}}
               
                   onPress={() => {
                     
                     this.props.navigation.navigate('Profile', {})
                   }}  >
                       
                       <Text color='white'   >Let's Rock</Text>
                       <Icon type='font-awesome'
                       name='arrow-right'
                       size={20}/>
                    </Button>
                 </View>
           
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
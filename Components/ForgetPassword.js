import React, { Component } from 'react';
import { CheckBox } from 'react-native-elements'
import { View, Image, ScrollView ,TextInput} from 'react-native';
import { styles } from './styles'
 import { Button, Text, Item ,Icon  } from 'native-base';
import { LoginButton, AccessToken,LoginManager } from 'react-native-fbsdk';
import InstagramLogin from 'react-native-instagram-login'
import CustomHeader from './CustomHeader';

class ForgetPassword extends Component {
 
  static navigationOptions = ({ navigation }) => {
    return {
       title: "Forget Password",
        position: 'center'
    };
  };
   
 
   
  render() {
    return (
  
 
      <View style={styles.containerFull}>
       <View  style={{      alignItems: 'center'   }}>
        
              <View paddingVertical={30} />

              <Text style={{ fontSize: style.fontSize, color: 'white' }}
              > GLAM UP  </Text>

                  <View paddingVertical={10} />

                  <Text style={ {  color: 'black' }}> Forget Password </Text>
                  <View paddingVertical={10} />

                  <Text style={{  color: 'black' }}> Reset your password using </Text>
                  <View paddingVertical={10} />

                  <Text style={{  color: 'black' }}> phone number or e-mail address. </Text>
                  <View paddingVertical={10} />


              <Icon type='font-awesome'
              name='smile-o'
              size={100} 
            />

            </View>

            <TextInput style={styles.InputContainer}
        placeholder='Phone Number'  
        keyboardType='numeric'/> 

        <Text style={{  color: 'black' }}> -OR- </Text>

        <TextInput style={styles.InputContainer}
        placeholder='E-Mail' /> 
        <View style={{flex:1 , justifyContent:'flex-end'}}>
        <Button 
        uppercase={false}  
        rightIcon={{name: 'arrow'}}
   
       onPress={() => {
         
         this.props.navigation.navigate('Profile', {})
       }}  >
           
           <Text color='white'   >Sned</Text>
           <Icon type='font-awesome'
           name='arrow-right'
           size={20}/>
        </Button>
     </View>

        </View>
 
       
     )};



    
        
}
export default ForgetPassword;

import React, { Component } from 'react';
import { CheckBox } from 'react-native-elements'
import { View, Image, ScrollView } from 'react-native';
import { styles } from './styles'
import { SocialIcon ,Input  } from 'react-native-elements'
import { Button, Text, Item ,Icon} from 'native-base';
import { LoginButton, AccessToken,LoginManager } from 'react-native-fbsdk';
import InstagramLogin from 'react-native-instagram-login'

class Profile extends Component {
    
    static navigationOptions = ({ navigation }) => {
        return {
           title: "Profile",
     
        };
      };
   
  render() {
    return (
<View   >
         <Input style={styles.input}
          placeholder='Username'  />
          <View paddingVertical={10} />

        <Input style={styles.input}
          placeholder='Full Name' />
          <View paddingVertical={10} />

        <Input style={styles.input}
        placeholder='Phone Number'  
        keyboardType='numeric'/> 
 
        <View paddingVertical={10} />

        <Input style={styles.input}
        placeholder='Email' />

        <View paddingVertical={10} />

        <Input style={styles.input}
        placeholder='Country' /> 
 
        <View paddingVertical={10} />

        <Button  uppercase={false}  
        rightIcon={{name: 'arrow'}}
        onPress={() => {
          
          this.props.navigation.navigate('Login', {})
        }} 
        full dark >
        <Text color='Black'   >Change Password</Text>
      </Button>
      <View paddingVertical={10} />

       <Button  uppercase={false}
        rightIcon={{name: 'arrow'}}
        onPress={() => {
          
          this.props.navigation.navigate('PersonalInformation', {})
        }} 
        full dark >
        <Text color='Black'    >Personal Information</Text>
      </Button>

      <View paddingVertical={10} />

        <Button  uppercase={false}
        onPress={() => {
          
          this.props.navigation.navigate('BodySpecs', {})
        }} 
        full dark >
        <Text color='Black' >Body Specs</Text>
      </Button>
    </View>
    )};



    validate = (text) => {
        console.log(text);
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
        if(reg.test(text) === false)
        {
        console.log("Email is Not Correct");
        this.setState({email:text})
        return false;
          }
        else {
          this.setState({email:text})
          console.log("Email is Correct");
        }
        }

        PersonalInformation = () => {
            let r = this.props.navigation.navigate('PersonalInformation');
            
          }
        
}
export default Profile;
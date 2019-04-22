import React, { Component } from 'react';
import { CheckBox } from 'react-native-elements'
import { View, Image, ScrollView ,TextInput} from 'react-native';
import { styles } from './styles'
 import { Button, Text, Item ,Icon      ,    Left, Right, 
  Body,Container, Header, Title,       Content  , Card, CardItem} from 'native-base';
import { LoginButton, AccessToken,LoginManager } from 'react-native-fbsdk';
import InstagramLogin from 'react-native-instagram-login'
import DrawerButton from './DrawerButton';
 
class Profile extends Component {
  constructor(props) {
    super(props)
    {

 }
  }
  // static navigationOptions = ({ navigation }) => {
  //   return {
  //     header: null,
  //     headerMode: 'none',
  //       headerLeft: <DrawerButton navigation = {navigation}/>
  //    };
  // };
  static navigationOptions = ({ navigation }) => {
    return {
       title: "Profile",
        position: 'center'
    };
  };

 
   
  render() {
    return (
<View     > 



         <TextInput style={styles.InputContainer}
          placeholder='Username'  />
          <View paddingVertical={10} />

        <TextInput style={styles.InputContainer}
          placeholder='Full Name' />
          <View paddingVertical={10} />

        <TextInput style={styles.InputContainer}
        placeholder='Phone Number'  
        keyboardType='numeric'/> 
 
        <View paddingVertical={10} />

        <TextInput style={styles.InputContainer}
        placeholder='Email' />

        <View paddingVertical={10} />

        <TextInput style={styles.InputContainer}
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
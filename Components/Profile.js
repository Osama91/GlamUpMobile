import React, { Component } from 'react';
import { CheckBox } from 'react-native-elements'
import { View, Image, ScrollView ,TextInput} from 'react-native';
import { styles } from './styles'
import { HeaderBackButton } from 'react-navigation';
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
<View   style={{flex:1}}  > 

<HeaderBackButton backTitleVisible={true}

title='Profile' position='center' onPress={() => goBack()} />

<ScrollView  > 

 
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
          
       //   this.props.navigation.navigate('Login', {})
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
      </ScrollView>
    </View>
    )};

 

        PersonalInformation = () => {
            let r = this.props.navigation.navigate('PersonalInformation');
            
          }
        
}
export default Profile;
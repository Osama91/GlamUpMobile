import React, { Component } from 'react';
import { CheckBox } from 'react-native-elements'
import { View, Image,ScrollView } from 'react-native';
import { styles } from './styles'
import { SocialIcon } from 'react-native-elements'
import { Button, Text,Input,Item } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
class SignUp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      emailError: '',
      password: '',
      passwordError: '',
      checked: false
    }
  }
  static navigationOptions = ({ navigation }) => {
    return {
header:null,
      headerMode:'none'   ,
            
    };
  };
  render() {
    return (
      
      <ScrollView style={styles.containerWhite} >
          
          <Image resizeMode='stretch'
        source={require('../Assets/Images/SignUpBg.png')} />
      <Icon name="arrow-left"  size={25}  style={{ position: 'absolute', top: 5, left: 10,color: 'white'  }} 
        onPress={() =>
          navigation.navigate('WalkThrough', {})
        } />


<Item success bordered>
<Icon name='user' />  
            <Text onChangeText={value => this.setState({ FullName: value.trim() })}
             placeholder='Full Name'/>
            
          </Item>

        <Input        
          error={this.state.emailError}
          placeholder='Full Name'
          leftIcon={
            <Icon
              name='user'
              size={24}
              color='red'
            />
          }
        />

        <Input
          placeholder='Email'

          leftIcon={
            <Icon
              name='envelope'
              size={24}
              color='red'
            />
          }
        />

        <Input
          placeholder='Password' secureTextEntry={true}
          leftIcon={
            <Icon
              name='lock'
              size={24}
              color='red'
            />
          }
        />

        <Input
          placeholder='Confirm Password' secureTextEntry={true}
          leftIcon={
            <Icon
              name='lock'
              size={24}
              color='red'
            />
          }
        />

        <CheckBox

          title='I agree to Glamup privacy Policy'
          checkedColor='#D1968F'
          checked={this.state.checked}
          onPress={() => this.setState({ checked: !this.state.checked })}
        />

        <Button style={styles.SignUpBotton}
          onPress={this.Login()} uppercase={false}
          rounded block>
          <Text uppercase={false}>Sign Up</Text>
        </Button>

        {/* <SocialIcon
  title='Sign Up'
  button
  
/> */}

        {/* <Button rounded iconLeft block style={{ margin: 10 }}  >
          <Icon active name="facebook"  color='white' />
          <Text uppercase={false}>Sign Up With Facebook</Text>
        </Button>
       */}

<LoginButton
          onLoginFinished={
            (error, result) => {
              if (error) {
                console.log("login has error: " + result.error);
              } else if (result.isCancelled) {
                console.log("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    console.log(data.accessToken.toString())
                  }
                )
              }
            }
          }
          onLogoutFinished={() => console.log("logout.")}/>
          {/* <SocialIcon
            title='Sign Up With Facebook'
            button
            type='facebook'
          /> */}
        {/* <Button rounded iconLeft block style={{ margin: 10 }}  >
          <Icon active name="instagram"  color='red' />
          <Text uppercase={false}>Sign Up With instagram</Text>
        </Button> */}
 
        <SocialIcon style={{marginBottom:50}}
          button title="Sign Up With instagram"
          light
          type='instagram'
        />
        <Button style={styles.bottom}
          onPress={this.Login()}
          buttonStyle={{ backgroundColor: "#D1968F" }}
          containerStyle={{ backgroundColor: "#D1968F" }}
          full dark >
          <Text color='Black' uppercase={false} >If you are a member Login</Text>
        </Button>
      </ScrollView>      
    );
  }
  SignUp = () => {
  }
  Login = () => {
  }
}
export default SignUp;
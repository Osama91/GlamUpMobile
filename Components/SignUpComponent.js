import React, { Component } from 'react';
import { CheckBox } from 'react-native-elements'
import { View, Image, ScrollView } from 'react-native';
import { styles } from './styles'
import { SocialIcon, Input } from 'react-native-elements'
import { scaleText } from 'react-native-text';
import { barndMainColor } from '../Services/SettingService'
import { Button, Text, Icon } from 'native-base';

import { LoginManager } from 'react-native-fbsdk';
import InstagramLogin from 'react-native-instagram-login'
import AuthService from '../Services/AuthService';
import HelperService from '../Services/HelperService'
const style = scaleText({
  deviceBaseWidth: 360,
  fontSize: 75,

});
class SignUp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      UserName: '',
      UserNameError: '',
      Password: '',
      ConfirmPassword: '',
      Email: '',
      passwordError: '',
      checked: false
    }

  }
  static navigationOptions = () => {
        
    return {
        
        headerStyle: {
            backgroundColor: barndMainColor,                
            shadowColor: 'transparent',
            shadowRadius: 0,
            shadowOffset: {
                height: 0,
            },
            elevation:0,
            headerTintColor:'white' 
        }   ,
        headerTintColor:'white',   
        shadowColor: 'transparent' ,
        elevation:0,     
                

    };
  };
  SignUp = () => {
    if (!this.state.Email || this.state.Email.length <= 0 ||
      !this.state.UserName || this.state.UserName.length <= 0 ||
      !this.state.Password || this.state.Password.length <= 0 ||
      !this.state.ConfirmPassword || this.state.ConfirmPassword.length <= 0) {
      HelperService.handleErrorsUIString('All Fields Required');
      return;
    }
    if (this.state.Password != this.state.ConfirmPassword) {
      HelperService.handleErrorsUIString("Password didn't match");
      return;
    }
    this.setState({ loading: true, }, () => {
      AuthService.SignUP(this.state.UserName, this.state.Email, this.state.Password)
        .then(() => {
          AuthService.Login(this.state.UserName, this.state.Password)
            .then(() => {
              this.props.navigation.navigate('ThankYou', {});
              this.setState({ loading: false, });
            }).catch(ex => {
              HelperService.handleErrorsUI(ex);
              this.setState({ loading: false, });
            });
        })
        .catch(ex => {
          HelperService.handleErrorsUI(ex);
          this.setState({ loading: false, });
        });
    })
  }
  Login = () => {
  }
  handleFacebookLogin = () => {
    LoginManager.logInWithReadPermissions(['public_profile', 'UserName']).then(
      function (result) {
        if (result.isCancelled) {
          console.log('Login cancelled')
        } else {
          this.props.navigation.navigate('WalkThrough', {})
          console.log('Login success with permissions: ' + result.grantedPermissions.toString())
        }
      },
      function (error) {
        console.log('Login fail with error: ' + error)
      }
    )
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
          <Text style={{ fontSize: style.fontSize, color: 'white',backgroundColor: barndMainColor, }}
                > GLAM UP  </Text>
        <ScrollView style={styles.containerWhite} >

          {/* <Image resizeMode='cover' style={{ width: null }}
            source={require('../Assets/Images/SignUpBg.png')} />

          <Icon type="FontAwesome" name="arrow-left" size={25} style={{ position: 'absolute', top: 5, left: 10, color: 'white' }}
            onPress={() =>
              this.props.navigation.navigate('WalkThrough', {})
            } /> */}
          <Input style={styles.input} onChangeText={value => this.setState({ UserName: value.trim() })}
            placeholder='User Name'
            leftIcon={
              <Icon type='FontAwesome'
                name='user'
                size={24}
                color='red'
              />
            }

          />
          <Input style={styles.input} onChangeText={value => this.setState({ Email: value.trim() })}
            placeholder='Email'
            leftIcon={
              <Icon type='FontAwesome'
                name='envelope'
                size={12}
                color='black'
              />
            }>
          </Input>



          <Input style={styles.input} onChangeText={value => this.setState({ Password: value.trim() })}
            placeholder='Password' secureTextEntry={true}
            leftIcon={
              <Icon type='FontAwesome'
                name='lock'
                size={24}
                color='red'
              />
            }
          />

          <Input style={styles.input} onChangeText={value => this.setState({ ConfirmPassword: value.trim() })}
            placeholder='Confirm Password' secureTextEntry={true}
            leftIcon={
              <Icon type='FontAwesome'
                name='lock'
                size={24}
                iconColor='red'
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
            onPress={this.SignUp} uppercase={false}
            rounded block>
            <Text uppercase={false}>Sign Up</Text>
          </Button>


          <SocialIcon
            button title="Continue With Facebook"
            onPress={this.handleFacebookLogin}
            type='facebook'
          />

          <SocialIcon style={{ marginBottom: 50 }} onPress={() => this.instagramLogin.show()}
            button title="Sign Up With instagram"
            light
            type='instagram'
          />
          <InstagramLogin
            ref={ref => this.instagramLogin = ref}
            clientId='75f1207edf6440778ff1d4309ef39973'
            redirectUrl='http://glamup.net'
            scopes={['public_content']}
            onLoginSuccess={(token) => {
              console.log(token);
              this.setState({ token });
              AuthService.Instagram(token).then(
                this.props.navigation.navigate('ThankYou', {})
              )
              
            }
            }
            onLoginFailure={(data) =>
              console.log(data)}
          />

        </ScrollView>
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>

          <Button style={{ zIndex: 2 }}
            onPress={() => {
              this.props.navigation.navigate('Login', {})
            }}
            full dark >
            <Text style={{ color: 'white'}} uppercase={false} >If you are a member Login</Text>
          </Button>
        </View>
      </View>
    )
  };

}
export default SignUp;
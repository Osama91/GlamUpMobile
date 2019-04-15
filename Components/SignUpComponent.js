import React, { Component } from 'react';
import { CheckBox } from 'react-native-elements'
import { View, Image, ScrollView } from 'react-native';
import { styles } from './styles'
import { SocialIcon, Input } from 'react-native-elements'
import { Button, Text, Item, Icon } from 'native-base';
import { LoginButton, AccessToken, LoginManager } from 'react-native-fbsdk';
import InstagramLogin from 'react-native-instagram-login'
import  AuthService  from '../Services/AuthService';
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
      header: null,
      headerMode: 'none',

    };
  };
  SignUp = () => {
  }
  Login = () => {
    let r = this.props.navigation.navigate('Login');
  }
  handleFacebookLogin = () => {
    LoginManager.logInWithReadPermissions(['public_profile', 'email']).then(
      function (result) {
        if (result.isCancelled) {
          console.log('Login cancelled')
        } else {
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
      <View>
        <ScrollView style={styles.containerWhite} >

          <Image resizeMode='cover' style={{ width: null }}
            source={require('../Assets/Images/SignUpBg.png')} />

          <Icon type="FontAwesome" name="arrow-left" size={25} style={{ position: 'absolute', top: 5, left: 10, color: 'white' }}
            onPress={() =>
              this.props.navigation.navigate('WalkThrough', {})
            } />

          <Input style={styles.input} onChangeText={value => this.setState({ FullName: value.trim() })}
            placeholder='Full Name'
            leftIcon={
              <Icon type='FontAwesome'
                name='user'
                size={12}
                color='black'
              />
            }>
          </Input>

          <Input style={styles.input}
            placeholder='Email'
            leftIcon={
              <Icon type='FontAwesome'
                name='envelope'
                size={24}
                color='red'
              />
            }

          />

          <Input style={styles.input}
            placeholder='Password' secureTextEntry={true}
            leftIcon={
              <Icon type='FontAwesome'
                name='lock'
                size={24}
                color='red'
              />
            }
          />

          <Input style={styles.input}
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
            onPress={this.Login} uppercase={false}
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
              AuthService.Instagram(token);
              this.props.navigation.navigate('WalkThrough', {})
            }
            }
            onLoginFailure={(data) =>
              console.log(data)}
          />

        </ScrollView>
        <Button style={styles.bottom}
          onPress={() => {

            this.props.navigation.navigate('Login', {})
          }}
          buttonStyle={{ backgroundColor: "#D1968F" }}
          containerStyle={{ backgroundColor: "#D1968F" }}
          full dark >
          <Text color='Black' uppercase={false} >If you are a member Login</Text>
        </Button>
      </View>
    )
  };

}
export default SignUp;
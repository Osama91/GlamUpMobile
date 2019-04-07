import React, { Component } from 'react';
import { CheckBox } from 'react-native-elements'
import { Platform, StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import YouTube from 'react-native-youtube'
import { styles } from './styles'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
class SignUp extends Component { 
  constructor(props) {
  super(props)

  this.state = {
    email: '',
    emailError: '',
    password: '',
    passwordError: ''
  }
}
  render() {
    return (
      <View >
        {/* <image  source={require('../Assets/images/SignUpBg.png')}  >

</image> */}

        <Input onChangeText={value => this.setState({ FullName: value.trim() })}
          // onBlur={() => {
          //   this.setState({
          //     emailError: validate('email', this.state.email)
          //   })
          // }}
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
  //checked={this.state.checked}
/>
        
<Button
  onPress={this.Login()}
  title="IF you are a member Login"
  color="black"
  accessibilityLabel="IF you are a member Login"
/>
      </View>
    );
  }
  SignUp = () => {
    let r = this.props.navigation.navigate('SignUp');

  }
  Login = () => {
    let r = this.props.navigation.navigate('Login');

  }
}


export default SignUp;
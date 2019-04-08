import React, { Component } from 'react';
import { CheckBox } from 'react-native-elements'
import { View } from 'react-native';
import { styles } from './styles'
import { SocialIcon, Input } from 'react-native-elements'
import { Button, Text } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
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
  render() {
    return (
      <View style={styles.containerWhite} >
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
          checkedColor='#D1968F'
          checked={this.state.checked}
          onPress={() => this.setState({ checked: !this.state.checked })}
        />

        <Button style={{ margin: 10 }}
          onPress={this.Login()} uppercase={false}
          buttonStyle={{ backgroundColor: "#D1968F" }}
          containerStyle={{ backgroundColor: "#D1968F" }}
          rounded block>
          <Text uppercase={false}>Sign Up</Text>
        </Button>

        <Button rounded iconLeft block style={{ margin: 10 }}  >
          <Icon active name="facebook" />
          <Text uppercase={false}>Sign In With Facebook</Text>
        </Button>
      

        <Button style={styles.bottom}
          onPress={this.Login()} 
          buttonStyle={{ backgroundColor: "#D1968F" }}
          containerStyle={{ backgroundColor: "#D1968F" }}
          full  dark >
          <Text color='Black' uppercase={false} >If you are a member Login</Text>
        </Button>

      </View>
    );
  }
  SignUp = () => {

  }
  Login = () => {

  }
}


export default SignUp;
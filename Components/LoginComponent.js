import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Dimensions, TextInput } from 'react-native';
import { Button, Item, Icon } from 'native-base';
import { styles } from './styles'

import { CheckBox, SocialIcon } from 'react-native-elements'
import ScalableText, { scaleText } from 'react-native-text';
import DeviceService from '../Services/DeviceService'
import { barndMainColor } from '../Services/SettingService';
import InstagramLogin from 'react-native-instagram-login'
import AuthService from '../Services/AuthService';

const style = scaleText({
    deviceBaseWidth: 360,
    fontSize: 75,

});
class Login extends Component {
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
    // static navigationOptions = ({ navigation }) => {
    //     return {
    //         headerStyle: {
    //             backgroundColor: barndMainColor,
    //             shadowColor: 'transparent',
    //             shadowRadius: 0,
    //             shadowOffset: {
    //                 height: 0,
    //             }
    //         },

    //     };
    // };
    static navigationOptions = ({ navigation }) => {
        return {
           title: "Login",
            position: 'center'
        };
      };

    
    render() {
        console.log(style.fontSize);
        return (
            <View style={styles.MainContainer}>
                <Text style={{ fontSize: style.fontSize, color: 'white' }}
                > GLAM UP  </Text>
                <TextInput style={styles.whiteInput} placeholderTextColor='white'
                    placeholder='User Name'
                    leftIcon={
                        <Icon type='FontAwesome'
                            name='envelope'
                            size={24}
                            color='red'
                        />} />
                <TextInput style={styles.whiteInput} placeholderTextColor='white'
                    placeholder='Password' secureTextEntry={true}
                    leftIcon={
                        <Icon type='FontAwesome'
                            name='lock'
                            size={24}
                            color='red'
                        />
                    }
                />

                <CheckBox
                    containerStyle={{ backgroundColor: barndMainColor }}
                    title='Remember me' color='white'
                    checkedColor={'white'} textStyle={{ color: 'white' }}
                    style={{ color: barndMainColor, backgroundColor: barndMainColor }}
                    checked={this.state.checked}
                    onPress={() => this.setState({
                        checked: !this.state.checked
                    })}
                />
                <Button style={styles.SignInBotton}
                    onPress={this.Login} uppercase={false}
                    rounded block>
                    <Text uppercase={false}>SIGN IN</Text>
                </Button>
                <View style={styles.Horizonalcontainer}>
                    <SocialIcon style={styles.halfwidth}
                        Icon title="Contie With Facebook"
                        onPress={this.handleFacebookLogin}
                        type='facebook'
                    />

                    <SocialIcon style={styles.halfwidth} onPress={() => this.instagramLogin.show()}
                        Icon title="Sign Up With instagram"
                        light
                        type='instagram'
                    />
                </View>
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
                <View style={{ flex: 1, justifyContent: 'flex-end' }}>

                    <Button
                        onPress={() => {
                            this.props.navigation.navigate('SignUp', {})
                        }}
                        buttonStyle={{ backgroundColor: "#D1968F" }}
                        containerStyle={{ backgroundColor: "#D1968F" }}
                        full dark >
                        <Text style={{ color: 'white' }} uppercase={false} >Don't have an account? Sign up</Text>
                    </Button>
                </View>
            </View>
        );

    }
    SignIN = () => {
        let r = this.props.navigation.navigate('SignIN');

    }
}


export default Login;
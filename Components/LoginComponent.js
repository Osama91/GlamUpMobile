import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';

import { Toast,Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

import { styles } from './styles'

import { CheckBox, SocialIcon } from 'react-native-elements'
import { scaleText } from 'react-native-text';
import { barndMainColor } from '../Services/SettingService';
import InstagramLogin from 'react-native-instagram-login'
import AuthService from '../Services/AuthService';
import HelperService from '../Services/HelperService'





const style = scaleText({
    deviceBaseWidth: 360,
    fontSize: 75,

});
class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            UserName: '',
            UserNameError: '',
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
        }}

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

    
      
    render() {        
        return (                
            <View style={styles.MainContainer}>          
              
                <Text style={{ fontSize: style.fontSize, color: 'white' }}
                > GLAM UP  </Text>
                <TextInput
                value={this.state.UserName}
                onChangeText={(UserName) => this.setState({ UserName })} 
                style={styles.whiteInput} placeholderTextColor='white'
                    placeholder='User Name'
                    leftIcon={
                        <Icon type='FontAwesome'
                            name='envelope'
                            size={24}
                            color='red'
                        />} />
                <TextInput 
                 value={this.state.password}
                 onChangeText={(password) => this.setState({ password })}
                style={styles.whiteInput} placeholderTextColor='white'
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
                     uppercase={false}
                    rounded block
                    
                    onPress={() => {
                        this.setState({ loading: true, }, () => {
                          AuthService.Login(this.state.UserName, this.state.password).then((r) => {                          
                              this.props.navigation.navigate('WalkThrough', {});
                            this.setState({ loading: false });
                          }).catch(ex => {
                           
                            HelperService.handleErrorsUI(ex);
                            this.setState({ loading: false });
                          });
                        })
                      }}
                    >
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

                    <Button style={{zIndex: 2}}
                        onPress={() => {
                            this.props.navigation.navigate('SignUp', {})
                        }}                        
                        full dark >
                        <Text style={{ color: 'white' }} uppercase={false} >Don't have an account? Sign up</Text>
                    </Button>
                </View>
            </View>
        );

    }
    SignIN = () => {

    }
}


export default Login;
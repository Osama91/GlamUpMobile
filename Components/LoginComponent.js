import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import YouTube from 'react-native-youtube'
import { SocialIcon, Input } from 'react-native-elements'
import { Button, Item, Icon } from 'native-base';
import { styles } from './styles'
class Login extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            header: null,
            headerMode: 'none',

        };
    };
    render() {
        return (
            <View style={styles.container}>
                <Text> Glam Up  </Text>
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
            </View>
        );

    }
    SignIN = () => {
        let r = this.props.navigation.navigate('SignIN');

    }
}


export default Login;
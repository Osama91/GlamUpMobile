import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { HeaderBackButton } from 'react-navigation';

const navigationOptions = ({ navigation }) => ({
    headerLeft: <HeaderBackButton onPress={() => navigation.goBack( )} />,
})
 


export default class componentName extends Component {
  render() {
    return (
      <View>
      <HeaderBackButton  title = 'HOMMEE'
      
      onPress={() => navigation.goBack()}/>
      </View>
    )
  }
}
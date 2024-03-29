import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { Button } from 'native-base';

import { scaleText } from 'react-native-text';

import { styles } from './styles'


const style = scaleText({
  deviceBaseWidth: 360,
  fontSize: 50,

});
class ThankYou extends Component {
  static navigationOptions = () => {
    return {
      header: null,
      headerMode: 'none',

    };
  };


  render() {
    return (

      <View style={styles.containerFull}>

        <View style={{ alignItems: 'center' }}>

          <View paddingVertical={30} />

          <Text style={{ fontSize: style.fontSize, color: 'black' }}> Thank You! </Text>
          <View paddingVertical={10} />

          <Text style={{fontSize:20 ,color: 'black' }}> Your account has been created. </Text>
          <View paddingVertical={5} />

          <Text style={{ fontSize:20 ,color: 'black' }}>  Have a nice day! </Text>
          <View paddingVertical={10} />

          <Text style={{ fontSize: style.fontSize, color: 'black' }}> Glam Up </Text>
          <View paddingVertical={10} />
          <Icon type='font-awesome'
            name='smile-o'
            size={100}
          />
        </View>


        <View style={{ flex: 1, justifyContent: 'flex-end'}}>
          <Button
            uppercase={false}
            rightIcon={{ name: 'arrow' }}
            full light 
            onPress={() => {

              this.props.navigation.navigate('Home', {})
            }}  >

            <Text color='white' style={{fontSize:30,padding:5 }}   >Let's Rock</Text>
            <Icon type='font-awesome'
              name='arrow-right'
              size={20} />
          </Button>
        </View>

      </View>
    );

  }
  SignUp = () => {

  }

  Profile = () => {

  }

}
export default ThankYou;
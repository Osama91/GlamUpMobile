import React, { Component } from 'react';
import {
  View,Image,TextInput

} from 'react-native';
import { styles } from './styles';
import { navigation } from 'react-navigation';

import { Button, Text, Item ,Icon , Left, Right, Body,Container,
     Header, Title, Content  , Card, CardItem } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

let Imagepath = require('../Assets/Images/height.png');

class CustomHeader extends Component {
 

  constructor(props) {
    super(props)
  }
  render(){
  return (
    <Container>
        <Header  >
          <Left>
            <Button
              transparent >

              
              <Icon name='menu'
              onPress={() => 
                
                this.props.navigation.navigate('DrawerOpen')}
              />
            </Button>
          </Left>
          <Body>
            <Title>oijoijo</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Card>
            <CardItem>
               
            </CardItem>
          </Card>

         
        </Content>
      </Container>
 );
}
}
export default CustomHeader;
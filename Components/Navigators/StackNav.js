import React from 'react'
import {
  FlatList,
  Image,
  View,
  TouchableOpacity, Text, ScrollView
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Blog from '../BlogComponent';
import PersonalInformation from '../PersonalInformation';
import Home from '../HomeComponent'
import ThankYou from '../ThankYou';
import BodySpecs from '../BodySpecs';
import MultipleSelectionList from '../MultipleSelectionList'
import Profile from '../Profile'
import { styles } from '../styles'

import{Icon} from 'native-base';
import { scaleText } from 'react-native-text';

const style = scaleText({
  deviceBaseWidth: 360,
  fontSize: 18,

});

const StackNav = createStackNavigator({
  Home:{screen:Home,title:'Home'},
  PersonalInformation:{screen : PersonalInformation,title:'PersonalInformation'},
  Blog:{screen : Blog,title:'Blog'},
  ThankYou:{screen : ThankYou,title:'ThankYou'},
  BodySpecs:{screen : BodySpecs,title:'BodySpecs'}, 
  MultipleSelectionList:{screen : MultipleSelectionList ,title: 'MultipleSelectionList'},
  Profile:{screen : Profile,title:'Profile'}, 

},

  {
    defaultNavigationOptions: ({ navigation }) => {
      return { 

        header: (
          <View style={styles.HeaderContainer}>
          <View style={styles.HeaderItems}>

            <Icon
            style={{ paddingLeft: 50 }}            
            name="bell-o" type='FontAwesome'
            size={30}
          />  
         <Icon
            style={{ paddingLeft: 20 }}     
            onPress={() => navigation.navigate('Profile', {})}       
            name="user-circle-o" type='FontAwesome'
            size={30}
          />  
           <Text style={{ fontSize: style.fontSize, color: 'black' }}
                > GLAM UP  </Text>
              
          <Icon
            style={{ paddingLeft: 100 }}
            onPress={() => navigation.openDrawer()}
            name="menu"
            size={30}
          />
          </View>
              </View>
        )   
         
         
  
       };
    }
  }
);
 


export default StackNav;
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator } from 'react-navigation';
import Blog from '../BlogComponent';
import Profile from '../Profile';
import PersonalInformation from '../PersonalInformation';
import ThankYou from '../ThankYou';
import BodySpecs from '../BodySpecs';
import ForgetPassword from '../ForgetPassword';
import{Icon} from 'native-base';


const StackNav = createStackNavigator({

  PersonalInformation:{screen : PersonalInformation,title:'PersonalInformation'},

  Blog:{screen : Blog,title:'Blog'},
  ThankYou:{screen : ThankYou,title:'ThankYou'},
  BodySpecs:{screen : BodySpecs,title:'BodySpecs'},
  ForgetPassword:{screen : ForgetPassword,title:'ForgetPassword'} 
},

  {
    defaultNavigationOptions: ({ navigation }) => {
      return { 

        headerLeft: (
          <Icon
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="menu"
            size={30}
          />
        )  

       };
    }
  }
);
 


export default StackNav;
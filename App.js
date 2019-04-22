
import React, { Component } from 'react';
import { Root } from "native-base";
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator
} from 'react-navigation'
import WalkThrough from './Components/WalkThroughComponent'
import SignUp from './Components/SignUpComponent'
import LoginComponent from './Components/LoginComponent'
import DrawerNav from './Components/Navigators/DrawerNav';
import Blog from './Components/BlogComponent'
import Home from './Components/HomeComponent'
import Article from './Components/ArticleComponent'
import Profile from './Components/Profile';
import PersonalInformation from './Components/PersonalInformation';
import ThankYou from './Components/ThankYou';
import BodySpecs from './Components/BodySpecs';
  import ForgetPassword from './Components/ForgetPassword';




export const routes = {
  WalkThrough: { screen: WalkThrough, title: 'WalkThrough' },
  SignUp:{ screen: SignUp, title: 'SignUp' },
  DrawerNav:{screen: DrawerNav,title: 'DrawerNav',
  
navigationOptions: {
  header: null,
  headerMode:'none'
}},
  

}
const RootStack  = createStackNavigator(routes, { 
  navigationOptions: ({ navigation }) => {
    const { routeName, index } = navigation.state;
    if (routeName == 'WalkThrough'  )
      return ({ headerMode: 'none', header: null, });
  }  
});

const App = createAppContainer(RootStack);

export default () =>
  <Root>
    <App />
  </Root>

import React, { Component } from 'react';
import { Root } from "native-base";
import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation'
import WalkThrough from './Components/WalkThroughComponent'
import SignUp from './Components/SignUpComponent'
import LoginComponent from './Components/LoginComponent'
import Blog from './Components/BlogComponent'
import Home from './Components/HomeComponent'
import Article from './Components/ArticleComponent'
export const routes = {
  WalkThrough: { screen: WalkThrough, title: 'WalkThrough' },
  SignUp:{ screen: SignUp, title: 'SignUp' },
  Login:{screen : LoginComponent,title:'Login'},
  Blog:{screen : Blog,title:'Blog'},
  Home :{screen : Home,title:'Home'},
  Article :{screen : Article,title:'Article'},  
}
const RootStack  = createStackNavigator(routes, { 
  navigationOptions: ({ navigation }) => {
    const { routeName, index } = navigation.state;
    if (routeName == 'WalkThrough')
      return ({ headerMode: 'none', header: null, });
  }  
});

const App = createAppContainer(RootStack);

export default () =>
  <Root>
    <App />
  </Root>


import React from 'react';
import { Root } from "native-base";
import {
  createStackNavigator,
  createAppContainer} from 'react-navigation'
  import Intial from './Components/Intial'
import WalkThrough from './Components/WalkThroughComponent'
import SignUp from './Components/SignUpComponent'
import Login from './Components/LoginComponent'
import ThankYou from './Components/ThankYou'

import DrawerNav from './Components/Navigators/DrawerNav';




export const routes = {
  Intial: { screen: Intial, title: 'Intial' },
  WalkThrough: { screen: WalkThrough, title: 'WalkThrough' },
  SignUp:{ screen: SignUp, title: 'SignUp' },
  Login:{ screen: Login, title: 'Login' },
  ThankYou:{ screen: ThankYou, title: 'ThankYou' },

  
  DrawerNav:{screen: DrawerNav,title: 'DrawerNav',
  
navigationOptions: {
  header: null,
  headerMode:'none'
}},
  

}
const RootStack  = createStackNavigator(routes, { 
  
  navigationOptions: ({ navigation }) => {
    const { routeName } = navigation.state;
    if (routeName == 'WalkThrough'||  routeName == 'Intial' )
      return ({ headerMode: 'none', header: null, });
  }  
});

const App = createAppContainer(RootStack);

export default () =>
  <Root>
    <App />
  </Root>

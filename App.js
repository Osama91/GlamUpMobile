import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation'
import WalkThrough from './Components/WalkThroughComponent'
import SignUp from './Components/SignUpComponent'
import LoginComponent from './Components/LoginComponent'
import Profile from './Components/Profile';
import PersonalInformation from './Components/PersonalInformation';
import BodySpecs from './Components/BodySpecs';
import ThankYou from './Components/ThankYou';

export const routes = {
  WalkThrough: { screen: WalkThrough, title: 'WalkThrough' },
  SignUp:{ screen: SignUp, title: 'SignUp' },
  Login:{screen : LoginComponent,title:'Login'},
  Profile:{screen : Profile,title:'Profile'},
  BodySpecs:{screen : BodySpecs,title:'BodySpecs'},
  PersonalInformation:{screen : PersonalInformation,title:'PersonalInformation'},
ThankYou: {screen: ThankYou,title: 'ThankYou'}

}
const RootStack  = createStackNavigator(routes, {
  navigationOptions: ({ navigation }) => {
    const { routeName, index } = navigation.state;
    if (routeName == 'WalkThrough')
      return ({ headerMode: 'none', header: null, });
  }
  //   else if (routeName == 'Main' && index == 0)
  //     return ({
  //       headerMode: 'float',
  //       headerLeft: <Icon name="menu" size={40} style={{ color: '#000', alignSelf: 'center', marginEnd: 15, }}
  //         onPress={() => navigation.openDrawer()} />,
  //       headerRight:

  //         <View style={{ flexDirection: 'row', margin: 2, justifyContent: 'space-between', }}>

  //           <Icon name="heart-outlined" size={40} style={{ color: '#000', alignSelf: 'center', marginEnd: 5, }}
  //             onPress={() => navigation.navigate('WishList', {})} />
  //           <Icon name="shopping-cart" size={40} style={{ color: '#000', alignSelf: 'center', marginEnd: 5, }}
  //             onPress={() => navigation.navigate('Cart', {})} />
  //         </View>
  //       ,
  //       // headerRight:          
  //       // <Icon name="heart-outlined" size={40} style={{ color: '#000', alignSelf: 'center', marginEnd: 15, }}
  //       //onPress={() => navigation.navigate('WishList', {})} />,
  //     });
  //   else if (routeName == 'Main') {
  //     return ({ headerMode: 'none', header: null });
  //   }
  //   // return  ({ headerMode: 'screen'});  



  // }
  //drawerWidth: Constant.width * 0.88,
});

const App = createAppContainer(RootStack);

export default App;

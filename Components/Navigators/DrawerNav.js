import {createDrawerNavigator } from 'react-navigation';
 
import StackNav from './StackNav';
import Profile from '../Profile';


 const DrawerNav  = createDrawerNavigator ({

    
    BodySpecs :{
        screen : StackNav,
        } ,       
        Profile:{
            screen: Profile
        }
    });

 export default DrawerNav;
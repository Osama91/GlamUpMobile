import {createDrawerNavigator } from 'react-navigation';
 
import StackNav from './StackNav';
import PersonalInformation from '../PersonalInformation';


 const DrawerNav  = createDrawerNavigator ({

    
    Home :{
        screen : StackNav,
        } ,
        PersonalInformation :{
            screen : PersonalInformation,
            } ,
    });

 export default DrawerNav;
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {createDrawerNavigator } from 'react-navigation';
 
import Login from '../LoginComponent'; 
import StackNav from './StackNav';
import Profile from '../Profile';


 const DrawerNav  = createDrawerNavigator ({

    
    BodySpecs :{
        screen : StackNav,
        } ,
        Login:{
            screen: Login 
          
        },

        Profile:{
            screen: Profile
        }
    });

 export default DrawerNav;
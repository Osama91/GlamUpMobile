import React from 'react';

import {TouchableOpacity,  Image , StyleSheet} from 'react-native';

import { Button, Text, Item ,Icon , Left, Right, Body,Container,
    Header, Title, Content  , Card, CardItem } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
 

 
const DrawerButton = (navigation ) =>  { 

    console.log('tag', navigation.navigate);
return (

       <TouchableOpacity style={styles.wrapper}
       onPress ={ ()=>   this.props.navigation.toggleDrawer() }
       >
       <Image source={require('../Assets/Images/Drawer.png')} style={styles.icon}/>
       
       
       </TouchableOpacity>
)};
 

   const styles = StyleSheet.create(  {
       wrapper: {
           marginLeft: 10
       },
       icon: 
       {
           width:24,
           height:24
       }
   }  );

  export default DrawerButton;
import {Platform, StyleSheet, Text, View} from 'react-native';
const mainThemeColor='#FFFFFF'
const styles = StyleSheet.create({
    BottomView :{
      flex: 1,
  justifyContent: 'flex-end',
  marginBottom: 36,
 
    },
BottomViewRowFlexDirection :{
  flex: 0.2,
  justifyContent: 'flex-end',
  marginBottom: 36,
  flexDirection: 'row',
  

},
WhiteBotton:{    
  color:'#FFFFFF',
  //width: (width * 37) / 100, height: height / 14
  backgroundColor: '#00000000',
  borderWidth: 1,
  padding:10,
  margin :10,
  borderColor:'#FFFFFF'
    
  
},
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ECA378',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      color:'#000',
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },backgroundVideo: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
  
    
  });

  export {styles}
import { Platform, StyleSheet, Dimensions, View } from 'react-native';
import{ bordersColor,inputBackground} from '../Services/SettingService'
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  input: {
    fontFamily:'Montserrat',
    borderColor: bordersColor, borderWidth: 1,
    borderRadius: 5, minWidth: 100, height: 40,
    backgroundColor: inputBackground, margin: 10,
    textAlign: 'left',
},
  BottomView: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36,

  },

  SocialButton: {    
   

  },
  BottomViewRowFlexDirection: {
    flex: 0.2,
    justifyContent: 'flex-end',
    marginBottom: 36,
    flexDirection: 'row',


  },
  Horizonalcontainer: {  
    fontFamily:'Montserrat', 
    margin:10,    
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',    
    justifyContent: 'space-around',
},
  SignUpBotton :{
    backgroundColor: '#D1968F',
    margin:5
  },
  WhiteBotton: {
    fontFamily:'Montserrat',
    width:width/2.5,
    color: '#FFFFFF',
    //width: (width * 37) / 100, height: height / 14
    backgroundColor: '#00000000',
    borderWidth: 1,
    padding: 10,
    margin: 10,
    borderColor: '#FFFFFF',
justifyContent:'center',
borderRadius:10,

  },
  containerWhite: {
    

  },
  bottom: {
    position: 'absolute',
    bottom: 0,
    flex: 1,
    width: '100%',
  },
  container: {
    fontFamily:'Montserrat',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: '#ECA378',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#000',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }, backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },


});

export { styles }
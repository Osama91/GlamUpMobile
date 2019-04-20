import { Platform, StyleSheet, Dimensions, View } from 'react-native';
import { bordersColor, inputBackground, barndMainColor, mainbackgroundColor } from '../Services/SettingService'
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  input: {
    fontFamily: 'Montserrat',
    borderColor: bordersColor, borderWidth: 1,
    borderRadius: 5, minWidth: 100, height: 40,
    backgroundColor: inputBackground, margin: 10,
    textAlign: 'left',
  },
  label:{    
    textAlign:'left',    
    padding:0,
    margin:0,
  },
  whiteInput: {
    fontFamily: 'Montserrat',
    borderColor: 'white', borderWidth: 1,
    borderRadius: 5, minWidth: 100, height: 40,
    margin: 10,

    padding: 10,
    textAlign: 'left',
    color: 'white'
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
    fontFamily: 'Montserrat',
    margin: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-around',
  },
  section:{
    //backgroundColor:'white'
  },
  icon:{  
      color:'black',           
    //  borderWidth:1,
    //  borderColor:'black'
  },
  iconPressed:{  
    color:'red',           
  //  borderWidth:1,
  //  borderColor:'black'
},
  SignUpBotton: {
    backgroundColor: '#D1968F',
    margin: 5
  },
  SignInBotton: {
    backgroundColor: 'white',
    margin: 5
  },
  WhiteBotton: {
    fontFamily: 'Montserrat',
    width: width / 2.5,
    color: '#FFFFFF',
    //width: (width * 37) / 100, height: height / 14
    backgroundColor: '#00000000',
    borderWidth: 1,
    padding: 10,
    margin: 10,
    borderColor: '#FFFFFF',
    justifyContent: 'center',
    borderRadius: 10,
  },
  halfwidth: {
    width: width / 2.5,
    justifyContent: 'center',
  },

  containerWhite: {


  },
  bottom: {
    position: 'absolute',
    bottom: 0,
    flex: 1,
    width: '100%',
  },
  MainContainer: {
    fontFamily: 'Montserrat',
    backgroundColor: barndMainColor,
    flex: 1

  },
  FullSize: {
    // height:'20%',
    // width: '100%',
    backgroundColor: 'blue',
    textAlignVertical: "center",
    textAlign: "center",
  },
  container: {
    fontFamily: 'Montserrat',
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

  header: {
    padding:5,
    paddingBottom: 2,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
  },
  momentTitle: {
    padding:0,
    paddingLeft: 5,
  },
  card: {    
  },
  footer: {
    paddingTop: 16,
  },
  time: {
    marginTop: 5,
  },
  // BlogContainer: {          
  //       paddingHorizontal: 14,
  //       paddingVertical: 8,
  //       alignItems:'center'
  //     },
});

export { styles }
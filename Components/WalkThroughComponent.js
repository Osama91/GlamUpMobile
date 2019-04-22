import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Button } from 'native-base';



import YouTube from 'react-native-youtube'
import { styles } from './styles'
import AuthService from '../Services/AuthService';
import DeviceService from '../Services/DeviceService'
import Constant from '../Services/Constant';
import Home from './HomeComponent';
class WalkThrough extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false
    };

    DeviceService.GetData(Constant.TOKEN).then((r) => {
      if (r !== null) {
        AuthService.authData = JSON.parse(r);
        this.setState({ loaded: true });
      }

      //navigation.navigate('Main', {});
    });
  }

  static navigationOptions = ({ navigation }) => {
    return {
       header: null,
      headerMode: 'none',

    };
  };
 
 
  ChangeThisTitle = (titleText) => {
     const {setParams} = this.props.navigation;
      setParams({ title: titleText })
  }

  render() {

    if (!this.state.loaded) {
      return null;
    }
    if (AuthService.loggedIn()) { return <Home></Home> }

    return (
      <View style={styles.container}>
        {/* <YouTube resizeMode="cover"
                controls={0}
                autoplay={true}
          videoId="KVZ-P-ZI6W4"   // The YouTube video ID
          play={true}             // control playback of video with true/false
          //fullscreen={true}       // control whether the video should play in fullscreen or inline
          loop={true}             // control whether the video should loop when ended
          apiKey="AIzaSyAgSIGESBf36Pyr3N-2hpJ9Nu4WEHBmtaw"
          onReady={() => this.setState({ isReady: true })}
          onChangeState={e => this.setState({ status: e.state })}
          onChangeQuality={e => this.setState({ quality: e.quality })}
          onError={e => this.setState({ error: e.error })} 
          style={styles.backgroundVideo}
        /> */}
        <View style={styles.Horizonalcontainer}>
          <Button onPress={this.Skip} style={styles.WhiteBotton}><Text style={{ color: '#FFFFFF' }} >SKIP</Text>
          </Button>

          <Button onPress={this.SignUp} style={styles.WhiteBotton}  >
            <Text style={{ color: '#FFFFFF' }} >SIGN UP</Text></Button>
        </View>
      </View>
    );
  }
  SignUp = () => {
    let r = this.props.navigation.navigate('SignUp');
  }

   

  Profile = () => {
    let r = this.props.navigation.navigate('DrawerNav');
    
}

}
export default WalkThrough;
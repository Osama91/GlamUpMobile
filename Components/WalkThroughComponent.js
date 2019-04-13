import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import YouTube from 'react-native-youtube'
import { styles } from './styles'
class WalkThrough extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: null,
      headerMode: 'none',

    };
  };
  render() {
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
        <View style={styles.BottomView}   >
          <View style={styles.BottomViewRowFlexDirection}  >
            <TouchableOpacity style={styles.WhiteBotton} >
              <Text style={{color:'#FFFFFF'}} >Skip</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.SignUp} style={styles.WhiteBotton}  >
              <Text style={{color:'#FFFFFF'}} >Sign Up</Text></TouchableOpacity>
          </View>
        </View>
      </View>
    );
    
  }
  SignUp = () => {
    let r = this.props.navigation.navigate('SignUp');
    
  }
}


export default WalkThrough;
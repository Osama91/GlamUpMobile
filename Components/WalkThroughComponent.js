import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import YouTube from 'react-native-youtube'


export default class WalkThrough extends Component {
    render() {
      return (
        <View style={styles.container}>        
          <YouTube resizeMode="cover"
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
  />
  <Text style={styles.welcome}>GlamUp</Text>
  <Text style={styles.welcome}>Login</Text>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      color:'#ffffff',
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
  
import React, { Component } from 'react';
import { CheckBox } from 'react-native-elements'
import { View, Image, ScrollView,Alert,Picker,StyleSheet } from 'react-native';
import { styles } from './styles'
import { SocialIcon ,Input  } from 'react-native-elements'
import { Button, Text, Item ,Icon, Form, Content} from 'native-base';
import { LoginButton, AccessToken,LoginManager } from 'react-native-fbsdk';
import InstagramLogin from 'react-native-instagram-login'
import RNPickerSelect from 'react-native-picker-select';


const sports = [
    {
      label: 'Football',
      value: 'football',
    },
    {
      label: 'Baseball',
      value: 'baseball',
    },
    {
        label: 'Hockey',
        value: 'hockey',
      },
      {
        label: 'Hockey2',
        value: 'hockey2',
      },
  ];
  const KidsCount = [
    {
      label: '0',
      value: '0',
    },
    {
      label: '1',
      value: '1',
    },
    {
        label: '2',
        value: '2',
      },
      {
        label: '3',
        value: '3',
      },
  ];
class PersonalInformation extends Component {
    
    static navigationOptions = ({ navigation }) => {
        return {
           title: "Personal Information",
            position: 'center'
        };
      };

       
      constructor(props) {
        super(props);
    
        this.inputRefs = {
          firstTextInput: null,
          favSport0: null,
          favSport1: null,
          lastTextInput: null,
        };
    
        this.state = {
          
          SelectedItemValue: undefined,
          HaveKidsSelectedValue: undefined
        };
      }

  render() {
    const placeholder = {
        label: 'Select a sport...',
        value: null,
        color: '#9EA0A4',
      };
      const HaveKids = {
        label: 'Have Kids?',
        value: null,
        color: '#9EA0A4',
      };
    return (
    <View style = {styles.dropdown}> 
 
     
    <RNPickerSelect
    mode="dropdown"  
    placeholder={placeholder}

    items={sports}
    onValueChange={value => {
      this.setState({
        SelectedItemValue: value,

        
      });
    }}
     style={pickerSelectStyles}
    value={this.state.SelectedItemValue}
    useNativeAndroidPickerStyle={false}
    ref={el => {
      this.inputRefs.SelectedItemValue = el;
    }}
    
  />
  
  <View paddingVertical={10} />

  <RNPickerSelect
  mode="dropdown"  
  placeholder={HaveKids}

  items={KidsCount}
  onValueChange={value => {
    this.setState({
        HaveKidsSelectedValue: value,

      
    });
  }}
   style={pickerSelectStyles}
  value={this.state.HaveKidsSelectedValue}
  useNativeAndroidPickerStyle={false}
  ref={el => {
    this.inputRefs.HaveKidsSelectedValue = el;
  }}
/>
<View paddingVertical={10} />

<View   style={styles.container}>
<Input
        placeholder='Governorate' />
</View>
        <Button  uppercase={false}
            onPress={() => {
          
             this.props.navigation.navigate('Login', {})
        }} 
         full dark >
         <Text color='Black'   >Confirm</Text>
        </Button>
       </View> 
     )};
    }
    
    export default PersonalInformation;
    
const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
       borderRadius: 4,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 0.5,
       borderRadius: 8,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
    downarrow:{
backgroundColor: 'transparent',
                  borderTopWidth: 10,
                   borderTopColor: 'gray',
                  borderRightWidth: 10,
                  borderRightColor: 'transparent',
                  borderLeftWidth: 10,
                  borderLeftColor: 'transparent',
                  width: 0,
                  height: 0,
    }
  });
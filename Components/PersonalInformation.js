import React, { Component } from 'react';
import { Header } from 'react-native-elements'
import { View, Image, ScrollView,Alert,Picker,StyleSheet,TextInput } from 'react-native';
import { styles } from './styles'
import { SocialIcon     } from 'react-native-elements'
import { Button, Text ,Icon } from 'native-base';
 import InstagramLogin from 'react-native-instagram-login'
import RNPickerSelect from 'react-native-picker-select';
import MultiSelect from 'react-native-multiple-select';


const sports = [
    {
      label: 'Married',
      value: 'Married',
    },
    {
      label: 'Single',
      value: 'Single',
    }  
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
      } 
  ];

  const Profession = [
    {
      label: 'Profession',
      value: 'Profession',
    },
    {
      label: 'Profession1',
      value: 'Profession1',
    }  
  ];

  const FavouritBrands = [
    {
      label: 'Brand1',
      value: 'Brand1',
    },
    {
      label: 'Brand2',
      value: 'Brand2',
    }  
  ];

  const SkinColor = [
    {
      label: 'White',
      value: 'White',
    },
    {
      label: 'Black',
      value: 'Black',
    }  
  ];
  const PreferredStyle = [
    {
      label: 'Classic',
      value: 'Classic',
    },
    {
      label: 'Cajsual',
      value: 'Cajsual',
    }  

];
const Colors = [
  {
    label: 'Red',
    value: 'Red',
  },
  {
    label: 'Blue',
    value: 'Blue',
  }  

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
          HaveKidsSelectedValue: undefined,
          ProfessionSelectedValue: undefined,
          FavouritBrandsSelectedValue: undefined,
          SkinColorSelectedValue: undefined,
          PreferredStyleSelectedValue: undefined,
          ColorsSelectedValue:undefined
 
        };
      }

  render() {
    const placeholder = {
        label: 'Martial Status',
        value: null,
        color: '#9EA0A4',
      };
      const HaveKids = {
        label: 'Have Kids?',
        value: null,
        color: '#9EA0A4',
      };
      const ProfessionPlaceHolder = {
        label: 'Profession',
        value: null,
        color: '#9EA0A4',
      };
      const FavouritBrandsPlaceHolder = {
        label: 'Favourit Brands',
        value: null,
        color: '#9EA0A4',
      };
      const SkinColorPlaceHolder = {
        label: 'Skin Color',
        value: null,
        color: '#9EA0A4',
      };
      const PreferredStylePlaceHolder = {
        label: 'Preffered Style',
        value: null,
        color: '#9EA0A4',
      };
      const ColorsPlaceHolder = {
        label: 'Preffered Color',
        value: null,
        color: '#9EA0A4',
      };
    return (


    <View style = {styles.dropdown}> 

    <ScrollView> 
 
     
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

<View    style={styles.Icontainer} >

    <TextInput   style={styles.HrizontaloInputContainer}
        placeholder='Governorat'/>

 
        <TextInput   style={styles.HrizontaloInputContainer}
        placeholder='District'/>
</View>
 
<View paddingVertical={10} />

<RNPickerSelect
    mode="dropdown"  
    placeholder={ProfessionPlaceHolder}

    items={Profession}
    onValueChange={value => {
      this.setState({
        ProfessionSelectedValue: value,

        
      });
    }}
     style={pickerSelectStyles}
    value={this.state.ProfessionSelectedValue}
    useNativeAndroidPickerStyle={false}
    ref={el => {
      this.inputRefs.ProfessionSelectedValue = el;
    }}
    
  />

  <View paddingVertical={10} />

  <TextInput   style={styles.InputContainer}
  placeholder='Favourit Brands'
  placeholderStyle={textAlign='center'}
  />

  <View paddingVertical={10} />

  <RNPickerSelect
      mode="dropdown"  
      placeholder={SkinColorPlaceHolder}
  
      items={SkinColor}
      onValueChange={value => {
        this.setState({
          SkinColorSelectedValue: value,
  
          
        });
      }}
       style={pickerSelectStyles}
      value={this.state.SkinColorSelectedValue}
      useNativeAndroidPickerStyle={false}
      ref={el => {
        this.inputRefs.SkinColorSelectedValue = el;
      }}
      
    />
    <View paddingVertical={10} />

  <RNPickerSelect
      mode="dropdown"  
      placeholder={PreferredStylePlaceHolder}
  
      items={PreferredStyle}
      onValueChange={value => {
        this.setState({
          PreferredStyleSelectedValue: value,
  
          
        });
      }}
       style={pickerSelectStyles}
      value={this.state.PreferredStyleSelectedValue}
      useNativeAndroidPickerStyle={false}
      ref={el => {
        this.inputRefs.PreferredStyleSelectedValue = el;
      }}
      
    />
    
    <View paddingVertical={10} />

    <RNPickerSelect
        mode="dropdown"  
        placeholder={ColorsPlaceHolder}
    
        items={Colors}
        onValueChange={value => {
          this.setState({
            ColorsSelectedValue: value,
    
            
          });
        }}
         style={pickerSelectStyles}
        value={this.state.ColorsSelectedValue}
        useNativeAndroidPickerStyle={false}
        ref={el => {
          this.inputRefs.ColorsSelectedValue = el;
        }}
        
      />

      <View paddingVertical={10} />

        <Button  uppercase={false}
        
        onPress={() => {
          
          this.props.navigation.navigate('SingUp', {})
        }} 
                 full dark >
            
            <Text color='Black'   >Confirm</Text>
            <Icon name="md-arrow-forward" size={16} color="#000"  />

        </Button>
         </ScrollView>

       </View> 
     )};
    
    



     BodySpecs = () => {
        let r = this.props.navigation.navigate('SignUp');

        console.log('BodySpecs', 'doneneoneondondondondondondondodn')
        
    }
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
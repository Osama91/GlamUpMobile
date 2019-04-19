import React, { Component } from 'react';
import {
  View,Image,TextInput
} from 'react-native';
import { styles } from './styles';
import { Button, Text ,Icon } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

let Imagepath = require('../Assets/Images/height.png');

class BodySpecs extends Component {
 

  constructor(){
 
    super();
 
    this.state={
 
      Imagepath : require('../Assets/Images/height.png')
 
    }
 
  }
 
  Load_Height_Image=()=>{

     this.setState({
 
    Imagepath : require('../Assets/Images/height.png')
 
      
    })
  }

  Load_Chest_Image=()=>{

        this.setState({
    
   Imagepath : require('../Assets/Images/chest.png')
    
         
       })
     }

     Load_Waist_Image=()=>{

          this.setState({
      
     Imagepath : require('../Assets/Images/waist.png')
      
           
         })
       }
    
       Load_Hips_Image=()=>{

            this.setState({
        
       Imagepath : require('../Assets/Images/hips.png')
        
             
           })
         }
  static navigationOptions = ({ navigation }) => {
    return {
       title: "Body Specs",
 
    };
  };
      
    render (){
        return(

<View >
<ScrollView>
<View paddingVertical={10} />

<View style={styles.ImageContainer}>
        <Image  style = {styles.Image}
        source={  this.state.Imagepath  } />
      
</View>
        <View paddingVertical={10}  />

         
        <View    style={styles.Icontainer} >
        
            <TextInput   style={styles.HrizontaloInputContainer}
                placeholder='Height' keyboardType='numeric'
                 onFocus={ () => this.Load_Height_Image() }
                  onBlur={ () => this.Load_Height_Image() }
                          />
        
         
                <TextInput   style={styles.HrizontaloInputContainer}
                placeholder='Chest size' keyboardType='numeric'
                onFocus={ () => this.Load_Chest_Image() }
                  onBlur={ () => this.Load_Chest_Image() }
                />
        </View>
         
        <View paddingVertical={5} />
 
        <View    style={styles.Icontainer} >
        
        <TextInput   style={styles.HrizontaloInputContainer}
            placeholder='Waist size' keyboardType='numeric'
            onFocus={ () => this.Load_Waist_Image() }
                  onBlur={ () => this.Load_Waist_Image() }
            />
    
     
            <TextInput   style={styles.HrizontaloInputContainer}
            placeholder='Hips size' keyboardType='numeric'
            onFocus={ () => this.Load_Hips_Image() }
                  onBlur={ () => this.Load_Hips_Image() }
            />
    </View>


    <View style={{justifyContent:'flex-end', flex:1}}>
        <Button  uppercase={false}
        style={{flex:1  }}
        onPress={() => {
          
          this.props.navigation.navigate('ForgetPassword', {})
        }} 

                 full dark >
            
            <Text color='Black'   >Confirm</Text>
            <Icon name="md-arrow-forward" size={16} color="#000"  />

        </Button>

        </View>
        </ScrollView>
  </View>
        );
    }
}

 export default BodySpecs;
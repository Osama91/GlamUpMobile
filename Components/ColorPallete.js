import React from 'react';
import ColorPalette from 'react-native-color-palette'
 import {alert,Text} from 'react-native';
 import {Icon } from 'native-base';

// const UncontrolledColorPicker = () => (
//   <ColorPalette
//     onChange={color => alert('Color selected: ${color}')}
//     defaultColor={'#C0392B'}
//     colors={['#C0392B', '#E74C3C', '#9B59B6', '#8E44AD', '#2980B9']}
//     title={"Uncontrolled Color Palette:"}
//     Icon={
 
//       <Text>✔</Text>
       
//       // Icon can just be text or ASCII
//     }
//   />
// )
 
const ControlledColorPicker = () => {
  let selectedColor = '#C0392B';
  return (
    <ColorPalette
      onChange={color => selectedColor = color   }
      value={selectedColor}
      colors={['#C0392B', '#E74C3C', '#9B59B6', '#8E44AD', '#2980B9']}
      title={"Controlled CCColor Palette:"}
      icon={
        <Icon name={'check-circle'} type='FontAwesome' size={25} color={'red'}
        
          />
      // React-Native-Vector-Icons Example
    }
  />)
}

export default ControlledColorPicker;
import React, { Component } from 'react';
import {
  View
} from 'react-native';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';

// This is how you can load a local icon
// You can remove this if you'd like
const icon = require('../Assets/Images/Drawer.png');

const items = [
  {
    name: "Preffered Colors",
    id: 0,
    icon: icon ,style:{borderColor: 'red', borderWidth: 5 }, // Make sure the icon const is set, or you can remove this
    children: [{
        name: "Red",
        id: 10,
         
      },{
        name: "Yellow",
        id: 17,
      },{
        name: "Blue",
        id: 13,
      },{
        name: "White",
        id: 14,
      },{
        name: "Black",
        id: 15,
      },{
        name: "Navy",
        id: 16,
      }]
  },
  
  
]

  class MultipleSelectionList extends Component {
  constructor(){
    super()
    this.state = {
      selectedItems: [],
    }
  }
  onSelectedItemsChange = (selectedItems) => {
    this.setState({ selectedItems });
  }

  render() {
    return (
      <View  style={{marginBottom:5}}  >

        <SectionedMultiSelect
          items={items}
          uniqueKey='id'
          subKey='children'
          iconKey='icon'
          selectText='Preffered Colors'
          searchPlaceholderText='Search...'
          showDropDowns={true}
          readOnlyHeadings={true}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={this.state.selectedItems}

         />

      </View>
    );
  }
}
export default MultipleSelectionList;
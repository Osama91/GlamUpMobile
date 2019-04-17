import React, { Component } from 'react';
import {
  View
} from 'react-native';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';

// This is how you can load a local icon
// You can remove this if you'd like
const icon = require('./icon.png');

const items = [
  {
    name: "Fruits",
    id: 0,
    icon: icon, // Make sure the icon const is set, or you can remove this
    children: [{
        name: "Apple",
        id: 10,
      },{
        name: "Strawberry",
        id: 17,
      },{
        name: "Pineapple",
        id: 13,
      },{
        name: "Banana",
        id: 14,
      },{
        name: "Watermelon",
        id: 15,
      },{
        name: "Kiwi fruit",
        id: 16,
      }]
  },
  {
    name: "Gems",
    id: 1,
    icon: { uri: "https://cdn4.iconfinder.com/data/icons/free-crystal-icons/512/Gemstone.png" }, // web uri
    children: [{
        name: "Quartz",
        id: 20,
      },{
        name: "Zircon",
        id: 21,
      },{
        name: "Sapphire",
        id: 22,
      },{
        name: "Topaz",
        id: 23,
      }]
  },
  {
    name: "Plants",
    id: 2,
    icon: "filter_vintage", // material icons icon name
    children: [{
        name: "Mother In Law\'s Tongue",
        id: 30,
      },{
        name: "Yucca",
        id: 31,
      },{
        name: "Monsteria",
        id: 32,
      },{
        name: "Palm",
        id: 33,
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
      <View>

        <SectionedMultiSelect
          items={items}
          uniqueKey='id'
          subKey='children'
          iconKey='icon'
          selectText='Choose some things...'
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
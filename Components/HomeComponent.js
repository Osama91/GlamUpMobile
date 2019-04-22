import React, { Component } from 'react';
import {
  FlatList,
  Image,
  View,
  TouchableOpacity, Text
} from 'react-native';
import { styles } from './styles'
import SocialBar from '../Components/SocialBar';
import LookUpService from '../Services/LookUpService'
import HelperService from '../Services/HelperService'
import Constant from '../Services/Constant'
const moment = require('moment');
class Home extends Component {

  static navigationOptions = {
    title: 'Article List'.toUpperCase(),
  };

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
    }

    console.log(Constant.BlogImages );



  }
  componentWillMount() {

    LookUpService.GetBlogs()
      .then(result => {
        this.setState({ data: result, loading: false })
      })
      .catch(error => {
        HelperService.handleErrorsUI(error);
        this.setState({ loading: false });
      });

  }


  extractItemKey = (item) => `${item.ID}`;

  onItemPressed = (item) => {
    this.props.navigation.navigate('Blog', { item: item });
  };

  renderItem = ({ item }) => (

    <TouchableOpacity
      delayPressIn={70}
      activeOpacity={0.8}
      onPress={() => this.onItemPressed(item)}>
      <View style={styles.card}>
      
        <View style={{ flexDirection: 'column', }}>
          <Text style={styles.header}>{item.Title}</Text>
          <Text style={styles.momentTitle}>{moment().add(item.CreationDate, 'seconds').fromNow()}</Text>

        </View>
        <Image resizeMode='cover'
          style={{            
            height: 400
          }}
          
          source={{ uri: (Constant.BlogImages + item.PictureUrl) }} ref={item.ID}
          />
        <View >
          <SocialBar />
        </View >
      </View>
    </TouchableOpacity>
  );

  render() {
    if (this.state.data.length > 0)
      return (
        <FlatList
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={this.extractItemKey}
        //style={styles.BlogContainer}
        />
      )
    else {

      return <View></View>
    }
  };

}


export default Home;

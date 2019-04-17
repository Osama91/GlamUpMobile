import React, { Component } from 'react';
import {
  FlatList,
  Image,
  View,
  TouchableOpacity, Text
} from 'react-native';
import { styles } from './styles'
import SocialBar from '../Components/SocialBar';
import { data } from '../data';
// import NavigationType from '../../config/navigation/propTypes';

const moment = require('moment');


class Blog extends Component {

  // static propTypes = {
  //   navigation: NavigationType.isRequired,
  // };
  static navigationOptions = {
    title: 'Article List'.toUpperCase(),
  };

  state = {
    data: data.getArticles(),
  };

  extractItemKey = (item) => `${item.id}`;

  onItemPressed = () => {
    // this.props.navigation.navigate('Article', { id: item.id });
  };

  renderItem = ({ item }) => (

    <TouchableOpacity
      delayPressIn={70}
      activeOpacity={0.8}
      onPress={() => this.onItemPressed(item)}>
      <View style={styles.card}>
        <View style={{ flexDirection: 'column', }}>
          <Text style={styles.header}>{item.header}</Text>          
          <Text style={styles.momentTitle}>{moment().add(item.time, 'seconds').fromNow()}</Text>

        </View>
        <Image resizeMode='cover'
          style={{
            alignSelf: 'center',
            height: 350
          }}
          source={item.photo} />
        <View >
          <SocialBar />
        </View >
      </View>
    </TouchableOpacity>
  );

  render() {
    return (
      <FlatList
        data={this.state.data}
        renderItem={this.renderItem}
        keyExtractor={this.extractItemKey}
      //  style={styles.BlogContainer}
      />
    )
  };

}


export default Blog;

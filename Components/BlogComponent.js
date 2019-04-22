import React, { Component } from 'react';
import {
  FlatList,
  Image,
  View,
  TouchableOpacity, Text, ScrollView
} from 'react-native';
import { styles } from './styles'
import SocialBar from '../Components/SocialBar';
import LookUpService from '../Services/LookUpService'
import Constant from '../Services/Constant';
const moment = require('moment');


class Blog extends React.Component {
  // static propTypes = {
  //   navigation: NavigationType.isRequired,
  // };
  static navigationOptions = {
    title: 'Article View'.toUpperCase(),
  };

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [],
    }
    // this.data = data.getArticle(articleId);
  }
  componentWillMount() {
    this.setState({ data: this.props.navigation.getParam('item', 1) });
  }

  renderItem = ({ item }) => (
    <Text style={styles.momentTitle}>{item.Description}</Text>
  );
  extractItemKey = (item) => `${item.ID}`;
  render() {
    return (
      <View>   
         <ScrollView style={styles.root}>
        <View >
        <Image resizeMode='cover'
          style={{            
            height: 400            
          }}
          source={{ uri: (Constant.BlogImages + this.state.data.PictureUrl) }} ref={this.state.data.ID}
          />
          <View >
            <View>
              <Text style={styles.header} >{this.state.data.Title}</Text>
              <Text style={styles.momentTitle}>
                {moment().add(this.state.data.time, 'seconds').fromNow()}
              </Text>
            </View>            
          </View>
          <View >
            <View>
              <FlatList
                data={this.state.data.BlogParagraph}
                renderItem={this.renderItem}
                keyExtractor={this.extractItemKey}
              //style={styles.BlogContainer}
              />

            </View>
          </View>
          <View>
            <SocialBar />
          </View>
        </View>
      </ScrollView>
   
      </View>
   
   )
  }
}

export default Blog;
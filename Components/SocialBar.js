import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Text, Icon } from 'native-base';
import { styles } from './styles'
import { FontAwesome } from '../Assets/icons';

class SocialBar extends Component {
  static data = {
    likes: 26,
    comments: 26,
    shares: 5,
  };

  constructor(props) {
    super(props);
    this.state = {
      likes: this.props.likes || SocialBar.data.likes,
      comments: this.props.comments || SocialBar.data.comments,
      shares: this.props.shares || SocialBar.data.shares,
    };
  }

  onLikeButtonPressed = () => {
    const defaultCount = SocialBar.data.likes;
    this.setState({
      likes: this.state.likes === defaultCount ? this.state.likes + 1 : defaultCount,
    });
  };

  onCommentButtonPressed = () => {
    const defaultCount = SocialBar.data.comments;
    this.setState({
      comments: this.state.comments === defaultCount ? this.state.comments + 1 : defaultCount,
    });
  };

  onShareButtonPressed = () => {
    const defaultCount = SocialBar.data.shares;
    this.setState({
      shares: this.state.shares === defaultCount ? this.state.shares + 1 : defaultCount,
    });
  };

  render() {
    // const {
    //   container, section, icon, label,
    // } = this.defineStyles();

    const likes = this.state.likes + (this.props.showLabel ? ' Likes' : '');
    const comments = this.state.comments + (this.props.showLabel ? ' Comments' : '');
    const shares = this.state.shares + (this.props.showLabel ? ' Shares' : '');

    return (
      <View style={styles.Horizonalcontainer}>
        <View style={styles.section}>
          <Button transparent onPress={this.onLikeButtonPressed}>
            {/* <Text  style={styles.icon}>{FontAwesome.heart}</Text> */}

            <Icon type='FontAwesome'
              name='heart'
              size={12}
              style={styles.icon}
              expandedIconStyle={{ color: "red" }}
            />

            <Text style={styles.label}>{likes}</Text>
          </Button>
        </View>
        <View style={styles.section}>
          {/* <Button transparent onPress={this.onCommentButtonPressed}> */}
          <Text style={{color:'black'}} color='black' >{FontAwesome.user}</Text>
            <Icon type='FontAwesome'
              name='comment'
              size={12}
              style={styles.icon}
              expandedIconStyle={{ color: "red" }}/>
            <Text style={styles.label}>{comments}</Text>
          {/* </Button> */}
        </View>
        <View style={styles.section}>
          <Button transparent onPress={this.onShareButtonPressed}>
            {/* <Text    style={styles.icon}>{FontAwesome.user}</Text> */}
            <Icon type='FontAwesome'
              name='comment'
              size={12}
              style={styles.icon}
              expandedIconStyle={{ color: "red" }}
            />
            <Text style={styles.label}>{shares}</Text>
          </Button>
        </View>

      </View>
    );
  }
}
export default SocialBar
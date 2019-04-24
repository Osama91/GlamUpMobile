import React, { Component } from 'react';
import { View ,Text} from 'react-native';
import { Button  } from 'native-base';
import { Icon } from 'react-native-elements'
import { styles } from './styles'

class SocialBar extends Component {
  static data = {
    likes: 0,
    Favs: 0,
    shares: 0,
  };

  constructor(props) {
    super(props);
    this.state = {
      likes: this.props.likes || SocialBar.data.likes,
      Favs: this.props.Favs || SocialBar.data.Favs,
      shares: this.props.shares || SocialBar.data.shares,
      ThumbsUpIsPressed: false,
      FavIsPressed:false,
      ShareIsPressed:false,
    };
  }

  onLikeButtonPressed = () => {
    const defaultCount = SocialBar.data.likes;
    this.setState({
      likes: this.state.likes === defaultCount ? this.state.likes + 1 : defaultCount,
      ThumbsUpIsPressed: !this.state.ThumbsUpIsPressed
    });
  };


  onFavButtonPressed = () => {
    const defaultCount = SocialBar.data.Favs;
    this.setState({
      Favs: this.state.Favs === defaultCount ? this.state.Favs + 1 : defaultCount,
      FavIsPressed: !this.state.FavIsPressed
    });
  };
  onShareButtonPressed = () => {
    const defaultCount = SocialBar.data.shares;
    this.setState({
      shares: this.state.shares === defaultCount ? this.state.shares + 1 : defaultCount,
      ShareIsPressed: !this.state.ShareIsPressed
    });
  };
  ThumbsUpStyle = function () {
    if (this.state.ThumbsUpIsPressed) {
      return {
        color: 'red',
      }
    } else {
      return {
        color: 'black',
      }
    }
  }
  FavUpStyle = function () {
    if (this.state.FavIsPressed) {
      return {
        color: 'red',
      }
    } else {
      return {
        color: 'black',
      }
    }
  }
  ShareStyle = function () {
    if (this.state.ShareIsPressed) {
      return {
        color: 'red',
      }
    } else {
      return {
        color: 'black',
      }
    }
  }



  ThumbsUpStyleName = function () {
    if (this.state.ThumbsUpIsPressed) {
      return 'thumbs-up'      
    } else {
      return  'thumbs-o-up'
    }
  }

  FavStyleName= function () {
    if (this.state.FavIsPressed) {
      return 'star'      
    } else {
      return  'star-o'
    }
  }

  ShareStyleName= function () {
    if (this.state.ShareIsPressed) {
      return 'share'      
    } else {
      return  'share-square-o'
    }
  }

  
 

  render() {
    // const {
    //   container, section, icon, label,
    // } = this.defineStyles();

    const likes = this.state.likes + (this.props.showLabel ? ' Likes' : '');
    const Favs = this.state.Favs + (this.props.showLabel ? ' Favs' : '');
    const shares = this.state.shares + (this.props.showLabel ? ' Shares' : '');

    return (

      <View style={styles.Horizonalcontainer}>
        <View style={styles.section}>
          <Button iconLeft transparent >           
            <Icon   
              name={this.ThumbsUpStyleName()} reverse
              type='font-awesome'
              size={24}
              color='white'
              iconStyle={this.ThumbsUpStyle()}
              onPress={this.onLikeButtonPressed}                           
            />
            <Text style={styles.label}>{likes}</Text>
          </Button>
        </View>
        <View style={styles.section}>
        <Button iconLeft transparent >             
            <Icon  
             name={this.FavStyleName()} reverse              
             type='font-awesome'              
              size={24}
              color='white'
              iconStyle={this.FavUpStyle()}
              onPress={this.onFavButtonPressed}
              />
            <Text style={styles.label}>{Favs}</Text>
          </Button>
        </View>
        <View style={styles.section}>
          <Button transparent >            
            <Icon 
             name={this.ShareStyleName()} reverse 
             type='font-awesome'
              size={24}
              color='white'
              iconStyle={this.ShareStyle()}
              onPress={this.onShareButtonPressed}
            />
            <Text style={styles.label}>{shares}</Text>
          </Button>
        </View>

      </View>
    );
  }
}
export default SocialBar
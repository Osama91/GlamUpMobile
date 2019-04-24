import { Component } from 'react';



import AuthService from '../Services/AuthService';
import DeviceService from '../Services/DeviceService'
import Constant from '../Services/Constant';
class Intial extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false
    };

    DeviceService.GetData(Constant.TOKEN).then((r) => {
      if (r !== null) {
        AuthService.authData = JSON.parse(r);
        this.props.navigation.navigate('Home', {});
      } else {
        this.props.navigation.navigate('WalkThrough', {});
      }


    });
  }

  static navigationOptions = () => {
    return {
      header: null,
      headerMode: 'none',

    };
  };


  render() {
    return null;

  }

}
export default Intial;
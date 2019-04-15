
import { AsyncStorage } from 'react-native';

class DeviceService {
  static DeviceId = '';
  static loyaltyhubRegistered = '';
  static async SaveDeviceId(DeviceId) {
    try {
      await AsyncStorage.setItem('DeviceId', DeviceId);
      DeviceService.DeviceId = DeviceId;
    } catch (error) {
      // Error saving data
    }
  }
  static async GetDeviceId() {
    try {
      const value = await AsyncStorage.getItem('DeviceId');
      if (value !== null) {
        // We have data!!
        return (value);
      }
    } catch (error) {
      // Error retrieving data
    }
    return ('');
  }


  static async SaveData(key,Data) {
    try {
      await AsyncStorage.setItem(key, Data);
    } catch (error) {
      console.log(error);
      // Error saving data
    }
  }
  static async GetData(key) {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        // We have data!!
        return (value);
      }
    } catch (error) {
      console.log(error);
      // Error retrieving data
    }
    return (null);
  }
}
export default DeviceService;
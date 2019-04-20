//import TabsBar from '../components/TabsBar';
import DeviceService from './DeviceService';
import Constant from '../Services/Constant';
import {  Toast } from "native-base";
export default class HelperService {
    static async handleErrors(response) {
        if (response.status == 401) {// login
            DeviceService.SaveData(Constant.TOKEN, JSON.stringify({}));
         //   TabsBar.navigation.navigate('Login', {});
        }
        if (!response.ok) {
            let message = response.statusText;
            if (!message)
                message = (await response.json()).message;
            throw Error(message);
        }
        return response;
    }
    static handleErrorsUI(ex) {
        Toast.show({
            text: ex.message,
            buttonText: "Okay",
            position: "top",
            type: "danger"
          })
       
    }

    static handleErrorsUIString(ex) {
        Toast.show({
            text: ex,
            buttonText: "Okay",
            position: "top",
            type: "danger"
          })
       
    }
}
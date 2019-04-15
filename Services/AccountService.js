import {
    Alert,
} from 'react-native';
import Constant from '../helper/Constant';
import { HelperService, AuthService, } from './services';

export default class AccountService {

    static async GetUserData() {
        let url = Constant.GET_USER_URL;
        let token = AuthService.getTokenAuth();
        return fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: token,
            },
        })
            .then(res => HelperService.handleErrors(res))
            .then(res => res.json());
    }

    static async PUTUserData(Email, FirstName, LastName, PhoneNumber, Password) {
        let url = Constant.PUT_USER_URL;
        let token = AuthService.getTokenAuth();
        return fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: token,
            }, body: JSON.stringify({
                Email: Email,
                Password: Password,
                FirstName: FirstName,
                LastName: LastName,
                PhoneNumber: PhoneNumber
            })
        })
            .then(res => HelperService.handleErrors(res))
            .then(res => res.json());
    }
}
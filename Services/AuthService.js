import Constant from '../Services/Constant';
import  DeviceService  from '../Services/DeviceService'
import HelperService from './HelperService';

class AuthService {
    static authData = { token: '', tokenType: '', expiry: null };
    static loggedIn() {
        //let expiry = AuthService.authData.expiry;
        return AuthService.authData.token.length > 0;//(Date.parse(expiry) > new Date())
    }
    static getTokenAuth() {
        return AuthService.authData.tokenType + ' ' + AuthService.authData.token;
    }
    static async Login(username, password) {
        let url = Constant.GET_LOGIN_URL;
        return fetch(url, {
            method: 'POST',
            headers: {
                //Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userName: username, password: password
            })
        })
            .then(res => HelperService.handleErrors(res))
            .then(res => res.json())
            .then(res => {
                AuthService.authData.token = res.Token;
                AuthService.authData.tokenType = 'Bearer';
                AuthService.authData.FullName = res.FullName;                
                AuthService.authData.Username = res.Username;
                AuthService.authData.Password = password;
                AuthService.authData.ExpiresIn = Date.parse(res.ExpiresIn);
                // var t = new Date();date.parse(res.ExpiresIn)
                // t.setSeconds(t.getSeconds() + res.expires_in);
                // AuthService.authData.expiry = t;
                DeviceService.SaveData(Constant.TOKEN, JSON.stringify(AuthService.authData));
                AuthService.GetUserData();
            });
    }
    static async SignUP(UserName, Email, Password) {
        let url = Constant.GET_SIGNUP_URL;
        return fetch(url, {
            method: 'POST',
            headers: {
                //Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                UserName: UserName, Password: Password, Email: Email
            })
        }).then(res => HelperService.handleErrors(res));
    }
    static async SignOUT() {
        AuthService.authData = {
            token: '', tokenType: '', ExpiresIn: null,
            FullName: '', LastName: '',
            Username: '', Password: '',
        };
        DeviceService.SaveData(Constant.TOKEN, JSON.stringify(AuthService.authData));
    }

    static GetUserData() {
        //CartService.getUserCart();
    }
    static Instagram(AccessToken){
        let url = Constant.GET_Instagram_URL;
        return fetch(url, {
            method: 'POST',
            headers: {
                //Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                AccessToken: AccessToken
            })
        }).then(res => HelperService.handleErrors(res))
        .then(res => res.json())
        .then(res => {
            AuthService.authData.token = res.Token;
            AuthService.authData.tokenType = 'Bearer';
            AuthService.authData.FullName = res.FullName;                
            AuthService.authData.Username = res.Username;            
            AuthService.authData.ExpiresIn = Date.parse(res.ExpiresIn);
            
            // var t = new Date();date.parse(res.ExpiresIn)
            // t.setSeconds(t.getSeconds() + res.expires_in);
            // AuthService.authData.expiry = t;
            DeviceService.SaveData(Constant.TOKEN, JSON.stringify(AuthService.authData));            
        });
        ;
    }
}

export default AuthService;
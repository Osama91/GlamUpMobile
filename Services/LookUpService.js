// App
import Constant from './Constant';
import HelperService from './HelperService';
import AuthService from './AuthService'
export default class LookUpService {
    //?$filter=CountryID eq 1
    static async GetBlogs() {
        let token = AuthService.getTokenAuth();
        url = Constant.URL_ODATA_SERVER + "/Blog?$expand=BlogParagraph,BlogLikes,BlogFav";
        return fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: token,
            },
        })
            .then(res => HelperService.handleErrors(res))
            .then(res => res.json())
            .then(res => {
                return res.value;
            });
    }
    static async GetBlog(ID) {
        url = Constant.URL_ODATA_SERVER + "/Blog?$expand=BlogParagraph,BlogLikes,BlogFav";
        return fetch(url)
            .then(res => HelperService.handleErrors(res))
            .then(res => res.json())
            .then(res => {
                return res.value;
            });
    }
    // static async GetRegionsData(CountryID) {
    //     url = Constant.ODATA_REGION_URL + '?$filter=CountryID eq ' + CountryID;
    //     return fetch(url)
    //         .then(res => HelperService.handleErrors(res))
    //         .then(res => res.json())
    //         .then(res => {
    //             return res.value;
    //         });
    // }
    // static async GetCitiesData(RegionID) {
    //     url = Constant.ODATA_CITY_URL + '?$filter=RegionID eq ' + RegionID;
    //     return fetch(url)
    //         .then(res => HelperService.handleErrors(res))
    //         .then(res => res.json())
    //         .then(res => {
    //             return res.value;
    //         });
    // }
    // static async GetStores() {
    //     url = Constant.ODATA_Store_URL;
    //     return fetch(url)
    //         .then(res => HelperService.handleErrors(res))
    //         .then(res => res.json())
    //         .then(res => {
    //             return res.value;
    //         });
    // }
}
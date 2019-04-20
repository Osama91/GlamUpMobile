import { Dimensions } from 'react-native';
import { baseURL } from '../Services/SettingService';

class Constant {

    //#region Flags

    // For ITemsStack
    static CategoryLinkParamter;
    static CategoryNameParamter;

    static cartScreenLoadingFlag = false;
    static wishListScreenLoadingFlag = false;
    static itemScreenLoadingFlag = false;
    static orderScreenLoadingFlag = false;

    //#endregion

    static isMenuOpen = false;
    static BASE_URL = baseURL;
    static URL_UPDATE_VERSION = Constant.BASE_URL + '/version.json';
    static URL_ODATA_SERVER = Constant.BASE_URL + '/odata';
    static URL_API_SERVER = Constant.BASE_URL + '/api';

    //#region Items
    static GET_CATEGORY_URL = Constant.URL_API_SERVER + "/Lookup/GetCategory";
    static GET_DisplayList_URL = Constant.URL_API_SERVER + "/DisplayList/GetDisplayList";

    static GET_CATEGORY_ITEMS_URL = Constant.URL_API_SERVER + "/Items/GetItem";
    static GET_ITEM_URL = Constant.URL_API_SERVER + "/Items/GetItemDetail";

   
    //#endregion

    //#region Auth
    static GET_LOGIN_URL = Constant.URL_API_SERVER + "/auth/Login";
    static GET_SIGNUP_URL = Constant.URL_API_SERVER + "/auth/SignUP";
    static GET_Instagram_URL = Constant.URL_API_SERVER + "/auth/Instagram";
    static GET_Facebook_URL = Constant.URL_API_SERVER + "/auth/Facebook";
    //#endregion 

    //#region Account

    static GET_USER_URL = Constant.URL_API_SERVER + "/Auth/GetUser";
    static PUT_USER_URL = Constant.URL_API_SERVER + "/Auth/UpdateUser";

    //#endregion

    //#region Home

    static GET_HOME_TEMPLATE_URL = Constant.URL_ODATA_SERVER +
        "/TemplateDetail?$select=ID,EName,DisplayIndex&$orderby=DisplayIndex&$filter=Template/Active eq true&$expand=Widget($select=ID,Code),TemplateSubDetail($expand=Category($select=ID,LinkID,EName,DisplayImageUrl);$select=ID,LinkUrl)";
    ///api/Items/GetItem?skip=0&take=20&Category=&sort=c.CreationDate desc
    //#endregion

    //#region Others
    static GET_STORES_URL = Constant.URL_ODATA_SERVER + "/Stores";

    static POST_WISHLIST_URL = Constant.URL_ODATA_SERVER + "/WishList";
    static GET_WISHLIST_URL = Constant.URL_API_SERVER + "/WishListApi/GetWishList";

    static ODATA_COUNTRY_URL = Constant.URL_ODATA_SERVER + "/Country";
    static ODATA_REGION_URL = Constant.URL_ODATA_SERVER + "/Region";
    static ODATA_CITY_URL = Constant.URL_ODATA_SERVER + "/City";

    static ODATA_SETTINGS_URL = Constant.URL_ODATA_SERVER + "/settings?$select=ID,Code,AName,EName";
    //#endregion

    //#region Orders
    static POST_CART_URL = Constant.URL_ODATA_SERVER + "/ShoppingCart";
    static GET_CART_URL = Constant.URL_API_SERVER + "/ShoppingCartApi/GetShoppingCart";

    static GET_USER_ADDRESSES_URL = Constant.URL_API_SERVER + "/CustomerAddresses/GetCustomerAddress";
    //static GET_USER_ADDRESSES_TOP1_URL = Constant.GET_USER_ADDRESSES_URL + "&$top=1";
    static ODATA_USER_ADDRESS_URL = Constant.URL_ODATA_SERVER + "/CustomerAddress";
static ODATA_Store_URL= Constant.URL_ODATA_SERVER + "/Store";
    static GET_CALCULATESHIPPING_URL = Constant.URL_API_SERVER + "/Order/CalculateShipping";

    static GET_POSTORDER_URL = Constant.URL_API_SERVER + "/Order/Order";
    //#endregion

    //static StyleRelatedImage = Constant.BASE_URL + "/assets/Uploads/StyleRelatedImage/";
    static CategoryDisplayImage = Constant.MediaBaseUrl + "/CategoryImages/";//Constant.BASE_URL + "/assets/Uploads/CategoryImages/";
    //static CommunityImage = Constant.BASE_URL + "/assets/Uploads/CommunityImage/";
    static MediaBaseUrl = Constant.BASE_URL;
    static ItemImage = Constant.MediaBaseUrl;//Constant.BASE_URL + "/assets/Uploads/";
    //static ShippingMethodImage = Constant.BASE_URL + "/assets/Uploads/ShippingMethod";
    static TOKEN = "Token";
    //#region LOYALTY
    static width = Dimensions.get('window').width;
    static height = Dimensions.get('window').height;
}

export default Constant;
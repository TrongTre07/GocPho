import {configureStore} from '@reduxjs/toolkit';
import filterSlice from './reducer_slice/shop_slice/filterSlice';
import itemSlice from './reducer_slice/shop_slice/itemSlice';
import loginSlice from './reducer_slice/user_slice/loginSlice';
import getProductAPISlice from './reducer_slice/cart_slice/getProductAPISlice';
import shopPageCategorySlice from './reducer_slice/shop_slice/shopPageCategorySlice';
import orderSlice from './reducer_slice/shop_slice/orderSlice';
import getCartSlice from './reducer_slice/cart_slice/getCartSlice';
import getAddressSlice from './reducer_slice/user_slice/getAddressSlice';


export const store = configureStore({
  reducer: {
    filter: filterSlice,
    item: itemSlice,
    login: loginSlice,
    dataAPI: getProductAPISlice,
    dataCategoryMainShop: shopPageCategorySlice,
    ordered: orderSlice,
    cart: getCartSlice,
    address: getAddressSlice
  },
});

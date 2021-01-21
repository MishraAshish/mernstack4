//this will contain all the action types that we raise on action creators or events
//For User
export const AddUserToStore = "USER.AddUserToStore";

//For Product
export const FETCH_PRODUCTS = "PRODUCT.FETCH_PRODUCTS";
export const FETCH_PRODUCTS_FULFILLED = "PRODUCT.FETCH_PRODUCTS_FULFILLED";
export const FETCH_PRODUCTS_REJECTED = "PRODUCT.FETCH_PRODUCTS_REJECTED";


//cart
//action types for cart operations
export const ADD_ITEM = "CART.ADD_ITEM";
export const REMOVE_ITEM = "CART.REMOVE_ITEM";
export const UPDATE_ITEM = "CART.UPDATE_ITEM";
export const EMPTY_CART = "CART.EMPTY_CART";

//coupon
export const ADD_COUPON = "COUPON.ADDCOUPON";

//showLoading
export const SHOW_LOADING = "SHOW.LOADING";

//cart
//action types for cart operations
export const ADD_ITEM_N = "NCART.ADD_ITEM";
export const REMOVE_ITEM_N = "NCART.REMOVE_ITEM";
export const UPDATE_ITEM_N = "NCART.UPDATE_ITEM";
export const EMPTY_CART_N = "NCART.EMPTY_CART";
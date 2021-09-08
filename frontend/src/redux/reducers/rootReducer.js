import { combineReducers } from "redux";
import {getCategories} from './categoryReducer';
import {getCategoriesById} from './categoryIdReducer';
import {getProductById} from './productIdReducer';
import {getFeedbacks} from './feedback';
import {getProducts} from './productReducer';

export const rootReducer = combineReducers({
    getCategories,
    getCategoriesById,
    getProductById,
    getFeedbacks,
    getProducts,
});
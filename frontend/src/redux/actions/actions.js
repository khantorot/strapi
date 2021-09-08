import {API} from '../API';

export function getCategories(){
    return async (dispatch)=>{
    await API.category()
    .then(res => {
        dispatch({ type: "GET_CATEGORIES", payload: res })
    })}
}

export function getCategoriesById(id){
    return async (dispatch)=>{
    await API.categoryId(id)
    .then(res => {
        dispatch({ type: "GET_CATEGORIES_BY_ID", payload: res })
    })}
}

export function getProductsById(id){
    return async (dispatch)=>{
    await API.productId(id)
    .then(res => {
        dispatch({ type: "GET_PRODUCTS_BY_ID", payload: res })
    })}
}

export function getFeedbacks(){
    return async (dispatch)=>{
    await API.feedback()
    .then(res => {
        dispatch({ type: "GET_FEEDBACKS", payload: res })
    })}
}

export function getProducts(){
    return async (dispatch)=>{
    await API.product()
    .then(res => {
        dispatch({ type: "GET_PRODUCTS", payload: res })
    })}
}
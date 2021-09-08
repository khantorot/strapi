import Axios from "axios";


const http = Axios.create({
    baseURL: "http://localhost:1337",
    headers: {
      Accept: "application/json",
    //   "Content-Type": "application/json",
    //   "Accept-Language": "en",
    },
  });

export const API = {
    category: () => http.get("/categories/"),
    product: () => http.get("/products/"),
    categoryId: (id) => http.get(`/categories/${id}`),
    productId: (id) => http.get(`/products/${id}`),
    feedback: () => http.get('/feedbacks')
}
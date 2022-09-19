import axiosClient from "./axiosClient";

const productApi = {
  getAll: (params) => {
    const url = "https://js-post-api.herokuapp.com/api/products";
    return axiosClient.get(url, { params })
  },
  delete: (id) => {
    const url = `https://js-post-api.herokuapp.com/api/products/${id}`;
    return axiosClient.delete(url)
  }, 
  post: (project) => {
    const url = "https://js-post-api.herokuapp.com/api/products"
    return axiosClient.post(url, { project })
  }
}

export default productApi;

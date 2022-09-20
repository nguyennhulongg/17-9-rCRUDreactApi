import axiosClient from "./axiosClient";

const friendApi = {
  getAll: (params) => {
    const url = "https://630e1552109c16b9abf442db.mockapi.io/long-project/friends";
    return axiosClient.get(url, { params })
  },
  delete: (id) => {
    const url = `https://630e1552109c16b9abf442db.mockapi.io/long-project/friends/${id}`;
    return axiosClient.delete(url)
  }, 
  post: (project) => {
    const url = "https://630e1552109c16b9abf442db.mockapi.io/long-project/friends"
    return axiosClient.post(url, project)
  },
  put: (id, data) => {
    const url = `https://630e1552109c16b9abf442db.mockapi.io/long-project/friends/${id}`;
    return axiosClient.put(url, data)
  }
}

export default friendApi;

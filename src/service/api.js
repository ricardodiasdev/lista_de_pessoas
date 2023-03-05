import axios from "axios";

const api = axios.create({
  baseURL: "https://randomuser.me/api/?results=5&nat=br",
});

export default api;

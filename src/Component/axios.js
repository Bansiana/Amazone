import axios from "axios";

const instance = axios.create({
  // baseURL: "http://127.0.0.1:5001/me-7fd6c/us-central1/api",
  // baseURL:"http://127.0.0.1:5000"
  baseURL: "https://amazon-backend-otpu.onrender.com/",
});

export default instance;

import axios from "axios";
const API_BASE = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: API_BASE,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token && token !== "undefined") {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// user
export const LoginUser = (data) => api.post("/login", data);
export const ProfileOneUser = () => api.get("/profile");
export const RegisterRestaurant = (data) => api.post("/restaurants", data);

export default api;

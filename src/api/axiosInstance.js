import axios from "axios";

/**
 * Axios instance for API calls
 */
const api = axios.create({
  // baseURL:import.meta.env.VITE_API_BASE_URL,
  baseURL: "https://api-app-staging.wobot.ai/app/v1/", // Update to your backend base URL
});

// Attach Bearer token to each request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token") || "4ApVMIn5sTxeW7GQ5VWeWiy";
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;

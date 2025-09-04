export const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const BLOGIFY_API = {
  LOGIN: `${API_BASE_URL}/auth/login`,
  SIGN_UP: `${API_BASE_URL}/auth/signup`,
  ADD_BLOG: `${API_BASE_URL}/api/blogs`,
};
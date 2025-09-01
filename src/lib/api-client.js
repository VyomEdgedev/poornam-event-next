import axios from "axios";
import { HOST } from "../utils/constant";
const apiClient = axios.create({
  baseURL: HOST,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
function getCookie(name) {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  return match ? match[2] : null;
}

export { apiClient };

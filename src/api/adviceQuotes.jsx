import axios from "axios"
const BASE_URL = "https://api.adviceslip.com"

// eslint-disable-next-line react-refresh/only-export-components
export default axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
})

import axios from "axios";

const hostname = 'localhost';
const PORT = 3000;

export const api = axios.create({
  baseURL: `http://${hostname}:${PORT}`
})
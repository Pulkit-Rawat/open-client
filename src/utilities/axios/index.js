import axios from "axios";

const api = axios.create({
  // baseURL: "https://cbot-server-17dbe4c52b7f.herokuapp.com",
  baseURL: "http://localhost:4000/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export { api };

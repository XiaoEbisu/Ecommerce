import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNDhhOGYxMjZlYTkyM2JkZDMwMDZhZCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NDE3NTQ1ODIsImV4cCI6MTY0MTg0MDk4Mn0.EoKwc_QGz8njKRDH7f0JxAQwTyv_sAXfkZkOHNG5Ab4";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`},
});
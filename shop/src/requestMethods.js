import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNDlmMDMxMzdiNGYzYTJmYmI0YjQ3NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzODI4NzI2MSwiZXhwIjoxNjM4MzczNjYxfQ.e95tj8PRrS1VbCYGbuW8EjMY4ZimP5-EuwBZva5Tyvo";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`},
});
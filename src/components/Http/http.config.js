import axios from 'axios';

class httpConfig {
    constructor() {
        this.request = axios.create({
            baseURL: "http://localhost:8080/api",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
                // Do NOT set `Authorization` here, use an interceptor
            }
        });

        // Attach request interceptor
        this.request.interceptors.request.use(config => {
            const token = localStorage.getItem("token");
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        }, error => Promise.reject(error));
    }
}

export default new httpConfig();



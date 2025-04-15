import { isTokenExpaire } from '../manageSession';
import http from './http.config';

class ServicesAPI {
    // get token from local storage
    token = localStorage.getItem("token");

    getAll(url, secureRequest) {
        if (secureRequest) {
            isTokenExpaire(this.token); // check token expire while api call
        }
        return http.request.get(url);
    }

    getById(url, id, secureRequest) {
        if (secureRequest) {
            isTokenExpaire(this.token); // check token expire while api call
        }
        return http.request.get(`${url}/${id}`);
    }

    post(url, data, secureRequest) {
        if (secureRequest) {
            isTokenExpaire(this.token); // check token expire while api call
        }
        return http.request.post(url, data);
    }
    put(url, id, data, secureRequest) {
        if (secureRequest) {
            isTokenExpaire(this.token); // check token expire while api call
        }
        return http.request.put(`${url}/${id}`, data);
    }

    deleteById(url, id, secureRequest) {
        if (secureRequest) {
            isTokenExpaire(this.token); // check token expire while api call
        }
        return http.request.delete(`${url}/${id}`);
    }
}

export default new ServicesAPI();
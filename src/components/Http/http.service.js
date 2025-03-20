import http from './http.config';

class ServicesAPI {
    getAll(url) {
        return http.request.get(url);
    }

    getById(url, id) {
        return http.request.get(`${url}/${id}`);
    }

    post(url, data) {
        return http.request.post(url, data);
    }
    put(url, id, data) {
        return http.request.put(`${url}/${id}`, data);
    }

    deleteById(url, id) {
        return http.request.delete(`${url}/${id}`);
    }
}

export default new ServicesAPI();
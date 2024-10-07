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
}

export default new ServicesAPI();
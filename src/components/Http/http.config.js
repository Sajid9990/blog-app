import axios from 'axios';

class httpconfig {
    request =
        axios.create({
            baseURL: "http://localhost:8080/api",
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                "Authorization": sessionStorage.getItem("token") ? sessionStorage.getItem("token") : ""
            }
        })
}

export default new httpconfig();
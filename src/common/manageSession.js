import React from "react";
import { jwtDecode } from "jwt-decode";

export const isTokenExpaire = (token) => {
    if (token) {
        let decodedToken = jwtDecode(token);
        let currentDate = new Date();
        const isExpired = decodedToken.exp * 1000 < currentDate.getTime()
            ? localStorage.clear()
            : "still token is valid";
        if (isExpired == undefined) {
            console.log("token expired!!! please re-login first...");
            window.location.reload(true);
            // window.location.href = "/"
        } else {

        }
    }
}


const ManageSession = () => {
    return (
        <></>
    )
}

export default ManageSession;
// Here I was to create a external service to make the api call, but finally I decided to do the axis call on the
// function directly, because the simplicity of it.

/*
import axios from 'axios';

const GET_ALL_PHONES = 'http://localhost:3000/phones';


function delegate (httpMethod, actionURL) {
    return axios({
        method: httpMethod,
        baseURL: actionURL,
        validateStatus: function (status) {
            return status >= 200 && status < 300; // default
        }
    }).then(function (response) {
        return response.data;
    });

    axios.get(actionURL)
        .then(res => res)
        .catch(error => error);
}

export function getAllPhonesService (req, callback, error) {
    delegate("GET", GET_ALL_PHONES).then(callback).catch(error)
}
*/
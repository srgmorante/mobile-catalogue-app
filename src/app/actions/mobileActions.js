import axios from "axios";

const GET_ALL_PHONES = 'http://localhost:3000/phones';


function setPhoneListAction (list) {
    return {
        type: 'SET_PHONE_LIST',
        list
    }

}

export function loadingAction (status) {
    return {
        type: 'SET_LOADING',
        status
    }
}

export function loadMobilesList () {
    return (dispatch) => {
        axios.get(GET_ALL_PHONES).then(res => {
            const phoneList = res.data.mobile;
            dispatch(setPhoneListAction(phoneList));
        }).catch(error => {
            dispatch(loadingAction(false));
            console.log(error);
        })
    }
}

// Utils
import axios from "axios";
// Constants
import * as types from './phoneConstants';
const GET_ALL_PHONES = 'http://localhost:3000/phones';

// Action creator to set the phones list to Reducer.
function setPhoneListAction (list) {
    return {
        type: types.SET_PHONE_LIST,
        list
    }

}

// Action creator to set the loading status to show the spinner or not.
export function loadingAction (status) {
    return {
        type: types.SET_LOADING,
        status
    }
}

// Function to make the call to API and call the action creator.
export function loadMobilesList () {
    return (dispatch) => {
        // Here We Should call the loading action creator to show the spinner but the load is so fast and I decided
        // to fake it.
        // dispatch(loadingAction(true));
        axios.get(GET_ALL_PHONES).then(res => {
            // Here We should hide the spinner.
            //dispatch(loadingAction(false));
            const phoneList = res.data.mobile;
            dispatch(setPhoneListAction(phoneList));
        }).catch(error => {
            dispatch(loadingAction(false));
            console.log(error);
        })
    }
}

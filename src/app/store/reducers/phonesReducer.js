import initialState from '../initialState/phonesInitialState'
import * as types from '../../actions/phoneConstants'

export default function phonesReducer (state = initialState, action) {
    switch (action.type) {
        case types.SET_PHONE_LIST:
            return {
                ...state,
                phonesList: action.list
            };
        case types.SET_LOADING:
            return {
                ...state,
                loading: action.status
            };
        default: return state;

    }
}

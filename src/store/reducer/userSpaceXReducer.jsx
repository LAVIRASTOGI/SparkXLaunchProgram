import * as actionTypes from "../actions/actionType";

const initialState = {
    userList: [],
    isLoading: false
};

const userSpaceXReducer = (state = initialState, action) => {


    switch (action.type) {
        case actionTypes.GET_USER_LIST_REQUEST:
            return {
                ...state,
                isLoading: true
            };

        case actionTypes.GET_USER_LIST_RESPONSE:
            return {
                ...state,
                userList: action.data,
                isLoading: false
            };
        default:
            return state;

    }
}
export default userSpaceXReducer;
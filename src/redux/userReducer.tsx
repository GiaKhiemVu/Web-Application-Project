import { UserActionTypes } from './action';
import { UserState } from './types';
import { UPDATE_USER_DATA } from './actionTypes';

const initialState: UserState = {
    data: null,
};

const userReducer = (state: UserState = initialState, action: UserActionTypes): UserState => {
    switch (action.type) {
        case UPDATE_USER_DATA:
            return {
                ...state,
                data: action.payload,
            };
        default:
            return state;
    }
};

export default userReducer;

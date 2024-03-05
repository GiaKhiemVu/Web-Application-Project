import { UserData } from './types';
import { UPDATE_USER_DATA } from './actionTypes';

interface UpdateUserDataAction {
    type: typeof UPDATE_USER_DATA;
    payload: UserData;
}

export type UserActionTypes = UpdateUserDataAction;

export const updateUserData = (userData: UserData): UpdateUserDataAction => ({
    type: UPDATE_USER_DATA,
    payload: userData,
});

import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../../types/user";


interface UserState {
    users: IUser[];
    searchText: string;
}

const initialState: UserState = {
    users: [],
    searchText: ''
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        usersFetchingSuccess(state, action: PayloadAction<IUser[]>) {
            state.users = action.payload;
        },
        searchUserText(state, action: PayloadAction<string>) {
            state.searchText = action.payload;
        },
    },

    extraReducers: {},
});

export const {usersFetchingSuccess, searchUserText} = userSlice.actions;


export default userSlice.reducer;

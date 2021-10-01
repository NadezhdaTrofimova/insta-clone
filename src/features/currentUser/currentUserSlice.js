import {createSlice} from "@reduxjs/toolkit";

export const currentUserSlice = createSlice({
    name: 'currentUser',
    initialState: {
        value: {
            cards: [],
            userId: '',
        },
    },
    reducers: {
        addCurrentDataUser: (state, action) => {
            state.value = action.payload;
        },
    }
});

export const {
    addCurrentDataUser,
} = currentUserSlice.actions;

export default currentUserSlice.reducer
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
        addCurrentUserId: (state, action) => {
            state.value.userId = action.payload;
        },
        updateLikeOfCard: (state, action) => {
            state.value.cards = state.value.cards.map(item => item._id === action.payload._id
                ? {...item, likes: item.likes + 1} : item
            )
        }
    }
});

export const {
    addCurrentDataUser,
    addCurrentUserId,
    updateLikeOfCard,
} = currentUserSlice.actions;

export default currentUserSlice.reducer
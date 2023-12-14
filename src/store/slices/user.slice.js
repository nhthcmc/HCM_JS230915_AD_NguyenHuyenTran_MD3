import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        data: null,
    },
    reducers: {
        setData: (state, action) => {
            state.data = action.payload;
        },
        create: (state, action) => {
            state.data.push(action.payload);
        },
        update: (state, action) => {
            state.data = state.data.map((item) => {
                if (item.id == action.payload.id) {
                    return action.payload;
                } else {
                    return item;
                }
            })
        },
        delete: (state, action) => {
            state.data = state.data.filter((item) => item.id != action.payload);
        },
    }
})

export const userReducer = userSlice.reducer;
export const userAction = userSlice.actions;
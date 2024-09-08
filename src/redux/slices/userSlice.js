import { createSlice } from "@reduxjs/toolkit";


const initialUser = {
    uid: null,
    email: null,
    name: null,
};

const userSlice = createSlice({
    name: "user",
    initialState: initialUser,
    reducers: {
        setUser: (state, action) => {
            const { uid, email, name } = action.payload;
            state.uid = uid;
            state.email = email;
            state.name = name;
        },
        clearUser: (state) => {
            state.uid = null;
            state.email = null;
            state.name = null;
        },
    },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;

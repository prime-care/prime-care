import { createSlice } from "@reduxjs/toolkit";

// get initial user data from localStorage if user already loggged in 
const initialUser = JSON.parse(localStorage.getItem("user")) || {
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

            // save user data to localStorage (on sign in or login)
            localStorage.setItem("user", JSON.stringify(state));
        },
        clearUser: (state) => {
            state.uid = null;
            state.email = null;
            state.name = null;

            // clear user data from localStorage (on logout)
            localStorage.removeItem("user");
        },
    },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

interface IUserState {
  id: number;
  name: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar: string;
}

const initialState: IUserState = {
  id: 0,
  name: "John Doe",
  email: "",
  firstName: "",
  lastName: "",
  avatar: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { id, name, email, first_name, last_name, avatar } = action.payload;
      state.id = id;
      state.name = name;
      state.email = email;
      state.firstName = first_name;
      state.lastName = last_name;
      state.avatar = avatar;
    },
    clearUser: (state) => {
      state.id = 0;
      state.name = "";
      state.email = "";
      state.firstName = "";
      state.lastName = "";
      state.avatar = "";
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export const selectUser = (state: { user: IUserState }) => state.user;
export default userSlice.reducer;
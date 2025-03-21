import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUser: (state, action) => {
      console.log(action.payload)
      return {...state}
    }
  }
})


export const { createUser } = userSlice.actions;
export default userSlice.reducer;
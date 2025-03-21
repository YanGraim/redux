import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    id: 1,
    nome: "Yan Graim",
    email: "yangraim@teste.com",
    address: null
  }
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {

  }
})

export default userSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  users: [],
  loading: false
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUser: (state, action) => {
      return {...state,
        user: {
          name: action.payload.name,
          email: action.payload.email,
          address: null
        }
      }
    },
    logOutUser: (state) => {
      return {
        ...state,
        user: null,
      }
    },
    addAddress: (state, action) => {
      if(action.payload.location === "" || action.payload.number === "") {
        alert("Preencha todos os campos");
        return{...state}
      }

      if(state.user === null) {
        alert("Faça login para cadastrar um endereço")

        return {...state}
      }

      alert("Dados atualizados!")

      return {
        ...state,
        user: {
          ...state.user,
          address: {
            location: action.payload.location,
            number: action.payload.number
          }
        }
      }
    },
    deleteAddress: (state) => {
      return {
        ...state,
        user: {
          ...state.user,
          address: null
        }
      }
    },
    fetchUsers: (state) => {
      state.loading = true;
    },
    fetchUsersSuccess: (state, action) => {
      state.users = action.payload;
      state.loading = false;
    },
    fetchUsersFailure: (state, action) => {
      console.log("Caiu na falha");
      console.log(action.payload);
      state.loading = false;
    },
    fetchUserById: (state) => {
      console.log("Chamou no slice");
    },
    fetchUserByIdSuccess: (state, action) => {
      console.log("User do id");
      console.log(action.payload);
    },
    fetchUserByIdFailure: (state) => {
      console.log("Deu erro")
    }
  }
})


export const { createUser, logOutUser, addAddress, deleteAddress, fetchUsers, fetchUsersSuccess, fetchUsersFailure, fetchUserById, fetchUserByIdSuccess, fetchUserByIdFailure } = userSlice.actions;
export default userSlice.reducer;
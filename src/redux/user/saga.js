import { all, takeEvery } from "redux-saga/effects";
import { fetchUsersSuccess, fetchUsersFailure } from "./slice";

function* fetchUsers() {
  console.log("Chamou dentro do saga!")
}

export default all ([
  takeEvery("user/fetchUsers", fetchUsers)
])
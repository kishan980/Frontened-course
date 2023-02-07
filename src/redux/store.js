import {configureStore} from "@reduxjs/toolkit"
import { userReducer } from "./reducers/userRecers";

const store = configureStore({
    reducer:{
        user:userReducer
    }
})

export default store;
export const server = "localhost:4000/api/v2";
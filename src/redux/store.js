import {configureStore} from "@reduxjs/toolkit"
import { userReducer } from "./reducers/userRecers";

const store = configureStore({
    reducer:{
        user:userReducer
    }
})

export default store;
export const server = "https://node-test-liu0.onrender.com/api/v2";
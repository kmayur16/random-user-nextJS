import { configureStore } from "@reduxjs/toolkit";
import randomUserReducer from "../reducer/randomUserReducer";

export default configureStore({
    reducer: {
        random: randomUserReducer
    }
})
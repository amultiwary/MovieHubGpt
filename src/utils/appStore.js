import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice"; // import movie reducer
import gptReducer from "./GptSlice";
import configReducer from "./configSlice"; // import config reducer
const appStore=configureStore({
    reducer:{
        user:userReducer,
        movies:movieReducer,
        gpt:gptReducer,
        config:configReducer,
    }
})

export default appStore;
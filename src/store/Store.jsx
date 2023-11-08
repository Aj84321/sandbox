import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from './auth/Reducer';
const reducers = combineReducers({
    auth: authReducer,
})
const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializeCheck : false
    }) 
})

export default store;
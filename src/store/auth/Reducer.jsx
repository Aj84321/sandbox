import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState:{
        isLoggedIn : false,
        userName : null,

    },
    reducers :{
        setLoginStatus(state,action){
            state.isLoggedIn = action.payload.status;


        },
        setUserName(state,action){
           try{

            state.userName = action.payload.data;
           } catch(e){
            console.log(e)

           }
        },
        setAccountList(state,action){
            state.accountList = action.payload.data;
        },
        setUserData(state,action){
            state.userData = action.payload.data;
        },
          

    }

})

export const getLoginStatus = (state) =>{
    return state.auth.isLoggedIn
}
export const getUserName = (state) =>{
    return state.auth.userName
}
export const getAccountList = (state) =>{
    return state.auth.accountList
}
export const getUserData = (state) =>{
    return state.auth.userData
}
 export const {
    setLoginStatus,
    setUserName,
    setAccountList,
    setUserData,
 } = authSlice.actions

export default authSlice.reducer
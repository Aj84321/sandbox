import { Grid, TextField } from '@mui/material';
import React, { useState } from 'react'
import { setLoginStatus, setUserName } from '../store/auth/Reducer';
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Register() {
  const navigate = useNavigate()

  const [fullName,setFullName] = useState("")
  const [_username,_setUserName] = useState("")
  const [password,setPassword] = useState("")
  const [confirmPassword,setConfirmPassword] = useState("")
const dispatch = useDispatch();



  const handleSubmit = ()=>{


    if(
      password === confirmPassword
    ){
        console.log('login successfully')
        dispatch(setLoginStatus({
            "status": true,
        }))
        dispatch(setUserName({
          "status": true,
      }))
        navigate("/home")
    }
    else{
        alert('invalid')
    }

;
}
  return (

   

    <Grid container flexDirection={'column'} padding={4} justifyContent={'center'} alignItems={'center'}>
        
    <div>
    <h3>Name</h3>
        <TextField
        fullWidth
        label="fullname"
        defaultValue={fullName}
        onKeyUp={e => {
            
          setFullName(e.target.value);
        }}
        />
        <h3>User Name</h3>
        <TextField
        fullWidth
        label="username"
        defaultValue={_username}
        onKeyUp={e => {
            
          _setUserName(e.target.value);
        }}
        />
        <h3>Password</h3>


        <TextField

        label="password"
        defaultValue={password}
        onKeyUp={e => {
            setPassword(e.target.value);
        }}/>

<h3>Confirm Password</h3>


<TextField

label="confirm password"
defaultValue={confirmPassword}
onKeyUp={e => {
  setConfirmPassword(e.target.value);
}}/>

        <br/>
        <button onClick={handleSubmit}>Create an account</button>
<br/>

    </div>

</Grid>
  )
}

export default Register
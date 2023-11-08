import { Alert, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { setLoginStatus, setUserName } from '../store/auth/Reducer';


    
function Login() {
 const navigate = useNavigate()
    // const [x, setX] = useState(null);
    const [username, setUsername] = useState('Anand');
    const [password, setPassword] = useState('Jain');
const dispatch = useDispatch();
    const handleSubmit = ()=>{

        dispatch(
            setUserName({"data": username})
        )
        if(
            username=== "Anand" && password === "Jain"
        ){
            console.log('login successfully')
            dispatch(setLoginStatus({
                "status": true,
            }))
            navigate("/home")
        }
        else{
            alert('invalid')
        }

;
    }

    const handleAccount = () =>{
navigate("/register")

    }


  return (
    <Grid container flexDirection={'column'} padding={4} justifyContent={'center'} alignItems={'center'}>
        
        <div>

            <h3>User Name</h3>
            <TextField
            fullWidth
            label="username"
            defaultValue={username}
            onKeyUp={e => {
                
                setUsername(e.target.value);
            }}
            />
            <h3>Password</h3>


            <TextField

            label="password"
            defaultValue={password}
            onKeyUp={e => {
                setPassword(e.target.value);
            }}/>



            <br/>
            <button onClick={handleSubmit}>Submit</button>
<br/>
<button onClick={handleAccount}>Create an account</button>
        </div>

    </Grid>
  )
}

export default Login
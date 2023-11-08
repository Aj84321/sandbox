import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { getLoginStatus, getUserName, setLoginStatus } from '../store/auth/Reducer'
import { useDispatch, useSelector } from 'react-redux';

function Home() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const loginStatus = useSelector((state) => getLoginStatus(state) )
  const userName = useSelector((state) => getUserName(state) )


  // useEffect(() => {
  //     const handleLogout = () => {
  //       console.log("logout")
  //       dispatch(setLoginStatus({
  //         'status': false
  //     })
  //     ) 
    
  //     navigate("/")
    
  //     if(!loginStatus){
  //       handleLogout()
  //     } 
  // },[loginStatus]);

  useEffect(() => {
         
    console.log(loginStatus);
    if(!loginStatus){
      handleLogout()
    } 

  },[loginStatus])

  const handleLogout =( ) => {
    console.log("logout")
    dispatch(setLoginStatus({
        'status': false
    }))

    navigate("/");
  }  
  return (
    <div>Home
        <button onClick={handleLogout}>
            Logout
        </button>
        <div>
            {loginStatus}
            {userName}
        </div>
    </div>
    
  )
}

export default Home
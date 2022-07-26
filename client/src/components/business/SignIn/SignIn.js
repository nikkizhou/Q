import React from "react";
import { useAuth0 } from "@auth0/auth0-react"; 
import './SignIn.css'

const SignIn = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className='login-page'>
      <h2 className='login-page__title'> Welcome to  JoinTheQ Business Page!</h2>
      <button  className='login__btn' onClick={loginWithRedirect}>Log in/Sign Up</button>
    </div>
  )
};

export default SignIn;

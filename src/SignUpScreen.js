import React, { useRef } from 'react'
import './SignUpScreen.css'
import { auth } from './firebase.js';

function SignUpScreen() {
  const emailRef= useRef(null);
  const passwardRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwardRef.current.value
    ).then((authUser) =>{
      console.log(authUser)
    }).catch((error)=>{
      alert(error.message)
    })
  }

  const signin = (e) => {
    e.preventDefault();
    
    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwardRef.current.value
    ).then((authUser) =>{
      console.log(authUser)
    }).catch((error)=>{
      alert(error.message)
    })
  }

  return (
      <div className='signupScreen'>
          <form>
            <h1>Sign In</h1> 
            <input ref={emailRef} placeholder='Email' type='email'/>
            <input ref={passwardRef} placeholder='Passward' type='password'/>
            <button onClick={signin} type='submit'>Sign In</button>
            <h4>
              <span className='signupScreen__grey'>New to Netflix? </span>
              <span className='signupScreen__link' onClick={register} >Sign Up now.</span> 
            </h4>
          </form>
      </div>

  )}

export default SignUpScreen





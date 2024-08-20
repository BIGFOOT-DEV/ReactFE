import React, { useState } from 'react'
import './LoginPop.css'
import { assets } from '../../assets/assets'
const LoginPop = ({setShowLogin}) => {
    const [currState,setCurrState] = useState("Login")
  return (
    <div className='login-pop'>
      <form action="" className="login-pop-container">
        <div className="login-pop-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-pop-input">
            {currState==="Login"?<></>:<input type="text"  placeholder='Your name'/>}
            <input type="email" placeholder='abcdefg@gamil.com' />
            <input type="password" placeholder='*******' />
        </div>
        <button>{currState==="Sign Up"?"Create Account":"Login"}</button>
        <div className="login-pop-condition">
            <input type="checkbox" required />
            <p>By continuing, I agree to the term of use & privacy policy</p>
        </div>
        {currState==="Login"
        ?<p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
        :<p>Aleady have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>
        }
      </form>
    </div>
  )
}

export default LoginPop

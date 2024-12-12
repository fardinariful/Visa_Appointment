import React, { useContext, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

import { auth } from './firebase.init';
import { sendPasswordResetEmail } from 'firebase/auth';




const Login = () => {
    const {userLogin, setUser,signInWithGoogle} =useContext(AuthContext);
    const [showError,setShowError] = useState();
    const emailRef = useRef();
    const location = useLocation();
    // console.log(location)
    const navigate = useNavigate();

    const handleSubmit =(e)=>{
        e.preventDefault();
        const password = e.target.password.value;
        const email = e.target.email.value;
        // console.log(password,email);

        userLogin(email,password)
        .then(result=>{
            // console.log(result.user)
            setUser(result.user)
            navigate( location.state?location.state: "/")
        })
        .catch(error=>{
            setShowError(error.code)
        })
}

const handleGoogleSignIn=()=>{
    signInWithGoogle()
    .then(res=>{
        navigate('/')
    })
    .catch(error=>{console.log('error',error.message)})
}

const handleForgetPassWord =()=>{
    console.log(emailRef.current.value)
    const email = emailRef.current.value
    if(!email){
        alert("give varified email")
    }
    else{
        sendPasswordResetEmail(auth,email)
        .then(()=>{
            alert('resent email')
        })
    }

}

    
    return (
        <div className='flex flex-col justify-center  items-center p-10'>
            <h2 className='text-2xl font-semibold pb-2 text-center'>Login your account</h2>
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none">
      <form onSubmit={handleSubmit} className="card-body ">
        <div className="form-control rounded-none">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input ref={emailRef} type="email" placeholder="email" className="input input-bordered" name="email" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" name='password' required />
          {
            showError && <p className=' flex justify-start text-red-500'>{showError}</p>
          }
          <label className="label">
            <a href="#" onClick={handleForgetPassWord} className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-neutral rounded-none">Login</button>
        </div>
        <button onClick={handleGoogleSignIn} className='text-blue-800 font-semibold'> Login With Google</button>
      </form>
      <p className='font-semibold text-center'> Don't have an account? <Link className='text-red-500' to={'/register'}>Register</Link></p>
      
    </div>
            
        </div>
    );
};

export default Login;
import React,{useState} from 'react'
import style from '../CSS/LoginSignup.module.css'
import {auth} from '../Firebase'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
import { useCart } from './CartContext'
function LoginSignup() {
  const [login,setLogin]=useState('Login')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
   const {log}=useCart()

  const navigate=useNavigate()

  function ChangeState(){
     if(login==='Login'){
      setLogin('Signup')
     }else if(login==='Signup'){
      setLogin('Login')
     }
  }

  const onSubmit=async(e)=>{
       e.preventDefault()

       await
       createUserWithEmailAndPassword(auth,email,password)
       .then((userCredential)=>{
        const user=userCredential.user
        console.log(user)
        setLogin('Login')
       })
       .catch((error)=>{
        alert('Account already exists')
       })
  }

  const onLogin=(e)=>{
    e.preventDefault()

    signInWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{
      const user=userCredential.user
      log(true)
      navigate('/')
    })
    .catch((error)=>{
      alert("Invalid Username/password")
    })

  }
   if(login==='Login'){
  return (
    <div className={style.LoginSignup}>
       <form className={style.loginForm}>
          <h3 className={style.Heading}>{login}</h3>
          <input 
              type="email" 
              name="email" 
               placeholder="Enter Email" 
               value={email || ""}  
               onChange={(e) => setEmail(e.target.value)}
          /><br/>
          <input 
               type='password' 
               name='pwd' 
               placeholder='Password' 
               value={password || ""}
               onChange={(e)=>setPassword(e.target.value)}/><br/>
          <input type='submit' className={style.btn}  onClick={onLogin}/>
          <p className={style.account}>don't have an account? <span onClick={ChangeState} className={style.ls}>Signup</span></p>
        </form> 
    </div>
  )
 }else if(login==='Signup'){
  return (
    <div className={style.LoginSignup}>
       <form className={style.loginForm}>
          <h3 className={style.Heading}>{login}</h3>
          <input type='text' name='fname' placeholder='First Name'/><br/>
          <input type='text' name='lname' placeholder='Last Name'/><br/>            
          <input 
              type="email" 
              name="email" 
               placeholder="Enter Email" 
               value={email || ""}  
               onChange={(e) => setEmail(e.target.value)}
          /><br/>
          
          <input 
               type='password' 
               name='pwd' 
               placeholder='Password' 
               value={password || ""}
               onChange={(e)=>setPassword(e.target.value)}
          /><br/>
          <input type='submit'  className={style.btn} onClick={onSubmit}/>
          <p className={style.account}>already have an account? <span onClick={ChangeState} className={style.ls}>Login</span></p>
        </form> 
    </div>
  )
 }
}

export default LoginSignup

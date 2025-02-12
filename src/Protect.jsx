import React, { useEffect,useState } from 'react'
import { Navigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './Firebase'




function Protect({children}) {
    const[user,setUser]=useState('')
    const[loading,setLoading]=useState(true)
    

    useEffect(()=>{
         const unsubscribe=onAuthStateChanged(auth,(currentuser)=>{
                 setUser(currentuser)
                 setLoading(false)

         })
         return ()=> unsubscribe()
    },[])

    if(loading){
        return <p>loading.......</p>
    }


  return user ? children : <Navigate to="/login"></Navigate>
}

export default Protect

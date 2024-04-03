import React from 'react'
import {useState, useEffect, createContext} from 'react'

const authContext=createContext()

export const AuthProvider = ({children}) => {
    
    const [auth,setAuth]=useState(null)

    useEffect(()=>{
        authUser()
    },[])

    const authUser=async()=>{
        //sacar datos usuario identificado del localstorage

        //comprobar si tengo el token y el user

        //transofrmar los datos a un objeto de javascript


    }

    const [compartido,setCompartido]=useState(true)


  return (<authContext.Provider 
    value={{
        compartido
    }}
    >
        {children}
    </authContext.Provider>
    
  )
}

export default authContext

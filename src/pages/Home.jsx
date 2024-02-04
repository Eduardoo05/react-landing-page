import {getAuth, onAuthStateChanged,signOut} from 'firebase/auth'
import {app} from '../utils/firebase'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'






export const Home = () => {
  const auth = getAuth(app)
  const navigate = useNavigate()
  const [loading,setLoading] = useState(true)

  useEffect(() =>{
    
    const autentificacion = onAuthStateChanged(auth,(user) =>{
      if(user){
        console.log(" ")
      } else{
        navigate('/login')
      }
      setLoading(false)
    })

    return() =>{
      autentificacion()
    }

  }, [auth,navigate])

  const logout= async() => {
    await signOut(auth)
    navigate('/login')
  }

  if(loading) return <h1>Cargando...</h1>


  return (
    <>
      <h1>HOME</h1>
      <button  type='button' onClick={logout} className='bg-blue-500 text-white font-bold py-2 px-4 rounded'>CERRAR SESSION</button>
    </>
  )
}

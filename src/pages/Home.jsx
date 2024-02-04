import {getAuth, onAuthStateChanged} from 'firebase/auth'
import {app} from '../utils/firebase'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'






export const Home = () => {
  const auth = getAuth(app)
  const navigate = useNavigate()

  useEffect(() =>{
    const autentificacion = async() =>{
      await onAuthStateChanged(auth,(user) =>{
        if (user) {
          console.log("estas logueado")
        }else{
          navigate('/login')
        }
      })
    }
    autentificacion()
  }, [])



  return (
    <div>Home</div>
  )
}

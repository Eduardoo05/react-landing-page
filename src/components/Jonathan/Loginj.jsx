import { useState } from 'react'
import { useForm } from "react-hook-form"
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import {app} from '../../utils/firebase'
import { useNavigate } from 'react-router-dom'
import {emailValidation,minPassword,maxPassword} from '../../utils/Validation'
import '../Jonathan/loginj.css'

export const Loginj = () => {
    const {register ,handleSubmit,formState:{errors }} =useForm()
    const auth = getAuth(app)
    const navigate = useNavigate()
    const [error,setError] = useState()
    
    
    const loginUser = async(data)=>{
        try {
            await signInWithEmailAndPassword(auth, data.email , data.password )
            navigate('/auth/home')
        } catch(error){
            setError(error.message.replace('Firebase:',''))
        }
    }

  return (
    <>
        <div className="bg-rose-600 rounded-2xl p-4 md:p-8 lg:p-10 flex justify-center items-center w-full max-w-xl">
            <div className='w-full md:w-full lg:w-full md:rounded-md lg:rounded-md'>
                <h5 className="text-2xl text-white text-center mb-6">INICIAR SESIÓN</h5>
                <form onSubmit={handleSubmit(loginUser)}>
                    <div className="mb-5">
                        <input
                            type="text"
                            name="email"
                            {...register('email', { required: 'EL CORREO ELECTRÓNICO ES REQUERIDO', pattern: emailValidation })}
                            className="w-full px-4 py-2 rounded-md border bg-white placeholder-gray-500 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Por favor, escribe tu correo electrónico"
                        />
                        {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
                    </div>

                    <div className="mb-5">
                        <input
                            type="password"
                            name="password"
                            {...register('password', { required: 'LA CONTRASEÑA ES REQUERIDA', minLength: minPassword, maxLength: maxPassword })}
                            className="w-full px-4 py-2 rounded-md border bg-white placeholder-gray-500 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Por favor, escribe tu contraseña"
                        />
                        {errors.password && <span className='text-red-500'>{errors.password.message}</span>}
                    </div>

                    <div className="mb-6">
                        <button type="submit" className="w-full bg-blue-500 text-white px-6 py-3 rounded-md focus:outline-none focus:ring focus:border-blue-300">
                            Iniciar Sesión
                        </button>
                    </div>
                </form>
                {error && <span className='text-red-500'>{error}</span>}
            </div>
        </div>

    </>
  )
}

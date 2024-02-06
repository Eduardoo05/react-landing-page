import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { emailValidation, maxPassword, maxTel, minPassword, minTel, telephoneValidation } from '../../utils/validators'
import { app } from '../../utils/firebase'
import { addUserToDatabase } from '../../utils/addUserToDatabase'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import './signin.css'



export const Signin = () => {
  
    const {register, handleSubmit, formState: { errors },} = useForm()
    const auth = getAuth(app)

    const [error, setError] = useState()

    const createUser = async (data) => {
      try {
        await createUserWithEmailAndPassword(auth, data.email, data.password)
        addUserToDatabase(data.firstName, data.lastName, data.gender, data.phone, data.email)
        Swal.fire({
          title: "Usuario creado exitosamente!",
          text: "El paso siguiente es dar click al botón de Iniciar sesión",
          showClass: {
            popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `
          },
          hideClass: {
            popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `
          }
        })     
      } catch (error) {   
        setError(error.message.replace('Firebase', ''))        
      }
    }

    return (
    <>
        <section className="h-screen w-screen flex signup-section">
            <div className="container bg-white/60 shadow-md backdrop-blur rounded max-w-sm mx-auto my-auto mt-30  px-8 pt-6 pb-8">
              <h3 className="text-center text-2xl font-bold">Registrarse</h3>
              <div className='flex gap-3 mt-2'>
                <p className='text-center mt-1'> Ya tienes una cuenta?</p>
                <Link to={'/login'} className='login-btn'>
                  Iniciar sesión
                  <div className="arrow-wrapper">
                    <div className="arrow"></div>
                  </div>
                </Link>
              </div>
              <form className='mt-5' onSubmit={ handleSubmit(createUser) }>
              
                <div className="mt-2 mb-4 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label htmlFor="firstName" 
                      className="block text-sm font-bold leading-6 text-gray-800">
                      Nombre
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="firstName"
                        autoComplete="given-name"
                        {...register("firstName", { required: true, maxLength: 20 })}
                        className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                        placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3 mb-2">
                    <label htmlFor="lastName" className="block text-sm font-bold leading-6 text-gray-800">
                      Apellido
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="lastName"
                        autoComplete="family-name"
                        {...register("lastName", { pattern: /^[A-Za-z]+$/i })}
                        className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                        placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="gender" className='block text-gray-800 text-sm font-bold mb-2'>
                    Género
                  </label>
                  <select name='gender'
                    className='block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 font-semibold shadow-sm ring-1 ring-inset ring-gray-300 
                    placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    {...register("gender", {required: true})}>
                    <option value="Femenino" className='font-semibold'>Femenino</option>
                    <option value="Masculino" className='font-semibold'>Masculino</option>
                    <option value="Otro" className='font-semibold'>Otro</option>
                </select>
                </div>

                <div className="mb-4">
                  <label htmlFor="phone" className='block text-gray-800 text-sm font-bold mb-2'>
                    Teléfono
                  </label>
                  <input 
                    type="tel" 
                    name="phone"
                    {...register('phone', {
                      required: 'Número de teléfono requerido',
                      pattern: telephoneValidation,
                      minLength: minTel,
                      maxLength:maxTel
                    })}
                    className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                    placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                    placeholder="type your phone number"/>
                    {
                      errors.phone && <p className='text-red-600 ms-3 mt-2'>{errors.phone.message}</p>
                    }
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className='block text-gray-800 text-sm font-bold mb-2'>
                    Email
                  </label>
                  <input 
                    type="text" 
                    name="email"
                    {...register('email', {required: 'Email is required', pattern: emailValidation})}
                    className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                    placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                    placeholder="type your email"/>
                    {
                      errors.email && <p className='text-red-600 ms-3 mt-2'>{errors.pnone.message}</p>
                    }
                </div>

                <div className="mb-4">
                  <label htmlFor="password" className='block text-gray-800 text-sm font-bold mb-2'>
                    Password
                  </label>
                  <input 
                    type="password" 
                    name="password"
                    {...register('password', {required: 'Password is required', minLength: minPassword, maxLength: maxPassword})}
                    className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                    placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                    placeholder="type your password"/>
                    {
                      errors.password && <p className='text-red-600 ms-3 mt-2'>{errors.password.message}</p>
                    }
                </div>

                <div className="mb-3 w-full mx-auto h-25">
                  <button className="signup-btn" type="submit">
                    <span>Registrarse</span>
                  </button>
                </div>
              </form>
              {
                error && Swal.fire({
                          icon: "error",
                          title: "Oops...",
                          text: {error},
                          footer: 'Favor intentar más tarde...'
                        })
              }
            </div>
            <div className='z-40 me-5'>
            <div className="block-animation rounded-md ">
              <img src="https://kodigo.org/wp-content/uploads/2021/01/KODIGO_LOGO-FINAL-AF_Mesa-de-trabajo-1-copia.png" alt="Kodigo banner" />
            </div>
          </div>
        </section>
    </>
  )
}

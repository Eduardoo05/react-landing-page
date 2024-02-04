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
            const response = await signInWithEmailAndPassword(auth, data.email , data.password )
            console.log(response)
            navigate('/auth/home')
        } catch(error){
            setError(error.message.replace('Firebase:',''))
        }
    }

  return (
    <>
        <div className="bg-red-700 flex justify-center content-center" style={{width: '18rem'}}>
            <div>
                <h5 className="card-title text-center">LOGIN USER</h5>
                <form onSubmit={handleSubmit(loginUser)}>
                    <div className="mb-3">
                        <input 
                        type="text" 
                        name="email"
                        {...register('email',{required:'EMAIL IS REQUIRED', pattern:emailValidation})}
                            className="form-control" 
                            placeholder="Please, whirte your E-Mail"
                        />
                        {
                            errors.email && <span className='text-danger'>{errors.email.message}</span>
                        }
                    </div>

                    <div className="mb-3">
                        <input type="password" 
                        name="password"
                        {...register('password',{required:'PASSWORD IS REQUIRED', minLength: minPassword, maxLength: maxPassword})}
                            className="form-control" 
                            placeholder="Please, whirte your Password"/>
                        {
                            errors.password && <span className='text-danger'>{errors.password.message}</span>
                        }
                    </div>

                    <div className="mb-3 d-grid gap-2">
                        <button type="submit" className="btn btn-secondary">
                            Login
                        </button>
                    </div>
                </form>
                {
                    error && <span className='text-danger'>{error}</span>
                }
            </div>
        </div>
    </>
  )
}

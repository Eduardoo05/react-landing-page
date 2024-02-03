import { useState } from "react"
import { useForm } from "react-hook-form"
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'
import {app} from '../../utils/firebase'
import {useNavigate } from "react-router-dom"



export const Loginj = () => {
    const {register,handleSubmit,formState:{errors }} =useForm()
    const auth = getAuth(app)
    const navigate = useNavigate()
    const [error, setError] = useState()
    
    const createUser = async(data)=>{
        try {
            await createUserWithEmailAndPassword(auth,data.email,data.password)
            navigate('/login')
        } catch (error) {
            setError(error.message.replace('Firebase:',''))
        }
    }

  return (
    <>
        <div className="card" style={{width: '18rem'}}>
            <div className="card-body">
                <h5 className="card-title text-center">LOGIN USER</h5>
                <form onSubmit={handleSubmit(createUser)}>
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
            </div>
        </div>
    </>
  )
}

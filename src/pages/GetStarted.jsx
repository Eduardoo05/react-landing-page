import { useNavigate } from "react-router-dom"


export const GetStarted = () => {

    const signinNavigate = useNavigate()
    const loginNavigate = useNavigate()

    function handleSignin() {
        signinNavigate('/signin')
    }

    function handleLogin() {
        loginNavigate('/login')
    }
  return (
    <>
      <div className="principal space-y-8">
        <h1 className="flex justify-center text-white font-semibold">Get Started</h1>

        <div className="flex justify-center space-x-4">
            <div>
                <button onClick={handleSignin} type="button" 
                className="border-solid border-2 ring-green-500 rounded-md w-32 transition ease-in-out delay-150 bg-lime-500 hover:-translate-y-1 hover:scale-110 hover:bg-orange-500 hover:text-white hover:font-semibold duration-200">Regístrate</button>
            </div>

            <div>
                <button onClick={handleLogin} type="button" 
                className="border-solid border-2 ring-sky-500 rounded-md w-32 transition ease-in-out delay-150 bg-sky-500 hover:-translate-y-1 hover:scale-110 hover:bg-purple-500 hover:text-white hover:font-semibold duration-200">Acceder</button>
            </div>
        </div>
      </div>
    </>
  )
}

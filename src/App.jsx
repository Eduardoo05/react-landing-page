import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { GetStarted } from "./pages/GetStarted"
import { Login } from "./pages/Login"
import { Signin } from "./pages/Signin"
import { Home } from "./pages/Home"



function App() {
  
  const routes = createBrowserRouter([
    {path: '/', element: <GetStarted /> },
    {path: '/login', element: <Login />},
    {path: '/signin', element: <Signin />},
    {path: '/auth/home', element: <Home />}
  ])

  return (
    <>
     <RouterProvider router={routes} />
    </>
  )
}

export default App

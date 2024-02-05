import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { GetStarted } from "./pages/GetStarted"
import { Login } from "./pages/Login"
import { Home } from "./pages/Home"
import { SigninPage } from "./pages/SigninPage"



function App() {
  
  const routes = createBrowserRouter([
    {path: '/', element: <GetStarted /> },
    {path: '/login', element: <Login />},
    {path: '/signin', element: <SigninPage />},
    {path: '/auth/home', element: <Home />}
  ])

  return (
    <>
     <RouterProvider router={routes} />
    </>
  )
}

export default App

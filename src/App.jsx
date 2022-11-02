import { Toaster } from "react-hot-toast"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Employee from "./components/Employee"
import Home from "./components/Home"
import Updated from "./components/Updated"
import MainLayout from "./layout/MainLayout"

function App() {
  const router = createBrowserRouter([
     {
      path:'/',
      element:<MainLayout></MainLayout>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },{
          path:'/employee',
          element:<Employee></Employee>
        },
        {
          path:'/employee/:id', 
          element: <Updated></Updated>,
          loader: ({params}) => fetch(`https://crud-app-server.vercel.app/employee/${params.id}`)
        }
      ]
     }
  ])
  return (
    <div>
     <RouterProvider router={router}></RouterProvider>
     <Toaster></Toaster>
    </div>
  )
}

export default App

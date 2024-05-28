import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Login, Register } from './pages'

import './App.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
])

function App() {
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App

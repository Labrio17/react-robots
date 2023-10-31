import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import DetailPage from './pages/DetailPage'


const router = createBrowserRouter([
  {
    path : '/',
    element : <HomePage />
  },
  {
    path : '/detail/:id',
    element : <DetailPage />
  },
  {
    path : '*',
    element : <Navigate to ="/" />
  }
])

function App() {
  return <RouterProvider router={router} />
}
  

export default App

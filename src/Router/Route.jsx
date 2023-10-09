import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import HomePage from '../Pages/Home/HomePage'
import ServicePage from '../Pages/ServicePage/ServicePage'
import Login from '../components/Login/Login'
import Register from '../components/Register/Register'
import PrivateRoute from './PrivateRoute'
import Profile from '../Pages/Profile/Profile'
import About from '../components/About/About'

import ErrorPage from '../Pages/ErrorPage/ErrorPage'

const Route = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
        loader: () => fetch('/events.json'),
      },

      {
        path: '/services',
        element: (
          <PrivateRoute>
            {' '}
            <ServicePage />
          </PrivateRoute>
        ),
        loader: () => fetch('/events.json'),
      },
      {
        path: '/services/:id',
        element: (
          <PrivateRoute>
            {' '}
            <ServicePage />
          </PrivateRoute>
        ),
        loader: () => fetch('/events.json'),
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/profile',
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
    ],
  },
])

export default Route

/* eslint-disable react/prop-types */
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../providers/AuthProvider'

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext)

  if (loading) {
    return <span className='loading loading-infinity loading-xs'></span>
  }

  if (user) {
    return children
  }

  return <Navigate to='/login'></Navigate>
}
export default PrivateRoute

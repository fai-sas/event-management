import { useContext } from 'react'
import { AuthContext } from '../../providers/AuthProvider'

const ServicePage = () => {
  const { user } = useContext(AuthContext)
  console.log(user)

  return <div>ServicePage</div>
}
export default ServicePage

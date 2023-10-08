import { useContext } from 'react'
import { AuthContext } from '../../providers/AuthProvider'

const ServicePage = () => {
  const { user } = useContext(AuthContext)
  console.log(user)

  return (
    <div className='container mx-auto'>
      <h1 className='py-8 text-4xl font-bold'>ServicePage</h1>
    </div>
  )
}
export default ServicePage

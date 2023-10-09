import About from '../../components/About/About'
import Banner from '../../components/Banner/Banner'
import Contact from '../../components/Contact/Contact'
import CoreFeatures from '../../components/CoreFeatures/CoreFeatures'

import Services from '../../components/Services/Services'

const HomePage = () => {
  return (
    <div className='overflow-hidden'>
      <Banner />
      <About></About>
      <Services />
      <CoreFeatures />
      <Contact />
    </div>
  )
}

export default HomePage

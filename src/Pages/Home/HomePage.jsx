import About from '../../components/About/About'
import Banner from '../../components/Banner/Banner'
import Contact from '../../components/Contact/Contact'
import CoreFeatures from '../../components/CoreFeatures/CoreFeatures'
import Footer from '../../components/Footer/Footer'
import Services from '../../components/Services/Services'

const HomePage = () => {
  return (
    <div className=''>
      <Banner />
      <About></About>
   
      {/* <Services /> */}
      <CoreFeatures />
 <Contact />
      <Footer></Footer>
    </div>
  )
}

export default HomePage

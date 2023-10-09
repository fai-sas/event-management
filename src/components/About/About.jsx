import './About.css'
import img1 from '../../assets/event-management.jpeg'
import img2 from '../../assets/Events Management Philippines.jpg'
import SectionHeader from '../SectionHeader/SectionHeader'

const About = () => {
  return (
    <div
      data-aos='fade-down-left'
      data-aos-easing='ease-out-cubic'
      data-aos-duration='2000'
      className='container px-0 py-8 mx-auto about my-14 '
    >
      <div className='about-left'>
        <div className='big-screen'>
          <img className='shadow-xl mechanic-img' src={img1} alt='' />
          <img className='shadow-xl parts-img' src={img2} alt='' />
        </div>
      </div>

      <div className='text-left about-right'>
        <div className='section-title'>
          <SectionHeader
            title={'We are qualified & of experience in this field'}
            subtitle={'About Us'}
            center={false}
          ></SectionHeader>
        </div>
        <p className='description'>
          We are passionate about creating exceptional corporate events that
          leave a lasting impact. With years of experience in event management,
          we specialize in curating conferences, seminars, and corporate
          gatherings that inspire, educate, and connect professionals from
          diverse industries.
        </p>
        <p className='description'>
          Our dedicated team of event planners is committed to delivering
          seamless experiences that exceed your expectations. Whether you're
          hosting a large-scale corporate summit, an intimate business
          conference, or an executive retreat, we pay meticulous attention to
          every detail to ensure your event's success.
        </p>

        <button className='my-4 text-white shadow-md btn'>Get More Info</button>
      </div>
    </div>
  )
}

export default About

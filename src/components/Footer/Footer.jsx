import './Footer.css'
import { Link } from 'react-router-dom'
import { GrGoogle, GrLinkedinOption } from 'react-icons/gr'
import { BsTwitter } from 'react-icons/bs'

import logoFooter from '../../assets/logo (2).png'

const Footer = () => {
  return (
    // <div className='footer-container'>
    //   <footer className='p-10 footer text-base-content'>
    //     <div>
    //       <Link to={'/'}>
    //         <img src={logoFooter} alt='Logo' />
    //       </Link>
    //       <p className='mt-6 text-lg text-gray-400'>
    //         Crafting Unforgettable Moments, One Event at a Time. Your Vision,
    //         Our Expertise.
    //       </p>
    //       <div className='social-links'>
    //         <Link to={'/'}>
    //           <GrGoogle></GrGoogle>
    //         </Link>
    //         <Link to={'/'}>
    //           <BsTwitter></BsTwitter>
    //         </Link>
    //         <Link to={'/'}>
    //           <GrLinkedinOption></GrLinkedinOption>
    //         </Link>
    //       </div>
    //     </div>
    //     <div>
    //       <span className='text-lg font-semibold footer_title'>About</span>
    //       <Link to={'/home'} className='text-base link link-hover'>
    //         Home
    //       </Link>
    //       <Link to={'/services'} className='text-base link link-hover'>
    //         Service
    //       </Link>
    //       <Link to={'/contact'} className='text-base link link-hover'>
    //         Contact
    //       </Link>
    //     </div>
    //     <div>
    //       <span className='text-lg font-semibold footer_title'>Company</span>
    //       <Link to={'/studioshadow-core'} className='text-base link link-hover'>
    //         Why StudioShadow
    //       </Link>
    //       <Link to={'/about'} className='text-base link link-hover'>
    //         About
    //       </Link>
    //     </div>
    //     <div>
    //       <span className='text-lg font-semibold footer_title'>Support</span>
    //       <Link to={'/Support'} className='text-base link link-hover'>
    //         Support Center
    //       </Link>
    //       <Link to={'/feedback'} className='text-base link link-hover'>
    //         Feedback
    //       </Link>
    //       <Link to={'/accessability'} className='text-base link link-hover'>
    //         Accessability
    //       </Link>
    //     </div>
    //   </footer>
    // </div>

    <footer className='bg-black'>
      <div className='container p-10 mx-auto text-white bg-black footer'>
        <aside>
          <img src={logoFooter} alt='logo' />
          <p>
            Studio Shadow
            <br />
            Crafting Unforgettable Moments, One Event at a Time. Your Vision,
            Our Expertise
          </p>
        </aside>
        <nav>
          <header className='footer-title'>Services</header>
          <a className='link link-hover'>Branding</a>
          <a className='link link-hover'>Design</a>
          <a className='link link-hover'>Marketing</a>
          <a className='link link-hover'>Advertisement</a>
        </nav>
        <nav>
          <header className='footer-title'>Company</header>
          <a className='link link-hover'>About us</a>
          <a className='link link-hover'>Contact</a>
          <a className='link link-hover'>Jobs</a>
          <a className='link link-hover'>Press kit</a>
        </nav>
        <nav>
          <header className='footer-title'>Legal</header>
          <a className='link link-hover'>Terms of use</a>
          <a className='link link-hover'>Privacy policy</a>
          <a className='link link-hover'>Cookie policy</a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer

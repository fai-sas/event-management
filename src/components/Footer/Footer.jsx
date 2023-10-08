import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';
import { GrGoogle, GrLinkedinOption } from 'react-icons/gr';
import { BsTwitter } from 'react-icons/bs';

import logoFooter from '../../assets/logo (2).png'

const Footer = () => {
    return (
        <div className="footer-container">
            <footer className="footer p-10 text-base-content">
                <div>
                    <Link to={'/'}><img src={logoFooter} alt="Logo" /></Link>
                    <p className='text-lg text-gray-400 mt-6'>Crafting Unforgettable Moments, One Event at a Time. Your Vision, Our Expertise.</p>
                    <div className="social-links">
                        <Link to={'/'}><GrGoogle></GrGoogle></Link>
                        <Link to={'/'}><BsTwitter></BsTwitter></Link>
                        <Link to={'/'}><GrLinkedinOption></GrLinkedinOption></Link>
                    </div>
                </div>
                <div>
                    <span className="footer_title text-lg font-semibold text-lg">About</span>
                    <Link to={'/home'} className="link link-hover text-base">Home</Link>
                    <Link to={'/services'} className="link link-hover text-base">Service</Link>
                    <Link to={'/contact'} className="link link-hover text-base">Contact</Link>
                </div>
                <div>
                    <span className="footer_title text-lg font-semibold text-lg">Company</span>
                    <Link to={'/studioshadow-core'} className="link link-hover text-base">Why StudioShadow</Link>
                    <Link to={'/about'} className="link link-hover text-base">About</Link>
                </div>
                <div>
                    <span className="footer_title text-lg font-semibold text-lg">Support</span>
                    <Link to={'/Support'} className="link link-hover text-base">Support Center</Link>
                    <Link to={'/feedback'} className="link link-hover text-base">Feedback</Link>
                    <Link to={'/accessability'} className="link link-hover text-base">Accessability</Link>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
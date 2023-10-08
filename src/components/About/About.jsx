import React from 'react';
import './About.css'
import img1 from '../../assets/event-management.jpeg';
import img2 from '../../assets/Events Management Philippines.jpg';
import SectionHeader from '../SectionHeader/SectionHeader';

const About = () => {
    return (
        <div className='about my-14'>
            <div className="about-left">
                <div className="big-screen">
                    <img className='mechanic-img shadow-xl' src={img1} alt="" />
                    <img className='parts-img shadow-xl' src={img2} alt="" />
                </div>
            </div>

            <div className="about-right text-left">
                <div className="section-title">
                    <SectionHeader
                        title={"We are qualified & of experience in this field"}
                        subtitle={"About Us"}
                        center={false}
                    ></SectionHeader>
                </div>
                <p className='description'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <p className='description'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

                <button className="btn shadow-md my-4 text-white">Get More Info</button>
            </div>
        </div>
    );
};

export default About;
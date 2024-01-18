'use client'

import React from "react";
import Header from '../../../component/header'
import Footer from '../../../component/footer'
import Digital from '../../../public/img/digital.png'; 
import DigitalCourse from '../digital-marketing/digital-course';
import OurMedia from '../home/OurMedia';
import Training from '../digital-marketing/digital-training';
import DigitalColumn from '../digital-marketing/digital-column';
import DigitalBanner from '../digital-marketing/digital-banner';
import DigitalTutor from '../digital-marketing/digital-tutor';
import '../python-training-course/python.css';  

export default function Home() {
 
  return (
    <>

      <Header />
      <div className="bg_home">
        <div className="container-fluid mx-auto p-5">
          <div className="row align-items-center">

            <div className="col-md-7">
              <h1 className="text_heading">Unlock Success Effortlessly with Digital Marketing Course</h1>
              <p className='text-white mt-5 desc_course'>Enhance your career with our comprehensive digital marketing course. Gain valuable skills in SEO, social media 
              marketing, content creation, and analytics. Stay ahead in the competitive digital landscape.</p>
              <div className="mt-5 text-center">
                <button className='btn btn-outline-primary m-0'>Apply for Counselling </button>
              </div>
            </div>
            <div className="col-md-5"  >
              <img src={Digital.src} className="w-100" alt="" />
          </div>
          </div>
           
          </div>
          <div className="overlap_section">
        <div className="container-fluid mx-auto p-5"> 
          <div className="course_box shadow bg-white p-4 borderrounded">
            <div className="row align-items-center">
            <div className="col-md-7">

                <div className="d-flex justify-content-between">
                <div className="main_monts">
                <h3>Program Duration</h3>
                <p className="mb-0">3 Months</p>
                </div>
                <div className="main_monts"> 
                <h3>Learning Format</h3>
                <p className="mb-0">Online/Offline</p>
                </div>

                <div className="main_monts"> 
                <h3>Program Fees</h3>
                <p className="mb-0">25,000/- INR</p>
                </div>

                </div>
            </div>
            <div className="col-md-5">
            <div className="text-right">
                <button className='btn btn-outline-primary border_orange mt-0'>Apply for Counselling </button>
              </div>
              </div>
              </div>
            </div>
          </div>
          </div>
            <DigitalCourse />
            <Training/>
            <DigitalColumn/>
            <DigitalBanner/>
            <DigitalTutor/>
            <OurMedia />
        <Footer />
      </div>
    </>
  )
}

'use client'

import React from "react";
import Header from '../../../component/header'
import Footer from '../../../component/footer'
import VideoEditor from '../../../public/img/video-banner.png'; 
import VideoCourse from '../video-editing/video-course';
import OurMedia from '../home/OurMedia';
import VideoTraining from '../video-editing/video-training';
import DigitalColumn from '../digital-marketing/digital-column';
import DigitalBanner from '../digital-marketing/digital-banner';
import DigitalTutor from '../digital-marketing/digital-tutor';
import '../python-training-course/python.css';  

export default function Home() {
 
  return (
    <>

      <Header />
      <div className="video-bg">
        <div className="container-fluid mx-auto p-0">
          <div className="row align-items-center m-0">

            <div className="col-md-6 ps-5">
              <h1 className="text_heading fs-1">Learn to Transform Pixels into Story with Us</h1>
              <p className='text-secondary mt-3 fs-5 desc_course'>Demand for skilled video editors is ever-growing. Whether you aspire to work in film, advertising, or social media, 
              our Video Editing Course equips you with the skills needed to succeed.</p>
              <div className="mt-5 text-center dark-btn">
                <button className='btn btn-outline-primary m-0 brochure-btn'>Apply for Counselling </button>
              </div>
            </div>
            <div className="col-md-6 p-0"  >
              <img src={VideoEditor.src} className="w-100" alt="" />
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
                <h3>Course Duration</h3>
                <p className="mb-0">3 Months</p>
                </div>
                <div className="main_monts"> 
                <h3>Learning Format</h3>
                <p className="mb-0">Online</p>
                </div>

                <div className="main_monts"> 
                <h3>Program Fees</h3>
                <p className="mb-0">20,000/- INR</p>
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
            <VideoCourse />
            <VideoTraining/>
            <DigitalColumn/>
            <DigitalBanner/>
            <DigitalTutor/>
            <OurMedia />
        <Footer />
      </div>
    </>
  )
}

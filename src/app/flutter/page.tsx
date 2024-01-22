'use client'

import React from "react";
import Header from '../../../component/header';
import Footer from '../../../component/footer';
import Flutter from '../../../public/img/flutter-bg.png';
import FlutterColumn from '../flutter/flutter-column';
import FlutterCourse from '../flutter/flutter-course';
import FlutterTraining from '../flutter/flutter-training';
import FlutterAccordion from '../flutter/flutter-accordion';
import FlutterTutor from '../flutter/flutter-tutor';
import OurMedia from '../home/OurMedia';
import '../python-training-course/python.css';  

export default function Home() {
 
  return (
    <>

      <Header />
      <div className="data_banner" style={{
        backgroundImage: `url(${Flutter.src})`,
        width: '100%',
        height: '750px',
        display:'flex',
        alignItems: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover', 
        position: 'relative'
        }}>
        <div className="container-fluid mx-auto p-5">
            <div className="row align-items-center">
                <div className="col-12 col-md-5 d-flex flex-wrap align-items-center justify-content-start">
                    <h1 className="flutter-heading heading-lg text-white w-100 mb-4">Add <b className="flutter">Flutter</b> to Your Skillset The Next Level Expertise</h1>
                    <p className='desc_course m-0 text-white'>Learn to create cross-platform apps, harness powerful widgets, and elevate your skills in this dynamic framework for Android 
                    and iOS development..</p>
                    <div className="mt-5 banner-btngroup text-center d-flex flex-wrap justify-content-start w-100">
                        <button className='btn btn-outline-primary m-0'>Apply for Counselling </button>
                    </div>
                </div>
            </div>
          </div>
        </div> 

        <div className="overlap_section">
            <div className="container-fluid mx-auto p-5 pt-0"> 
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
                          <p className="mb-0">Online/Offline</p>
                        </div>

                        <div className="main_monts"> 
                          <h3>Program Fees</h3>
                          <p className="mb-0">28,000/- INR</p>
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
        <FlutterColumn/>
        <FlutterCourse/>
        <FlutterTraining/> 
        <FlutterAccordion/>
        <FlutterTutor/>
        <OurMedia />
        <Footer />

    </>
  )
}

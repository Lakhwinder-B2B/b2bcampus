'use client'

import React from "react";
import Header from '../../../component/header'
import Footer from '../../../component/footer'
import Banner from '../../../public/python/banner.png'; 

import Slider from "react-slick";
import Typewriter from 'typewriter-effect'; 
import OurMedia from '../../app/home/OurMedia';
import Training from './python-training';
import Python from './Python-Course';
import Pythons from './python-column';
import BannerPython from './python-banner';
import './Python.css';  

export default function Home() {
 
  return (
    <>

      <Header />
      <div className="bg_home">
        <div className="container-fluid mx-auto p-5">
          <div className="row align-items-center">

            <div className="col-md-7 pt-5 mt-5"  >
              <h1 className="text_heading"> Welcome to the Python Mastery Course: Unleash Your Coding Potential!</h1>
              <p className='text-white mt-5 desc_course'>Python Mastery Course is designed to empower you with the skills and
              knowledge needed to excel in the dynamic field of coding</p>
              <div className="mt-5 text-center">
                <button className='btn btn-outline-primary m-0'> <i className="fa fa-hand-o-right fs-4 hide_ic mr-5" aria-hidden="true"></i> Apply for Counselling </button>
              </div>
            </div>
            <div className="col-md-5"  >
              <img src={Banner.src} className="w-100" alt="" />
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
                <p className="mb-0">Online/Offline</p>
                </div>

                <div className="main_monts"> 
                <h3>Program Fees</h3>
                <p className="mb-0">30,000/- INR</p>
                </div>

                </div>
            </div>
            <div className="col-md-5">
            <div className="text-right">
                <button className='btn btn-outline-primary border_orange mt-0'> <i className="fa fa-hand-o-right fs-4 hide_ic mr-5" aria-hidden="true"></i> Apply for Counselling </button>
              </div>
              </div>
              </div>
            </div>
          </div>
          </div>
            <Python />
            <Training/>
            <Pythons/>
            <BannerPython/>
            <OurMedia />
        <Footer />
      </div>
    </>
  )
}

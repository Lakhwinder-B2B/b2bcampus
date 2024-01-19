'use client'

import React from "react";
import Header from '../../../component/header';
import Footer from '../../../component/footer';
import GraphicBanner from "../../../public/img/graphic-banner.png";
import GraphicCourse from '../graphic-designing/graphic-course';
import GraphicColumn from '../graphic-designing/graphic-column';
import GraphTab from '../graphic-designing/graphic-tab';
import GraphSlick from '../graphic-designing/graph-slick';
import GraphicTutor from '../graphic-designing/graphic-tutor';
import OurMedia from '../home/OurMedia';
import '../python-training-course/python.css';  

export default function Home() {
 
  return (
    <>

      <Header />
      <div className="graphic_home" style={{
      backgroundImage: `url(${GraphicBanner.src})`,
      width: '100%',
      height: 'auto',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover', 
      position: 'relative'
      }}>
        <div className="container-fluid mx-auto p-5">
            <div className="row align-items-center">
                <div className="col-md-12 d-flex flex-wrap justify-content-center">
                    <span className="m-auto fs-4 text-white w-100 text-center mb-2">Graphic Design</span>
                    <h1 className="text_heading heading-lg text-danger w-100 text-center mb-4">Graphic, UX and UI Design</h1>
                    <p className='col-12 co-md-7 text-white desc_course text-center'>Transform your creativity into marketable skills with our comprehensive Graphic, UI, UX Design course
Over the years, we have helped thousands of students learn, become skilled, and earn a living.</p>
                    <div className="mt-5 banner-btngroup text-center d-flex flex-wrap justify-content-center w-100">
                        <button className='btn btn-outline-primary m-0'>Call Us at: 9878 300 209 </button>
                        <button className='btn btn-outline-primary m-0'>Apply for Counselling </button>
                        <button className='btn btn-outline-primary m-0'>Whatsapp Chat</button>
                    </div>
                </div>
            </div>
          </div>
          </div> 
          <GraphicCourse/>
          <GraphicColumn/>
          <GraphTab/>
          <GraphSlick/>
          <GraphicTutor/>
        <OurMedia />
        <Footer />

    </>
  )
}

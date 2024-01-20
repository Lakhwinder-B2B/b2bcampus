'use client'

import React from "react";
import Header from '../../../component/header';
import Footer from '../../../component/footer';
import DataScience from "../../../public/img/data-science.png";
import DataCourse from '../data-science/data-course';
import DataColumn from '../data-science/data-column';
import DataBanner from '../data-science/data-banner';
import DataAccordion from '../data-science/data-accordion';
import DataTutor from '../data-science/data-tutor';
import OurMedia from '../home/OurMedia';
import '../python-training-course/python.css';  

export default function Home() {
 
  return (
    <>

      <Header />
      <div className="data_banner" style={{
      backgroundImage: `url(${DataScience.src})`,
      width: '100%',
      height: '600px',
      display:'flex',
      alignItems: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover', 
      position: 'relative'
      }}>
        <div className="container-fluid mx-auto p-5">
            <div className="row align-items-center">
                <div className="col-md-12 d-flex flex-wrap align-items-center justify-content-start">
                    <h1 className="col-12 col-md-7 heading-md fs-1 text-blue w-100 mb-4">Gain The Skills To Navigate The Data-Driven World</h1>
                    <p className='desc_course m-0'>Empower yourself with the tools of data intelligence. Join our Data Science Course and learn<br/>
how to analyze and manipulate data using one of the most versatile and in-demand<br/> programming languages in the industry.</p>
                    <div className="mt-5 banner-btngroup text-center d-flex flex-wrap justify-content-start w-100">
                        <button className='btn btn-outline-primary m-0 text-dark border-dark'>Apply for Counselling </button>
                    </div>
                </div>
            </div>
          </div>
          </div> 
          <DataColumn/>
          <DataCourse/>
          <DataBanner/>
          <DataAccordion/>
          <DataTutor/>
        <OurMedia />
        <Footer />

    </>
  )
}

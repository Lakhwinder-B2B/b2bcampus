'use client'

import React from "react"; 
import DataBanner from "../../../public/img/data-banners.png";
import Coursepython from '../../../public/img/course.png';
import DataGirl from '../../../public/img/data-banner-girl.png';

import '../home/course.css'

export default function Journey() {

 
  return (
    <>
 
    <div className="container-fluid banner-python bg-white mb-0" 	style={{
      backgroundImage: `url(${DataBanner.src})`,
      width: '100%',
      height: '600px',
      display:'flex',
      flexWrap:'wrap',
      alignItems: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover', 
      position: 'relative'
      }}>
        <div className="mx-auto p-0 ps-5 bg-data mb-3">
            <div className="row align-items-center m-0">
                <div className="col-md-7 text-white">
                    <h1 className="fs-3 font-bold mb-5">Career Benefits of Pursuing this Course</h1>
                    <ul className="list-order d-flex flex-wrap justify-content-start text-left">
                        <li className="pb-3 fs-6 w-100 mb-3">Learning Python for data science involves learning in demand skills.</li>
                        <li className="pb-3 fs-6 w-100 mb-3">Learning Python for data science can open up numerous career opportunities.</li>
                        <li className="pb-3 fs-6 w-100 mb-3">Python is a versatile skill that can be applied across various industries and job roles.</li>
                    </ul>
                    <div className="mt-3 text-center">
                        <button className='btn btn-outline-primary m-0'> Download Brochure </button>
                    </div>
                </div>
                
            </div>
        </div>
    </div>

    <div className="container-fluid mx-auto p-5 bg-white pb-5">
            <div className="row align-items-center shadow radius">
                <div className="col-12 col-md-7 text-dark ps-5">
                <h1 className="fs-3 font-bold mb-4">Eligibility to enroll in Data Science Course</h1>
                    <ul className="d-flex flex-wrap justify-content-start text-left">
                        <li className="pb-3 fs-6 w-100">10+2 and Graduate freshers with aspirations to become data Scientists and advance their careers.</li>
                        <li className="pb-3 fs-6 w-100">Analytics professionals, Software Developers, Project Managers and Business intelligence Managers</li>
                        <li className="pb-3 fs-6 w-100">Aspirants who are looking to transition their career to the Data Science industry.</li>
                    </ul>
                    <div className="mt-3 text-center">
                        <button className='btn btn-outline-primary m-0 brochure-btn'> Download Brochure </button>
                    </div>
                </div>

                <div className="col-12 col-md-5 p-0">
                    <img src={DataGirl.src} className="w-100" alt="" />
                </div>
                
            </div>
        </div>
      
    </>
  )
}

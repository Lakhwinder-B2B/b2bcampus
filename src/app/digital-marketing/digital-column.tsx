'use client'

import React from "react"; 
import Dm1 from '../../../public/img/dm1.png';  
import Dm2 from '../../../public/img/dm2.png';  
import Dm3 from '../../../public/img/dm3.png';  
import Dm4 from '../../../public/img/dm4.png'; 
import Dm5 from '../../../public/img/dm5.png'; 
import Dm6 from '../../../public/img/dm6.png'; 
import Dm7 from '../../../public/img/dm7.png'; 
import Dm8 from '../../../public/img/dm8.png'; 
 

import '../home/course.css'

export default function Journey() {

 
  return (
    <>
 
    <div className="p-5 pt-5 text-center bg-white">
        <div className="p-0">
            <h1 className="top_heading pb-4 text-dark fs-2 font-bold mb-5">Key Highlights of Our Digital Marketing Course</h1> 
            <div className="row python-grid">
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-5">
                   <div className="python-box shadow bg-white d-flex justify-content-center align-items-center text-left">
                        <img src={Dm1.src} className="our_logo" alt="" />
                        <span className="w-100 fs-6 mt-2 mb-2 font-bold pe-3 ps-3">A 3-Month Applied Learning Program</span>
                    </div> 
                </div>

                <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-5">
                   <div className="python-box shadow bg-white d-flex justify-content-center align-items-center text-left">
                        <img src={Dm2.src} className="our_logo" alt="" />
                        <span className="w-100 fs-6 mt-2 mb-2 font-bold pe-3 ps-3">Over 25 Live Sessions in 3 Months</span>
                    </div> 
                </div>

                <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-5">
                   <div className="python-box shadow bg-white d-flex justify-content-center align-items-center text-left">
                        <img src={Dm3.src} className="our_logo" alt="" />
                        <span className="w-100 fs-6 mt-2 mb-2 font-bold pe-3 ps-3">Learn from marketers and business professionals.</span>
                    </div> 
                </div>

                <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-5">
                   <div className="python-box shadow bg-white d-flex justify-content-center align-items-center text-left">
                        <img src={Dm4.src} className="our_logo" alt="" />
                        <span className="w-100 fs-6 mt-2 mb-2 font-bold pe-3 ps-3">15+ Industry Projects and Case Studies</span>
                    </div> 
                </div>

                <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-5">
                   <div className="python-box shadow bg-white d-flex justify-content-center align-items-center text-left">
                        <img src={Dm5.src} className="our_logo" alt="" />
                        <span className="w-100 fs-6 mt-2 mb-2 font-bold pe-3 ps-3">One-on-one consultations with industry mentors.</span>
                    </div> 
                </div>

                <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-5">
                   <div className="python-box shadow bg-white d-flex justify-content-center align-items-center text-left">
                        <img src={Dm6.src} className="our_logo" alt="" />
                        <span className="w-100 fs-6 mt-2 mb-2 font-bold pe-3 ps-3">Soft skills training</span>
                    </div> 
                </div>

                <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-5">
                   <div className="python-box shadow bg-white d-flex justify-content-center align-items-center text-left">
                        <img src={Dm7.src} className="our_logo" alt="" />
                        <span className="w-100 fs-6 mt-2 mb-2 font-bold pe-3 ps-3">Guaranteed interviews in reputed IT companies</span>
                    </div> 
                </div>

                <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-5">
                   <div className="python-box shadow bg-white d-flex justify-content-center align-items-center text-left">
                        <img src={Dm8.src} className="our_logo" alt="" />
                        <span className="w-100 fs-6 mt-2 mb-2 font-bold pe-3 ps-3">Designed for Working Professionals and freshers</span>
                    </div> 
                </div>
            </div>
        </div>
    </div>
      
    </>
  )
}

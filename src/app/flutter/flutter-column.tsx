'use client'

import React from "react"; 
import F1 from '../../../public/img/f1.png';  
import F2 from '../../../public/img/f2.png';  
import F3 from '../../../public/img/f3.png';  
import F4 from '../../../public/img/f4.png'; 
import F5 from '../../../public/img/f5.png'; 
import F6 from '../../../public/img/f6.png'; 
import F7 from '../../../public/img/f7.png'; 
import F8 from '../../../public/img/f8.png'; 
 

import '../home/course.css'

export default function Journey() {

 
  return (
    <>
 
    <div className="p-5 pt-5 mt-5 text-center bg-white">
        <div className="p-0">
            <h1 className="top_heading pb-4 text-dark fs-2 font-bold mb-5">Skills Covered</h1> 
            <div className="row python-grid">
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-5">
                   <div className="python-box shadow bg-white d-flex justify-content-center align-items-center text-left">
                        <img src={F1.src} className="our_logo" alt="" />
                        <span className="w-100 fs-6 mt-2 mb-2 font-bold pe-3 ps-3">Widget Creation</span>
                    </div> 
                </div>

                <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-5">
                   <div className="python-box shadow bg-white d-flex justify-content-center align-items-center text-left">
                        <img src={F2.src} className="our_logo" alt="" />
                        <span className="w-100 fs-6 mt-2 mb-2 font-bold pe-3 ps-3">State Management</span>
                    </div> 
                </div>

                <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-5">
                   <div className="python-box shadow bg-white d-flex justify-content-center align-items-center text-left">
                        <img src={F3.src} className="our_logo" alt="" />
                        <span className="w-100 fs-6 mt-2 mb-2 font-bold pe-3 ps-3">UI Design</span>
                    </div> 
                </div>

                <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-5">
                   <div className="python-box shadow bg-white d-flex justify-content-center align-items-center text-left">
                        <img src={F4.src} className="our_logo" alt="" />
                        <span className="w-100 fs-6 mt-2 mb-2 font-bold pe-3 ps-3">Cross-Platform Development</span>
                    </div> 
                </div>

                <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-5">
                   <div className="python-box shadow bg-white d-flex justify-content-center align-items-center text-left">
                        <img src={F5.src} className="our_logo" alt="" />
                        <span className="w-100 fs-6 mt-2 mb-2 font-bold pe-3 ps-3">Animations</span>
                    </div> 
                </div>

                <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-5">
                   <div className="python-box shadow bg-white d-flex justify-content-center align-items-center text-left">
                        <img src={F6.src} className="our_logo" alt="" />
                        <span className="w-100 fs-6 mt-2 mb-2 font-bold pe-3 ps-3">REST API Integration</span>
                    </div> 
                </div>

                <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-5">
                   <div className="python-box shadow bg-white d-flex justify-content-center align-items-center text-left">
                        <img src={F7.src} className="our_logo" alt="" />
                        <span className="w-100 fs-6 mt-2 mb-2 font-bold pe-3 ps-3">Debugging Proficiency</span>
                    </div> 
                </div>

                <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-5">
                   <div className="python-box shadow bg-white d-flex justify-content-center align-items-center text-left">
                        <img src={F8.src} className="our_logo" alt="" />
                        <span className="w-100 fs-6 mt-2 mb-2 font-bold pe-3 ps-3">Responsive Layouts</span>
                    </div> 
                </div>

              
            </div>
        </div>
    </div>
      
    </>
  )
}

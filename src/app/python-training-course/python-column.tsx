'use client'

import React from "react"; 
import Python1 from '../../../public/img/python1.png';  
import Python2 from '../../../public/img/python2.png';  
import Python3 from '../../../public/img/python3.png';  
import Python4 from '../../../public/img/python4.png'; 
import Python5 from '../../../public/img/python5.png'; 
import Python6 from '../../../public/img/python6.png'; 
import Python7 from '../../../public/img/python7.png'; 
import Python8 from '../../../public/img/python8.png'; 
 

import '../home/course.css'

export default function Journey() {

 
  return (
    <>
 
    <div className="p-5 pt-5 text-center bg-white">
        <div className="p-0">
            <h1 className="top_heading pb-4 text-dark fs-2 font-bold mb-5">Key Highlights of Python Course</h1> 
            <div className="row python-grid">
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-5">
                   <div className="python-box shadow bg-white d-flex justify-content-center align-items-center text-left">
                        <img src={Python1.src} className="our_logo" alt="" />
                        <span className="w-100 fs-6 mt-2 mb-2 font-bold pe-3 ps-3">Comprehensive Python Language Coverage</span>
                    </div> 
                </div>

                <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-5">
                   <div className="python-box shadow bg-white d-flex justify-content-center align-items-center text-left">
                        <img src={Python2.src} className="our_logo" alt="" />
                        <span className="w-100 fs-6 mt-2 mb-2 font-bold pe-3 ps-3">Hands-on Project Development</span>
                    </div> 
                </div>

                <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-5">
                   <div className="python-box shadow bg-white d-flex justify-content-center align-items-center text-left">
                        <img src={Python3.src} className="our_logo" alt="" />
                        <span className="w-100 fs-6 mt-2 mb-2 font-bold pe-3 ps-3">Practical Problem-solving Skills</span>
                    </div> 
                </div>

                <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-5">
                   <div className="python-box shadow bg-white d-flex justify-content-center align-items-center text-left">
                        <img src={Python4.src} className="our_logo" alt="" />
                        <span className="w-100 fs-6 mt-2 mb-2 font-bold pe-3 ps-3">In-depth Data Manipulation Techniques</span>
                    </div> 
                </div>

                <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-5">
                   <div className="python-box shadow bg-white d-flex justify-content-center align-items-center text-left">
                        <img src={Python5.src} className="our_logo" alt="" />
                        <span className="w-100 fs-6 mt-2 mb-2 font-bold pe-3 ps-3">Web Development with Python</span>
                    </div> 
                </div>

                <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-5">
                   <div className="python-box shadow bg-white d-flex justify-content-center align-items-center text-left">
                        <img src={Python6.src} className="our_logo" alt="" />
                        <span className="w-100 fs-6 mt-2 mb-2 font-bold pe-3 ps-3">Object-oriented Programming Concepts</span>
                    </div> 
                </div>

                <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-5">
                   <div className="python-box shadow bg-white d-flex justify-content-center align-items-center text-left">
                        <img src={Python7.src} className="our_logo" alt="" />
                        <span className="w-100 fs-6 mt-2 mb-2 font-bold pe-3 ps-3">Real-world Application Development</span>
                    </div> 
                </div>

                <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-5">
                   <div className="python-box shadow bg-white d-flex justify-content-center align-items-center text-left">
                        <img src={Python8.src} className="our_logo" alt="" />
                        <span className="w-100 fs-6 mt-2 mb-2 font-bold pe-3 ps-3">Supportive Learning Community</span>
                    </div> 
                </div>
            </div>
        </div>
    </div>
      
    </>
  )
}

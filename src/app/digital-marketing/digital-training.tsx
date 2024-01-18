'use client'

import React from "react"; 
import D1 from '../../../public/img/d1.png';  
import D2 from '../../../public/img/d2.png';  
import D3 from '../../../public/img/d3.png';  
import D4 from '../../../public/img/d4.png'; 
 

import '../home/course.css'

export default function Journey() {

 
  return (
    <>
 
    <div className="p-5 pt-5 text-center bg-white">
        <div className="p-0">
            <h1 className="top_heading pb-4 fs-2 font-bold text-dark">Career Benefits of Digital Marketing Course</h1> 
            <div className="row training-grid">
                <div className="col-12 col-sm-6 col-md-6 mb-4">
                   <div className="our_box1 border border-secondary radius-5 bg-white p-4 d-flex justify-content-between align-items-center">
                        <div className="col-flex text-left">
                            <span className="w-100 fs-4 mt-2 mb-2 font-bold">Versatility</span>
                            <p className="our">Python training equips you with a versatile skill set, allowing you to develop applications in various domains such as web development, 
                            data analysis, machine learning, and automation.</p>
                        </div> 
                        <img src={D1.src} className="our_logo" alt="" />
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-md-6 mb-4">
                    <div className="our_box1 border border-secondary bg-white p-4 d-flex justify-content-between align-items-center">
                        <div className="col-flex">
                            <span className="w-100 fs-4 mt-2 mb-2 font-bold">Career Opportunities</span>
                            <p className="our">Python is in high demand, and completing a Python training course opens doors to a wide range of career opportunities in tech companies,
                            startups, and even freelance projects.</p>     
                        </div>
                        <img src={D2.src} className="our_logo" alt="" />
                        
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-md-6 mb-4">
                    <div className="our_box1 border border-secondary bg-white p-4 d-flex justify-content-between align-items-center">
                        <div className="col-flex">
                            <span className="w-100 fs-4 mt-2 mb-2 font-bold">Increased Efficiency</span>
                            <p className="our">Python’s simplicity and readability enable faster development and streamlined workflows, leading to increased productivity and efficiency 
                            in coding projects.</p>
                        </div>
                        <img src={D3.src} className="our_logo" alt="" />
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-md-6 mb-4">
                    <div className="our_box1 border border-secondary bg-white p-4 d-flex justify-content-between align-items-center">
                        <div className="col-flex">
                            <span className="w-100 fs-4 mt-2 mb-2 font-bold">Community Support</span>
                            <p className="our">Python has a vibrant and supportive community of developers worldwide. Training in Python exposes you to this community, providing access 
                            to resources, forums, and collaboration opportunities for continuous learning and growth.</p>  
                        </div>
                            <img src={D4.src} className="our_logo" alt="" />  
                    </div>
                </div>
            </div>
        </div>
    </div>
      
    </>
  )
}

'use client'

import React from "react"; 
import Train1 from '../../../public/img/1.png';  
import Train2 from '../../../public/img/2.png';  
import Train3 from '../../../public/img/3.png';  
import Train4 from '../../../public/img/4.png'; 
 

import '../home/course.css'

export default function Journey() {

 
  return (
    <>
 
    <div className="p-5 pt-5 text-center bg-white">
        <div className="p-0">
            <h1 className="top_heading pb-4 fs-2 font-bold text-dark">Career Benefits of Taking Python Training Course</h1> 
            <div className="row training-grid">
                <div className="col-12 col-sm-6 col-md-3">
                   <div className="our_box1 shadow bg-white p-4 d-flex flex-wrap justify-content-center">
                        <img src={Train1.src} className="our_logo" alt="" />
                        <span className="w-100 fs-4 mt-2 mb-2 font-bold">Versatility</span>
                        <p className="our">Python training equips you with a versatile skill set, allowing you to develop applications in various domains such as web development, 
                        data analysis, machine learning, and automation.</p>
                    </div> 
                </div>

                <div className="col-12 col-sm-6 col-md-3">
                    <div className="our_box1 shadow bg-white p-4 d-flex flex-wrap justify-content-center">
                        <img src={Train2.src} className="our_logo" alt="" />
                        <span className="w-100 fs-4 mt-2 mb-2 font-bold">Career Opportunities</span>
                        <p className="our">Python is in high demand, and completing a Python training course opens doors to a wide range of career opportunities in tech companies,
                        startups, and even freelance projects.</p>     
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-md-3">
                    <div className="our_box1 shadow bg-white p-4 d-flex flex-wrap justify-content-center">
                        <img src={Train3.src} className="our_logo" alt="" />
                        <span className="w-100 fs-4 mt-2 mb-2 font-bold">Increased Efficiency</span>
                        <p className="our">Python’s simplicity and readability enable faster development and streamlined workflows, leading to increased productivity and efficiency 
                        in coding projects.</p>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-md-3">
                    <div className="our_box1 shadow bg-white p-4 d-flex flex-wrap justify-content-center">
                        <img src={Train4.src} className="our_logo" alt="" />
                        <span className="w-100 fs-4 mt-2 mb-2 font-bold">Community Support</span>
                        <p className="our">Python has a vibrant and supportive community of developers worldwide. Training in Python exposes you to this community, providing access 
                        to resources, forums, and collaboration opportunities for continuous learning and growth.</p>    
                    </div>
                </div>
            </div>
        </div>
    </div>
      
    </>
  )
}

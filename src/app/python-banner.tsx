'use client'

import React from "react"; 
import Coursepython from '../../public/img/course.png';

import './home/course.css'

export default function Journey() {

 
  return (
    <>
 
    <div className="banner-python bg-white mb-0">
        <div className="container-fluid mx-auto p-0 ps-5 bg-python mb-3">
            <div className="row align-items-center m-0">

                <div className="col-md-7 text-white">
                    <h1 className="fs-3 font-bold mb-4"> Career Making Technical Skills You will Learn</h1>
                    <ul className="order-list d-flex flex-wrap justify-content-start text-left">
                        <li className="pb-3 fs-6">Mastering frameworks:  like Django or Flask enables building scalable and interactive web applications, opening doors to career opportunities 
                            in web development.</li>
                        <li className="pb-3 fs-6">Data Analysis and Visualization: Proficiency in libraries like Pandas, NumPy, and Matplotlib equips you to extract insights from data.</li>
                        <li className="pb-3 fs-6">Machine Learning and Artificial Intelligence: Understanding libraries like TensorFlow and scikit-learn enables you to create intelligent systems 
                            algorithms.</li>
                    </ul>
                    <div className="mt-3 text-center">
                        <button className='btn btn-outline-primary m-0'> Download Brochure </button>
                    </div>
                </div>
                <div className="col-md-5 p-0">
                    <img src={Coursepython.src} className="w-100" alt="" />
                </div>
                
            </div>
        </div>


        <div className="container-fluid mx-auto p-5 bg-white pb-5">
            <div className="row align-items-center shadow radius">
                <div className="col-md-9 text-dark">
                <h1 className="fs-3 font-bold mb-4"> Eligibility to Pursue Python Course</h1>
                    <ul className="order-list d-flex flex-wrap justify-content-start text-left">
                        <li className="pb-3 fs-6 w-100">Anyone seeking a prosperous career in web development</li>
                        <li className="pb-3 fs-6 w-100">10+2 and Graduates are most welcomed courses</li>
                        <li className="pb-3 fs-6 w-100">Web Developers looking to grow their coding skills</li>
                    </ul>
                    <div className="mt-3 text-center">
                        <button className='btn btn-outline-primary m-0 brochure-btn'> Download Brochure </button>
                    </div>
                </div>

                <div className="col-md-3"  >
                    <img src={Coursepython.src} className="w-100" alt="" />
                </div>
                
            </div>
        </div>
    </div>
      
    </>
  )
}

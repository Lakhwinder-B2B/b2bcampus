'use client'

import React from "react"; 


import '../home/course.css'

export default function Journey() {

 
  return (
    <>
 
    <div className="p-5 pt-5">
        <div className="container mx-auto p-5 banner-python">
            <div className="row align-items-center">

                <div className="col-md-7 pt-5 mt-5">
                    <h1 className="text_heading-4"> Career Making Technical Skills You will Learn</h1>
                    <ul className="order-list d-flex flex-wrap justify-content-start text-left">
                        <li>Mastering frameworks:  like Django or Flask enables building scalable and interactive web applications, opening doors to career opportunities 
                            in web development.</li>
                        <li>Data Analysis and Visualization: Proficiency in libraries like Pandas, NumPy, and Matplotlib equips you to extract insights from data.</li>
                        <li>Machine Learning and Artificial Intelligence: Understanding libraries like TensorFlow and scikit-learn enables you to create intelligent systems 
                            algorithms.</li>
                    </ul>
                    <div className="mt-5 text-center">
                        <button className='btn btn-outline-primary m-0'> Download Brochure <i className="fa fa-hand-o-right fs-4 hide_ic mr-5" aria-hidden="true"></i>  </button>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
      
    </>
  )
}

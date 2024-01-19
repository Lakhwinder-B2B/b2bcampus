'use client'

import React from "react";
import '../python-training-course/python.css';  

export default function Home() {
 
  return (
    <>
 <div className="bg_light_gray m-0">
        <div className="container-fluid mx-auto p-5">
          <div className="row align-items-center">
            <div className="col-md-7">
                <p>The Data Science course will introduce the learner from the basics to the advanced data analytics environment.</p>
                <h4 className="color-green">You will learn to work on libraries such as SciPy,<br/>NumPy, Pandas, Matplotlib, Seaborn etc.</h4>
                <h1 className="mb-5">About Data Science</h1>
                <p className="mb-3">Data science is a multidisciplinary field that combines statistical analysis, machine learning, and programming to extract meaningful insights from complex data sets. It involves collecting, organizing, and analyzing large volumes of data to uncover patterns, trends, and correlations. It provides a powerful set of libraries and tools for data analysis, manipulation, and visualization. Python’s popularity in the data science community makes it a valuable skill for anyone interested in this field.</p>
                <p className="mb-3">Data scientists utilize various techniques and tools to uncover valuable information that can drive informed decision-making and solve real-world problems. With its wide range of applications across industries, data science has become an integral part of harnessing the power of data to unlock innovation and drive business success. It provides a powerful set of libraries and tools for data analysis, manipulation, and visualization. Python’s popularity in the data science community makes it a valuable skill for anyone interested in this field.</p>
                <div className="dura-fees d-flex flex-wrap justify-content-start">
                    <div className="dura-fees-inner">
                        <p className="color-green m-0 font-bold">Program Duration</p>
                        <p>6 Months</p>
                    </div>
                    
                    <div className="dura-fees-inner">
                        <p className="color-green m-0 font-bold">Learning Format</p>
                        <p>Online/Offline</p>
                    </div>

                    <div className="dura-fees-inner">
                        <p className="color-green m-0 font-bold">Program Fees</p>
                        <p>49,000/- INR</p>
                    </div>
                    </div>
            </div>
            <div className="col-md-5">
                <div className="applyForm bg-white text-center p-4">
                    <h2 className="mb-3">Apply for New Batch</h2>
                    <p className="mb-4">We are here to help you with anything!</p>
                    <form action="">
                        <div className="input-group mb-3">
                            <input type="text" placeholder="Name*" className="form-control" />
                        </div>
                        <div className="input-group mb-3">
                            <input type="number" placeholder="Phone No*" className="form-control" />
                        </div>
                        <div className="input-group mb-3">
                            <input type="email" placeholder="Email*" className="form-control" />
                        </div>
                         <div className="input-group mb-3">
                            <textarea name="" id="" className="form-control" placeholder="Message*"></textarea>
                        </div>
                        <button className="book_btn w-100 Form_Message">Submit</button>
                    </form>
                </div>
            </div>
            </div>
          </div> 
      </div>
    </>
  )
}

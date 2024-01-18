'use client'

import React from "react";
import '../python-training-course/python.css';  

export default function Home() {
 
  return (
    <>
 <div className="bg_light_gray">
        <div className="container-fluid mx-auto p-5">
          <div className="row align-items-center">
            <div className="col-md-7">
                <h1 className="mb-5">About Python Course</h1>
                <p className="mb-3">Our Python Training Course is the ultimate program to help you master the Python programming language. Whether you are a beginner or an experienced developer, this comprehensive course will take you from foundational concepts to advanced techniques.</p>
              <p className="mb-3">Dive into Python syntax, data structures, functions, object-oriented programming, web development, and more. Through hands-on projects and exercises, you’ll gain practical experience and build a strong foundation in Python programming.</p>
           <p className="mb-3">Our expert instructors provide guidance and real-world examples, ensuring you are equipped with the skills needed for success. Join our Python Training Course today and unlock a world of opportunities in the exciting field of coding.</p>
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

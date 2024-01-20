'use client'

import React from "react";
import '../python-training-course/python.css';  

export default function Home() {
 
  return (
    <>
 <div className="bg_light_gray mt-0">
        <div className="container-fluid mx-auto p-5">
          <div className="row align-items-center">
            <div className="col-md-7">
                <h1 className="mb-5">About Flutter Training Course</h1>
                <p className="mb-3">B2B Campus offers a comprehensive Flutter training course designed to propel your career in mobile app development. Our expert instructors guide you through essential skills such as widget creation, state management, and responsive UI design. You’ll gain hands-on experience in cross-platform app development for Android and iOS, leveraging Flutter’s powerful capabilities.</p>
                <p className="mb-3">Our industry-relevant curriculum ensures you stay up-to-date with the latest trends and best practices, while practical exercises and real-world projects enhance your proficiency. Whether you’re a beginner or an experienced developer, B2B Campus provides personalized training to fit your pace and aspirations. Elevate your skills and career prospects with our Flutter training course at B2B Campus.</p>
               
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

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
                <h1 className="mb-5">About Digital Marketing Course</h1>
                <p className="mb-3">Our Digital Marketing Course offers a transformative learning experience for aspiring marketers. Dive into the dynamic world of online 
                advertising, SEO, social media marketing, and content strategy.</p>
                <p className="mb-3">Learn from industry experts and gain practical skills to create effective campaigns, optimize website traffic, and maximize conversions. 
                Through hands-on exercises and real-world case studies, you’ll develop a deep understanding of digital marketing tools and techniques.</p>
                <p className="mb-3">Stay ahead of the curve with the latest industry trends and unlock exciting career opportunities. Join us on this educational journey and 
                unleash your marketing potential today.</p>
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

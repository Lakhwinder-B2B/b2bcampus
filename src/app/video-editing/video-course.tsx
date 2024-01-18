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
                <h1 className="mb-5">About Video Editing Course</h1>
                <p className="mb-3">Our Video Editing Course is designed to take you from a novice to a proficient video editor. We start with the fundamentals, ensuring 
                you have a solid foundation in video formats, equipment, and software. As you progress, you’ll delve into more advanced techniques, including color grading, 
                sound editing, and creating visually stunning effects.</p>
                <p className="mb-3">At B2B Campus, we understand that storytelling is at the heart of great video content. That’s why we emphasize the art of storytelling 
                through editing. You’ll learn how to take raw footage and turn it into a captivating narrative that engages your audience.</p>
                <p className="mb-3">Hands-on learning is essential to mastering video editing. Our state-of-the-art facilities provide you with access to the latest equipment 
                and industry-standard software. You’ll work on real projects, gaining practical experience that you can showcase in your professional portfolio.</p>
            </div>
            <div className="col-md-5">
                <div className="applyForm bg-white text-center p-4">
                    <h2 className="mb-3">Fill out the form</h2>
                    <p className="mb-4">We’ll get in touch with you at your convenience!</p>
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

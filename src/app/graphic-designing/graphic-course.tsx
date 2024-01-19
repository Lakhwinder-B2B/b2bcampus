'use client'

import React from "react";
import Career1 from '../../../public/img/career1.png';
import Career2 from '../../../public/img/career2.png';
import Career3 from '../../../public/img/career3.png';
import '../python-training-course/python.css';  

export default function Home() {
 
  return (
    <>
 <div className="w-100 bg-white pt-5 mb-5">
      <div className="bg-white pt-5 container-fluid">
        <div className="row m-0 align-items-center d-flex flex-wrap">
            <div className="col-12 col-sm-6 col-md-7">
                <p>The recruiter looks for designing skills, and you need practical experience to be hired.</p>
                <p className="blue-shade fs-5">Graphic Design, Website design, UX/UI Design, Illustrator, Coreldraw, Printing Work, Figma, Adobe XD, Manipulation etc…</p>
                    
                <h1 className="mb-4 fs-3">About Graphic Design Course</h1>
                    <p>B2B Campus is proud to offer a comprehensive Graphic Design course designed to equip students with the skills needed to succeed in the fast-paced world of graphic design. With a focus on practical, hands-on experience, this course provides a deep understanding of design principles, color theory, typography, and more.</p>
                    <p>Our expert instructors guide students through a range of projects and assignments, helping them to build a strong portfolio that showcases their skills and creativity. </p>
                    <p>Whether you’re looking to start a career in graphic design, or you’re a professional looking to expand your skill set, this course is perfect for you. </p>
            </div>
            <div className="col-12 col-sm-6 col-md-5 shadow p-3 pt-3 pb-3">
                <h2 className="text-center mb-4">B2B Campus for Career Growth In:</h2>
                <ul className="list-order column-order d-flex flex-wrap justify-content-center">
                    <li> 2D animation</li>
                    <li>Stock animation</li>
                    <li>Video graphics</li>
                </ul>
                <p className="m-auto text-center col-12 col-md-8 justify-content-center d-flex flex-wrap">We offer exciting career advancement opportunities specifically for beginners in our Graphic Design course.</p>
                <div className="d-flex flex-wrap mt-5">
                    <div className="grid-box w-100 d-flex flex-wrap align-items-center justify-content-start mb-4">
                        <img src={Career1.src} alt="" />
                        <div className="col-grid ps-3">
                            <h4 className="fs-5">Learn From Industry Professionals</h4>
                            <p className="m-0">You will be trained by designing experts</p>
                        </div> 
                    </div>

                    <div className="grid-box w-100 d-flex flex-wrap align-items-center justify-content-start mb-4">
                        <img src={Career2.src} alt="" />
                        <div className="col-grid  ps-3">
                            <h4 className="fs-5">Certification after Course Completion</h4>
                            <p className="m-0">You will be a certified graphic Designer</p> 
                        </div>
                    </div>

                    <div className="grid-box w-100 d-flex flex-wrap align-items-center justify-content-start mb-4">
                        <img src={Career3.src} alt="" />
                        <div className="col-grid  ps-3">
                            <h4 className="fs-5">100% Job Assistancer</h4>
                            <p className="m-0">Get Hired by Reputed IT companies</p>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-wrap justify-content-center"><button className="btn btn-outline-primary border_orange mt-4 m-0">Apply for Counselling </button></div>
            </div>
            <div className="d-flex flex-wrap justify-content-center"><button className="btn btn-outline-primary border_orange mt-4 m-0">Apply for Counselling </button></div>
        </div>
        </div>
      </div>
    </>
  )
}

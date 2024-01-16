'use client'

import React from "react"; 
import Journey1 from '../../../public/img/j1.png';  
import Journey2 from '../../../public/img/j2.png';  
import Journey3 from '../../../public/img/j3.png';  
import Line from '../../../public/img/line.png';  

import '../home/course.css'

export default function Journey() {

 
  return (
    <>
 
      <div className="p-5 pt-5 text-white text-center">
        <div className="p-5">
        <h1 className="top_heading pb-4">Start your journey towards success today!</h1>
           <img src={Line.src} className="line mb-5 pb-5" alt="" />
        <div className="row">
            <div className="col-md-4 journey_text">
                <img src={Journey1.src} alt="" />
                <h2 className="mt-4 mb-4">Our Commitment</h2>
                <p>Our commitment is to provide a quality
                education that empowers our students to excel
                in the IT industry. We strive to create a
                supportive learning environment that fosters
                innovation, creativity, and personal growth.</p>
            </div>
            <div className="col-md-4 journey_text">
                <img src={Journey2.src} alt="" />
                <h2 className="mt-4 mb-4">Join us as a learning partner</h2> 
                <p> and unlock the
                    power of knowledge. We offer expert guidance,
                    a comprehensive curriculum, and a supportive
                    learning environment to help you achieve your
                    educational and career goals.</p>
            </div>
            <div className="col-md-4 journey_text">
                <img src={Journey3.src} alt="" />
                <h2 className="mt-4 mb-4">Our Commitment</h2>
                <p>Our commitment is to provide a quality
                education that empowers our students to excel
                in the IT industry. We strive to create a
                supportive learning environment that fosters
                innovation, creativity, and personal growth.</p>
            </div>
        </div>
        </div>
      </div>
    </>
  )
}

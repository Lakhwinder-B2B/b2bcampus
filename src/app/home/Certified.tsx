'use client'

import React from "react"; 
import Certified1 from '../../../public/img/m1.png';    
import Certified2 from '../../../public/img/m2.png';    
import Certified3 from '../../../public/img/m3.png';    
import Certified4 from '../../../public/img/m4.png';     
import Certified5 from '../../../public/img/m5.png';    
import Certified6 from '../../../public/img/m6.png';    
import Certified7 from '../../../public/img/m7.png';    
import Certified8 from '../../../public/img/m8.png';    
import Certified9 from '../../../public/img/m9.jpg';    
import Certified10 from '../../../public/img/m10.png';    
import Certified11 from '../../../public/img/m11.png';    
import Certified12 from '../../../public/img/m12.png';    
import Line from '../../../public/img/line.png';  

import '../home/course.css'

export default function Certified() {

 
  return (
    <>
 
      <div className="p-5 pt-5 bg-white text-center">
        <div className="p-5">
        <h1 className="top_heading pb-4">Meet Our Certified Students</h1>
           <img src={Line.src} className="line_campus mb-5" alt="" />
            <div className="row">
                <div className="col-md-3 mb-5">
                    <div className="bg-white shadow p-3">
                        <img className='w-100' src={Certified1.src} alt="" />
                    </div>
                </div>
                <div className="col-md-3 mb-5">
                    <div className="bg-white shadow p-3">
                        <img className='w-100' src={Certified2.src} alt="" />
                    </div>
                </div>
                <div className="col-md-3 mb-5">
                    <div className="bg-white shadow p-3">
                        <img className='w-100' src={Certified3.src} alt="" />
                    </div>
                </div>
                <div className="col-md-3 mb-5">
                    <div className="bg-white shadow p-3">
                        <img className='w-100' src={Certified4.src} alt="" />
                    </div>
                </div>
                <div className="col-md-3 mb-5">
                    <div className="bg-white shadow p-3">
                        <img className='w-100' src={Certified5.src} alt="" />
                    </div>
                </div>
                <div className="col-md-3 mb-5">
                    <div className="bg-white shadow p-3">
                        <img className='w-100' src={Certified6.src} alt="" />
                    </div>
                </div>
                <div className="col-md-3 mb-5">
                    <div className="bg-white shadow p-3">
                        <img className='w-100' src={Certified7.src} alt="" />
                    </div>
                </div>
                <div className="col-md-3 mb-5">
                    <div className="bg-white shadow p-3">
                        <img className='w-100' src={Certified8.src} alt="" />
                    </div>
                </div>
                <div className="col-md-3 mb-5">
                    <div className="bg-white shadow p-3">
                        <img className='w-100' src={Certified9.src} alt="" />
                    </div>
                </div>
                <div className="col-md-3 mb-5">
                    <div className="bg-white shadow p-3">
                        <img className='w-100' src={Certified10.src} alt="" />
                    </div>
                </div>
                <div className="col-md-3 mb-5">
                    <div className="bg-white shadow p-3">
                        <img className='w-100' src={Certified11.src} alt="" />
                    </div>
                </div>
                <div className="col-md-3 mb-5">
                    <div className="bg-white shadow p-3">
                        <img className='w-100' src={Certified12.src} alt="" />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

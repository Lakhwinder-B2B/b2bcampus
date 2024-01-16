'use client'

import React from "react"; 
import placement from '../../../public/img/p1.png';   
import placement1 from '../../../public/img/p2.png';   
import placement2 from '../../../public/img/p3.png';   
import placement3 from '../../../public/img/p4.png';   
import placement4 from '../../../public/img/p5.png';   
import placement5 from '../../../public/img/p6.png';   
import placement6 from '../../../public/img/p7.png';   
import placement7 from '../../../public/img/p8.png';   
import placement8 from '../../../public/img/p9.png';   
import placement9 from '../../../public/img/p10.png';   
import placement10 from '../../../public/img/p11.png';   
import placement11 from '../../../public/img/p12.png';   
import placement12 from '../../../public/img/p13.png';   
import placement13 from '../../../public/img/p14.png';   
import placement14 from '../../../public/img/p15.png';   
import placement15 from '../../../public/img/p16.png';   
import placement16 from '../../../public/img/p17.png';   
import Line from '../../../public/img/line.png'; 

import Story1 from '../../../public/img/story1.png';  
import Story2 from '../../../public/img/story2.png';  
import Story3 from '../../../public/img/story3.png';  


import '../home/course.css'

export default function Journey() {

 
  return (
    <>
 
      <div className="p-5 pt-5 bg-white text-center">
        <div className="p-5">
        <h1 className="top_heading pb-4">Placement Company</h1>
           <img src={Line.src} className="line_campus mb-5 " alt="" />
         <div className="row">
            <div className="col-md-3 mb-5">
                <div className="placement shadow">
                    <img src={placement.src} alt="" />
                </div>
            </div>
            <div className="col-md-3 mb-5">
                <div className="placement shadow">
                    <img src={placement1.src} alt="" />
                </div>
            </div>
            <div className="col-md-3 mb-5">
                <div className="placement shadow">
                    <img src={placement2.src} alt="" />
                </div>
            </div>
            <div className="col-md-3 mb-5">
                <div className="placement shadow">
                    <img src={placement3.src} alt="" />
                </div>
            </div>

            <div className="col-md-3 mb-5">
                <div className="placement shadow">
                    <img src={placement4.src} alt="" />
                </div>
            </div>

            <div className="col-md-3 mb-5">
                <div className="placement shadow">
                    <img src={placement5.src} alt="" />
                </div>
            </div>
            <div className="col-md-3 mb-5">
                <div className="placement shadow">
                    <img src={placement6.src} alt="" />
                </div>
            </div>
            <div className="col-md-3 mb-5">
                <div className="placement shadow">
                    <img src={placement7.src} alt="" />
                </div>
            </div>
            <div className="col-md-3 mb-5">
                <div className="placement shadow">
                    <img src={placement8.src} alt="" />
                </div>
            </div>
            <div className="col-md-3 mb-5">
                <div className="placement shadow">
                    <img src={placement9.src} alt="" />
                </div>
            </div>
            <div className="col-md-3 mb-5">
                <div className="placement shadow">
                    <img src={placement10.src} alt="" />
                </div>
            </div>
            <div className="col-md-3 mb-5">
                <div className="placement shadow">
                    <img src={placement11.src} alt="" />
                </div>
            </div>
            <div className="col-md-3 mb-5">
                <div className="placement shadow">
                    <img src={placement12.src} alt="" />
                </div>
            </div>
            <div className="col-md-3 mb-5">
                <div className="placement shadow">
                    <img src={placement13.src} alt="" />
                </div>
            </div>
            <div className="col-md-3 mb-5">
                <div className="placement shadow">
                    <img src={placement14.src} alt="" />
                </div>
            </div>
            <div className="col-md-3 mb-5">
                <div className="placement shadow">
                    <img src={placement15.src} alt="" />
                </div>
            </div>
            <div className="col-md-3 mb-5">
                <div className="placement shadow">
                    <img src={placement16.src} alt="" />
                </div>
            </div> 

         </div>
        </div>
      </div>

      <div className="bg_gray_light p-5">
            <div className="p-5">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h1 className="font-bold">Your Success Story is Next</h1>
                        <p>Take control of your career and create a way to
                        achieve your goals. Hundreds of students have
                        benefited from B2B Campus over the years, and there
                        are many more to come.</p>
                    </div>
                    <div className="col-md-2">
                        <div className="shadow bg-white p-3">
                            <img className="w-100" src={Story1.src} alt="" />
                        </div>
                    </div>
                    <div className="col-md-2">
                    <div className="shadow bg-white p-3"> 
                    <img className="w-100" src={Story2.src} alt="" />
                    </div> 
                    </div>
                    <div className="col-md-2">
                    <div className="shadow bg-white p-3"> 
                    <img className="w-100" src={Story3.src} alt="" />
                    </div> 
                    </div>
                </div>
            </div>
      </div>
    </>
  )
}

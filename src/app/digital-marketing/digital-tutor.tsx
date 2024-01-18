'use client'

import React from "react"; 
import Zaid from '../../../public/img/zaid.png';
import Karan from '../../../public/img/karan.png';
import Aman from '../../../public/img/aman.png';
import Rajan from '../../../public/img/rajan.png';
import C1 from '../../../public/img/cs1.png';
import C2 from '../../../public/img/cs2.png';
import C3 from '../../../public/img/cs3.png';
import C4 from '../../../public/img/cs4.png';
import C5 from '../../../public/img/cs5.png';
import C6 from '../../../public/img/cs6.png';

import '../home/course.css'

export default function Journey() {

 
  return (
    <>
 
    <div className=" bg-white mb-3">
        <div className="container-fluid mx-auto python-teacher p-5 mb-3">
        <h1 className="fs-3 font-bold mb-4 text-center">Our Expert Tutors</h1>
            <div className="row align-items-center">
                <div className="col-sm-6 col-6 col-md-4 col-lg-3 ">
                    <div className="shadow text-center text-white p-4">
                        <img className="mb-4" src={Zaid.src} alt=""/>
                        <h1 className="fs-4 m-0 text-dark font-bold">Mohd. Zaid</h1>
                        <p className="fs-6 p-0 m-0 text-dark">Digital Marketing Expert</p>
                    </div>
                </div>
                <div className="col-sm-6 col-6 col-md-4 col-lg-3">
                    <div className="shadow text-center text-white p-4 ">
                        <img className="mb-4" src={Karan.src} alt=""/>
                        <h1 className="fs-4 m-0 text-dark font-bold">Karanpreet</h1>
                        <p className="fs-6 p-0 m-0 text-dark">Social Media Expert</p>
                    </div>
                </div>

                <div className="col-sm-6 col-6 col-md-4 col-lg-3">
                    <div className="shadow text-center text-white p-4">
                        <img className="mb-4" src={Aman.src} alt=""/>
                        <h1 className="fs-4 m-0 text-dark font-bold">Aman</h1>
                        <p className="fs-6 p-0 m-0 text-dark">Graphic Design Expert</p>
                    </div>
                </div>

                <div className="col-sm-6 col-6 col-md-4 col-lg-3">
                    <div className="shadow text-center text-white p-4 ">
                        <img className="mb-4" src={Rajan.src} alt=""/>
                        <h1 className="fs-4 m-0 text-dark font-bold">Rajan</h1>
                        <p className="fs-6 p-0 m-0 text-dark">Facebook Ads Expert</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-fluid mx-auto python-teacher p-5 mb-3">
        <h1 className="fs-3 font-bold mb-4 text-center">Certified Students</h1>
            <div className="row align-items-center">
                <div className="col-sm-6 col-12 col-md-4 col-lg-4 ">
                    <div className="text-white p-4">
                        <img className="mb-4 border-grid" src={C1.src} alt=""/>
                      </div>
                </div>
                <div className="col-sm-6 col-12 col-md-4 col-lg-4 ">
                    <div className="text-white p-4 ">
                        <img className="mb-4 border-grid" src={C2.src} alt=""/>
                     </div>
                </div>

                <div className="col-sm-6 col-12 col-md-4 col-lg-4 ">
                    <div className="text-white p-4">
                        <img className="mb-4 border-grid" src={C3.src} alt=""/>
                    </div>
                </div>

                <div className="col-sm-6 col-12 col-md-4 col-lg-4 ">
                    <div className="text-white p-4">
                        <img className="mb-4 border-grid" src={C4.src} alt=""/>
                    </div>
                </div>

                <div className="col-sm-6 col-12 col-md-4 col-lg-4 ">
                    <div className="text-white p-4">
                        <img className="mb-4 border-grid" src={C5.src} alt=""/>
                    </div>
                </div>

                <div className="col-sm-6 col-12 col-md-4 col-lg-4 ">
                    <div className="text-white p-4">
                        <img className="mb-4 border-grid" src={C6.src} alt=""/>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
      
    </>
  )
}

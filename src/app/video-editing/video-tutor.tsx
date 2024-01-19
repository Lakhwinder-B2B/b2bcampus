'use client'

import React from "react"; 
import Aman from '../../../public/img/aman.png';
import Sahil from '../../../public/img/sahil.png';
import Reshab from '../../../public/img/reshab.png';
import Ashu from '../../../public/img/ashu.png';
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
                        <img className="mb-4" src={Aman.src} alt=""/>
                        <h1 className="fs-4 m-0 text-dark font-bold">Aman</h1>
                        <p className="fs-6 p-0 m-0 text-dark">Web Development Expert</p>
                    </div>
                </div>
                <div className="col-sm-6 col-6 col-md-4 col-lg-3">
                    <div className="shadow text-center text-white p-4 ">
                        <img className="mb-4" src={Sahil.src} alt=""/>
                        <h1 className="fs-4 m-0 text-dark font-bold">Sahil Solanki</h1>
                        <p className="fs-6 p-0 m-0 text-dark">Graphic & Video Expert</p>
                    </div>
                </div>

                <div className="col-sm-6 col-6 col-md-4 col-lg-3">
                    <div className="shadow text-center text-white p-4">
                        <img className="mb-4" src={Reshab.src} alt=""/>
                        <h1 className="fs-4 m-0 text-dark font-bold">Rishabh Dixit</h1>
                        <p className="fs-6 p-0 m-0 text-dark">Graphic & Video Expert</p>
                    </div>
                </div>

                <div className="col-sm-6 col-6 col-md-4 col-lg-3">
                    <div className="shadow text-center text-white p-4 ">
                        <img className="mb-4" src={Ashu.src} alt=""/>
                        <h1 className="fs-4 m-0 text-dark font-bold">Aashu Goswami</h1>
                        <p className="fs-6 p-0 m-0 text-dark">UX/UI Expert</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-fluid mx-auto python-teacher p-5 mb-3">
        <h1 className="fs-3 font-bold mb-4 text-center">Meet Our Certified Students</h1>
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

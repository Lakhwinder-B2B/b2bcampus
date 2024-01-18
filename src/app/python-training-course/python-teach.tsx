'use client'

import React from "react"; 
import Brijesh from '../../../public/img/brijesh-sir.png';
import Kajal from '../../../public/img/kajal.png';
import Priyanka from '../../../public/img/priyanka.png';
import Vikas from '../../../public/img/vikas-sir.png';
import PriyankaGrid from '../../../public/img/priyanka-grid.png';
import ManpreetGrid from '../../../public/img/manreet-grid.png';
import PriyankaGrid2 from '../../../public/img/priyanka-grid2.png';

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
                        <img className="mb-4" src={Brijesh.src} alt=""/>
                        <h1 className="fs-4 m-0 text-dark font-bold">Brijesh</h1>
                        <p className="fs-6 p-0 m-0 text-dark">Web Development Expert</p>
                    </div>
                </div>
                <div className="col-sm-6 col-6 col-md-4 col-lg-3">
                    <div className="shadow text-center text-white p-4 ">
                        <img className="mb-4" src={Kajal.src} alt=""/>
                        <h1 className="fs-4 m-0 text-dark font-bold">Kajal Arora</h1>
                        <p className="fs-6 p-0 m-0 text-dark">Web Development Expert</p>
                    </div>
                </div>

                <div className="col-sm-6 col-6 col-md-4 col-lg-3">
                    <div className="shadow text-center text-white p-4">
                        <img className="mb-4" src={Priyanka.src} alt=""/>
                        <h1 className="fs-4 m-0 text-dark font-bold">Priyanka</h1>
                        <p className="fs-6 p-0 m-0 text-dark">Web Development Expert</p>
                    </div>
                </div>

                <div className="col-sm-6 col-6 col-md-4 col-lg-3">
                    <div className="shadow text-center text-white p-4 ">
                        <img className="mb-4" src={Vikas.src} alt=""/>
                        <h1 className="fs-4 m-0 text-dark font-bold">Vikas</h1>
                        <p className="fs-6 p-0 m-0 text-dark">Web Development Expert</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-fluid mx-auto python-teacher p-5 mb-3">
        <h1 className="fs-3 font-bold mb-4 text-center">Meet Our Certified Students</h1>
            <div className="row align-items-center">
                <div className="col-sm-6 col-12 col-md-4 col-lg-4 ">
                    <div className="text-white p-4">
                        <img className="mb-4 border-grid" src={PriyankaGrid.src} alt=""/>
                      </div>
                </div>
                <div className="col-sm-6 col-12 col-md-4 col-lg-4 ">
                    <div className="text-white p-4 ">
                        <img className="mb-4 border-grid" src={ManpreetGrid.src} alt=""/>
                     </div>
                </div>

                <div className="col-sm-6 col-12 col-md-4 col-lg-4 ">
                    <div className="text-white p-4">
                        <img className="mb-4 border-grid" src={PriyankaGrid2.src} alt=""/>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
      
    </>
  )
}

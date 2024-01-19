'use client'

import React from "react"; 
import Zaid from '../../../public/img/zaid.png';
import Priyanka from '../../../public/img/priyanka.png';
import Reshab from '../../../public/img/reshab.png';
import Kajal from '../../../public/img/kajal.png';
import C1 from '../../../public/img/cs1.png';
import C2 from '../../../public/img/cs2.png';
import C3 from '../../../public/img/cs3.png';
import C4 from '../../../public/img/cs4.png';
import C5 from '../../../public/img/cs5.png';
import C6 from '../../../public/img/cs6.png';
import C7 from '../../../public/img/cs7.png';
import C8 from '../../../public/img/cs8.png';
import C9 from '../../../public/img/cs9.png';
import C10 from '../../../public/img/cs10.png';
import Manpreet from '../../../public/img/manreet-grid.png';
import Priyanka2 from '../../../public/img/priyanka-grid2.png';

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
                        <img className="mb-4" src={Priyanka.src} alt=""/>
                        <h1 className="fs-4 m-0 text-dark font-bold">Priyanka Banwal</h1>
                        <p className="fs-6 p-0 m-0 text-dark">Web Development Expert</p>
                    </div>
                </div>

                <div className="col-sm-6 col-6 col-md-4 col-lg-3">
                    <div className="shadow text-center text-white p-4">
                        <img className="mb-4" src={Kajal.src} alt=""/>
                        <h1 className="fs-4 m-0 text-dark font-bold">Kajal Arora</h1>
                        <p className="fs-6 p-0 m-0 text-dark">Web Development Expert</p>
                    </div>
                </div>

                <div className="col-sm-6 col-6 col-md-4 col-lg-3">
                    <div className="shadow text-center text-white p-4 ">
                        <img className="mb-4" src={Reshab.src} alt=""/>
                        <h1 className="fs-4 m-0 text-dark font-bold">Rishabh Dixit</h1>
                        <p className="fs-6 p-0 m-0 text-dark">Graphic & Video Expert</p>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-wrap justify-content-center mt-3">
                <button className="btn btn-outline-primary border_orange mt-4 m-0">Apply for Counselling</button>
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
                        <img className="mb-4 border-grid" src={Manpreet.src} alt=""/>
                     </div>
                </div>

                <div className="col-sm-6 col-12 col-md-4 col-lg-4 ">
                    <div className="text-white p-4">
                        <img className="mb-4 border-grid" src={Priyanka2.src} alt=""/>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
      
    </>
  )
}

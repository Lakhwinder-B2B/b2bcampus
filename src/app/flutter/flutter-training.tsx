'use client'

import React from "react"; 
import FlutterBanner from '../../../public/img/flutter-banner.png';
 
import '../home/course.css'

export default function Journey() {

 
  return (
    <>

        <div className="container-fluid flutter mx-auto p-0 ps-5 bg-python mb-3" style={{
                backgroundImage: `url(${FlutterBanner.src})`,
                width: '100%',
                height: '700px',
                display:'flex',
                alignItems: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover', 
                position: 'relative'
                }}>  
          
            <div className="row align-items-center m-0">
                <div className="col-md-7 text-white">
                    <h1 className="fs-3 font-bold mb-4">Key Highlights of Our Flutter Training Course</h1>
                    <ul className="order-list d-flex flex-wrap justify-content-start text-left">
                        <li className="pb-3 fs-6 w-100">Learn from industry professionals with hands-on experience</li>
                        <li className="pb-3 fs-6 w-100">Engage in interactive sessions, practical exercises, and real-world projects</li>
                        <li className="pb-3 fs-6 w-100">Flexible training options, including online and in-person, to accommodate your schedule</li>
                    </ul>
                    <div className="mt-3 text-center">
                        <button className='btn btn-outline-primary m-0'> Download Brochure </button>
                    </div>
                </div>
            </div>
        </div>

    <div className="p-5 pt-5 text-center bg-white">
        <div className="p-0">
            <h1 className="top_heading pb-4 fs-2 font-bold text-dark">Career Benefits of Pursuing Flutter Training Course</h1> 
            <div className="row video-training-grid">
                <div className="col-12 col-sm-6 col-md-3 mb-4">
                   <div className="our_box1 shadow radius-5 bg-white p-4 d-flex justify-content-between align-items-center">
                        <div className="col-flex text-left">
                            <span className="w-100 fs-5 mt-2 mb-4 d-flex flex-wrap font-bold">Versatile Cross-Platform Development</span>
                            <p className="our">Flutter training equips you to build apps for both Android and iOS with a single codebase. This streamlines development, reduces costs, and widens your target audience.</p>
                        </div> 
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-md-3 mb-4">
                    <div className="our_box1 shadow bg-white p-4 d-flex justify-content-between align-items-center">
                        <div className="col-flex">
                            <span className="w-100 fs-5 mt-2 d-flex flex-wrap mb-4 font-bold">Rapid App Prototyping</span>
                            <p className="our">Flutter&apos;s hot reload feature lets you quickly test and modify code, speeding up the development process. It&apos;s ideal for creating prototypes and iterating on app designs.</p>     
                        </div>
                        
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-md-3 mb-4">
                    <div className="our_box1 shadow bg-white p-4 d-flex justify-content-between align-items-center">
                        <div className="col-flex">
                            <span className="w-100 fs-5 mt-2 d-flex flex-wrap mb-4 font-bold">Rich UI Customization</span>
                            <p className="our">Gain the ability to craft visually appealing and highly customizable user interfaces using Flutter’s extensive widget library. Elevate user experiences and create standout apps.</p>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-md-3 mb-4">
                    <div className="our_box1 shadow bg-white p-4 d-flex justify-content-between align-items-center">
                        <div className="col-flex">
                            <span className="w-100 fs-5 mt-2 mb-4 d-flex flex-wrap font-bold">High Demand and Career Growth</span>
                            <p className="our">Flutter developers are in high demand, and this trend is set to continue. Completing a Flutter training course enhances your career prospects and opens doors to exciting job opportunities.</p>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
      
    </>
  )
}

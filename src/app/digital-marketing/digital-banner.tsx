'use client'

import React from "react"; 
import Coursepython from '../../../public/img/course.png';
import Tool1 from '../../../public/img/tool1.png';
import Tool2 from '../../../public/img/tool2.png';
import Tool3 from '../../../public/img/tool3.png';
import Tool4 from '../../../public/img/tool4.png';
import Tool5 from '../../../public/img/tool5.png';
import Tool6 from '../../../public/img/tool6.png';
import Tool7 from '../../../public/img/tool7.png';
import Tool8 from '../../../public/img/tool8.png';
import Tool9 from '../../../public/img/tool9.png';
import Tool10 from '../../../public/img/tool10.png';
import BDigital from '../../../public/img/banner-bg-digital.png';
import '../home/course.css'
import { revalidatePath } from "next/cache";

export default function Journey() {

 
  return (
    <>
 
    <div className="banner-python bg-white mb-0">
        <div className="container-fluid mx-auto p-0 ps-5 bg-python mb-3" style={{
      backgroundImage: `url(${BDigital.src})`,
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
                    <h1 className="fs-3 font-bold mb-4">Career Making Marketing Skills You Will Learn</h1>
                    <ul className="order-list d-flex flex-wrap justify-content-start text-left">
                        <li className="pb-3 fs-6 w-100">Search Engine Optimization (SEO):Optimizing website content to rank higher in search engine results.</li>
                        <li className="pb-3 fs-6 w-100">Social Media Marketing (SMM): Promoting brands and products through social media platforms for engagement.</li>
                        <li className="pb-3 fs-6 w-100">Content Marketing: Creating and distributing valuable content to attract and engage audiences.</li>
                        <li className="pb-3 fs-6 w-100">Pay-Per-Click (PPC): Online advertising model where advertisers pay for each click received.</li>
                        <li className="pb-3 fs-6 w-100">Email Marketing : Promoting products or services through targeted email campaigns.</li>
                    </ul>
                    <div className="mt-3 text-center">
                        <button className='btn btn-outline-primary m-0'> Download Brochure </button>
                    </div>
                </div>
                {/* <div className="col-md-5 p-0">
                    <img src={Coursepython.src} className="w-100" alt="" />
                </div> */}
            </div>
        </div>

        <div className="container-fluid mx-auto p-0 ps-5 mb-3">
            <div className="row align-items-center m-0">
                <div className="col-12 mt-5">
                    <h1 className="fs-3 font-bold mb-4 w-100 text-center">Digital Marketing Tools</h1>
                    <ul className="order-list tool-images list-inline d-flex flex-wrap justify-content-start text-left">
                        <li className="pb-2"><img src={Tool1.src} alt="" /></li>
                        <li className="pb-2"><img src={Tool2.src} alt="" /></li>
                        <li className="pb-2"><img src={Tool3.src} alt="" /></li>
                        <li className="pb-2"><img src={Tool4.src} alt="" /></li>
                        <li className="pb-2"><img src={Tool5.src} alt="" /></li>
                        <li className="pb-2"><img src={Tool6.src} alt="" /></li>
                        <li className="pb-2"><img src={Tool7.src} alt="" /></li>
                        <li className="pb-2"><img src={Tool8.src} alt="" /></li>
                        <li className="pb-2"><img src={Tool9.src} alt="" /></li>
                        <li className="pb-2"><img src={Tool10.src} alt="" /></li>
                       
                    </ul>
                </div>
               
            </div>
        </div>

        <div className="container-fluid mx-auto p-5 bg-white pb-5">
            <div className="row align-items-center shadow radius">
                <div className="col-md-9 text-dark">
                <h1 className="fs-3 font-bold mb-4">Who can pursue Digital MarketingTraining Course?</h1>
                    <ul className="order-list d-flex flex-wrap justify-content-start text-left">
                        <li className="pb-3 fs-6 w-100">Anyone seeking a prosperous career</li>
                        <li className="pb-3 fs-6 w-100">10+2 and Graduates can pursue digital marketing course</li>
                        <li className="pb-3 fs-6 w-100">Small business owners and merchants who want to promote their products and services on their own</li>
                    </ul>
                    <div className="mt-3 text-center">
                        <button className='btn btn-outline-primary m-0 brochure-btn'> Download Brochure </button>
                    </div>
                </div>
                <div className="col-md-3"  >
                    <img src={Coursepython.src} className="w-100" alt="" />
                </div>
                
            </div>
        </div>
        
    </div>
      
    </>
  )
}

'use client'

import React from "react"; 
import Our from '../../../public/img/ours.png';  
import Our1 from '../../../public/img/our1.png';  
import Our2 from '../../../public/img/our2.png';  
import Our3 from '../../../public/img/our3.png';  
import Line from '../../../public/img/line.png';  
import Future from '../../../public/img/Future.png';  

import '../home/course.css'

export default function Journey() {

 
  return (
    <>
 
      <div className="p-5 pt-5   text-center">
        <div className="p-0">
        <h1 className="top_heading pb-4 fs-2 font-bold text-white">Our Media Presence</h1> 
        <div className="row">
             <div className="col-md-3">
                <div className="shadow bg-white p-4 our_box">
                    <p className="our">Scoop Earth, a news Magzine has ranked number one to B2B Campus for providing the best graphic designing course in Chandigarh. This recognition highlights B2B Campus commitment to delivering unparalleled excellence in graphic designing education.</p>
                    <img src={Our.src} className="our_logo" alt="" />
                </div>
             </div>

             <div className="col-md-3">
                <div className="shadow bg-white p-4 our_box">
                    <p className="our">With their exceptional curriculum and industry-relevant training, B2B Campus sets the benchmark for web designing education in Chandigarh, as acknowledged by Time Business News prestigious ranking. </p>
                    <img src={Our1.src} className="our_logo" alt="" />
                </div>
             </div>

             <div className="col-md-3">
                <div className="shadow bg-white p-4 our_box">
                    <p className="our">B2B Campus secures the top spot for digital marketing courses in Chandigarh, according to leading news agency News Break. Their exceptional training is highlighted, focusing on delivering impactful and comprehensive education in the field. </p>
                    <img src={Our2.src} className="our_logo" alt="" />
                </div>
             </div>
             <div className="col-md-3">
                <div className="shadow bg-white p-4 our_box">
                    <p className="our">B2B Campus has been recognized as the leading institution for digital marketing courses in Mohali by Publicist News, demonstrating their expertise in delivering comprehensive and industry-focused training programs.</p>
                    <img src={Our3.src} className="our_logo" alt="" />
                </div>
             </div>
        </div>
        </div>
      </div>
      <div className="p-5 bg-white">
        <div className="p-5">
            <div className="text-center">
             <h1 className="top_heading pb-4">Voices of Success: Student Testimonials</h1> 
            <img src={Line.src} className="line_campus mb-5" alt="" />
            </div>
            <ul className="nav nav-pills mb-5 justify-content-center" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Graphic Design</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Web Development</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Digital Marketing</button>
              </li> 
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                <div className="row">           
                    <div className="col-md-6">
                      <div className="embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item w-100" src="https://www.youtube.com/embed/59K-fxaiOas" allowFullScreen  ></iframe>
                      </div>
                    </div>
                    <div className="col-md-6">
                        <div className="embed-responsive embed-responsive-16by9">
                          <iframe className="embed-responsive-item w-100" src="https://www.youtube.com/embed/57g_PY-bAvI" allowFullScreen  ></iframe>
                        </div>
                    </div> 
                </div>
              </div>
            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
            <div className="row">
                  <div className="col-md-6">
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe className="embed-responsive-item w-100" src="https://www.youtube.com/embed/mw7czS0khFc" allowFullScreen  ></iframe>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe className="embed-responsive-item w-100" src="https://www.youtube.com/embed/emiCZn1gwz4" allowFullScreen  ></iframe>
                    </div> 
                  </div>
              </div>
            </div>
            <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                <div className="row">
                  <div className="col-md-6">
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe className="embed-responsive-item w-100" src="https://www.youtube.com/embed/UXk6Rk7Mrys" allowFullScreen  ></iframe>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe className="embed-responsive-item w-100" src="https://www.youtube.com/embed/25D1b0YWwuI" allowFullScreen  ></iframe>
                    </div> 
                  </div>
                </div>
              </div> 
          </div>
        </div>
      </div>

      <div className="bg_gray_light">
            
                <div className="row w-100 align-items-center">
                    <div className="col-md-8">
                        <div className="p-5">
                        <h1 className="build_headig">Are You Ready To Build Your Future?</h1>
                        <p className="mt-4 mb-5 build">Talk to or WhatsApp us, and we’ll get back to you with everything you need for a successful career start.  </p>
                    
                    <div className="groupBtn d-flex position-relative">
                        <button className="btn btn-talk"><i className="fa fa-phone pr3" aria-hidden="true"></i> Talk To Us</button>
                        <span className="or"><strong>Or</strong></span>
                        <button className="btn btn-success"> <i className="fa fa-whatsapp pr3" aria-hidden="true"></i>  WhatsApp</button>
                    </div>
                    </div>
                    </div>
                    <div className="col-md-4">
                            <img src={Future.src} className="futureImg" alt="" />
                    </div>
                </div>
         
      </div>
    </>
  )
}

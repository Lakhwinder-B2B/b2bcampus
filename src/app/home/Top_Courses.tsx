'use client'

import React from "react"; 
import Top from '../../../public/img/top.png'; 
import Top1 from '../../../public/img/top1.png'; 
import Top2 from '../../../public/img/top2.png'; 
import Top3 from '../../../public/img/top3.png'; 
import Top4 from '../../../public/img/top4.png'; 
import Top5 from '../../../public/img/top5.png'; 
import Top6 from '../../../public/img/top6.png'; 
import Top7 from '../../../public/img/top7.png'; 
import Top8 from '../../../public/img/top8.png'; 
import Top9 from '../../../public/img/top9.png'; 
import Top10 from '../../../public/img/top10.png'; 
import Top11 from '../../../public/img/top11.png'; 
import Top12 from '../../../public/img/top12.png'; 
import Top13 from '../../../public/img/top13.png'; 
import Top14 from '../../../public/img/top14.png'; 
import Crash from '../../../public/img/crash.png'; 
import Crash1 from '../../../public/img/crash1.png'; 
import Crash2 from '../../../public/img/crash2.png'; 
import Crash3 from '../../../public/img/crash3.png'; 

import '../home/course.css'

export default function Home() {

 
  return (
    <>
 
      <div className="p-5 pt-5 bg-white">
        <h2 className="mb-4 top_heading">Top Courses</h2>
            <div className="row">
                <div className="col-md-3 mb-5">
                    <div className="box_course position-relative">
                        <img src={Top.src} className="courseImg w-100" alt="" />
                        <div className="desc_data">
                            <div className="d-flex justify-content-between align-items-center mb-3"> 
                                <div className="ribbon"><span> Development</span></div> 
                                <span className="bgGreen"><i className="fa fa-circle mr-3" aria-hidden="true"></i> Development</span>
                                <span><i className="fa fa-clock-o mr-2" aria-hidden="true"></i> 3 Months</span>
                                </div>
                                <h5>React Native Course</h5>
                                <ul className="feature">
                                    <li>JavaScript and React Fundamentals</li>
                                    <li>State Management</li>
                                    <li>Native Modules and APIs</li>
                                    <li>Third-Party Libraries and Plugins</li>
                                    <li>100% Job Assistance</li>
                                </ul> 
                        </div>
                        <div className="footer_btn">
                                    <button className="btn btn-view">View Program</button>
                                    <button className="btn btn-enroll">Enroll Now</button>
                                </div>
                    </div>
                </div>

                <div className="col-md-3 mb-5">
                    <div className="box_course position-relative">
                        <img src={Top1.src} className="courseImg w-100" alt="" />
                        <div className="desc_data">
                            <div className="d-flex justify-content-between align-items-center mb-3"> 
                                <div className="ribbon"><span> Editing</span></div> 
                                <span className="bgGreen"><i className="fa fa-circle mr-3" aria-hidden="true"></i> Editing</span>
                                <span><i className="fa fa-clock-o mr-2" aria-hidden="true"></i> 3 Months</span>
                                </div>
                                <h5>Video Editing Course</h5>
                                <ul className="feature">
                                    <li>Learn from Professional Video Editors</li>
                                    <li>Understanding of storytelling</li>
                                    <li>Certification after course completion</li>
                                    <li>Color correction and grading</li>
                                    <li>100% Job Assistance</li>
                                </ul> 
                        </div>
                        <div className="footer_btn">
                                    <button className="btn btn-view">View Program</button>
                                    <button className="btn btn-enroll">Enroll Now</button>
                                </div>
                    </div>
                </div>

                <div className="col-md-3 mb-5">
                    <div className="box_course position-relative">
                        <img src={Top2.src} className="courseImg w-100" alt="" />
                        <div className="desc_data">
                            <div className="d-flex justify-content-between align-items-center mb-3"> 
                                <div className="ribbon"><span> Development</span></div> 
                                <span className="bgGreen"><i className="fa fa-circle mr-3" aria-hidden="true"></i> Development</span>
                                <span><i className="fa fa-clock-o mr-2" aria-hidden="true"></i> 3 Months</span>
                                </div>
                                <h5>Flutter Training Course</h5>
                                <ul className="feature">
                                    <li>Widget Creation</li>
                                    <li>UI Design</li>
                                    <li>Cross-Platform Development</li>
                                    <li>Animations</li>
                                    <li>REST API Integration</li>
                                </ul> 
                        </div>
                        <div className="footer_btn">
                                    <button className="btn btn-view">View Program</button>
                                    <button className="btn btn-enroll">Enroll Now</button>
                                </div>
                    </div>
                </div>

                <div className="col-md-3 mb-5">
                    <div className="box_course position-relative">
                        <img src={Top3.src} className="courseImg w-100" alt="" />
                        <div className="desc_data">
                            <div className="d-flex justify-content-between align-items-center mb-3"> 
                                <div className="ribbon"><span> Development</span></div> 
                                <span className="bgGreen"><i className="fa fa-circle mr-3" aria-hidden="true"></i> Development</span>
                                <span><i className="fa fa-clock-o mr-2" aria-hidden="true"></i> 3 Months</span>
                                </div>
                                <h5>Web Designing Course</h5>
                                <ul className="feature">
                                    <li>Learn web development fundamentals</li>
                                    <li>Develop real-world coding skills</li>
                                    <li>Access coding resources & guidance</li>
                                    <li>Build a strong portfolio</li>
                                    <li>100% Job Assistance</li>
                                </ul> 
                        </div>
                        <div className="footer_btn">
                                    <button className="btn btn-view">View Program</button>
                                    <button className="btn btn-enroll">Enroll Now</button>
                                </div>
                    </div>
                </div>

                <div className="col-md-3 mb-5">
                    <div className="box_course position-relative">
                        <img src={Top4.src} className="courseImg w-100" alt="" />
                        <div className="desc_data">
                            <div className="d-flex justify-content-between align-items-center mb-3"> 
                                <div className="ribbon"><span> Design</span></div> 
                                <span className="bgGreen"><i className="fa fa-circle mr-3" aria-hidden="true"></i> Design</span>
                                <span><i className="fa fa-clock-o mr-2" aria-hidden="true"></i> 3 Months</span>
                                </div>
                                <h5>Graphic-Design Course</h5>
                                <ul className="feature">
                                    <li>Learn key graphic design skills</li>
                                    <li>Gain hands-on experience</li>
                                    <li>Access graphic resources</li>
                                    <li>Build a strong portfolio</li>
                                    <li>100% Job Assistance</li>
                                </ul> 
                        </div>
                        <div className="footer_btn">
                                    <button className="btn btn-view">View Program</button>
                                    <button className="btn btn-enroll">Enroll Now</button>
                                </div>
                    </div>
                </div>
                <div className="col-md-3 mb-5">
                    <div className="box_course position-relative">
                        <img src={Top5.src} className="courseImg w-100" alt="" />
                        <div className="desc_data">
                            <div className="d-flex justify-content-between align-items-center mb-3"> 
                                <div className="ribbon"><span> Digital</span></div> 
                                <span className="bgGreen"><i className="fa fa-circle mr-3" aria-hidden="true"></i> Digital Marketing</span>
                                <span><i className="fa fa-clock-o mr-2" aria-hidden="true"></i> 3 Months</span>
                                </div>
                                <h5>Digital Marketing Course</h5>
                                <ul className="feature">
                                    <li>Learn digital marketing strategies</li>
                                    <li>Develop real-world skills</li>
                                    <li>Access digital marketing resources</li>
                                    <li>Build a strong portfolio</li>
                                    <li>100% Job Assistance</li>
                                </ul> 
                        </div>
                        <div className="footer_btn">
                                    <button className="btn btn-view">View Program</button>
                                    <button className="btn btn-enroll">Enroll Now</button>
                                </div>
                    </div>
                </div>
                <div className="col-md-3 mb-5">
                    <div className="box_course position-relative">
                        <img src={Top6.src} className="courseImg w-100" alt="" />
                        <div className="desc_data">
                            <div className="d-flex justify-content-between align-items-center mb-3"> 
                                <div className="ribbon"><span> Development</span></div> 
                                <span className="bgGreen"><i className="fa fa-circle mr-3" aria-hidden="true"></i> Development</span>
                                <span><i className="fa fa-clock-o mr-2" aria-hidden="true"></i> 3 Months</span>
                                </div>
                                <h5>Full Stack Developer – MERN Stack</h5>
                                <ul className="feature">
                                    <li>Front-End Web Development</li>
                                    <li>Back-End Programming</li>
                                    <li>Database Management</li>
                                    <li>Problem-Solving Skills</li> 
                                    <li>100% Job Assistance</li>
                                </ul> 
                        </div>
                        <div className="footer_btn">
                                    <button className="btn btn-view">View Program</button>
                                    <button className="btn btn-enroll">Enroll Now</button>
                                </div>
                    </div>
                </div>
                <div className="col-md-3 mb-5">
                    <div className="box_course position-relative">
                        <img src={Top7.src} className="courseImg w-100" alt="" />
                        <div className="desc_data">
                            <div className="d-flex justify-content-between align-items-center mb-3"> 
                                <div className="ribbon"><span> Development</span></div> 
                                <span className="bgGreen"><i className="fa fa-circle mr-3" aria-hidden="true"></i> Development</span>
                                <span><i className="fa fa-clock-o mr-2" aria-hidden="true"></i> 3 Months</span>
                                </div>
                                <h5>Web Development Course</h5>
                                <ul className="feature">
                                    <li>Basics of web development</li>
                                    <li>Gain real-world coding skills</li>
                                    <li>Get coding resources and advice</li>
                                    <li>Build a strong portfolio</li> 
                                    <li>100% Job Assistance</li>
                                </ul> 
                        </div>
                        <div className="footer_btn">
                                    <button className="btn btn-view">View Program</button>
                                    <button className="btn btn-enroll">Enroll Now</button>
                                </div>
                    </div>
                </div>


                <div className="col-md-3 mb-5">
                    <div className="box_course position-relative">
                        <img src={Top8.src} className="courseImg w-100" alt="" />
                        <div className="desc_data">
                            <div className="d-flex justify-content-between align-items-center mb-3"> 
                                <div className="ribbon"><span> Artificial</span></div> 
                                <span className="bgGreen"><i className="fa fa-circle mr-3" aria-hidden="true"></i> Artificial</span>
                                <span><i className="fa fa-clock-o mr-2" aria-hidden="true"></i> 3 Months</span>
                                </div>
                                <h5>Artificial Intelligence Course</h5>
                                <p>Get a AI Fundamentals & Machine Learning Mastery</p>
                                
                        </div>
                        <div className="footer_btn">
                                    <button className="btn btn-view">View Program</button>
                                    <button className="btn btn-enroll">Enroll Now</button>
                                </div>
                    </div>
                </div>

                <div className="col-md-3 mb-5">
                    <div className="box_course position-relative">
                        <img src={Top9.src} className="courseImg w-100" alt="" />
                        <div className="desc_data">
                            <div className="d-flex justify-content-between align-items-center mb-3"> 
                                <div className="ribbon"><span> Development</span></div> 
                                <span className="bgGreen"><i className="fa fa-circle mr-3" aria-hidden="true"></i> Development</span>
                                <span><i className="fa fa-clock-o mr-2" aria-hidden="true"></i> 3 Months</span>
                                </div>
                                <h5>Python Course</h5>
                                <ul className="feature">
                                    <li>Master Python Basics</li>
                                    <li>Data Structure Knowledge</li>
                                    <li>Control Flow Mastery</li>
                                    <li>OOP Concepts</li> 
                                    <li>Error Handling</li>
                                </ul> 
                                
                        </div>
                        <div className="footer_btn">
                                    <button className="btn btn-view">View Program</button>
                                    <button className="btn btn-enroll">Enroll Now</button>
                                </div>
                    </div>
                </div>
                <div className="col-md-3 mb-5">
                    <div className="box_course position-relative">
                        <img src={Top10.src} className="courseImg w-100" alt="" />
                        <div className="desc_data">
                            <div className="d-flex justify-content-between align-items-center mb-3"> 
                                <div className="ribbon"><span> Development</span></div> 
                                <span className="bgGreen"><i className="fa fa-circle mr-3" aria-hidden="true"></i> Development</span>
                                <span><i className="fa fa-clock-o mr-2" aria-hidden="true"></i> 3 Months</span>
                                </div>
                                <h5>Laravel Course</h5>
                                <ul className="feature">
                                    <li>Master Laravel Framework</li>
                                    <li>Hands-on Projects</li>
                                    <li>Database and ORM</li>
                                    <li>API Development</li> 
                                    <li>MVC Architecture</li>
                                </ul> 
                                
                        </div>
                        <div className="footer_btn">
                                    <button className="btn btn-view">View Program</button>
                                    <button className="btn btn-enroll">Enroll Now</button>
                                </div>
                    </div>
                </div>
                <div className="col-md-3 mb-5">
                    <div className="box_course position-relative">
                        <img src={Top11.src} className="courseImg w-100" alt="" />
                        <div className="desc_data">
                            <div className="d-flex justify-content-between align-items-center mb-3"> 
                                <div className="ribbon"><span> Node JS</span></div> 
                                <span className="bgGreen"><i className="fa fa-circle mr-3" aria-hidden="true"></i> Node JS</span>
                                <span><i className="fa fa-clock-o mr-2" aria-hidden="true"></i> 3 Months</span>
                                </div>
                                <h5>Node JS Course </h5>
                                <p>Become a Node.js expert with our certification course</p>
                                
                        </div>
                        <div className="footer_btn">
                                    <button className="btn btn-view">View Program</button>
                                    <button className="btn btn-enroll">Enroll Now</button>
                                </div>
                    </div>
                </div>

                <div className="col-md-3 mb-5">
                    <div className="box_course position-relative">
                        <img src={Top12.src} className="courseImg w-100" alt="" />
                        <div className="desc_data">
                            <div className="d-flex justify-content-between align-items-center mb-3"> 
                                <div className="ribbon"><span> Development</span></div> 
                                <span className="bgGreen"><i className="fa fa-circle mr-3" aria-hidden="true"></i> Development</span>
                                <span><i className="fa fa-clock-o mr-2" aria-hidden="true"></i> 3 Months</span>
                                </div>
                                <h5>Shopify Theme Development Course </h5>
                                <p>Learn to design and develop user friendly Shopify stores</p>
                                
                        </div>
                        <div className="footer_btn">
                                    <button className="btn btn-view">View Program</button>
                                    <button className="btn btn-enroll">Enroll Now</button>
                                </div>
                    </div>
                </div>
                <div className="col-md-3 mb-5">
                    <div className="box_course position-relative">
                        <img src={Top13.src} className="courseImg w-100" alt="" />
                        <div className="desc_data">
                            <div className="d-flex justify-content-between align-items-center mb-3"> 
                                <div className="ribbon"><span> Development</span></div> 
                                <span className="bgGreen"><i className="fa fa-circle mr-3" aria-hidden="true"></i> Development</span>
                                <span><i className="fa fa-clock-o mr-2" aria-hidden="true"></i> 3 Months</span>
                                </div>
                                <h5>React JS Course </h5>
                                <p>Join the React js revolution with our certification program</p>
                                
                        </div>
                        <div className="footer_btn">
                                    <button className="btn btn-view">View Program</button>
                                    <button className="btn btn-enroll">Enroll Now</button>
                                </div>
                    </div>
                </div>
                <div className="col-md-3 mb-5">
                    <div className="box_course position-relative">
                        <img src={Top14.src} className="courseImg w-100" alt="" />
                        <div className="desc_data">
                            <div className="d-flex justify-content-between align-items-center mb-3"> 
                                <div className="ribbon"><span> Development</span></div> 
                                <span className="bgGreen"><i className="fa fa-circle mr-3" aria-hidden="true"></i> Development</span>
                                <span><i className="fa fa-clock-o mr-2" aria-hidden="true"></i> 3 Months</span>
                                </div>
                                <h5>Data Science Course</h5>
                                <ul className="feature">
                                    <li>Fundamentals of Python Programming</li>
                                    <li>Data Analysis and Visualization </li>
                                    <li>Machine Learning with Scikit-Learn</li>
                                    <li>Deep Learning with TensorFlow</li> 
                                    <li>Project-Based Learning</li>
                                </ul> 
                                
                        </div>
                        <div className="footer_btn">
                                    <button className="btn btn-view">View Program</button>
                                    <button className="btn btn-enroll">Enroll Now</button>
                                </div>
                    </div>
                </div>

            </div>

            <div className="row mt-5">
            <h2 className="mb-4 top_heading">Crash Courses (45-days Course)</h2>

            <div className="col-md-3 mb-5">
                    <div className="box_course position-relative">
                        <img src={Crash.src} className="courseImg w-100" alt="" />
                        <div className="desc_data">
                            <div className="d-flex justify-content-between align-items-center mb-3"> 
                                <div className="ribbon"><span> Crash</span></div> 
                                <span className="bgGreen"><i className="fa fa-circle mr-3" aria-hidden="true"></i> Crash Course</span> 
                                </div>
                                <h5>Mathematics – III Course </h5>
                                <p>Enhance math expertise – achieve success with our course!</p>
                                
                        </div>
                        <div className="footer_btn">
                                    <button className="btn btn-view">View Program</button>
                                    <button className="btn btn-enroll">Enroll Now</button>
                                </div>
                    </div>
                </div>

                <div className="col-md-3 mb-5">
                    <div className="box_course position-relative">
                        <img src={Crash1.src} className="courseImg w-100" alt="" />
                        <div className="desc_data">
                            <div className="d-flex justify-content-between align-items-center mb-3"> 
                                <div className="ribbon"><span> Crash</span></div> 
                                <span className="bgGreen"><i className="fa fa-circle mr-3" aria-hidden="true"></i> Crash Course</span> 
                                </div>
                                <h5>Discrete Mathematics Course </h5>
                                <p>Enhance logical reasoning – enroll in our <br /> course!</p>
                                
                        </div>
                        <div className="footer_btn">
                                    <button className="btn btn-view">View Program</button>
                                    <button className="btn btn-enroll">Enroll Now</button>
                                </div>
                    </div>
                </div>

                <div className="col-md-3 mb-5">
                    <div className="box_course position-relative">
                        <img src={Crash2.src} className="courseImg w-100" alt="" />
                        <div className="desc_data">
                            <div className="d-flex justify-content-between align-items-center mb-3"> 
                                <div className="ribbon"><span> Crash</span></div> 
                                <span className="bgGreen"><i className="fa fa-circle mr-3" aria-hidden="true"></i> Crash Course</span> 
                                </div>
                                <h5>Data Structures and Algorithms</h5>
                                <p>Solve complex problems – learn Data Structures and Algorithms!</p>
                                
                        </div>
                        <div className="footer_btn">
                                    <button className="btn btn-view">View Program</button>
                                    <button className="btn btn-enroll">Enroll Now</button>
                                </div>
                    </div>
                </div>

                <div className="col-md-3 mb-5">
                    <div className="box_course position-relative">
                        <img src={Crash3.src} className="courseImg w-100" alt="" />
                        <div className="desc_data">
                            <div className="d-flex justify-content-between align-items-center mb-3"> 
                                <div className="ribbon"><span> Crash</span></div> 
                                <span className="bgGreen"><i className="fa fa-circle mr-3" aria-hidden="true"></i> Crash Course</span> 
                                </div>
                                <h5>Learn C and C++ Programming</h5>
                                <p>Learn C and C++ to become a master <br /> coder!</p>
                                
                        </div>
                        <div className="footer_btn">
                                    <button className="btn btn-view">View Program</button>
                                    <button className="btn btn-enroll">Enroll Now</button>
                                </div>
                    </div>
                </div>
            </div>
      </div>
    </>
  )
}

'use client'

import React from "react"; 
import Campus from '../../../public/img/c1.png';  
import Campus1 from '../../../public/img/c2.png';  
import Campus2 from '../../../public/img/c3.png';  
import Campus3 from '../../../public/img/c4.png';  
import Campus4 from '../../../public/img/c5.png';  
import Campus5 from '../../../public/img/c6.png';  
import Campus6 from '../../../public/img/c7.png';  
import Campus7 from '../../../public/img/c8.png';  
import Line from '../../../public/img/line.png'; 

import User1 from '../../../public/img/user1.png';    
import User2 from '../../../public/img/user2.png';    
import User3 from '../../../public/img/user3.png';    
import User4 from '../../../public/img/user4.png'; 

import About from '../../../public/img/about-campus.png'; 

import '../home/course.css'

export default function Journey() {

 
  return (
    <>
 
      <div className="p-5 pt-5 bg-white">
        <div className="p-5">
        <h1 className="top_heading text-center pb-4">Why B2B Campus ?</h1>
           <img src={Line.src} className="line_campus mb-5" alt="" />
        <div className="row">
          <div className="col-md-3 mb-5">
            <div className="box_campus">
                <img src={Campus.src} alt="" />
                <h4>Become an Industry-Certified Experts</h4>
            </div>
          </div>

          <div className="col-md-3 mb-5">
            <div className="box_campus">
                <img src={Campus1.src} alt="" />
                <h4>1:1 Mentoring Session with Trainers</h4>
            </div>
          </div>

          <div className="col-md-3 mb-5">
            <div className="box_campus">
                <img src={Campus2.src} alt="" />
                <h4>Syllabus curated by Real World Experts</h4>
            </div>
          </div>

          <div className="col-md-3 mb-5">
            <div className="box_campus">
                <img src={Campus3.src} alt="" />
                <h4>Flexible learning program</h4>
            </div>
          </div>

          <div className="col-md-3 mb-5">
            <div className="box_campus">
                <img src={Campus4.src} alt="" />
                <h4>Craft a Winning Resume with Customised Feedback</h4>
            </div>
          </div>

          <div className="col-md-3 mb-5">
            <div className="box_campus">
                <img src={Campus5.src} alt="" />
                <h4>Interview Preparation with Hiring Expert</h4>
            </div>
          </div>

          <div className="col-md-3 mb-5">
            <div className="box_campus">
                <img src={Campus6.src} alt="" />
                <h4>Master 20+ Core Digital Marketing Tools</h4>
            </div>
          </div>
          <div className="col-md-3 mb-5">
            <div className="box_campus">
                <img src={Campus7.src} alt="" />
                <h4>No Prior Experience /Knowledge required</h4>
            </div>
          </div>
        </div>
        </div>

        <div className="p-5">
        <h1 className="top_heading text-center pb-4">Our Expert Tutors</h1>
           <img src={Line.src} className="line_campus mb-5" alt="" />
       
       <div className="row">
        <div className="col-md-3">
            <div className="user_box">
                <img className="user" src={User1.src} alt="" />
                <h2 className="userName">Mohd. Zaid</h2>
                <p className="profile_name">Digital Marketing Expert</p>
            </div>
        </div>
        <div className="col-md-3">
            <div className="user_box">
                <img className="user" src={User2.src} alt="" />
                <h2 className="userName">Priyanka Banwal</h2>
                <p className="profile_name">Web Development Expert</p>
            </div>
        </div>
        <div className="col-md-3">
            <div className="user_box">
                <img className="user" src={User3.src} alt="" />
                <h2 className="userName">Kajal Arora</h2>
                <p className="profile_name">Web Development Expert</p>
            </div>
        </div>
        <div className="col-md-3">
            <div className="user_box">
                <img className="user" src={User4.src} alt="" />
                <h2 className="userName">Rishabh Dixit</h2>
                <p className="profile_name">Graphic & Video Expert</p>
            </div>
        </div>
        <button className="btn btn-outline-primary border_orange"> <i className="fa fa-hand-o-right fs-4 hide_ic mr-5" aria-hidden="true"></i> Apply for Counselling </button>
       </div>
        </div> 
      </div>

      <div className="p-5 ">
        <div className="p-5">
        <div className="row align-items-center">
            <div className="col-md-7 text-white">
                <h2>About B2B Campus</h2>
                <p className="about_desc">B2B Campus is the world’s standard of excellence in IT Certification Courses. Our aim is to assist aspirants to achieve their goals in learning and assist them in achieving their potential.</p>
                <p className="about_desc">At B2B Campus, we give you a positive learning environment with the aid of our knowledgeable instructors and thorough curriculum. Feel free to make an inquiry.</p>
          <div className="mt-5">
           <button className="btn btn-outline-primary border_orange m-0"> <i className="fa fa-hand-o-right fs-4 hide_ic mr-5" aria-hidden="true"></i> Apply for Counselling </button>
           </div>
            </div>
            <div className="col-md-5">
                <img src={About.src} className="w-100"  alt="" />
            </div>
            </div>
        </div>
      </div>
    </>
  )
}

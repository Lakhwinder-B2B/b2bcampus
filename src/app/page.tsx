'use client'

import React from "react";
import Header from '../../component/header'
import Footer from '../../component/footer'
import Skill from '../../public/img/skill0.png';
import Skill1 from '../../public/img/skill.png';
import Skill2 from '../../public/img/skill1.png'; 
import Skill3 from '../../public/img/skill2.png';
import Skill4 from '../../public/img/skill3.png';
import Skill5 from '../../public/img/skill4.png';
import Skill6 from '../../public/img/skill5.png';
import Slider from "react-slick";
import Typewriter from 'typewriter-effect';
import TopCourses from '../app/home/Top_Courses';
import Journey from '../app/home/journey ';
import Campus from '../app/home/Campus ';
import Placement from '../app/home/Placement ';
import Certified from '../app/home/Certified';
import OurMedia from '../app/home/OurMedia';


export default function Home() {

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>

      <Header />
      <div className="bg_home">
        <div className="container-fluid mx-auto p-5">
          <div className="row ">

            <div className="col-md-8 pt-5 mt-5"  >
              <h1 className="text_heading"><span className="text_primary">Top Rated Certificate Courses</span> to Get Recruited and Start Earning</h1>
              <p className='text-white mt-5 desc_course'>Invest in your future with a certificate course, leading to career advancement and increased earning potential. Gain soft skills and industry connections through mentorship and networking opportunities</p>
              <div className="mt-5 text-center">
                <button className='btn btn-outline-primary m-0'> <i className="fa fa-hand-o-right fs-4 hide_ic mr-5" aria-hidden="true"></i> Apply for Counselling </button>
              </div>
            </div>
            <div className="col-md-4"  >
              <div className="message_box">
                <h2>Question?Concerns?</h2>
                <p>We are here to help you with anything!</p>
                <form action="">
                  <div className="input-group mb-4">
                  <input type="text" placeholder="Name" className="form-control" />
                  </div>
                  <div className="input-group mb-4"> 
                  <input type="number" placeholder="Phone No" className="form-control" />
                  </div>
                  <div className="input-group mb-4">
                  <input type="text" placeholder="Email" className="form-control" />
                  </div>
                  <div className="input-group mb-4">
                  <textarea name="" id="" className="form-control" placeholder="Message" ></textarea>
                    </div>
                  <div className="input-group mb-4"> 
                  <select className="form-control" aria-invalid="false" name="SelectCourse">
                    <option value="Choose a Course">Choose a Course</option>
                    <option value="Graphic Designing">Graphic Designing</option>
                    <option value="Web Designing">Web Designing</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Python">Python</option>
                    <option value="Php">Php</option>
                    <option value="React.JS">React.JS</option>
                    <option value="Node.JS">Node.JS</option>
                    <option value="Data Science">Data Science</option>
                    <option value="WordPress">WordPress</option>
                    <option value="Shopify Theme Development">Shopify Theme Development</option>
                    <option value="Shopify App Development">Shopify App Development</option>
                    <option value="Laravel">Laravel</option>
                    <option value="MERN Stack">MERN Stack</option>
                    <option value="Fright Broker">Fright Broker</option>
                    <option value="C++">C &amp; C++</option>
                    <option value="Data Structure and Algorithms">Data Structure and Algorithms</option>
                    <option value="Discrete Mathematics">Discrete Mathematics</option>
                    <option value="Mathematics-III">Mathematics-III</option>
                    </select>
                    </div>
                    <button className="book_btn w-100 Form_Message">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="p-5 bg_Gray" >
          <div className="row align-items-center">
            <div className="col-md-5">
              <h2 className="skill_Header">Gaining professional skills is 
              what we help our students 
              achieve</h2>
            </div>
            <div className="col-md-7">
            <Slider {...settings} className="w-100">
            <div>
              <img src={Skill.src} className='social_logo' />
            </div>
           
            <div>
              <img src={Skill1.src} className='social_logo' />
            </div>
            <div>
              <img src={Skill2.src} className='social_logo' />
            </div>
            <div>
              <img src={Skill3.src} className='social_logo' />
            </div>
            <div>
              <img src={Skill4.src} className='social_logo' />
            </div>
            <div>
              <img src={Skill5.src} className='social_logo' />
            </div>
            <div>
              <img src={Skill6.src} className='social_logo' />
            </div>
          </Slider>
            </div>
          </div>
       
        </div>
        <TopCourses />
        <Journey />
        <Campus />
        <Placement />
        <Certified />
        <OurMedia />
        <Footer />
      </div>
    </>
  )
}

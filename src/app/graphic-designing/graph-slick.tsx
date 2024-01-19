'use client'
import { useEffect } from 'react';

import React from "react"; 
import GSlick1 from '../../../public/img/g-slick1.png';
import GSlick2 from '../../../public/img/g-slick2.png';
import GSlick3 from '../../../public/img/g-slick3.png';
import GSlick4 from '../../../public/img/g-slick4.png';
import GSlick5 from '../../../public/img/g-slick5.png';
import GSlick6 from '../../../public/img/g-slick6.png';
import GSlick7 from '../../../public/img/g-slick7.png';
import GSlick8 from '../../../public/img/g-slick8.png';
import Ai from '../../../public/img/ai.png';
import Psd from '../../../public/img/psd.png';
import Soft1 from '../../../public/img/soft1.png';
import Soft2 from '../../../public/img/soft2.png';
import Soft3 from '../../../public/img/soft3.png';
import Soft4 from '../../../public/img/soft4.png';
import Soft5 from '../../../public/img/soft5.png';
import Soft6 from '../../../public/img/soft6.png';
import Pr from '../../../public/img/pr.png';
import Soft7 from '../../../public/img/soft7.png';

import Slider from "react-slick";

export default function ProjectSlick() {
    const settings = {
        dots: false,
        arrows: false, 
        speed: 500,
        centerMode: true,
        slidesToShow: 4,  
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
  

  return (
    <>  
<div className="p-5 tab-bg"> 
    <div className="graphic-slicker"> 
        <div className="text-center text-white mb-5">
            <h2>Explore Our Students’ Amazing Work</h2>
        </div>
        <Slider {...settings} className="slider video-slick">
            <div className="d-flex flex-wrap justify-content-center">
                <img src={GSlick1.src} className='slider__item' /> 
            </div>
            <div className="d-flex flex-wrap justify-content-center">
                <img src={GSlick2.src} className='slider__item' /> 
            </div>
            <div className="d-flex flex-wrap justify-content-center">
                <img src={GSlick3.src} className='slider__item' /> 
            </div>
            <div className="d-flex flex-wrap justify-content-center">
                <img src={GSlick4.src} className='slider__item' /> 
            </div>
            <div className="d-flex flex-wrap justify-content-center">
                <img src={GSlick5.src} className='slider__item' /> 
            </div>
            <div className="d-flex flex-wrap justify-content-center">
                <img src={GSlick6.src} className='slider__item' /> 
            </div>
            <div className="d-flex flex-wrap justify-content-center">
                <img src={GSlick7.src} className='slider__item' /> 
            </div>
            <div className="d-flex flex-wrap justify-content-center">
                <img src={GSlick8.src} className='slider__item' /> 
            </div>
        </Slider> 
        <div className="d-flex flex-wrap justify-content-center">
            <button className="btn btn-outline-primary border_orange mt-4 m-0">Apply for Counselling</button>
        </div>
    </div>
</div>

<div className='tools pt-5 pb-5'>
    <div className="text-center mb-5 container-fluid">
        <h2>Graphic Design Tools You will Work On</h2>
    </div>
    <div className='d-flex flex-wrap justify-content-center container-fluid'>
        <div className='tool-img'>
            <img src={Ai.src} alt="" />
        </div>
        <div className='tool-img'>
            <img src={Psd.src} alt="" />
        </div>
        <div className='tool-img'>
            <img src={Soft1.src} alt="" />
        </div>
        <div className='tool-img'>
            <img src={Soft2.src} alt="" />
        </div>
        <div className='tool-img'>
            <img src={Soft3.src} alt="" />
        </div>
        <div className='tool-img'>
            <img src={Soft4.src} alt="" />
        </div>
        <div className='tool-img'>
            <img src={Soft5.src} alt="" />
        </div>
        <div className='tool-img'>
            <img src={Pr.src} alt="" />
        </div>
        <div className='tool-img'>
            <img src={Soft6.src} alt="" />
        </div>
        <div className='tool-img'>
            <img src={Soft7.src} alt="" />
        </div>
    </div>
</div>
</>
)
}
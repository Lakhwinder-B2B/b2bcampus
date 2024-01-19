'use client'
import { useEffect } from 'react';

import React from "react"; 
import Gif1 from '../../../public/img/gif1.gif';
import Gif2 from '../../../public/img/gif2.gif';
import Gif3 from '../../../public/img/gif3.gif';
import Gif4 from '../../../public/img/gif4.gif';
import Gif5 from '../../../public/img/gif5.png';
import Ai from '../../../public/img/ai.png';
import Psd from '../../../public/img/psd.png';
import Vn from '../../../public/img/vn.png';
import Ae from '../../../public/img/ae.png';
import Pr from '../../../public/img/pr.png';

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
    <div className="tab-slicker"> 
        <div className="text-center text-white mb-5">
            <h2>Student’s Work</h2>
        </div>
        <Slider {...settings} className="slider video-slick">
            <div className="d-flex flex-wrap justify-content-center">
                <img src={Gif1.src} className='slider__item' /> 
            </div>
            <div className="d-flex flex-wrap justify-content-center">
                <img src={Gif2.src} className='slider__item' /> 
            </div>
            <div className="d-flex flex-wrap justify-content-center">
                <img src={Gif3.src} className='slider__item' /> 
            </div>
            <div className="d-flex flex-wrap justify-content-center">
                <img src={Gif4.src} className='slider__item' /> 
            </div>
            <div className="d-flex flex-wrap justify-content-center">
                <img src={Gif5.src} className='slider__item' /> 
            </div>
        </Slider> 
    </div>
</div>

<div className='tools pt-5 pb-5'>
    <div className="text-center mb-5 container-fluid">
        <h2>Graphic Design Tools</h2>
    </div>
    <div className='d-flex flex-wrap justify-content-between container-fluid'>
        <div className='tool-img'>
            <img src={Ai.src} alt="" />
        </div>
        <div className='tool-img'>
            <img src={Psd.src} alt="" />
        </div>
        <div className='tool-img'>
            <img src={Vn.src} alt="" />
        </div>
        <div className='tool-img'>
            <img src={Ae.src} alt="" />
        </div>
        <div className='tool-img'>
            <img src={Pr.src} alt="" />
        </div>
    </div>
</div>
</>
)
}
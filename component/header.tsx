"use client";
import {useEffect} from 'react';
import Link from 'next/link'
import logo from '../public/img/logo.png';
import './footer.css'
import { usePathname } from 'next/navigation';
import './header.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
export default function Header() {
  useEffect(() => {
    AOS.init();  
   }, []);

const currentRoute = usePathname();

  return (
    <header>
      
    <nav className="navbar navbar-expand-xl bg-white navbar-dark p-3 position-relative">
  <div className="container-fluid"> 
  <a href="/" className="flex items-center navbar-brand w_auto">
    <img src={logo.src} className=" w-100 mr-3 h-6 sm:h-9" alt="logo"/>
</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="collapsibleNavbar">
      <ul className="navbar-nav align-items-center d-flex flex-wrap">
      <li className="">
        <Link href="/" className="block py-2 pr-4 pl-3 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white text-decoration-none" aria-current="page">
        B2B Campus
        </Link>
        </li> 
        <li className="dropdown">
        <a  data-bs-toggle="dropdown"  className="dropdown-toggle block py-2 pr-4 pl-3 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white text-decoration-none">All Courses</a>
        <ul className="dropdown-menu fullSizeDrop">
          <div className="row">
            <div className="col-md-3">
              <ul className="dropdown-menus border-right"> 
                <li><Link className="dropdown-item" href="python-training-course">Python</Link></li>
                <li><Link className="dropdown-item" href="digital-marketing">Digital marketing</Link></li>
                <li><Link className="dropdown-item" href="video-editing">Video Editing</Link></li>
                <li><Link className="dropdown-item" href="graphic-designing">Graphic Design</Link></li> 
                <li><Link className="dropdown-item" href="data-science">Data Science</Link></li> 
                <li><Link className="dropdown-item" href="flutter">Flutter</Link></li> 
          
            </ul>
            </div>
            <div className="col-md-3">
            <ul className="dropdown-menus border-right">  
                <li><a className="dropdown-item" href="#">Wordpress</a></li>
                <li><a className="dropdown-item" href="/ ">Web Designing</a></li>
                <li><a className="dropdown-item" href="/ ">Web Development</a></li>
                <li><a className="dropdown-item" href="#">Mern Stack</a></li>
                <li><a className="dropdown-item" href="#">C & C++</a></li>
                <li><a className="dropdown-item" href="#">React Native</a></li>
               
            </ul> 
            </div>
            <div className="col-md-3">
            <ul className="dropdown-menus border-right">   
                <li><a className="dropdown-item" href="/ ">React js</a></li>
                <li><a className="dropdown-item" href="#">Php</a></li>
                <li><a className="dropdown-item" href="#">Laravel</a></li>
                <li><a className="dropdown-item" href="#">Mathematics-lll</a></li>
                <li><a className="dropdown-item" href="#">Freight Broker</a></li>
                
            </ul> 

            </div>
            <div className="col-md-3">
            <ul className="dropdown-menus">    
                <li><a className="dropdown-item" href="/ ">Shopify App Development</a></li>
                <li><a className="dropdown-item" href="#">Shopify Theme Development</a></li>
                <li><a className="dropdown-item" href="#">Personality Development</a></li>
                <li><a className="dropdown-item" href="/ ">Data Structure & Algorithms</a></li>
                <li><a className="dropdown-item" href="/ ">Discrete Mathematics</a></li>
                
            </ul> 

            </div>
          </div> 
        </ul>
        </li>
        <li>
        <a href="#" className="block py-2 pr-4 pl-3 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white text-decoration-none">Placement</a>
        </li>
        <li>
        <Link href="/about" className="block py-2 pr-4 pl-3 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white text-decoration-none">About Us</Link>
        </li>
        <li className="dropdown">
        <a  data-bs-toggle="dropdown"  className="dropdown-toggle block py-2 pr-4 pl-3 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white text-decoration-none">Knowledge Center</a>
        <ul className="dropdown-menu">
         
                <li><a className="dropdown-item" href="/seo">Carrer</a></li>
                <li><a className="dropdown-item" href="/social-media">Blog</a></li> 
              </ul> 
        </li>
        <li>
        <a href="/resources" className="block py-2 pr-4 pl-3   rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:  text-decoration-none">Contact Us</a>
        </li>
    
         
      </ul>
    </div>

    <div className="d-flex flex-wrap align-items-center contact-num">
        <a href="#" className="book_btn">Book a FREE Demo</a> 
    </div>
            
  </div>
</nav>
</header>
  )
}

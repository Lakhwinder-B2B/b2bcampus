import Link from 'next/link'
import logo from '../public/img/logo.png';
import Facebook from '../public/img/Facebook.png';
import Twitter from '../public/img/Twitter.png';
import Instagram from '../public/img/Instagram.png';
import Linkedin from '../public/img/Linkedin.png';
import './footer.css'

export default function Header() {
  return (
    <footer className='footer'>
        <div className="main_footer p-5">
      <div className="row">
        {/* <div className="col-12 col-sm-6 col-md-3 col-lg-3 mb-sm-4 mb-4"> 
        <div className='social d-flex gap-4 mt-4'>
            <a href="https://www.facebook.com/TechBase2Brand/"><img src={Facebook.src} className="SocialIcon" alt="Facebook"/> </a>
            <a href="https://twitter.com/techBase2Brand"><img src={Twitter.src} className="SocialIcon" alt="Twitter"/> </a>
            <a href="https://www.instagram.com/techbase2brand/?hl=en"><img src={Instagram.src} className="SocialIcon" alt="Instagram"/> </a>
            <a href="https://in.linkedin.com/company/techbase2brand"><img src={Linkedin.src} className="SocialIcon" alt="Linkedin"/> </a>
        </div>
        </div> */}
        <div className="col"> 
            <ul className='footer_ul'>
                <li>About us</li>
                <li>Placement</li>
                <li>Career</li>
                <li>Placement</li>
                <li>Blogs</li>
            </ul>
        </div>
        <div className="col"> 
            <ul className='footer_ul'>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
                <li>Cookies Policy</li>
                <li>Terms & Conditions</li> 
            </ul>
        </div>
        <div className="col"> 
            <ul className='footer_ul'>
                <li>Graphic Design</li>
                <li>Digital Marketing</li>
                <li>Data Science</li>
                <li>Python</li>
                <li>Video Editing</li>
            </ul>
        </div>
        <div className="col"> 
            <ul className='footer_ul'>
                <li>Web Designing</li>
                <li>Web Development</li>
                <li>Wordpress</li>
                <li>Shopify App Development</li>
                <li>Flutter</li>
            </ul>
        </div>
        <div className="col"> 
            <ul className='footer_ul'>
                <li>React Native</li>
                <li>React Js</li>
                <li>Laravel</li>
                <li>PHP</li> 
            </ul>
        </div>
        <div className="col">  
            <ul className='footer_ul'>
                <li> Presonality Development</li>
                <li>Shopify Theme development</li> 
                <li>Fright Broker</li> 
            </ul>
        </div>
        <div className="col">  
            <ul className='footer_ul'>
                <li> C and C++</li>
                <li>Data Structure &Algorithms</li> 
                <li>Discrete Mathematics</li> 
                <li>Mathematics-III</li>
            </ul>
        </div>

        </div>

        <div className="row">
        
      </div> 
      </div>
      <div className="borderbottom">
      <div className="row">
        <div className="col footerMenu">
        <h5>Graphic Design Course</h5>
            <ul>
                <li><a href='/'>Mohali</a></li>
                <li><a href='/'>Chandigarh</a></li> 
            </ul>
        </div>
        <div className="col footerMenu">
        <h5>Web Designing</h5>
            <ul>
                <li><a href='/'>Mohali</a></li>
                <li><a href='/'>Chandigarh</a></li> 
            </ul>
        </div>
        <div className="col footerMenu">
        <h5>Laravel Training</h5>
            <ul>
                <li><a href='/'>Mohali</a></li>
                <li><a href='/'>Chandigarh</a></li> 
            </ul>
        </div>
        <div className="col footerMenu">
        <h5>Digital Marketing Course</h5>
            <ul>
                <li><a href='/'>Mohali</a></li>
                <li><a href='/'>Chandigarh</a></li> 
            </ul>
        </div>
        <div className="col footerMenu"> 
            <ul>
                <li><a href='/'>Karnal</a></li>
                <li><a href='/'>Zirakpur</a></li> 
                <li><a href='/'>Bathinda</a></li> 
            </ul>
        </div>
        <div className="col footerMenu"> 
        <h5>Data Science with Python</h5>
            <ul>
            <li><a href='/'>Mohali</a></li>
                <li><a href='/'>Chandigarh</a></li>  
            </ul>
        </div> 
      </div>
      </div>
      <div className="borderbottom">
      <div className="row">
        <div className="col footerMenu">
        <h5>Node JS</h5>
            <ul>
                <li><a href='/'>Mohali</a></li>
                <li><a href='/'>Chandigarh</a></li> 
            </ul>
        </div>
        <div className="col footerMenu">
        <h5>Wordpress</h5>
            <ul>
                <li><a href='/'>Mohali</a></li>
                <li><a href='/'>Chandigarh</a></li> 
            </ul>
        </div>
        <div className="col footerMenu">
        <h5>Full Stack Development</h5>
            <ul>
                <li><a href='/'>Mohali</a></li>
                <li><a href='/'>Chandigarh</a></li> 
            </ul>
        </div>
        <div className="col footerMenu">
        <h5>Web Development</h5>
            <ul>
                <li><a href='/'>Mohali</a></li>
                <li><a href='/'>Chandigarh</a></li> 
            </ul>
        </div>
        
        <div className="col footerMenu"> 
        <h5>Shopify Training</h5>
            <ul>
            <li><a href='/'>Mohali</a></li>
                <li><a href='/'>Chandigarh</a></li>  
            </ul>
        </div> 
        <div className="col footerMenu"> 
        <h5>React JS Training</h5>
            <ul>
            <li><a href='/'>Mohali</a></li>
                <li><a href='/'>Chandigarh</a></li>  
            </ul>
        </div> 
      </div>
      </div>
      <div className="text-center p-3 d-flex flex-wrap align-items-center justify-content-between">
        <h4 className='rese'>©2024 All rights reserved | b2bcampus </h4>
        <div className='social d-flex flex-wrap align-items-center gap-4 mt-0'>
            <a href="https://www.facebook.com/TechBase2Brand/"><img src={Facebook.src} className="SocialIcon" alt="Facebook"/> </a>
            <a href="https://twitter.com/techBase2Brand"><img src={Twitter.src} className="SocialIcon" alt="Twitter"/> </a>
            <a href="https://www.instagram.com/techbase2brand/?hl=en"><img src={Instagram.src} className="SocialIcon" alt="Instagram"/> </a>
            <a href="https://in.linkedin.com/company/techbase2brand"><img src={Linkedin.src} className="SocialIcon" alt="Linkedin"/> </a>
        </div>
        <div className="num_text">
        <p className='mb-1'>Helpline Number</p>
        <a href="tel:+91 98783 00209">+91 98783 00209</a>
        </div>
      </div>
</footer>
  )
}

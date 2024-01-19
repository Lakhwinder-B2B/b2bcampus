'use client'

import React from "react";  
import Ai from '../../../public/img/ai-tab.png';
import Psd1 from '../../../public/img/psd-tab.png';
import Ai1 from '../../../public/img/ai-1.png';
import AeTab from '../../../public/img/ae-tab.png';
import ApTab from '../../../public/img/ap-tab.png';
import AnimationTab from '../../../public/img/animation-tab.png'
import StockTab from '../../../public/img/stock-tab.png';
import MgTab from '../../../public/img/motion-graphics-tab.png';
import GraphTab2 from '../../../public/img/g-tab2.png';
import GraphTab3 from '../../../public/img/g-tab3.png';
import GraphTab4 from '../../../public/img/g-tab4.png';
import GraphTab5 from '../../../public/img/g-tab5.png';
import GraphTab6 from '../../../public/img/g-tab6.png';
import GraphTab7 from '../../../public/img/g-tab7.png';
import GraphTab8 from '../../../public/img/g-tab8.png';
import GraphTabSocial from '../../../public/img/graph-tab.png';

import '../home/course.css'

export default function Journey() {

 
  return (
    <>
 

 <div className="p-5 tab-bg mb-5">
	<div className="p-0 vertical-tab d-flex flex-wrap justify-content-start">
		<div className="d-flex align-items-start justify-content-between">
			<div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
				<h1 className="top_heading pb-4 text-white w-100">Our Courses</h1> 
				<button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">illustrator</button>
				<button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Photoshop</button>
				<button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Manipulation</button>
				<button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Re-touching</button>
				<button className="nav-link" id="v-pills-contact-tab" data-bs-toggle="pill" data-bs-target="#v-pills-contact" type="button" role="tab" aria-controls="v-pills-contact" aria-selected="false">Printable Design</button>
				<button className="nav-link" id="v-pills-psd-tab" data-bs-toggle="pill" data-bs-target="#v-pills-psd" type="button" role="tab" aria-controls="v-pills-psd" aria-selected="false">Website Design</button>
				<button className="nav-link" id="v-pills-crone-tab" data-bs-toggle="pill" data-bs-target="#v-pills-crone" type="button" role="tab" aria-controls="v-pills-crone" aria-selected="false">Prototyping Work</button>
				<button className="nav-link" id="v-pills-motion-tab" data-bs-toggle="pill" data-bs-target="#v-pills-motion" type="button" role="tab" aria-controls="v-pills-motion" aria-selected="false">Social media Design</button>
			</div>
			<div className="tab-content" id="v-pills-tabContent">
				<div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
					<div className="row">           
						<div className="col-md-12">
							<div className="tab-data text-white">
								<img src={Ai.src} alt="" />
								<span className="border-line"></span>
								<span className="tab-heading">Adobe Illustrator</span>
							</div>
							<div className="row d-flex flex-wrap align-items-center">
								<div className="col-12 col-sm-6 col-md-8 text-white mt-5">
									<p>Our Illustrator course is designed to help you master one of the most powerful graphic design tools on the market. Whether you’re an aspiring designer, or you’re looking to upgrade your skills, this course is perfect for you.</p>
									<p>With a focus on practical, hands-on experience, you’ll learn how to create stunning illustrations, logos, and graphics from scratch. Our expert instructors will guide you through every step of the process, from the basics of using the software to advanced techniques for creating complex designs.</p>
									<p>With our flexible online learning platform, you can study at your own pace, and our dedicated support team is always on hand to help you along the way. Enroll in our Illustrator course today and take your design skills to the next level.</p>
									<div className="d-flex flex-wrap justify-content-start">
										<button className="btn btn-outline-primary border_orange mt-4 m-0">Download Brochure</button>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-md-4 mt-5">
										<img src={Ai1.src} alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
					<div className="row">           
						<div className="col-md-12">
							<div className="tab-data text-white">
								<img src={Psd1.src} alt="" />
								<span className="border-line"></span>
								<span className="tab-heading">Adobe Photoshop</span>
							</div>
							<div className="row d-flex flex-wrap align-items-center">
								<div className="col-12 col-sm-6 col-md-8 text-white mt-5">
									<p>Our Photoshop course is designed to help you unlock the full potential of this powerful image editing software. Whether you’re a beginner or an experienced user, this course covers everything you need to know to create stunning graphics and photos.</p>
									<p>You’ll learn how to use tools and features such as layers, masks, and filters to edit and enhance your images like a pro. Our expert instructors will guide you through each lesson, providing you with hands-on practice and real-world examples to help you apply what you’ve learned.  </p>
									<div className="d-flex flex-wrap justify-content-start">
										<button className="btn btn-outline-primary border_orange mt-4 m-0">Download Brochure</button>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-md-4 mt-5">
										<img src={GraphTab2.src} alt="" />
								</div>
							</div>
						</div>
                </div>
				</div>
				<div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
				  <div className="row">           
                    <div className="col-md-12">
                        <div className="tab-data text-white">
                            <img src={AeTab.src} alt="" />
                            <span className="border-line"></span>
                            <span className="tab-heading">Manipulation</span>
                        </div>
                        <div className="row d-flex flex-wrap align-items-center">
                            <div className="col-12 col-sm-6 col-md-8 text-white mt-5">
                                <p>Our Manipulation Design course goes beyond the basics of digital image manipulation and delves into the creative and imaginative aspects of the art form. With a focus on pushing boundaries and exploring new techniques, this course will help you unlock your full creative potential and create mind-bending images that captivate and inspire.</p>
                                <p>Our expert instructors will guide you through a range of projects and assignments, helping you to master advanced techniques such as image compositing, digital painting, and photo manipulation.</p>
                                <p>You’ll learn how to create realistic scenes, surreal compositions, and stunning visual effects that will leave your audience in awe.</p>
								<div className="d-flex flex-wrap justify-content-start">
                                    <button className="btn btn-outline-primary border_orange mt-4 m-0">Download Brochure </button>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 mt-5">
                                    <img src={GraphTab3.src} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
				</div>
				<div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
					<div className="row">           
						<div className="col-md-12">
							<div className="tab-data text-white">
								<img src={ApTab.src} alt="" />
								<span className="border-line"></span>
								<span className="tab-heading">Image Retouching</span>
							</div>
							<div className="row d-flex flex-wrap align-items-center">
								<div className="col-12 col-sm-6 col-md-8 text-white mt-5">
									<p>Our Retouching Design course is designed to teach you the skills and techniques needed to enhance and improve digital images. Whether you’re a photographer, graphic designer, or simply interested in learning how to improve your personal photos, this course is perfect for you.</p>
									<p>You’ll learn how to retouch portraits, remove blemishes and distractions, adjust color and exposure, and create stunning visual effects. Our expert instructors will guide you through every step of the process, providing you with hands-on practice and real-world examples to help you master each technique.</p>
									<p>With our flexible online learning platform, you can study at your own pace, and our dedicated support team is always on hand to help you along the way. Enroll in our Retouching Design course today and take your skills to the next level.</p>
									<div className="d-flex flex-wrap justify-content-start">
										<button className="btn btn-outline-primary border_orange mt-4 m-0">Download Brochure </button>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-md-4 mt-5">
									<img src={GraphTab4.src} alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>				
				<div className="tab-pane fade" id="v-pills-contact" role="tabpanel" aria-labelledby="v-pills-contact-tab">
					<div className="row">           
						<div className="col-md-12">
							<div className="tab-data text-white">
								<img src={AnimationTab.src} alt="" />
								<span className="border-line"></span>
								<span className="tab-heading">Printable Design</span>
							</div>
							<div className="row d-flex flex-wrap align-items-center">
								<div className="col-12 col-sm-6 col-md-8 text-white mt-5">
									<p>A printable design course is a great way to learn about graphic design and gain the skills necessary to create printable designs. Such a course covers the fundamentals of design, such as color theory, typography, and layout.</p>
									<p>It also provides hands-on training in designing print-ready graphics for posters, flyers, business cards, and other materials. In addition, students will learn about the various file formats, printing techniques, and paper options available for their designs.</p>
									<p>This course is ideal for those who want to pursue a career in graphic design or simply improve their skills in creating printable designs for personal or professional projects.</p>
									<div className="d-flex flex-wrap justify-content-start">
										<button className="btn btn-outline-primary border_orange mt-4 m-0">Download Brochure</button>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-md-4 mt-5">
										<img src={GraphTab5.src} alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>				
				<div className="tab-pane fade" id="v-pills-psd" role="tabpanel" aria-labelledby="v-pills-psd-tab">
					  <div className="row">           
                        <div className="col-md-12">
                            <div className="tab-data text-white">
                                <img src={StockTab.src} alt="" />
                                <span className="border-line"></span>
                                <span className="tab-heading">Website Design</span>
                            </div>
                            <div className="row d-flex flex-wrap align-items-center">
                                <div className="col-12 col-sm-6 col-md-8 text-white mt-5">
                                    <p>This website design course is an excellent way to learn about designing and developing websites. The course typically covers the fundamental concepts of website design, including HTML, CSS, and JavaScript.</p>
                                    <p>It also provides hands-on training in designing and building responsive websites that are optimized for search engines and user experience. Students will learn about website layouts, color schemes, typography, and other design elements that make a website visually appealing and easy to use.</p>
                                    <p>This course is ideal for individuals who want to pursue a career in web development or enhance their skills in creating effective and professional websites.</p>
                                    <div className="d-flex flex-wrap justify-content-start">
                                        <button className="btn btn-outline-primary border_orange mt-4 m-0">Download Brochure</button>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 mt-5">
                                        <img src={GraphTab6.src} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
				</div>				
				<div className="tab-pane fade" id="v-pills-crone" role="tabpanel" aria-labelledby="v-pills-crone-tab">
					<div className="row">           
						<div className="col-md-12">
							<div className="tab-data text-white">
								<img src={MgTab.src} alt="" />
								<span className="border-line"></span>
								<span className="tab-heading">Prototyping Work</span>
							</div>
							<div className="row d-flex flex-wrap align-items-center">
								<div className="col-12 col-sm-6 col-md-8 text-white mt-5">
									<p>Our prototyping work course teaches students how to create prototypes of products, services, or systems to test their feasibility and gather feedback before moving on to final production. The course covers different prototyping methods and techniques, such as 3D printing, modeling, and simulation.</p>
									<p>Students also learn how to identify and prioritize design requirements, iterate and refine their prototypes, and communicate their ideas effectively. Through hands-on projects, students develop critical thinking, problem-solving, and collaboration skills.</p>
									<p>The course is beneficial for anyone interested in product development, innovation, and entrepreneurship.</p>
									<div className="d-flex flex-wrap justify-content-start">
										<button className="btn btn-outline-primary border_orange mt-4 m-0">Download Brochure</button>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-md-4 mt-5">
										<img src={GraphTab7.src} alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>				
				<div className="tab-pane fade" id="v-pills-motion" role="tabpanel" aria-labelledby="v-pills-motion-tab">
					<div className="row">           
						<div className="col-md-12">
							<div className="tab-data text-white">
								<img src={GraphTabSocial.src} alt="" />
								<span className="border-line"></span>
								<span className="tab-heading">Social Media Design</span>
							</div>
							<div className="row d-flex flex-wrap align-items-center">
								<div className="col-12 col-sm-6 col-md-8 text-white mt-5">
									<p>Our social media design course is focused on teaching students how to create effective and engaging visual content for social media platforms. The course covers various design principles and techniques for creating graphics, animations, and videos that can enhance social media presence and engagement.</p>
									<p>Students also learn about the unique features and requirements of different social media platforms and how to tailor their designs accordingly. Through hands-on projects, students develop skills in design software, such as Adobe Photoshop and Illustrator, as well as social media management tools, such as Hootsuite and Buffer.</p>
									<p>The course is ideal for marketing, communications, or design professionals looking to enhance their social media skills and strategy.</p>
									<div className="d-flex flex-wrap justify-content-start">
										<button className="btn btn-outline-primary border_orange mt-4 m-0">Download Brochure</button>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-md-4 mt-5">
									<img src={GraphTab8.src} alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div> 
	</div>
</div>

	<div className="accordion mb-5" id="accordionExample">
		<h1 className="top_heading pb-4 fs-3 text-center text-dark font-bold mb-5 w-100">Graphic Design Course Syllabus</h1> 
	<div className="container accordion-div d-flex flex-wrap">
		<div className="accordion-item shadow">
			<h2 className="accordion-header" id="headingOne">
				<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
				MODULE 1 : CANVA
				</button>
			</h2>
			<div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
				<div className="accordion-body">
					<ul className="list-order">
						<li>TOOLS</li>
						<li>CREATE ANIMATION</li>
						<li>TEXT EFFECT AND SHADOW</li>
						<li>CREATE VIDEO</li>
						<li>SOCIAL MEDIA POST DESIGN</li>
						<li>THUMBNAIL DESIGN</li>
					</ul>
				</div>
			</div>
		</div>
		<div className="accordion-item shadow">
			<h2 className="accordion-header" id="headingTwo">
			<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
			MODULE 2 :
			</button>
			</h2>
			<div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
				<div className="accordion-body">
					<ul className="list-order">
						<li>BANNER DESIGN</li>
						<li>BROCHURE DESIGN</li>
						<li>CREATE TRANSITION</li>
						<li>BUSINESS STATIONARY DESIGN</li>
						<li>INSTAGRAM HIGHLIGHTS</li>
						<li>ILLUSTRATIONS</li>
					</ul>
				</div>
			</div>
		</div>
		<div className="accordion-item shadow">
			<h2 className="accordion-header" id="headingThree">
			<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
			MODULE 3 :PHOTOSHOP
			</button>
			</h2>
			<div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
				<div className="accordion-body">
					<ul className="list-order">
						<li>ALL TOOLS</li>
						<li>IMAGE CUTTING</li>
						<li>IMAGE RETOUCHING</li>
						<li>IMAGE OPTIMIZE</li>
						<li>SOCIAL MEDIA POST DESIGN</li>
						<li>BOOK DESIGN</li>
						<li>BRANDING DESIGN</li>
					</ul>	
				</div>
			</div>
		</div>

		<div className="accordion-item shadow">
			<h2 className="accordion-header" id="headingThree">
			<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
			MODULE 4 :
			</button>
			</h2>
			<div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
				<div className="accordion-body">
					<ul className="list-order">
						<li>THUMBNAIL DESIGN</li>
						<li>BANNER DESIGN</li>
						<li>BROCHURE DESIGN</li>
						<li>PATTERN AND TEXTURE STYLES</li>
						<li>INCREASE RESOLUTION OF IMAGE</li>
					</ul>	
				</div>
			</div>
		</div>

		<div className="accordion-item shadow">
			<h2 className="accordion-header" id="headingThree">
			<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
			MODULE 5 : PHOTO EDITING
			</button>
			</h2>
			<div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
				<div className="accordion-body">
					<ul className="list-order">
						<li>IMAGE ADJUSTMENT TOOLS</li>
						<li>PHOTO FILTERS TOOLS</li>
						<li>CREATE MANIPULATION</li>
						<li>CARICATURE DESIGN</li>
						<li>PEN TAB WORK</li>
					</ul>
				</div>
			</div>
		</div>
		<div className="accordion-item shadow">
			<h2 className="accordion-header" id="headingThree">
			<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
			MODULE 6 : ILLUSTRATOR
			</button>
			</h2>
			<div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
				<div className="accordion-body">
					<ul className="list-order">
						<li>ALL TOOLS</li>
						<li>CREATE LOGO DESIGN</li>
						<li>CREATE MOOD BOARD</li>
						<li>CREATE VECTOR GRAPHICS</li>
						<li>3D DESIGN</li>
						<li>EXTRUDE & BEVEL</li>
					</ul>
				</div>
			</div>
		</div>

		<div className="accordion-item shadow">
			<h2 className="accordion-header" id="headingThree">
			<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
			MODULE 7 : PRINTABLE WORK
			</button>
			</h2>
			<div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
				<div className="accordion-body">
					<ul className="list-order">
						<li>STANDEE</li>
						<li>CANOPY</li>
						<li>BUSINESS STATIONARY</li>
						<li>COVER DESIGN</li>
						<li>BOOK DESIGN</li>
					</ul>
				</div>
			</div>
		</div>

		<div className="accordion-item shadow">
			<h2 className="accordion-header" id="headingThree">
			<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
			MODULE 8 :
			</button>
			</h2>
			<div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
				<div className="accordion-body">
					<ul className="list-order">
						<li>REVOLVE</li>
						<li>ROTATE</li>
						<li>IMAGES OPTIMIZATION</li>
						<li>BROCHURE DESIGN</li>
						<li>INSTAGRAM HIGHLIGHTS</li>
						<li>PROFILE DESIGN</li>
						<li>BRANDING DESIGN</li>
					</ul>
				</div>
			</div>
		</div>

		<div className="accordion-item shadow">
			<h2 className="accordion-header" id="headingThree">
			<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
			MODULE 9 :
			</button>
			</h2>
			<div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
				<div className="accordion-body">
					<ul className="list-order">
						<li>STYLE GUIDE</li>
						<li>ARTISTIC FILTER</li>
						<li>BRUSH STROKES</li>
						<li>DISTORT</li>
						<li>SKETCH</li>
						<li>STYLIZE</li>
						<li>INFOGRAPHIC DESIGN</li>
					</ul>
				</div>
			</div>
		</div>

		<div className="accordion-item shadow">
			<h2 className="accordion-header" id="headingThree">
			<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
			MODULE 10 :
			</button>
			</h2>
			<div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
				<div className="accordion-body">
					<ul className="list-order">
						<li>PACKAGING DESIGN</li>
						<li>LABEL DESIGN</li>
						<li>HOARDING DESIGN</li>
						<li>MENU DESIGN</li>
						<li>TYPOGRAPHY</li>
						<li>BUSINESS CARD DESIGN</li>
					</ul>
				</div>
			</div>
		</div>

		<div className="accordion-item shadow">
			<h2 className="accordion-header" id="headingThree">
			<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
			MODULE 11 :
			</button>
			</h2>
			<div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
				<div className="accordion-body">
					<ul className="list-order">
						<li>PACKAGING DESIGN</li>
						<li>LABEL DESIGN</li>
						<li>HOARDING DESIGN</li>
						<li>MENU DESIGN</li>
						<li>TYPOGRAPHY</li>
						<li>BUSINESS CARD DESIGN</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<div className="d-flex flex-wrap justify-content-center mt-3">
		<button className="btn btn-outline-primary border_orange mt-4 m-0">Download Brochure</button>
	</div>
</div>
    </>
    )
}
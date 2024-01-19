'use client'

import React from "react";  
import Ai from '../../../public/img/ai-tab.png';
import Canva1 from '../../../public/img/canva-1.png';
import Psd1 from '../../../public/img/psd-tab.png';
import Psd2 from '../../../public/img/psd-2.png';
import Ai1 from '../../../public/img/ai-1.png';
import Ae1 from '../../../public/img/ae-1.png';
import Ap1 from '../../../public/img//ap-1.png';
import Anim1 from '../../../public/img/anim-1.png';
import Stock1 from '../../../public/img/stock-1.png';
import Mg1 from '../../../public/img/canva-1.png'
import AeTab from '../../../public/img/ae-tab.png';
import PsdTab from '../../../public/img/psd-1.png';
import ApTab from '../../../public/img/ap-tab.png';
import AnimationTab from '../../../public/img/animation-tab.png'
import StockTab from '../../../public/img/stock-tab.png';
import MgTab from '../../../public/img/motion-graphics-tab.png';
import Career1 from '../../../public/img/career1.png';
import Career2 from '../../../public/img/career2.png';
import Career3 from '../../../public/img/career3.png';

import '../home/course.css'

export default function Journey() {

 
  return (
    <>
 

 <div className="p-5 tab-bg">
	<div className="p-0 vertical-tab d-flex flex-wrap justify-content-start">
		<div className="d-flex align-items-start justify-content-between">
			<div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
				<h1 className="top_heading pb-4 text-white w-100">Our Courses</h1> 
				<button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Canva</button>
				<button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Photoshop</button>
				<button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">illustrator</button>
				<button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">After Effects</button>
				<button className="nav-link" id="v-pills-contact-tab" data-bs-toggle="pill" data-bs-target="#v-pills-contact" type="button" role="tab" aria-controls="v-pills-contact" aria-selected="false">Adobe Premiere Pro</button>
				<button className="nav-link" id="v-pills-psd-tab" data-bs-toggle="pill" data-bs-target="#v-pills-psd" type="button" role="tab" aria-controls="v-pills-psd" aria-selected="false">2D Animation</button>
				<button className="nav-link" id="v-pills-crone-tab" data-bs-toggle="pill" data-bs-target="#v-pills-crone" type="button" role="tab" aria-controls="v-pills-crone" aria-selected="false">Stock Animation</button>
				<button className="nav-link" id="v-pills-motion-tab" data-bs-toggle="pill" data-bs-target="#v-pills-motion" type="button" role="tab" aria-controls="v-pills-motion" aria-selected="false">Motion Graphics</button>
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
									<p>Motion Graphics in Video Editing Course is your gateway to mastering the art of creating dynamic visual elements. Explore the world of motion 
										graphics and discover how to craft compelling animations, titles, and effects.</p>
									<p>Gain hands-on experience in integrating motion graphics seamlessly into your video projects. Whether you’re a novice or an experienced 
										editor, this course equips you with the skills needed to enhance your storytelling through captivating visual enhancements.</p>
									<p>Join us and transform your videos into engaging visual experiences with the creative use of motion graphics, taking your video editing prowess 
										to the next level.</p>
									<div className="d-flex flex-wrap justify-content-start">
										<button className="btn btn-outline-primary border_orange mt-4 m-0">Apply for Counselling </button>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-md-4 mt-5">
										<img src={Psd2.src} alt="" />
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
									<p>Our Photoshop course is designed to help you unlock the full potential of this powerful image editing software. Whether you’re a beginner 
										or an experienced user, this course covers everything you need to know to create stunning graphics and photos.</p>
									<p>You’ll learn how to use tools and features such as layers, masks, and filters to edit and enhance your images like a pro. Our expert 
										instructors will guide you through each lesson, providing you with hands-on practice and real-world examples to help you apply what 
										you’ve learned. </p>
									<div className="d-flex flex-wrap justify-content-start">
										<button className="btn btn-outline-primary border_orange mt-4 m-0">Apply for Counselling </button>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-md-4 mt-5">
										<img src={PsdTab.src} alt="" />
								</div>
							</div>
						</div>
                </div>
				</div>
				<div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
				  <div className="row">           
                    <div className="col-md-12">
                        <div className="tab-data text-white">
                            <img src={Ai.src} alt="" />
                            <span className="border-line"></span>
                            <span className="tab-heading">Adobe Illustrator</span>
                        </div>
                        <div className="row d-flex flex-wrap align-items-center">
                            <div className="col-12 col-sm-6 col-md-8 text-white mt-5">
                                <p>Our Illustrator course is designed to help you master one of the most powerful graphic design tools on the market. Whether you’re an 
                                    aspiring designer, or you’re looking to upgrade your skills, this course is perfect for you.</p>
                                <p>With a focus on practical, hands-on experience, you’ll learn how to create stunning illustrations, logos, and graphics from scratch. 
                                    Our expert instructors will guide you through every step of the process, from the basics of using the software to advanced techniques 
                                    for creating complex designs. With our flexible online learning platform, you can study at your own pace, and our dedicated support team 
                                    is always on hand to help you along the way. Enroll in our Illustrator course today and take your design skills to the next level.</p>
                                <div className="d-flex flex-wrap justify-content-start">
                                    <button className="btn btn-outline-primary border_orange mt-4 m-0">Apply for Counselling </button>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 mt-5">
                                    <img src={Ai1.src} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
				</div>
				<div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
					<div className="row">           
						<div className="col-md-12">
							<div className="tab-data text-white">
								<img src={AeTab.src} alt="" />
								<span className="border-line"></span>
								<span className="tab-heading">Manipulation</span>
							</div>
							<div className="row d-flex flex-wrap align-items-center">
								<div className="col-12 col-sm-6 col-md-8 text-white mt-5">
									<p>Take your video editing skills to the next level with our After Effects for Video Editing Course. Dive into the world of motion graphics, visual effects, and animation. Learn to integrate After Effects seamlessly into your editing process.</p>
									<p>Know advanced techniques for creating cinematic intros, special effects, and dynamic transitions. Elevate your storytelling with this powerful tool. Whether you’re a beginner or an experienced editor, this course will empower you to create visually stunning videos.</p>
									<p>Join us and experience the full potential of After Effects in video editing. Your cinematic journey begins here.</p>
									<div className="d-flex flex-wrap justify-content-start">
										<button className="btn btn-outline-primary border_orange mt-4 m-0">Apply for Counselling </button>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-md-4 mt-5">
									<img src={Ae1.src} alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>				
				<div className="tab-pane fade" id="v-pills-contact" role="tabpanel" aria-labelledby="v-pills-contact-tab">
					<div className="row">           
						<div className="col-md-12">
							<div className="tab-data text-white">
								<img src={ApTab.src} alt="" />
								<span className="border-line"></span>
								<span className="tab-heading">Adobe Premiere Pro</span>
							</div>
							<div className="row d-flex flex-wrap align-items-center">
								<div className="col-12 col-sm-6 col-md-8 text-white mt-5">
									<p>Our Adobe Premiere Pro for Video Editing Course provides practical training in using this industry-standard software for video editing. From basic editing to advanced techniques, you’ll gain the skills to create professional-quality videos, edit audio, and apply visual effects.</p>
									<p>With a hands-on approach, this course is suitable for beginners and experienced editors alike, preparing you for various video production tasks. Join us to enhance your video editing capabilities with Adobe Premiere Pro and take your storytelling skills to the next level in the world of video editing.</p>
									<div className="d-flex flex-wrap justify-content-start">
										<button className="btn btn-outline-primary border_orange mt-4 m-0">Apply for Counselling </button>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-md-4 mt-5">
										<img src={Ap1.src} alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>				
				<div className="tab-pane fade" id="v-pills-psd" role="tabpanel" aria-labelledby="v-pills-psd-tab">
					  <div className="row">           
                        <div className="col-md-12">
                            <div className="tab-data text-white">
                                <img src={AnimationTab.src} alt="" />
                                <span className="border-line"></span>
                                <span className="tab-heading">2D Animation</span>
                            </div>
                            <div className="row d-flex flex-wrap align-items-center">
                                <div className="col-12 col-sm-6 col-md-8 text-white mt-5">
                                    <p>Discover the magic of 2D animation within the realm of video editing. Our course introduces you to the art of crafting captivating animations that enhance your video content.</p>
                                    <p>Learn to seamlessly integrate 2D animation into your projects, creating dynamic visuals and storytelling elements. Whether you’re a beginner or an experienced editor, this course equips you with the skills needed to bring your videos to life.</p>
                                    <p>Join us to explore the creative possibilities of 2D animation in video editing and elevate your storytelling to a whole new dimension.</p>
                                    <div className="d-flex flex-wrap justify-content-start">
                                        <button className="btn btn-outline-primary border_orange mt-4 m-0">Apply for Counselling </button>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 mt-5">
                                        <img src={Anim1.src} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
				</div>				
				<div className="tab-pane fade" id="v-pills-crone" role="tabpanel" aria-labelledby="v-pills-crone-tab">
					<div className="row">           
						<div className="col-md-12">
							<div className="tab-data text-white">
								<img src={StockTab.src} alt="" />
								<span className="border-line"></span>
								<span className="tab-heading">Stock Animation</span>
							</div>
							<div className="row d-flex flex-wrap align-items-center">
								<div className="col-12 col-sm-6 col-md-8 text-white mt-5">
									<p>Our in-depth Stock Animation in Video Editing Course provides practical insights into effectively integrating stock animations. Dive into the world of pre-designed animations, mastering the art of seamless integration.</p>
									<p>Learn to elevate your storytelling, boost engagement, and streamline your editing process through the strategic use of stock animations. Whether you’re new or experienced, this course equips you with essential skills for maximizing the impact of your video content.</p>
									<p>Join us to harness the full potential of stock animations and enhance your video editing capabilities.</p>
									<div className="d-flex flex-wrap justify-content-start">
										<button className="btn btn-outline-primary border_orange mt-4 m-0">Apply for Counselling </button>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-md-4 mt-5">
										<img src={Stock1.src} alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>				
				<div className="tab-pane fade" id="v-pills-motion" role="tabpanel" aria-labelledby="v-pills-motion-tab">
					<div className="row">           
						<div className="col-md-12">
							<div className="tab-data text-white">
								<img src={MgTab.src} alt="" />
								<span className="border-line"></span>
								<span className="tab-heading">Motion Graphics</span>
							</div>
							<div className="row d-flex flex-wrap align-items-center">
								<div className="col-12 col-sm-6 col-md-8 text-white mt-5">
									<p>Motion Graphics in Video Editing Course is your gateway to mastering the art of creating dynamic visual elements. Explore the world of motion graphics and discover how to craft compelling animations, titles, and effects.</p>
									<p>Gain hands-on experience in integrating motion graphics seamlessly into your video projects. Whether you’re a novice or an experienced editor, this course equips you with the skills needed to enhance your storytelling through captivating visual enhancements.</p>
									<p>Join us and transform your videos into engaging visual experiences with the creative use of motion graphics, taking your video editing prowess to the next level.</p>
									<div className="d-flex flex-wrap justify-content-start">
										<button className="btn btn-outline-primary border_orange mt-4 m-0">Apply for Counselling </button>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-md-4 mt-5">
									<img src={Mg1.src} alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div> 
	</div>
</div>


      
<div className="w-100 bg-white pt-5">
      <div className="bg-white pt-5 container">
        <div className="row m-0 align-items-center d-flex flex-wrap">
            <div className="col-12 col-sm-6 col-md-6">
                <h1 className="mb-4 fs-3">Career in Video Editing</h1>
                    <p>A career in video editing is a dynamic and creative path in the world of multimedia production. Video editors play a crucial role in shaping the final visual narrative of films, TV shows, commercials, and online content. </p>
                    <p>They meticulously assemble raw footage, add transitions, special effects, and audio enhancements to create compelling stories. With the rapid growth of digital media, demand for skilled video editors is on the rise. It offers opportunities for freelancing, working in studios, or collaborating with creative teams. </p>
                    <p>A keen eye for detail, technical proficiency, and a passion for storytelling are key attributes for success in this exciting career.</p>
            </div>
            <div className="col-12 col-sm-6 col-md-6 shadow p-3 pt-3 pb-3">
                <h2 className="text-center mb-4">B2B Campus for Career Growth In:</h2>
                <ul className="list-order column-order d-flex flex-wrap justify-content-center">
                    <li> 2D animation</li>
                    <li>Stock animation</li>
                    <li>Video graphics</li>
                </ul>
                <p className="m-auto text-center col-12 col-md-8 justify-content-center d-flex flex-wrap">We offer exciting career advancement opportunities specifically for beginners in our Graphic Design course.</p>
                <div className="d-flex flex-wrap mt-5">
                    <div className="grid-box w-100 d-flex flex-wrap align-items-center justify-content-start mb-4">
                        <img src={Career1.src} alt="" />
                        <div className="col-grid ps-3">
                            <h4 className="fs-5">Learn From Industry Professionals</h4>
                            <p className="m-0">You will be trained by designing experts</p>
                        </div> 
                    </div>

                    <div className="grid-box w-100 d-flex flex-wrap align-items-center justify-content-start mb-4">
                        <img src={Career2.src} alt="" />
                        <div className="col-grid  ps-3">
                            <h4 className="fs-5">Certification after Course Completion</h4>
                            <p className="m-0">You will be a certified graphic Designer</p> 
                        </div>
                    </div>

                    <div className="grid-box w-100 d-flex flex-wrap align-items-center justify-content-start mb-4">
                        <img src={Career3.src} alt="" />
                        <div className="col-grid  ps-3">
                            <h4 className="fs-5">100% Job Assistancer</h4>
                            <p className="m-0">Get Hired by Reputed IT companies</p>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-wrap justify-content-center"><button className="btn btn-outline-primary border_orange mt-4 m-0">Apply for Counselling </button></div>
            </div>
        </div>
        </div>
      </div>
    </>
    )
}
     
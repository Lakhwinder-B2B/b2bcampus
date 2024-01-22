'use client'

import React from "react";  
import Ft1 from '../../../public/img/f-tutor1.png';
import Ft2 from '../../../public/img/f-tutor2.png';
import Ft3 from '../../../public/img/f-tutor3.png';
import Ft4 from '../../../public/img/f-tutor4.png';
import Ft5 from '../../../public/img/f-tutor5.png';
import '../home/course.css'

export default function Journey() {

 
  return (
    <>

    

	<div className="accordion mt-5 mb-5" id="accordionExample">
		<h1 className="top_heading pb-4 fs-3 text-center text-dark font-bold mb-5 w-100">Data Science Course Syllabus</h1> 
	<div className="container accordion-div d-flex flex-wrap">
		<div className="accordion-item shadow">
			<h2 className="accordion-header" id="headingOne">
				<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
				MODULE 1: INTRODUCTION TO FLUTTER
				</button>
			</h2>
			<div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
				<div className="accordion-body">
					<ul className="list-order">
						<li>INTRODUCTION TO FLUTTER AND ITS BENEFITS</li>
						<li>SETTING UP THE FLUTTER DEVELOPMENT ENVIRONMENT</li>
                        <li>CREATING YOUR FIRST FLUTTER APP</li>
                        <li>UNDERSTANDING THE DART PROGRAMMING LANGUAGE</li>
					</ul>
				</div>
			</div>
		</div>
		<div className="accordion-item shadow">
			<h2 className="accordion-header" id="headingTwo">
			<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            MODULE 2 : FLUTTER BASICS
			</button>
			</h2>
			<div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
				<div className="accordion-body">
					<ul className="list-order">
						<li>FLUTTER WIDGETS AND THEIR PROPERTIES</li>
						<li>BUILDING USER INTERFACES WITH WIDGETS</li>
						<li>MANAGING APP STATE IN FLUTTER</li>
                        <li>HANDLING USER INPUT AND GESTURES</li>
					</ul>
				</div>
			</div>
		</div>
		<div className="accordion-item shadow">
			<h2 className="accordion-header" id="headingThree">
			<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
			MODULE 3 : LAYOUTS AND NAVIGATION
			</button>
			</h2>
			<div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
				<div className="accordion-body">
					<ul className="list-order">
						<li>WORKING WITH DIFFERENT LAYOUT WIDGETS</li>
						<li>CREATING RESPONSIVE LAYOUTS FOR VARIOUS SCREEN SIZES</li>
						<li>IMPLEMENTING NAVIGATION IN FLUTTER APPS</li>
						<li>ROUTING AND NAVIGATION STACKS</li>
					</ul>	
				</div>
			</div>
		</div>

		<div className="accordion-item shadow">
			<h2 className="accordion-header" id="headingThree">
			<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
			MODULE 4 : UI DESIGN IN FLUTTER
			</button>
			</h2>
			<div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
				<div className="accordion-body">
					<ul className="list-order">
						<li>CUSTOMIZING APP THEMES AND STYLES</li>
						<li>WORKING WITH IMAGES AND ICONS</li>
                        <li>ANIMATION BASICS IN FLUTTER</li>
                        <li>BUILDING VISUALLY APPEALING UI ELEMENTS</li>
					</ul>	
				</div>
			</div>
		</div>

		<div className="accordion-item shadow">
			<h2 className="accordion-header" id="headingThree">
			<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
			MODULE 5 : NETWORKING AND DATA
			</button>
			</h2>
			<div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
				<div className="accordion-body">
					<ul className="list-order">
						<li>FETCHING DATA FROM RESTFUL APIS</li>
						<li>HANDLING ASYNCHRONOUS OPERATIONS</li>
						<li>DATA STORAGE AND PERSISTENCE</li>
						<li>INTEGRATING THIRD-PARTY PACKAGES AND LIBRARIES</li>
					</ul>
				</div>
			</div>
		</div>
		<div className="accordion-item shadow">
			<h2 className="accordion-header" id="headingThree">
			<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
			MODULE 6 : STATE MANAGEMENT
			</button>
			</h2>
			<div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
				<div className="accordion-body">
					<ul className="list-order">
						<li>WRITING UNIT TESTS FOR FLUTTER APPS</li>
						<li>DEBUGGING AND TROUBLESHOOTING COMMON ISSUES</li>
						<li>USING FLUTTER DEVTOOLS FOR DEBUGGING</li>
					</ul>
				</div>
			</div>
		</div>

		<div className="accordion-item shadow">
			<h2 className="accordion-header" id="headingThree">
			<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
			MODULE 7 : TESTING AND DEBUGGING
			</button>
			</h2>
			<div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
				<div className="accordion-body">
					<ul className="list-order">
						<li>WRITING UNIT TESTS FOR FLUTTER APPS</li>
						<li>DEBUGGING AND TROUBLESHOOTING COMMON ISSUES</li>
						<li>USING FLUTTER DEVTOOLS FOR DEBUGGING</li>
					</ul>
				</div>
			</div>
		</div>

		<div className="accordion-item shadow">
			<h2 className="accordion-header" id="headingThree">
			<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
			MODULE 8 : BUILDING AND DEPLOYING APPS
			</button>
			</h2>
			<div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
				<div className="accordion-body">
					<ul className="list-order">
						<li>PREPARING APPS FOR DEPLOYMENT</li>
						<li>APP SIGNING AND RELEASE PROCESS</li>
						<li>PUBLISHING APPS TO GOOGLE PLAY STORE AND APPLE APP STORE</li>
					</ul>
				</div>
			</div>
		</div>

		<div className="accordion-item shadow">
			<h2 className="accordion-header" id="headingThree">
			<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
			MODULE 9 : ADVANCED TOPICS (OPTIONAL)
			</button>
			</h2>
			<div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
				<div className="accordion-body">
					<ul className="list-order">
						<li>BUILDING CUSTOM WIDGETS</li>
                        <li>PLATFORM-SPECIFIC CODE INTEGRATION</li>
                        <li>ACCESSIBILITY AND INTERNATIONALIZATION</li>
                        <li>PERFORMANCE OPTIMIZATION</li>
					</ul>
				</div>
			</div>
		</div>

		<div className="accordion-item shadow">
			<h2 className="accordion-header" id="headingThree">
			<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
			MODULE 10 : REAL-WORLD PROJECTS
			</button>
			</h2>
			<div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
				<div className="accordion-body">
					<ul className="list-order">
						<li>WORKING ON PRACTICAL PROJECTS TO APPLY LEARNED CONCEPTS</li>
						<li>COLLABORATIVE DEVELOPMENT AND CODE REVIEWS</li>
						<li>PROJECT PRESENTATIONS AND DEMONSTRATIONS</li>
					</ul>
				</div>
			</div>
		</div>

		<div className="accordion-item shadow">
			<h2 className="accordion-header" id="headingThree">
			<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
			Module 11 : DATA VISUALIZATION IN PYTHON
			</button>
			</h2>
			<div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
				<div className="accordion-body">
					<ul className="list-order">
						<li>Using Sea-orn</li>
						<li>Exploratory Data Analysis</li>
					</ul>
				</div>
			</div>
		</div>

        <div className="accordion-item shadow">
			<h2 className="accordion-header" id="headingThree">
			<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
			Module 12 : LIVE PROJECT
			</button>
			</h2>
			<div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
				<div className="accordion-body">
					<ul className="list-order">
						<li>Live project</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<div className="d-flex flex-wrap justify-content-center mt-3">
		<button className="btn btn-outline-primary border_orange mt-4 m-0">Download Brochure</button>
	</div>
</div>


<div className="container-fluid mx-auto p-0 ps-5 mb-3">
            <div className="row align-items-center m-0">
                <div className="col-12 mt-5">
                    <h1 className="fs-3 font-bold mb-5 w-100 text-center">Tools Covered</h1>
                    <ul className="order-list tool-images list-inline d-flex flex-wrap justify-content-start text-left">
                        <li className="pb-2"><img src={Ft1.src} alt="" /></li>
                        <li className="pb-2"><img src={Ft2.src} alt="" /></li>
                        <li className="pb-2"><img src={Ft3.src} alt="" /></li>
                        <li className="pb-2"><img src={Ft4.src} alt="" /></li>
                        <li className="pb-2"><img src={Ft5.src} alt="" /></li>
                       
                    </ul>
                </div>
               
            </div>
        </div>
    
    </>
    )
}
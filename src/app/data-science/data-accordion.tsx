'use client'

import React from "react";  
import Sc1 from '../../../public/img/sc1.png';
import Sc2 from '../../../public/img/sc2.png';
import Sc3 from '../../../public/img/sc3.png';
import Sc4 from '../../../public/img/sc4.png';
import Sc5 from '../../../public/img/sc5.png';
import Sc6 from '../../../public/img/sc6.png';
import Sc7 from '../../../public/img/sc7.png';
import Sc8 from '../../../public/img/sc8.png';
import Sc9 from '../../../public/img/sc9.png';
import Sc10 from '../../../public/img/sc10.png';
import '../home/course.css'

export default function Journey() {

 
  return (
    <>

    <div className="container-fluid mx-auto p-0 ps-5 mb-3">
            <div className="row align-items-center m-0">
                <div className="col-12 mt-5">
                    <h1 className="fs-3 font-bold mb-5 w-100 text-center">Tools You will Learn</h1>
                    <ul className="order-list tool-images list-inline d-flex flex-wrap justify-content-start text-left">
                        <li className="pb-2"><img src={Sc1.src} alt="" /></li>
                        <li className="pb-2"><img src={Sc2.src} alt="" /></li>
                        <li className="pb-2"><img src={Sc3.src} alt="" /></li>
                        <li className="pb-2"><img src={Sc4.src} alt="" /></li>
                        <li className="pb-2"><img src={Sc5.src} alt="" /></li>
                        <li className="pb-2"><img src={Sc6.src} alt="" /></li>
                        <li className="pb-2"><img src={Sc7.src} alt="" /></li>
                        <li className="pb-2"><img src={Sc8.src} alt="" /></li>
                        <li className="pb-2"><img src={Sc9.src} alt="" /></li>
                        <li className="pb-2"><img src={Sc10.src} alt="" /></li>
                       
                    </ul>
                </div>
               
            </div>
        </div>

	<div className="accordion mt-5 mb-5" id="accordionExample">
		<h1 className="top_heading pb-4 fs-3 text-center text-dark font-bold mb-5 w-100">Data Science Course Syllabus</h1> 
	<div className="container accordion-div d-flex flex-wrap">
		<div className="accordion-item shadow">
			<h2 className="accordion-header" id="headingOne">
				<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
				Module 1 : INTRODUCTION TO DATA SCIENCE
				</button>
			</h2>
			<div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
				<div className="accordion-body">
					<ul className="list-order">
						<li>Applications of Data Science in Day to Day Life</li>
						<li>Role of python in Data Science</li>
					</ul>
				</div>
			</div>
		</div>
		<div className="accordion-item shadow">
			<h2 className="accordion-header" id="headingTwo">
			<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
			Module 2 : FILE HANDLING
			</button>
			</h2>
			<div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
				<div className="accordion-body">
					<ul className="list-order">
						<li>Python Read Files</li>
						<li>Python Write Files</li>
						<li>Python Delete Files</li>
					</ul>
				</div>
			</div>
		</div>
		<div className="accordion-item shadow">
			<h2 className="accordion-header" id="headingThree">
			<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
			Module 3 : PYTHON
			</button>
			</h2>
			<div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
				<div className="accordion-body">
					<ul className="list-order">
						<li>Introduction</li>
						<li>Starting your machines for python</li>
						<li>Python Syntao</li>
						<li>Python Comments</li>
						<li>Python Variables</li>
						<li>Python Data Types</li>
						<li>Python Numbers</li>
                        <li>Python Casting</li>
						<li>Python Strings</li>
						<li>Python Lists</li>
						<li>Python Booleans</li>
						<li>Python Tuples</li>
                        <li>Python Dictionaries</li>
						<li>Python Sets</li>
						<li>Python Operators</li>
						<li>Python lf-Else</li>
                        <li>Python For loop</li>
						<li>Python While loop</li>
						<li>Python Functions</li>
						<li>Python Lambda</li>
						<li>Python Array</li>
                        <li>Python Classes</li>
                        <li>Python Dates</li>
						<li>Python Sets</li>
						<li>Python Operators</li>
						<li>Python Maths</li>
                        <li>Python JSON</li>
						<li>Python RegEo</li>
					</ul>	
				</div>
			</div>
		</div>

		<div className="accordion-item shadow">
			<h2 className="accordion-header" id="headingFour">
			<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
			Module 4 : INFERENTIAL STATISTICS
			</button>
			</h2>
			<div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
				<div className="accordion-body">
					<ul className="list-order">
						<li>Norôal Distri-ution</li>
						<li>Hypothesis Testing</li>
					</ul>	
				</div>
			</div>
		</div>

		<div className="accordion-item shadow">
			<h2 className="accordion-header" id="headingFive">
			<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
			Module 5 : PYTHON MYSQLI
			</button>
			</h2>
			<div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
				<div className="accordion-body">
					<ul className="list-order">
						<li>MySl Introduction</li>
						<li>MySl Create Data-ase</li>
						<li>MySl Create Ta-les</li>
						<li>MySl Insert</li>
						<li>MySl Select</li>
                        <li>MySl Order -y</li>
						<li>MySl Delete</li>
						<li>MySl Drop Ta-le</li>
						<li>MySl Update</li>
						<li>MySl Join</li>
					</ul>
				</div>
			</div>
		</div>
		<div className="accordion-item shadow">
			<h2 className="accordion-header" id="headingSix">
			<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
			Module 6 : BUILDING YOUR FRIST PROJECT
			</button>
			</h2>
			<div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
				<div className="accordion-body">
					<ul className="list-order">
						<li>Machine Learning</li>
						<li>Introduction of Linear regression</li>
						<li>Introduction to logistic regression</li>
						<li>Introduction to NLP</li>
						<li>Introduction to Deep Learning</li>
					</ul>
				</div>
			</div>
		</div>

		<div className="accordion-item shadow">
			<h2 className="accordion-header" id="headingSeven">
			<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
			Module 7 : INTRO TO PYTHON MODULES
			</button>
			</h2>
			<div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
				<div className="accordion-body">
					<ul className="list-order">
						<li>NumPy</li>
						<li>Pandas</li>
						<li>SciPy</li>
						<li>Case Studies</li>
					</ul>
				</div>
			</div>
		</div>

		<div className="accordion-item shadow">
			<h2 className="accordion-header" id="headingEight">
			<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
			Module 8 : PYTHON MATPLOTLIB
			</button>
			</h2>
			<div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
				<div className="accordion-body">
					<ul className="list-order">
						<li>lntroduction</li>
						<li>Matplotlib Plotting</li>
						<li>Matplotlib Markers</li>
						<li>Matplotlib Bars</li>
						<li>Matplotlib Pie Charts</li>
						<li>Matplotlib Histograms</li>
					</ul>
				</div>
			</div>
		</div>

		<div className="accordion-item shadow">
			<h2 className="accordion-header" id="headingNine">
			<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
			Module 9 : CODING EXPRCISES
			</button>
			</h2>
			<div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
				<div className="accordion-body">
					<ul className="list-order">
						<li>chapter wise</li>
					</ul>
				</div>
			</div>
		</div>

		<div className="accordion-item shadow">
			<h2 className="accordion-header" id="headingTen">
			<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
			Module 10 : PYTHON MATPlLOTILIB
			</button>
			</h2>
			<div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#accordionExample">
				<div className="accordion-body">
					<ul className="list-order">
						<li>Introduction</li>
						<li>Matplotlib Plotting</li>
						<li>Matplotlib Markers</li>
						<li>Matplotlib Bars</li>
						<li>Matplotlib Pie Charts</li>
						<li>Matplotlib Histograms</li>
                        <li>Matplotlib Scatters</li>
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



    
    </>
    )
}
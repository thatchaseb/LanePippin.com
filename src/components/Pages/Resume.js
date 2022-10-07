import React from 'react';
import { Element } from 'react-scroll'

import resume from "../media/Resume.jpg"
import RM from "../media/Resume.pdf"
import resumeHead from "../media/LaneResume.png"



const Resume = () => {
  return (
    <Element name="about" class="bg-no-repeat bg-cover relative bg-pew sm:bg-[left_top_-2rem] bg-[left_top_0rem] grid grid-cols-2 ">
    	<div class="flex" >
    		<img src={resumeHead} alt="cover" class=" select-none lg:mt-16 lg:left-12  lg:w-96 md:h-72 sm:h-52 h-44 absolute center object-cover"/>
    		
            <div className="drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)] lg:ml-40 md:ml-20 sm:ml-12 ml-8 text-3xl text-center lg:text-5xl md:text-4xl text-2xl font-bold lg:mt-[22rem] md:mt-64 sm:mt-48 mt-36">
                <a  href={"https://www.facebook.com/lane.pippin.9"} style={{color:"#4267B2"}} target="_blank" rel="noreferrer">
                    <i className="facebook icon" style={{color:"#4267B2"}}></i>
                </a>                 
                <a  href={"https://www.instagram.com/lane_pippin/"} style={{color:"#458eff"}} target="_blank" rel="noreferrer">
                    <i className="instagram icon" style={{color:"#458eff"}}></i>
                </a>                
                <a  href={"https://www.youtube.com/channel/UCDxKk5RUBZsZq-WIJpUbQsA/featured"} style={{color:"#FF0000"}} target="_blank" rel="noreferrer">
                    <i className="youtube icon" style={{color:"#FF0000"}}></i>
                </a>
            </div>
    	</div>
        	<a href={RM} class="select-none lg:mt-44 lg:mr-24 mt-32 mb-8 mr-6 border-8 border-sec-500 rounded-md bg-black " target="_blank" rel="noreferrer">
        		<img src={resume} alt="resume" class='select-none hover:opacity-75 hover:cursor-pointer duration-300 delay-50' />
        	</a>
    	<div>
    		
    	</div>
        <a href={RM} className="bg-sec-400 font-Merriweather text-white  mb-12 mr-6 px-5 py-3 rounded hover:bg-main hover:text-gray-200 cursor-pointer transition ease-out duration-300 delay-50 md:w-72 lg:w-96 lg:text-2xl" target="_blank" rel="noreferrer">
            View and Download Resume
        </a>
    	
    </Element>
  );
};

export default Resume;
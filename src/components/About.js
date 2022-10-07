import React, { useState, useEffect } from 'react';
import { Element } from 'react-scroll'
import aboutHead from "./media/AboutLane.png"
import { Carousel } from 'react-responsive-carousel';


const About = (props) => {

	useEffect(() => {
  setTimeout(() => setShow1(true), 1000);
	}, []);  
	useEffect(() => {
  setTimeout(() => setFade1(true), 1050);
	}, []);  

	useEffect(() => {
  setTimeout(() => setShow2(true), 2000);
	}, []);  
	useEffect(() => {
  setTimeout(() => setFade2(true), 2050);
	}, []);  
	
	const [show1, setShow1] = useState(false)
	const [show2, setShow2] = useState(false)

	const [fade1, setFade1] = useState(false)
	const [fade2, setFade2] = useState(false)

  return (
    <Element name="about" class=" bg-no-repeat bg-cover relative bg-look xl:bg-[left_-20rem_top_-3rem] lg:bg-[left_-20rem_top_0rem] sm:bg-[left_-8rem_top_0rem] bg-[left_-8rem_top_0rem] grid sm:grid-cols-2 grid-cols-3 ">
    	<div class="flex justify-center" >
    		<img src={aboutHead} alt="cover" class="select-none lg:mt-16 lg:left-12  lg:w-96  md:h-44 h-32 absolute center object-cover  " />
    		
    	</div>
	        	
	    <div className="bg-white bg-opacity-60 lg:mx-0 p-8 border-8 leading-2 border-sec-500 xl:text-3xl lg:text-2xl  md:text-xl text-lg font-bold text-red-900 font-Merriweather select-none  lg:mt-44 lg:mr-16  md:mt-48 mt-32 md:mb-40 mb-32 mr-6 grid grid-cols-1 z-10 rounded-md ">
	    		
	        <div className="my-3 lg:my-6">Lane played football for nine years</div>
	        <div className="my-3 lg:my-6">Lane has a black belt in Karate</div>
	        <div className="my-3 lg:my-6">Lane can play the saxophone</div>	
	        <div className="my-3 lg:my-6">Lane is deathly allergic to cats</div>
	        <div className="my-3 lg:my-6">Lane is double vaccinated</div>
	        <div className="my-3 lg:my-6">Lane never learned to ride a bike… He did try though</div>	    		
	        <div className="my-3 lg:my-6">Lane could build you a doghouse</div>
	        <div className="my-3 lg:my-6">Lane has watched every released episode of One Piece…that’s over a thousand</div>
	        <div className="my-3 lg:my-6">Lane collects Nutcrackers… it’s becoming a problem</div>

	    </div>
    	
    	
    </Element>
    
  );
};

export default About;
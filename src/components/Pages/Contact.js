 import React, { useRef } from 'react';

import { Element } from 'react-scroll';

import emailjs from '@emailjs/browser';

import contactHead from "../media/LaneContact.png"
import jumpKick from "../media/HappyKick2.png"

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_osnu0gu', 'template_xk6l4za', form.current, 'RCeqM3ZWKBuVE8nW7')
    .then((result) => {
        console.log(result.text);
        }, (error) => {console.log(error.text)}
    );
    form.current.reset();
  }

  const form = useRef();

  return (
    <Element name="contact" className="text-sec-500 bg-eggWhite">
    <div class="grid grid-cols-5">
      
    <div class="xl:pl-24 xl:pr-8 px-8 md:mx-auto py-6  md:col-span-3 col-span-5">

    <div>
    	<img src={contactHead} alt="cover" class=" select-none h-44 w-72 object-cover lg:mb-8" />        
    </div>

    <form id="contact-form" ref={form} onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label htmlFor="first-name">First name</label>
          <input type="text" id="first-name" name="first-name" className="form-input border-2 border-sec-400 px-3 py-2 rounded-md" required />
        </div>
        <div className="flex flex-col">
          <label htmlFor="last-name">Last name</label>
          <input type="text" id="last-name" name="last-name" className="form-input border-2 border-sec-400 px-3 py-2 rounded-md" required />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" className="form-input border-2 border-sec-400 px-3 py-2 rounded-md" required />
        </div>
        <div className="flex flex-col">
          <label htmlFor="phone">
            <div className="flex align-items">
              Phone
              <span className="ml-auto opacity-75">Optional</span>
            </div>
          </label>
          <input type="tel" id="phone" name="phone" className="form-input border-2 border-sec-400 px-3 py-2 rounded-md" />
        </div>
        <div className="flex flex-col col-span-1">
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" className="form-input border-2 border-sec-400 px-3 py-2 rounded-md" required />
        </div>
        <div className="flex flex-col col-span-2 ">
          <label htmlFor="subject">
            <div className="flex align-items">
              Message
              <span className="ml-auto opacity-75">Max. 500 characters</span>
            </div>
          </label>
          
          <textarea maxLength="500" rows="8" type="text" id="message" name="message" className="md:h-28 h-48 form-input border-2 border-sec-400 px-3 py-2 rounded-md" required />
        </div>
      </div>
      <div className="flex justify-end py-4">
        <button type="submit" class="bg-main text-white font-bold py-2 px-4 rounded focus:ring focus:ring-sec-300 hover:bg-sec-100">
          Submit
        </button>
      </div>
    </form>
    <div class="p-4 text-sm  text-gray-500">
      Website by Brackett Design
    </div>
    </div>
      <div class="hidden md:block col-span-2">
        <img src={jumpKick} alt="contactPic" class=" object-cover h-full" />
      </div>
    </div>


  </Element>
  );
};

export default Contact;
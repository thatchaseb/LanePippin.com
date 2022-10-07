import React from 'react';

const Quote = (props) => {
  return (
    <div class="p-8 lg:text-3xl md:text-2xl text-lg italic text-gray-200 bg-gradient-to-b from-main to-sec-100">

      <div class="text-center object-center lg:my-24 md:my-16 my-8 lg:mx-64 md:mx-40 sm:mx-24">
      {props.children}
      </div>
    </div>
  );
};

export default Quote;
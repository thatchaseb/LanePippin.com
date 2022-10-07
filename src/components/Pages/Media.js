import React from 'react';
import { Element } from 'react-scroll'
import ReactPlayer from 'react-player';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import mediaHead from "../media/LaneGallery.png"

import pic1 from "../media/PewLane.png"
import pic2 from "../media/PewLane.png"
import pic3 from "../media/PewLane.png"
import pic4 from "../media/PewLane.png"




    const customRenderItem = (item, props) => <item.type {...item.props} {...props} />;

    const getVideoThumb = (videoId) => `https://img.youtube.com/vi/${videoId}/default.jpg`;

    const getVideoId = (url) => url.substr('https://www.youtube.com/embed/'.length, url.length);

    const customRenderThumb = (children) =>
        children.map((item) => {
            const videoId = getVideoId(item.props.url);
            return <img src={getVideoThumb(videoId)} />;
        });
    const YoutubeSlide = ({ url, isSelected }: { url: string; isSelected?: boolean }) => (
    <ReactPlayer width="100%" url={url} playing={isSelected} />
);

const Media = () => {




  return (
    <Element name="media" class=" m-4 mt-8 mb-8 md:w-3/4 md:mx-auto">
    
      <img src={mediaHead} alt="cover" class="h-44 w-72 center object-cover" />
    
      <Carousel   showIndicators={false} centerMode="true"  transitionTime="500" interval="4000" stopOnHover="true" centerSlidePercentage="34" height="60px" infiniteLoop="true" >
        <div class="m-4">
          <img src={pic1} alt="1" />
        </div>
             
        <div class="m-4">
          <img src={pic2} alt="2" />
        </div>
        <div class="m-4">
          <img src={pic3} alt="3"/>
        </div>
        <div class="m-4">
          <img src={pic4} alt="4"/>
        </div>
                
                
      </Carousel>
    </Element>
   
  );
};

export default Media;
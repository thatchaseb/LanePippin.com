import React from 'react';
import { Element } from 'react-scroll'
import { ProGallery } from 'pro-gallery';
import { saveAs } from 'file-saver'

import mediaHead from "./media/LaneGallery.png"

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


import 'pro-gallery/dist/statics/main.css';

var image01 = require('./media/Production/01.jpeg')
var image02 = require('./media/Production/02.jpeg')
var image03 = require('./media/Production/03.jpeg')
var image04 = require('./media/Production/04.jpeg')
var image05 = require('./media/Production/05.jpeg')
var image06 = require('./media/Production/06.jpeg')
var image07 = require('./media/Production/07.jpeg')
var image08 = require('./media/Production/08.jpeg')
var image09 = require('./media/Production/09.jpeg')
var image10 = require('./media/Production/10.jpeg')
var image11 = require('./media/Production/11.jpeg')
var image12 = require('./media/Production/12.jpeg')
var image13 = require('./media/Production/13.jpeg')
var image14 = require('./media/Production/14.jpeg')
var image15 = require('./media/Production/15.jpeg')
var image16 = require('./media/Production/16.jpeg')
var image17 = require('./media/Production/17.jpeg')
var image18 = require('./media/Production/18.jpeg')
var image19 = require('./media/Production/19.jpeg')
var image20 = require('./media/Production/20.jpeg')
var image21 = require('./media/Production/21.jpeg')
var image22 = require('./media/Production/22.jpeg')


const MySwal = withReactContent(Swal)
    // Add your images here...
  const items = [
    { // Image item:
      itemId: 'sample-id',
      mediaUrl: `${image01}`,
      metaData: {
        type: 'image',
        height: 200,
        width: 100,
        title: 'sample-title',
        description: 'sample-description',
        focalPoint: [0, 0],
        link: {
          url: `${image01}`,
          target: '_blank'
        },
      }
    },
    { // Image item:
      itemId: 'sample-id',
      mediaUrl: `${image02}`,
      metaData: {
        type: 'image',
        height: 200,
        width: 100,
        title: 'sample-title',
        description: 'sample-description',
        focalPoint: [0, 0],
        link: {
          url: `${image02}`,
          target: '_blank'
        },
      }
    },
    { // Image item:
      itemId: 'sample-id',
      mediaUrl: `${image03}`,
      metaData: {
        type: 'image',
        height: 100,
        width: 200,
        title: 'sample-title',
        description: 'sample-description',
        focalPoint: [0, 0],
        link: {
          url: `${image03}`,
          target: '_blank'
        },
      }
    },
    { // Image item:
      itemId: 'sample-id',
      mediaUrl: `${image04}`,
      metaData: {
        type: 'image',
        height: 100,
        width: 200,
        title: 'sample-title',
        description: 'sample-description',
        focalPoint: [0, 0],
        link: {
          url: `${image04}`,
          target: '_blank'
        },
      }
    },
    { // Image item:
      itemId: 'sample-id',
      mediaUrl: `${image05}`,
      metaData: {
        type: 'image',
        height: 100,
        width: 200,
        title: 'sample-title',
        description: 'sample-description',
        focalPoint: [0, 0],
        link: {
          url: `${image05}`,
          target: '_blank'
        },
      }
    },
    { // Image item:
      itemId: 'sample-id',
      mediaUrl: `${image06}`,
      metaData: {
        type: 'image',
        height: 200,
        width: 100,
        title: 'sample-title',
        description: 'sample-description',
        focalPoint: [0, 0],
        link: {
          url: `${image06}`,
          target: '_blank'
        },
      }
    },
    { // Image item:
      itemId: 'sample-id',
      mediaUrl: `${image07}`,
      metaData: {
        type: 'image',
        height: 200,
        width: 100,
        title: 'sample-title',
        description: 'sample-description',
        focalPoint: [0, 0],
        link: {
          url: `${image07}`,
          target: '_blank'
        },
      }
    },
    { // Image item:
      itemId: 'sample-id',
      mediaUrl: `${image08}`,
      metaData: {
        type: 'image',
        height: 100,
        width: 200,
        title: 'sample-title',
        description: 'sample-description',
        focalPoint: [0, 0],
        link: {
          url: `${image08}`,
          target: '_blank'
        },
      }
    },
    { // Image item:
      itemId: 'sample-id',
      mediaUrl: `${image09}`,
      metaData: {
        type: 'image',
        height: 100,
        width: 200,
        title: 'sample-title',
        description: 'sample-description',
        focalPoint: [0, 0],
        link: {
          url: `${image09}`,
          target: '_blank'
        },
      }
    },
    { // Image item:
      itemId: 'sample-id',
      mediaUrl: `${image10}`,
      metaData: {
        type: 'image',
        height: 200,
        width: 100,
        title: 'sample-title',
        description: 'sample-description',
        focalPoint: [0, 0],
        link: {
          url: `${image10}`,
          target: '_blank'
        },
      }
    },
    { // Image item:
      itemId: 'sample-id',
      mediaUrl: `${image11}`,
      metaData: {
        type: 'image',
        height: 100,
        width: 200,
        title: 'sample-title',
        description: 'sample-description',
        focalPoint: [0, 0],
        link: {
          url: `${image11}`,
          target: '_blank'
        },
      }
    },
    { // Image item:
      itemId: 'sample-id',
      mediaUrl: `${image12}`,
      metaData: {
        type: 'image',
        height: 200,
        width: 100,
        title: 'sample-title',
        description: 'sample-description',
        focalPoint: [0, 0],
        link: {
          url: `${image12}`,
          target: '_blank'
        },
      }
    },
    { // Image item:
      itemId: 'sample-id',
      mediaUrl: `${image13}`,
      metaData: {
        type: 'image',
        height: 200,
        width: 100,
        title: 'sample-title',
        description: 'sample-description',
        focalPoint: [0, 0],
        link: {
          url: `${image13}`,
          target: '_blank'
        },
      }
    },
    { // Image item:
      itemId: 'sample-id',
      mediaUrl: `${image14}`,
      metaData: {
        type: 'image',
        height: 200,
        width: 100,
        title: 'sample-title',
        description: 'sample-description',
        focalPoint: [0, 0],
        link: {
          url: `${image14}`,
          target: '_blank'
        },
      }
    },
    { // Image item:
      itemId: 'sample-id',
      mediaUrl: `${image15}`,
      metaData: {
        type: 'image',
        height: 200,
        width: 100,
        title: 'sample-title',
        description: 'sample-description',
        focalPoint: [0, 0],
        link: {
          url: `${image15}`,
          target: '_blank'
        },
      }
    },
    { // Image item:
      itemId: 'sample-id',
      mediaUrl: `${image16}`,
      metaData: {
        type: 'image',
        height: 200,
        width: 100,
        title: 'sample-title',
        description: 'sample-description',
        focalPoint: [0, 0],
        link: {
          url: `${image16}`,
          target: '_blank'
        },
      }
    },
    { // Image item:
      itemId: 'sample-id',
      mediaUrl: `${image17}`,
      metaData: {
        type: 'image',
        height: 200,
        width: 100,
        title: 'sample-title',
        description: 'sample-description',
        focalPoint: [0, 0],
        link: {
          url: `${image17}`,
          target: '_blank'
        },
      }
    },
    { // Image item:
      itemId: 'sample-id',
      mediaUrl: `${image18}`,
      metaData: {
        type: 'image',
        height: 100,
        width: 200,
        title: 'sample-title',
        description: 'sample-description',
        focalPoint: [0, 0],
        link: {
          url: `${image18}`,
          target: '_blank'
        },
      }
    },
    { // Image item:
      itemId: 'sample-id',
      mediaUrl: `${image19}`,
      metaData: {
        type: 'image',
        height: 100,
        width: 200,
        title: 'sample-title',
        description: 'sample-description',
        focalPoint: [0, 0],
        link: {
          url: `${image19}`,
          target: '_blank'
        },
      }
    },
    { // Image item:
      itemId: 'sample-id',
      mediaUrl: `${image20}`,
      metaData: {
        type: 'image',
        height: 100,
        width: 200,
        title: 'sample-title',
        description: 'sample-description',
        focalPoint: [0, 0],
        link: {
          url: `${image20}`,
          target: '_blank'
        },
      }
    },
    { // Image item:
      itemId: 'sample-id',
      mediaUrl: `${image21}`,
      metaData: {
        type: 'image',
        height: 200,
        width: 100,
        title: 'sample-title',
        description: 'sample-description',
        focalPoint: [0, 0],
        link: {
          url: `${image21}`,
          target: '_blank'
        },
      }
    },
    { // Image item:
      itemId: 'sample-id',
      mediaUrl: `${image22}`,
      metaData: {
        type: 'image',
        height: 100,
        width: 200,
        title: 'sample-title',
        description: 'sample-description',
        focalPoint: [0, 0],
        link: {
          url: `${image22}`,
          target: '_blank'
        },
      }
    },
    
     
  ]

    // The options of the gallery (from the playground current state)
  const options = {
    "layoutParams": {
      "navigationArrows": {
            "type": "ARROW_3",
            "size": 35
        },
        "structure": {
            "galleryLayout": 0,
            "scrollDirection": "HORIZONTAL"
        },
    },
    "behaviourParams": {
        "item": {
            "content": {
                "loader": "COLOR"
            }
        }
    }
    };

 // The size of the gallery container. The images will fit themselves in it
  const container = {
    width: window.innerWidth,
    height: window.innerHeight
  };

  // The eventsListener will notify you anytime something has happened in the gallery.
  const eventsListener = (eventName, eventData) => {
    
    if (eventName === "ITEM_CLICKED") {
      const url = eventData.directLink.url

      
      MySwal.fire({
        imageUrl: `${url}`,
        width: "90%",
        showCloseButton: true,
        closeButtonColor: "#000",
        confirmButtonText: 'Download',
        showCancelButton: false, // There won't be any cancel button
        showConfirmButton: true // There won't be any confirm button
        
      }).then((result) => {
        if (result.isConfirmed) {
          saveAs(`${url}`, `${url}`)
         }
      })
    }
      
  }


  // The scrollingElement is usually the window, if you are scrolling inside another element, suplly it here
  const scrollingElement = window;

class Gallery extends React.Component {


   
  render() {
    return (
      <Element name="media" class=" m-8 mt-32 mb-8 md:mx-auto">
        <div class=" relative top-[-5rem] xl:left-16 md:left-4 left-[-3rem]" >
          <img src={mediaHead} alt="cover" class=" z-20 h-48 absolute center object-cover" />
        </div>  
        <ProGallery
          items={items}
          options={options}
          container={container}
          eventsListener={eventsListener}
          scrollingElement={scrollingElement}

        />
      </Element>
    );
  };
};
export default Gallery;
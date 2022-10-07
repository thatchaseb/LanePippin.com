import React from 'react'
import coverPic from '../media/coverCrop.png'
import { Element } from 'react-scroll'
import { connect } from 'react-redux';
import { fetchData } from '../../actions';


import paintQuote from '../media/Quotewhite.png'



class Landing extends React.Component {
  componentDidMount() {
    this.props.fetchData(1);
    this.props.fetchData(2);
  }

  render() {   
    if (!this.props.bio || !this.props.names) {
      return (
        
            <div className="h-screen flex justify-center py-32">Loading...</div>
          
       );
    } 

    return (
      <Element name="home" class="sm:bg-prim text-4xl relative bg-main">
        

        <div class="grid grid-cols-3 absolute z-0 bottom-0 lg:left-12"> 

        	<div class="max-h-screen col-span-2 z-0 ">

        		<img src={coverPic} alt="cover" class="hidden md:block select-none object-cover object-right h-full" />
        	</div>     
        </div>
     
        <div className="md:grid md:grid-cols-3 drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)] md:right-12 right-4 xl:bottom-[37rem] md:bottom-[35rem] sm:bottom-[25rem] bottom-[18rem] p-2 pr-1 rounded-xl absolute z-30 text-4xl text-center font-bold ">
          <div className='my-2'>
            <a  href={"https://www.facebook.com/lane.pippin.9"} style={{color:"#4267B2"}} target="_blank" rel="noreferrer">
              <i className="facebook icon" style={{color:"#4267B2"}}></i>
            </a>                 
          </div>

          <div className='my-2'>
            <a  href={"https://www.instagram.com/lane_pippin/"} style={{color:"#458eff"}} target="_blank" rel="noreferrer">
              <i className="instagram icon" style={{color:"#458eff"}}></i>
            </a>                
          </div>  
            
          <div className='my-2'>
            <a  href={"https://www.youtube.com/channel/UCDxKk5RUBZsZq-WIJpUbQsA/featured"} style={{color:"#FF0000"}} target="_blank" rel="noreferrer">
              <i className="youtube icon" style={{color:"#FF0000"}}></i>
            </a>
          </div>
        </div>



        <div class="grid md:grid-cols-2 z-10"> 

          <div class=""></div>


          <div class="font-Merriweather xl:mr-20 text-main md:text-white z-20 my-auto">
            <div class=" md:mt-48 sm:mt-24 mt-28 font-bold select-none text-center md:text-6xl xl:text-8xl text-5xl md:mr-4">
              Lane Pippin
            </div>
            <div class="md:my-8 italic text-center select-none relative md:pb-64">
              <div class="sm:text-2xl mt-8 md:mr-4 md:pb-32">
                
                {this.props.names.description}
                
              </div>


              <div class="md:hidden absolute text-main w-96 right-1/2 translate-x-1/2 top-[-5rem] z-10 font-bold select-none text-center text-5xl ">
              Lane Pippin
              </div>
              <div class="md:hidden absolute text-main right-1/2 sm:w-[40rem] w-[19rem]  translate-x-1/2 top-[0rem] z-10 select-none sm:text-2xl text-lg">
                
                {this.props.names.description}
              </div>
              <img src={coverPic} alt="cover" class="md:hidden block select-none sm:translate-x-[-10%] object-cover sm:mx-0 mx-auto h-[30rem]" />
           
              <img src={paintQuote} alt="paintQuote" class=" lg:h-96 md:h-80 h-56 lg:w-[30rem] md:w-[25rem] w-[35rem] absolute z-0 right-1/2 translate-x-1/2 lg:top-16 md:top-24 top-[-8rem] max-w-screen" />
              
                <div class="hidden sm:block z-10 absolute lg:top-32 md:top-36 top-36 md:right-1/2 md:translate-x-[55%] right-0 md:text-main text-white ">
                  <div class=" text-base md:text-sm lg:w-[20rem] w-64 lg:text-base mr-4 ">
                    {this.props.bio.description}
                    
                  </div>
                </div>
                

            </div>
            
          </div>

        </div>

        


      </Element>

    );
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    bio: state.datas[1],
    names: state.datas[2]
  };
};

export default connect(
  mapStateToProps,
  { fetchData }
)(Landing);


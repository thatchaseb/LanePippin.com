import React from 'react';
import { Link,  Events, animateScroll as scroll, scroller } from 'react-scroll'

import paintHead from './media/WhiteLong.png'


class Header extends React.Component {

  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);

    this.state = {
        menuOpen: false,
    };
  }

  componentDidMount() {

    Events.scrollEvent.register('begin', function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log("end", arguments);
    });

  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollToTopM() {
    if (this.state.menuOpen === false) {this.setState({ menuOpen: true })} else {this.setState({ menuOpen: false })}
    scroll.scrollToTop();
  }
  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 2000,

      smooth: 'easeInOutQuart',
      offset: 500
    })
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  handleMenuClick = () => {
     if (this.state.menuOpen === false) {this.setState({ menuOpen: true })} else {this.setState({ menuOpen: false })} 
  }


  render() {
    return (
      <div class="font-Merriweather">

        <div class="fixed w-screen z-40 pt-4 pr-12">
          
          <div class="p-4 relative flex justify-between">

            <div class="lg:grid grid-cols-2">
              <a href="/" className="text-sec-400 lg:ml-2 text-2xl lg:text-4xl font-Prata">
                
              </a>
            </div>

            <img src={paintHead} alt="HeaderBlock" class="hidden drop-shadow-xl md:block h-20 w-96 select-none absolute z-0 lg:right-4 right-0" />

            <div className="hidden z-40 mr-2 lg:mr-6 mt-3 delay-75 md:flex text-sec-400 justify-evenly text-md cursor-pointer text-main text-bold">
              <a to="/" onClick={this.scrollToTop} className="select-none mx-2 mt-3  px-2  hover:text-sec-400 transition ease-out duration-300">Home</a>              
              <Link className="select-none delay-75 mx-2 mt-3  px-2  hover:text-sec-400 cursor-pointer transition ease-out duration-300" to="media"  offset={-32} smooth={true} duration={800} >Gallery</Link>
              <Link className="select-none delay-75 mx-2 mt-3  px-2  hover:text-sec-400 cursor-pointer transition ease-out duration-300" to="about" offset={1} smooth={true} duration={800} >Resume</Link>
              <Link className="select-none mx-2 delay-75 mt-3  px-2 cursor-pointer hover:text-sec-400 transition ease-out duration-300" to="contact"  offset={-0} smooth={true} duration={800} >Contact</Link>
            </div>

            <div className="bg-white block md:hidden cursor-pointer mr-[-1rem] mt-2  drop-shadow-[0_0px_1px_rgba(0,0,0,1)] relative" onClick={this.handleMenuClick.bind()}>
              <svg xmlns="http://www.w3.org/2000/svg" class="border-solid rounded-lg border-2 border-gray-900 h-12 w-12 text-gray-900 right-0 absolute " viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
              </svg>
            </div>


          </div>
        </div>

        <div style={{display: `${this.state.menuOpen ? 'block' : 'none'}`}} class="fixed drop-shadow-xl shadow-main w-48 z-40 bg-gray-100 border-solid border-sec-400 border-2 rounded right-4 top-28 ">
          <div class="w-3/4 mx-auto my-1 divide-y divide-dashed divide-sec-400">
            
            <div class="text-center w-full py-2 ">
              <Link onClick={this.handleMenuClick.bind()} className="w-full delay-75 mx-2 lg:mt-3 mt-4 px-2  hover:text-main cursor-pointer transition ease-out duration-300" to="home"  smooth={true} duration={800} >Home</Link>
            </div>
            <div class="text-center py-2">
              <Link onClick={this.handleMenuClick.bind()} className="mx-2 lg:mt-3 mt-4 px-2  hover:text-main cursor-pointer transition delay-75 ease-out duration-300" to="media"  offset={-25} smooth={true} duration={800} >Gallery</Link>
            </div>
            <div class="text-center py-2">
              <Link onClick={this.handleMenuClick.bind()} className="mx-2 lg:mt-3 mt-4 px-2  hover:text-main cursor-pointer transition delay-75 ease-out duration-300" to="about" offset={1} smooth={true} duration={800} >Resume</Link>
            </div>
            <div class="text-center py-2">
              <Link onClick={this.handleMenuClick.bind()} className="mx-2 lg:mt-3 mt-4 px-2 cursor-pointer hover:text-main transition ease-out delay-75 duration-300" to="contact"  offset={-0} smooth={true} duration={800} >Contact</Link>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default Header;

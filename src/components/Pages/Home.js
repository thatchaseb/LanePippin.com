import React from 'react'
import Header from '../Header';
import Quote from './Quote';
import { connect } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Videos from '../Videos';
import About from '../About';
import Gallery from '../Gallery';
import Landing from './Landing';
import Resume from './Resume';
import Media from './Media';
import Contact from './Contact';
import { fetchData } from '../../actions';


class Home extends React.Component {
  componentDidMount() {
    this.props.fetchData(3);
    this.props.fetchData(3);
    this.props.fetchData(4);
    this.props.fetchData(5);
    this.props.fetchData(6);
    this.props.fetchData(7);
    this.props.fetchData(8);
    
  }

  render() {
    if (!this.props.qouteCiteThree || !this.props.quoteTextOne || !this.props.qouteCiteOne || !this.props.quoteTextTwo || !this.props.qouteCiteTwo || !this.props.quoteTextThree) {
      return <div>Loading..</div>;
    }
    return (      
      <div>
        <Outlet/>
        <Header />
        <Landing />
        <Gallery />
        <Videos />

        <Quote>
              <div>
                "{this.props.quoteTextOne.description}"
              </div>
              <div class="pt-8">
                -{this.props.qouteCiteOne.description}
              </div>
        </Quote>

        <About />

        <Quote>
              <div>
                “{this.props.quoteTextTwo.description}”
              </div>
              <div class="pt-8">
                -{this.props.qouteCiteTwo.description}
              </div>
        </Quote>

        <Resume />



        <Quote>
          <div>
            “{this.props.quoteTextThree.description}”        
          </div>
          <div class="pt-8">
            -{this.props.qouteCiteThree.description}
          </div>
        </Quote>
        <Contact /> 

      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    quoteTextOne: state.datas[3],
    qouteCiteOne: state.datas[4],
    quoteTextTwo: state.datas[5],
    qouteCiteTwo: state.datas[6],
    quoteTextThree: state.datas[7],
    qouteCiteThree: state.datas[8]
    
  };
};

export default connect(
   mapStateToProps,
  { fetchData }
)(Home);


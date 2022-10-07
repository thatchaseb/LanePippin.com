import React from 'react';
import ReactPlayer from 'react-player';
import { connect } from 'react-redux';
import { fetchData } from '../actions';
import { Carousel } from 'react-responsive-carousel';



const YoutubeSlide = ({ url, isSelected }: { url: string; isSelected?: boolean }) => (
    <ReactPlayer width="100%" url={url}  />
);
const customRenderItem = (item, props) => <item.type {...item.props} {...props} />;

const getVideoThumb = (videoId) => `https://img.youtube.com/vi/${videoId}/default.jpg`;

const getVideoId = (url) => url.substr('https://www.youtube.com/embed/'.length, url.length);

const customRenderThumb = (children) =>
        children.map((item) => {
            const videoId = getVideoId(item.props.url);
            return <img src={getVideoThumb(videoId)} />;
        });

class Videos extends React.Component {

    componentDidMount() {
        this.props.fetchData(9);
        this.props.fetchData(10);
        this.props.fetchData(11);
        this.props.fetchData(12);
    }
    
    render () {
        if (!this.props.video1 || !this.props.video2 || !this.props.video3 || !this.props.video4) {
          return <div>Loading..</div>;
        }

        return (
            <Carousel autoplay={false} showStatus={false} showIndicators={false} renderItem={customRenderItem} renderThumbs={customRenderThumb}>
                <YoutubeSlide key="youtube-4" url={this.props.video1.description} />
                <YoutubeSlide key="youtube-2" url={this.props.video2.description} />
                <YoutubeSlide key="youtube-1" url={this.props.video3.description} />
                <YoutubeSlide key="youtube-3" url={this.props.video4.description} />
            </Carousel>
        );
    }
};

const mapStateToProps = (state, ownProps) => {
  return {
    video1: state.datas[9],
    video2: state.datas[10],
    video3: state.datas[11],
    video4: state.datas[12]
  };
};

export default connect(
  mapStateToProps,
  { fetchData }
)(Videos);

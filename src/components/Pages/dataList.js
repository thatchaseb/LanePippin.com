import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { connect } from 'react-redux';
import GoogleAuth from '../GoogleAuth';
import { fetchDatas } from '../../actions';


class dataList extends React.Component  {
  componentDidMount() {
    this.props.fetchDatas();
  }

  renderAdmin(data) {
    if (data.userId === this.props.currentUserId || 106024964400545360779) {
      return (
        <div className="right floated content">
          <Link to={`/client/data/edit/${data.id}`} className="ui button primary">
            Edit
          </Link>
          
            
        </div>
      );
    }
  }

  renderList() {
    
    return this.props.datas.map(data => {
      if (data.userId === this.props.currentUserId) {
        return (
          <div className="item" key={data.id}>
            {this.renderAdmin(data)}
            <div className="content text-xl font-bold">
              {data.title}
            </div>
            <div className="description text-lg">{data.description}</div>
          </div>
        );
      }
    });

  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Link to="/client/data/new" className="ui button primary">
            Create data
          </Link>
        </div>
      );
    }
  }

  render() {
    if (this.props.isSignedIn) {
      return (

          <div className="m-8">
            <div className="text-2xl font-bold">Data Editing Home Page</div>
            <div className="ui celled list">{this.renderList()}</div>
            {this.renderCreate()}
          </div>
        
      );
    }
    
  }
};

const mapStateToProps = state => {
  return {
    datas: Object.values(state.datas),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { fetchDatas }
)(dataList);


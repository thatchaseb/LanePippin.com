import React from 'react';
import { connect } from 'react-redux';
import { withHooksHOC } from  './withHooksHOC';
import { fetchData, editData } from '../../actions';
import { useParams } from 'react-router-dom';
import DataForm from './DataForm';
import _ from 'lodash';

interface IHooksHOCProps {
  id: number;
}

class DataEdit extends React.Component<IHooksHOCProps>  {
  componentDidMount() {
    this.props.fetchData(this.props.id.id);
    
  }

  onSubmit = formValues => {
    this.props.editData(this.props.id.id, formValues);
    //console.log(this.props.data)
  };
 
  render() {
    if (!this.props.data) {
      return <div>Loading...</div>;
    }
    return ( 
      <div className="m-16">
        <div className="font-bold text-xl my-12">{this.props.data.title}</div>
        <DataForm
          initialValues={_.pick(this.props.data, 'title', 'description')}
          onSubmit={this.onSubmit}
        />
      </div>);
  }
};


const mapStateToProps = (state, ownProps) => {
  
  return { data: state.datas[ownProps.id.id] }
}

export default withHooksHOC(connect(
  mapStateToProps,
  { fetchData, editData }
)(DataEdit));
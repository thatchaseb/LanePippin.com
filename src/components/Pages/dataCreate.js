import React from 'react';
import { connect } from 'react-redux'; 
import { createData } from '../../actions';
import Home from './DataForm';

class dataCreate extends React.Component {


  onSubmit = formValues => {
    console.log(formValues);
  };

  render() {
    return (
      
      <div>
        
        Create New Data
        <Home onSubmit={this.onSubmit} />
        
      </div>
      

    );
  }
}

export default connect(
  null,
  { createData }
)(dataCreate);


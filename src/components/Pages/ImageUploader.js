import React from 'react';
import { Form, Field } from "react-final-form";
import { connect } from 'react-redux'; 
import { createData } from '../../actions';

class ImageUploader extends React.Component {
	state = {
		selectedFile: null
	}

  fileSelectedHandler = event => {
  	this.setState({
  		selectedFile:event.target.files[0]
  	})
  }

  fileUploadHandler = () => {
  	this.props.createData(this.state.selectedFile)
  }

  render() {
  	return (
    	<div class="">
    		<input type="file" onChange={this.fileSelectedHandler}/>
    		<button onClick={this.fileUploadHandler} className="ui button primary">Upload</button>
    		
    	</div>
  	);
  }
};

export default connect(
  null,
  { createData }
)(ImageUploader);

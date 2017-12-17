import React from 'react';
import { connect } from 'react-redux';
 import { getCurrentTime } from '../actions'
 import {bindActionCreators} from 'redux';

class Welcome extends React.Component {

	constructor(props){
		super(props)

	}

	render(){
		return (
			<div> Hello World4<br/>
			<button onClick={this.props.getCurrentTime}>Click</button>
<br/>
			{this.props.timeValue}

			</div>



		);



	}


}

const mapStateToProps = (state) => {
	return {
	      timeValue: state.timeValue
	}
}

const mapDispatchToProps = dispatch => {
  return {
    getCurrentTime: () => {
      dispatch(getCurrentTime())
    }
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Welcome);

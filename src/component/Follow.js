import React, { Component } from 'react';

class Follow extends Component {
	constructor(props) {
		super(props);
		this.state = {
			buttonStatus: 'unclicked'
		};
	}

	// handleChange = (e) => {
	// 	this.setState({ bgColor: !this.state.bgColor });
	// };

	handleClick = () => {
		this.setState({
			buttonStatus: 'clicked'
		});
	};

	render() {
		var yourBtn = this.state.buttonStatus;

		// so default is this style:
		var btnStyle = {
			backgroundColor: 'gray'
		};

		if (yourBtn == 'clicked') {
			btnStyle = {
				backgroundColor: 'red'
			};
		} else {
			btnStyle = {
				backgroundColor: 'gray'
			};
		}
		return (
			<div>
				<button onClick={this.handleClick} style={btnStyle}>
					{yourBtn}
				</button>
				<p />
			</div>
		);
	}
}

export default Follow;

import React from 'react'

class Buttontoggle extends React.Component {

	render() {
		return(
			<div>
				<Button text = "   Have a nice day..."> </Button>
			</div>
		)
	}
}

class Button extends React.Component{
	state = {
		textflag: false,
	}
	
	ToggleButton() {
		this.setState(
			{textflag : !this.state.textflag}
		);
	}

	render() {
		return(
			<div>
				<button className='toggle' onClick={() => this.ToggleButton()}>
				{ this.state.textflag === false ? "Hide":"Show" }
				</button>
				{!this.state.textflag && this.props.text}
			</div>
		)
	}
}

export default Buttontoggle;

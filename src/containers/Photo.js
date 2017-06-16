import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Webcam from 'react-webcam'
import './Photo.css'
import LoaderButton from '../components/LoaderButton'

class Photo extends Component {

	state = {
		screenshot: "http://www.getsmartcontent.com/content/uploads/2014/08/shutterstock_149293433.jpg"
	}

	setRef = (webcam) => {
		this.webcam = webcam
	}

	capture = () => {
		const imageSrc = this.webcam.getScreenshot()
		this.setState({
			screenshot: imageSrc
		})
	}

	render = () => {
		return (
			<div className="container">

				<Webcam
					className="webcam"
					audio={false}
					ref={this.setRef}
				/>

				<img 
					src={this.state.screenshot} 
					className="image" />

				<button 
					onClick={this.capture}>
					Capture
				</button>				

			</div>
		)
	}
}

export default withRouter(Photo)
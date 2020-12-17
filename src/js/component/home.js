import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export class Home extends React.Component {
	constructor() {
		super();

		this.state = {
			userInput: "",
			inputArray: []
		};
	}

	render() {
		return (
			<div className="container">
				<div className="text-center mt-5">
					<h1>{"ADD'er List "} </h1>

					<input
						type="text"
						className="form-control"
						aria-label="Large"
						aria-describedby="inputGroup-sizing-sm"
						onChange={event =>
							this.setState({ userInput: event.target.value })
						}
					/>
				</div>
			</div>
		);
	}
}

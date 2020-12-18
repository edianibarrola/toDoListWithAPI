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
	removeListItem(id) {
		this.setState({
			inputArray: this.state.inputArray.filter(
				(input, index) => index != id
			)
		});
	}
	addToListButton(e) {
		if (this.state.userInput) {
			this.setState(prevState => ({
				inputArray: [...prevState.inputArray, this.state.userInput],
				userInput: ""
			}));
		}
	}
	addToListEnter(e) {
		//this.setState(...prevState, input);
		//if key clicked

		if (e.keyCode == 13 && this.state.userInput) {
			this.setState(prevState => ({
				inputArray: [...prevState.inputArray, this.state.userInput],
				userInput: ""
			}));
		}
	}
	render() {
		return (
			<div className="container">
				<div className="text-center mt-5">
					<h1>{"ADDlist "} </h1>
					<div className="input-group">
						<input
							type="text"
							className="form-control"
							aria-label="Large"
							aria-describedby="inputGroup-sizing-sm"
							value={this.state.userInput}
							onChange={event =>
								this.setState({ userInput: event.target.value })
							}
							onKeyUp={e => this.addToListEnter(e)}
						/>
						<button
							className="input-group-append addButton"
							onClick={() =>
								this.addToListButton(this.state.userInput)
							}>
							ADD it up!
						</button>
					</div>
				</div>
				<div>
					<ol className="col-4 mx-auto light ">
						{this.state.inputArray.map((listItem, index) => {
							return (
								<li
									key={index}
									onClick={() => this.removeListItem(index)}>
									{listItem}
								</li>
							);
						})}
					</ol>
				</div>
			</div>
		);
	}
}

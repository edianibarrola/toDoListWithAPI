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
		this.url = "https://assets.breatheco.de/apis/fake/todos/user/edian";
	}

	componentDidMount() {
		fetch(this.url)
			.then(function(response) {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				return response.json();
			})
			.then(jsonifiedResponse =>
				this.setState({ inputArray: jsonifiedResponse })
			)
			.catch(function(error) {
				console.log("Looks like there was a problem: \n", error);
			});
	}
	removeListItem(id) {
		this.setState({
			inputArray: this.state.inputArray.filter(
				(input, index) => index != id
			)
		});
	}

	addToListButton(e) {
		let userInput = this.state.userInput;
		if (userInput) {
			let newItem = { label: userInput, done: false };
			let newInputArray = this.state.inputArray.concat(newItem);
			this.setState({
				inputArray: newInputArray,
				userInput: ""
			});
		}
	}
	addToListEnter(e) {
		let userInput = this.state.userInput;

		if (e.keyCode == 13 && userInput) {
			let newItem = { label: userInput, done: false };
			let newInputArray = this.state.inputArray.concat(newItem);
			this.setState({
				inputArray: newInputArray,
				userInput: ""
			});
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
								<li key={index}>
									{listItem.label}{" "}
									<input
										className="float-left d-flex-inline"
										type="checkbox"
										key={index}
									/>
									<i
										className="fas float-right fa-ban"
										onClick={() =>
											this.removeListItem(index)
										}
									/>
								</li>
							);
						})}
					</ol>
				</div>
			</div>
		);
	}
}

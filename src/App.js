import React from "react";
import {
	render
} from "react-dom";
import {
	Pet
} from "./Pet";

const App = () => {
	return React.createElement("div", {}, [
		React.createElement("h1", {}, "Adopt Me!"),
		React.createElement(Pet, {
			name: "Emma Frost",
			animal: "cat",
			breed: "Maine Coon",
		}),
		React.createElement(Pet, {
			name: "Selina",
			animal: "cat",
			breed: "Maine Coon",
		}),
		React.createElement(Pet, {
			name: "Spirit",
			animal: "dog",
			breed: "Siberian Husky",
		}),
	]);
};

render(React.createElement(App), document.getElementById("root"));

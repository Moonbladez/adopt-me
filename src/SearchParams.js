import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";

export const SearchParams = () => {
	const [location, setLocation] = useState("");
	const [animal, setAnimal] = useState("dog");
	console.log(location);
	return (
		<div className="search-params">
			<form action="">
				<label htmlFor="location">
					Location
					<input
						id="location"
						value={location}
						placeholder="location"
						onChange={(event) => {
							setLocation(event.target.value);
						}}
					/>
				</label>
				<label htmlFor="animal">
					animal
					<select
						name=""
						id="animal"
						value={animal}
						onChange={(event) => setAnimal(event.target.value)}
						onBlur={(event) => setAnimal(event.target.value)}
					>
						<option>All</option>
						{ANIMALS.map((animal) => (
							<option value={animal}>{animal}</option>
						))}
					</select>
				</label>

				<button>Submit</button>
			</form>
		</div>
	);
};

import axios from "axios";
import { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar";
import "./style.modules.css";

function Characters() {
	const [characters, setCharacters] = useState([]);
	const [backUp, setBackUp] = useState([]);

	useEffect(() => {
		async function fetchCharacters() {
			const response = await axios.get(
				"https://breakingbadapi.com/api/characters"
			);
			setCharacters(response.data);
		}
		fetchCharacters();
	}, []);

	function filterMovies(filterParams) {
		if (filterParams === " ") {
			setCharacters(backUp);
			return;
		}

		const filtred = characters.filter((currentCharacter) => {
			return currentCharacter.name
				.toLowerCase()
				.includes(filterParams.toLowerCase());
		});

		setCharacters(filtred);
	}

	return (
		<>
			<SearchBar filterState={filterMovies} />

			<div key={characters.name} className="character-container">
				{characters.map((currentCharacter, index) => {
					return (

						<section key ={index} className="wrapper">
							<div className="card" data-effect="zoom">
								
								<figure className="card__image">
									<img
										src={currentCharacter.img}
										alt="Short description"
									/>
								</figure>
								<div className="card__header"></div>
								<div className="card__body">
									<h3 className="card__name">{currentCharacter.name}</h3>
									<p className="card__job">{currentCharacter.occupation[0]}</p>
									<p className="card__bio">
										{" "}
										

										{currentCharacter.occupation[1]}
									</p>
							
								</div>
								<div className="card__footer">
									<p className="card__date">NickName: {currentCharacter.nickname}</p>
									<p className=""></p>
								</div>
							</div>
						</section>
					);
				})}
			</div>
		</>
	);
}

export default Characters;

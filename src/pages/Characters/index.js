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

			<div className="character-container">
				{characters.map((currentCharacter) => {
					return (

						<section class="wrapper">
							<div class="card" data-effect="zoom">
								
								<figure class="card__image">
									<img
										src={currentCharacter.img}
										alt="Short description"
									/>
								</figure>
								<div class="card__header"></div>
								<div class="card__body">
									<h3 class="card__name">{currentCharacter.name}</h3>
									<p class="card__job">{currentCharacter.occupation[0]}</p>
									<p class="card__bio">
										{" "}
										

										{currentCharacter.occupation[1]}
									</p>
							
								</div>
								<div class="card__footer">
									<p class="card__date">NickName: {currentCharacter.nickname}</p>
									<p class=""></p>
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

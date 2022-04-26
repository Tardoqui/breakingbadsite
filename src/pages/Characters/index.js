import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './style.modules.css';


function Characters() {
	const [characters, setCharacters] = useState([]);

	useEffect(() => {
		async function fetchCharacters() {
			const response = await axios.get(
				"https://breakingbadapi.com/api/characters"
			);
			setCharacters(response.data);
		}
		fetchCharacters();
	}, []);

	return (
		<div className="div-card">
			{characters.map((currentCharacter) => {
				return (
					<section className="container-card">
                        <div className="card">
                             <div>
                                <img className="card-image" src={currentCharacter.img} alt='' />
								</div>
                            <h2 className="card-text">{currentCharacter.name}</h2>
                        </div>
                    </section>
				);
			})}
		</div>
	);
}

export default Characters;

import Image1 from "../../assets/images/picture1.jpg";
import Image2 from "../../assets/images/picture2.jpg";
import Image3 from "../../assets/images/picture3.jpg";
import Image4 from "../../assets/images/picture4.jpg";
import Image5 from "../../assets/images/picture5.jpg";
import Image6 from "../../assets/images/picture6.jpg";
import Image7 from "../../assets/images/picture7.jpg";
import Image8 from "../../assets/images/picture8.jpg";
import Image9 from "../../assets/images/picture9.jpg";
import Image10 from "../../assets/images/picture10.jpg";
import Image11 from '../../assets/images/picture11.webp';
 
import "./style.modules.css";
import axios from "axios";
import { useEffect, useState } from "react";

function Episodes() {
	let allPictures = [
		Image1,
		Image2,
		Image3,
		Image4,
		Image5,
		Image6,
		Image7,
		Image8,
		Image9,
		Image10,
        Image11,
	];
	const [episodes, setEpisodes] = useState([]);

	useEffect(() => {
		async function fetchEpisodes() {
			const response = await axios.get(
				"https://breakingbadapi.com/api/episodes"
			);
			setEpisodes(response.data);
		}
		fetchEpisodes();
	}, []);

	return (
		<div  className="div-episodes">
			{episodes.map((currentEpisode, index) => {
				return (
					<section key={index} className="wrapper">
						<div className="card" data-effect="zoom">
							<figure className="card__image">
								<img
									className="episodes-image"
									src={
										allPictures[Math.floor(Math.random() * allPictures.length)]
									}
									alt=""
								/>
							</figure>
							<div className="card__header"></div>
							<div className="card__body">
								<h3 className="card__name">{currentEpisode.title}</h3>
								<p className="card__job">Episode: {currentEpisode.episode}</p>
								<p className="card__bio"> Season: {currentEpisode.season}</p>
							</div>
							<div className="card__footer">
								<p className="card__date">AirDate: {currentEpisode.air_date}</p>
								
							</div>
						</div>
					</section>
				);
			})}
		</div>
	);
}

export default Episodes;

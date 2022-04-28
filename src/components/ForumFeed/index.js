import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./style.modules.css";

function ForumFeed() {
	const [feedData, setFeedData] = useState([]);







	useEffect(() => {
		async function fetchFeedData() {
			const response = await axios.get(
				"https://ironrest.herokuapp.com/breakingbadforum"
			);
			setFeedData(response.data);
		}
		fetchFeedData();
	}, [feedData]);

	return (
		<div>
			<div className="div-feed-h1">
				<h1>Feed</h1>
			</div>
			{feedData.map((currentData, index) => {
				return (
					<div key={index} className="feed-card">
					<h6>from:</h6>
						<p className="card-name"><strong>{currentData.name}</strong></p>
						<span className="card-email"> {currentData.email}</span>

						<p>{currentData.post}</p>

						<div>
							<Link to={`/forum/${currentData._id}`}>
								<button className="post-detail-button">Post Details!</button>
							</Link>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default ForumFeed;

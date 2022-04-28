import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./style.modules.css";
function PostDetail() {
	const params = useParams();
	const navigate = useNavigate();
	const [user, setUser] = useState({});






	useEffect(() => {
		async function fetchUser() {
			const response = await axios.get(
				`https://ironrest.herokuapp.com/breakingbadforum/${params.postId}`
			);

			setUser(response.data);
			
		}
		fetchUser();
	}, [params.postId]);

	
	

	async function handleDelete() {
		await axios.delete(
			`https://ironrest.herokuapp.com/breakingbadforum/${params.postId}`
		);

		navigate("/forum");
	}

	return (
		<div className="card-detail-page">
			<div className="card-detail-container">
				<h1 className="card-detail-name">
					{user.name}{" "}
				</h1>
				<span className="card-detail-email">{user.email} </span>
				<div className="card-detail-post">
					<p><strong>Post:</strong> {user.post}</p>
				</div>
				<div>
					<button className="delete-button" onClick={handleDelete}>
						<strong>Delete!</strong>
					</button>
				</div>
			</div>
		</div>
	);
}

export default PostDetail;

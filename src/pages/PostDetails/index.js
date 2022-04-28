import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./style.modules.css";

function PostDetail() {
	const params = useParams();
	const navigate = useNavigate();
	const [user, setUser] = useState({ answers: []});
	const [form, setForm] = useState({
		owner: "",
		answer: "",
	});

	useEffect(() => {
		async function fetchUser() {
			const response = await axios.get(
				`https://ironrest.herokuapp.com/breakingbadforum/${params.postId}`
			);

			setUser(response.data);
		}
		fetchUser();
	}, [params.postId]);

	function handleChange(event) {
		setForm({ ...form, [event.target.name]: event.target.value });
	}

	async function handleDelete() {
		await axios.delete(
			`https://ironrest.herokuapp.com/breakingbadforum/${params.postId}`
		);

		navigate("/forum");
	}

	async function handleSubmit(event) {
		

		const attPost = { ...user };
		attPost.answers.push(form);

		delete attPost._id;

		await axios.put(
			`https://ironrest.herokuapp.com/breakingbadforum/${params.postId}`,
			attPost
		);

		navigate(`/forum`);
	}
	
	return (
		<div className="card-detail-page">
			<div className="card-detail-container">
				<h1 className="card-detail-name">{user.name} </h1>
				<span className="card-detail-email">{user.email} </span>
				<div className="card-detail-post">
					<p>
						<strong>Post:</strong> {user.post}
					</p>
				</div>
				<div>
					<button className="delete-button" onClick={handleDelete}>
						<strong>Delete!</strong>
					</button>
				</div>
			</div>
			
			<div>
			{user.answers.map((currentAnswer, index) => {
				return (
					<div key={index}> 
					<p>{currentAnswer.answer}</p>
					<span>by: {currentAnswer.owner}</span>
					</div>
				);
			})}
			</div>

			<div>
				<form onSubmit={handleSubmit}>
					<div className="owner-div">
						<input
							type="text"
							className="owner-input"
							id="owner"
							name="owner"
							placeholder="Put your name here..."
							value={form.owner}
							onChange={handleChange}
						/>
						<label htmlFor="answer" className="">
							<strong>Answer: </strong>
						</label>
						<input
							type="answer"
							className="answer-input"
							id="answer"
							name="answer"
							value={form.answer}
							onChange={handleChange}
						/>
					</div>
					<button type="submit" className="answers-button">
						Send!
					</button>
				</form>
			</div>
		</div>
	);
}

export default PostDetail;

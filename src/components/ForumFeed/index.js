import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./style.modules.css";

function ForumFeed() {
    const [feedData, setFeedData] = useState([]);

    useEffect(() => {
        async function fetchFeedData(){
            const response = await axios.get("https://ironrest.herokuapp.com/breakingbadforum");
            setFeedData(response.data)
        }
        fetchFeedData()
    }, [feedData]);
   
    return ( 
            <div>
				<div>
					<h1>Feed</h1>
				</div>
				{feedData.map((currentData) => {
					return (
						<div className="feed-card">
							<p className="card-body">Name :{currentData.name}</p>
							<span className="card-body">Email: {currentData.email}</span>
							<div className="form-floating">
								<p
									className="form-control"
									placeholder="Leave your post here"
									id="post"
									style={{ height: "100px" }}
									name="post"
								>
									{currentData.text}
								</p>
							</div>
							<div>
								<Link to={`/forum/${currentData._id}`}>
									<button className="">
										Post Details!
									</button>
								</Link>
							</div>
						</div>
					);
				})}
            </div>
     );
}

export default ForumFeed;
import axios from 'axios';
import {useState} from 'react';
import './style.modules.css';




function ForumForm() {
	
    const [addform, setAddForm] = useState({
        name: "",
        email: "",
        text: "",
		answers: [],	
	});







    function handleAddPost(e){
        setAddForm({ ...addform, [e.target.name]: e.target.value });
		
    }
	
    function handleSubmit(e) {
		
        e.preventDefault();
    
        axios.post("https://ironrest.herokuapp.com/breakingbadforum", addform);
    
        setAddForm({
          name: "",
          email: "",
          post: "",
        });
		
      }
    





    return (  
        <div className="forum-div">
			<form onSubmit={handleSubmit} className="form-forum" >
				<div className="name-div">
					<label htmlFor="nome" className="">
					<strong>Name: </strong>
					</label>
					<input
						type="text"
						className="input-name"
                        name="name"
						id="nome"
						aria-describedby="emailHelp"
                        value={addform.name}
                        onChange={handleAddPost}
					/>
					
				</div>
				<div className="email-div">
					<label htmlFor="email" className="">
					<strong>E-mail: </strong>
					</label>
					<input
						type="email"
						className="input-email"
						id="email"
                        name="email"
                        value={addform.email}
                        onChange={handleAddPost}
					/>
				</div>
				<div  className="post-div">
					<textarea
						className="post-area"
						placeholder="Message here!"
						id="post"
                        name="post"
						value={addform.post}
						onChange={handleAddPost}
					></textarea>
					<label htmlFor="post"></label>
				</div>
           
				<button  type="submit" className="post-button">
					Send!
				</button>
			</form>
		</div>
    );
}

export default ForumForm;
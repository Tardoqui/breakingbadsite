import axios from 'axios';
import {useState} from 'react';
import './style.modules.css';




function ForumForm() {
	
    const [addform, setAddForm] = useState({
        name: "",
        email: "",
        text: "",
    });

    function handleAddHelp(e){
        setAddForm({ ...addform, [e.target.name]: e.target.value });
		
    }
	
    function handleSubmit(e) {
		
        e.preventDefault();
    
        axios.post("https://ironrest.herokuapp.com/breakingbadforum", addform);
    
        setAddForm({
          name: "",
          email: "",
          text: "",
        });
		
      }
    





    return (  
        <div className="forum-div">
			<form onSubmit={handleSubmit} className="form-forum" >
				<div className="">
					<label htmlFor="nome" className="">
					<strong>Nome: </strong>
					</label>
					<input
						type="text"
						className=""
                        name="name"
						id="nome"
						aria-describedby="emailHelp"
                        value={addform.name}
                        onChange={handleAddHelp}
					/>
					
				</div>
				<div className="">
					<label htmlFor="email" className="">
					<strong>E-mail: </strong>
					</label>
					<input
						type="email"
						className=""
						id="email"
                        name="email"
                        value={addform.email}
                        onChange={handleAddHelp}
					/>
				</div>
				<div  className="">
					<textarea
						className=""
						placeholder="Message here!"
						id="post"
						style={{height: '100px'}}
                        name="text"
						value={addform.text}
						onChange={handleAddHelp}
					></textarea>
					<label style={{ opacity : '0.5' }} htmlFor="post"></label>
				</div>
           
				<button  type="submit" className="">
					AskHelp!
				</button>
			</form>
		</div>
    );
}

export default ForumForm;
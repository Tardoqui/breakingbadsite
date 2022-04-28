import "./style.modules.css";
import Video from "../../assets/videos/videoplayback.mp4";
import { Button } from "../../components/Button/index";
function Home() {
	return (
		<div className="hero-container">
			<video src={Video} autoPlay loop muted />
			
			<h1>Check Out!</h1>
			<div className="hero-btns">
				<Button
					className="btns"
					buttonStyle="btn--outline"
					buttonSize="btn--large"
					goTo='https://www.emmys.com/shows/breaking-bad'
				>
					Series awards!
				</Button>
                <Button
					className="btns"
					buttonStyle="btn--primary"
					buttonSize="btn--large"
					goTo='https://www.youtube.com/watch?v=HhesaQXLuRY'
				>
					Series trailer!
				</Button>
			</div>
		</div>
	);
}

export default Home;

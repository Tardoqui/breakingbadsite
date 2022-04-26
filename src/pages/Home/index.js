import "./style.modules.css";
import Video from "../../assets/videos/videoplayback.mp4";
import { Button } from "../../components/Button/index";
function Home() {
	return (
		<div className="hero-container">
			<video src={Video} autoPlay loop muted />
			<h1></h1>
			<h1>Entertainment!</h1>
			<div className="hero-btns">
				<Button
					className="btns"
					buttonStyle="btn--outline"
					buttonSize="btn--large"
					onclick="window.location.href='https://www.emmys.com/shows/breaking-bad'"
				>
					Check the series awards
				</Button>
                <Button
					className="btns"
					buttonStyle="btn--primary"
					buttonSize="btn--large"
					onclick="window.location.href='https://www.youtube.com/watch?v=HhesaQXLuRY'"
				>
					Check the series trailer
				</Button>
			</div>
		</div>
	);
}

export default Home;

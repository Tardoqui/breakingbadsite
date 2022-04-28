import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Characters from "./pages/Characters";
import Episodes from "./pages/Episodes";
import Forum from "./pages/Forum";
import Home from "./pages/Home";
import PostDetail from "./pages/PostDetails";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />}/>
        <Route path="/characters" element={<Characters />} />
        <Route path="/episodes" element={<Episodes />} />
		<Route path='/forum' element={<Forum />} />
		<Route path="/forum/:postId" element={<PostDetail />} />
			</Routes>

			<Footer />
		</>
	);
}

export default App;

import { useState } from "react";
import About from "./pages/Home/Home";
import { Body, ContentContainer, PageContainer } from "./styles/Containers";
import Aura from "./components/Aura/Aura";
import NavBar from "./components/NavBar/NavBar";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {

	const [page, setPage] = useState("about");

	function receiveData(data) {
		setPage(data);
	}

	return (
		<PageContainer>
			<Aura />
			<ContentContainer>
				<NavBar sendToParent={receiveData}/>
				<Body>
					{
						page === "about" ? <About />:
						page === "projects" ? <Projects /> :
						page === "contact" ? <Contact /> :
						null
					}
					{
						page === "about" || page === "projects" ? <Footer /> : null
					}
				</Body>
			</ContentContainer>
		</PageContainer>
	)
}

export default App

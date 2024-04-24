import Card from "../../components/Card/Card";
import PageIntro from "../../components/PageIntro/PageIntro";
import { ProjectsCardsContainer, ProjectsWrapper, Link } from "./Projects.styled";
import profileImage from '../../assets/images/spotify-profile.png';
import spotifySong from '../../assets/images/spotify-song.png';
import mazeImage from '../../assets/images/maze.png';
import dimeLogin from '../../assets/images/dime-login.png';
import dimeHome from '../../assets/images/dime-home.png';
import calgary from '../../assets/images/calgary.png';


const projects = {
    spotify: {
        description: "A comprehensive web app leveraging the Spotify API, delivering personalized insights into users' listening patterns and preferences.",
        tags: ["Node.js", "React", "Spotify API"],
        images: [profileImage, spotifySong]
    },
    scraper: {
        description: "A dynamic real estate web scraper focused on aggregating property listings in the Calgary area.",
        tags: ["Python", "Selenium", "Pandas"],
        images: [calgary]
    },
    maze: {
        description: "A two-player puzzle game where players will race each other to escape the maze.",
        tags: ["JavaScript", "HTML", "SCSS"],
        images: [mazeImage]
    },
    dime: {
        description: "An intuitive personal finance app designed to simplify money management and empower users to track expenses, set budgets, and achieve financial goals effortlessly.",
        tags: ["Node.js", "React", "SQL"],
        images: [dimeLogin, dimeHome]
    }
}

function Projects() {
    return(
        <ProjectsWrapper>
            <PageIntro bigString={"My Projects."} smallString={"A portfolio of projects and sites I've created. Designed to be innovative, helpful and fun."}/>
            <ProjectsCardsContainer>
                <Link href="https://github.com/JvsonKee/Spotify-Project" target="blank" style={{width: "59%", marginBottom: "35px"}}>
                    <Card label={"Spotify Profile"} description={projects.spotify.description} tags={projects.spotify.tags} images={projects.spotify.images} />
                </Link>

                <Link href="https://github.com/JvsonKee/calgary-real-estate-scraper" target="blank" style={{width: "39%", marginBottom: "35px"}}>
                    <Card label={"Real Estate Web Scraper"} description={projects.scraper.description} tags={projects.scraper.tags} images={projects.scraper.images}/>
                </Link>

                <Link href="https://github.com/JvsonKee/Maze-Runners" target="blank" style={{width: "39%"}}>
                    <Card label={"Maze Runners"} description={projects.maze.description} tags={projects.maze.tags} images={projects.maze.images}/>
                </Link>

                <Link href="https://github.com/JvsonKee/Dime-CPSC471" target="blank" style={{width: "59%"}}>
                    <Card label={"Dime"} description={projects.dime.description} tags={projects.dime.tags} images={projects.dime.images}/> 
                </Link>
            </ProjectsCardsContainer>
        </ProjectsWrapper>
    )
}

export default Projects
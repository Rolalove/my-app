import HomePage from "./components/HomePage";
import Myskills from "./components/Myskills";
import NavBar from "./components/NavBar";
import ProjectsSection from "./components/ProjectsSection";
import MyContact from "./components/MyContact";




export default function Home() {
  return (
    <div>
      <NavBar/>
     <HomePage/>
     <Myskills/>
     <ProjectsSection/>
     <MyContact/>
    </div>
  );
}

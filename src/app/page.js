import Image from "next/image";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";

export default function Home() {
  return (

    <main className="flex min-h-screen flex-col bg-[#121212]">
      <div className="container  mx-auto px-12 py-4">
        <NavBar/>
        <HeroSection/>
        <AboutSection/>
        <ProjectSection/>
      </div> 
    </main>

  );
}

import React from "react";
import Banner from "../components/Banner";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section id="home" >
        <Banner />
      </section>

      {/* About Section */}
      <section id="about" >
        <About />
      </section>

      {/* Projects Section */}
      <section id="projects" >
        <Projects />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;

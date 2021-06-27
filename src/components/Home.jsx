import React from "react";
import Header from "./Header";
import FeaturedProjects from "./FeaturedProjects";
import ContactMe from "./ContactMe";

function Home({ allProjects }) {
  return (
    <section className="home">
      <Header />
      <FeaturedProjects allProjects={allProjects} />
      <ContactMe />
    </section>
  );
}

export default Home;

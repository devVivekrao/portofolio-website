import React from "react";
import FeaturedProjects from "./FeaturedProjects";
import Header from "./Header";

function Home({ allProjects }) {
  return (
    <section className="home">
      <Header />
      <FeaturedProjects allProjects={allProjects} />
    </section>
  );
}

export default Home;

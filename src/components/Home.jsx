import React from "react";
import Header from "./Header";
import FeaturedProjects from "./FeaturedProjects";
import ContactMe from "./ContactMe";
import Footer from "./Footer";

function Home({ allProjects }) {
  return (
    <div className="home">
      <Header />
      <FeaturedProjects allProjects={allProjects} />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default Home;

import React from "react";
import Header from "./Header";
import FeaturedProjects from "./FeaturedProjects";
import ContactMe from "./ContactMe";
import Footer from "./Footer";

function Home({ allProjects }) {
  return (
    <section className="home">
      <Header />
      <FeaturedProjects allProjects={allProjects} />
      <ContactMe />
      <Footer />
    </section>
  );
}

export default Home;

import React from 'react';
import FeaturedProjects from './FeaturedProjects';
import Header from './Header';

function Home(){

    return(
        <div className="home">         
            <Header />
            <FeaturedProjects />
            
        </div>
    );

}
 
export default Home;
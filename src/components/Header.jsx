import React from 'react';

function Header(){

    return(
        <div className="header">         
            <h3>Hi, my name is</h3>
            <h1>Vivek rao.</h1>
            <p>I'm a full stack developer based in India. I specialise in creating interactive experiences and functional interfaces using MERN stack.</p>
            <div className="btn-div">
                <button>Download resume</button>
                <button>View projects</button>
            </div>       
        </div>
    );

}
 
export default Header;
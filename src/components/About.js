import React from "react";

function About(prop) {
    console.log(prop.image)
    return (
      <div className="About">
        <aside>
           {
               (prop && prop.image) ? <img src={prop.image} alt="blog logo"></img> 
                    : <img src="https://via.placeholder.com/215" alt="blog logo"></img>
           } 
            <p>{prop.about}</p>    
        </aside> 
      </div>
    );
  }
  
  export default About;
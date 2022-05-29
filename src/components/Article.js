import React from "react";

function Article(prop) {
   
    return (
      <div className="Article">
        <article>
            <h3>{prop.title}</h3>
            {
                (prop && prop.date) ? <small>{prop.date}</small>: <small>"January 1, 1970"</small>
            }
          <p>{prop.preview}</p>    
        </article> 
      </div>
    );
  }
  
  export default Article;
  
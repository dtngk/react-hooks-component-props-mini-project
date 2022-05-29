import React from "react";
import Article from "./Article"

function ArticleList(prop) {
   // console.log(prop.posts)
    return (
      <div className="ArticleList">
        <main>
            {
                prop.posts.map(ele => {
                    console.log(ele)
                  return (<Article key={ele.id} {...ele}/>);
                })
            }    
        </main>
      </div>
    );
  }
  
  export default ArticleList;
  
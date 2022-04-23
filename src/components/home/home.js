import "./home.css";
import React  from "react";





function Home(){
   
    return(
       <div className="home">
           <div className="container">
               <div className="text">
                    <h3>Great Design Collection</h3>
                    <h1>Mapple Wood Accent Chair</h1>
                    <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit,
                         Sed Do Eiuiana Smod Tempor Ut Labore Et Dolore Magna Aliqua.
                          Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip.</p>
                    <span>199.00$</span><br/>
                    <a href="#">More</a>
               </div>
               <div className="image">
                    <img src={require("./slider1.png")} />
               </div>
           </div>
       </div>
    )
}







export default Home;
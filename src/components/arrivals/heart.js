import "./heart.css";
import React,{Component} from "react";
import {FaTimes } from 'react-icons/fa';




class Heart extends Component{
   
    render() {
        const delet = () =>{
            document.getElementById("heartid").style.display="none";
          }
    return(
       <div className="heartclass" id="heartid">
          <div className="Favorite">
              <h3>Favorite</h3>
              <FaTimes onClick={delet}/>
          </div>
       </div>
    )
}}







export default Heart;
import "./header.css";
import React,{Component} from "react";
import {FiSearch } from 'react-icons/fi';
import {BsCartDash,BsHeart } from 'react-icons/bs';
import {RiBarChartHorizontalLine} from 'react-icons/ri';




class Header extends Component{
     Showcar = () =>{
        document.getElementById("carclass").style.display="block";
      }
    render() {
      const  searcharea = () =>{
        document.getElementById("search").style.display === "block" ?
         document.getElementById("search").style.display="none" :
          document.getElementById("search").style.display="block"
     }
 
     const toShowList = () =>{
        document.getElementById("links").style.display == "none" ? document.getElementById("links").style.display="block" : document.getElementById("links").style.display="none" 
     }
    let y=this.props.num;
    return(
        <div className="header">
            <input type="text" placeholder="Search" id="search" />
    <div className="container">
        <div className="logo">
          <h1 onClick={searcharea}>Sine<span>Mkt</span></h1>
          <div>
           <RiBarChartHorizontalLine  className="bar" id="bar" onClick={toShowList}/>
           </div>
        </div>
        <div className="parent"  id="links">
          <div className="inner">
          <ul className="links" >
              <li><a href="#" className="active">Home</a></li>
              <li><a href="#">New Arrival</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Blogs</a></li>
              <li><a href="#">Contact</a></li>
          </ul>

          <div className="icons">
              <ul>
                  <li><FiSearch className="icon" onClick={searcharea}/></li>
                  <li><a className="carparent" onClick={this.Showcar}><BsCartDash  className="icon car" id="icon-car"/> <span id="number-of">{y}</span> </a></li>
                  <li><a href="#"><BsHeart className="icon"/></a></li>
              </ul>
          </div>
         
          </div>
          </div>
          </div>
         
        </div>
    )
}}


export default Header;
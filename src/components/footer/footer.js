
import './footer.css';
import React, { Component } from 'react';
import {RiSendPlaneFill,RiBehanceLine } from 'react-icons/ri';
import {FaFacebookF,FaFacebookMessenger } from 'react-icons/fa';
import {AiFillLinkedin } from 'react-icons/ai';
import { BsInstagram} from 'react-icons/bs';








function Footer(){
   
    return (
        
        <div className='footer'>
        <div className='container'>
            <div className='links'>
                  <div className='info'>
                      <h2>Information</h2>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">News</a></li>
                        <li><a href="#">Store</a></li>
                    </ul>
                  </div>
                  <div className='c1'>
                      <h2>Collections</h2>
                      <ul>
                          <li><a href="#">Wooden Chair</a></li>
                          <li><a href="#">Royal Cloth Sofa</a></li>
                          <li><a href="#">Accent Chair</a></li>
                          <li><a href="#">Bed</a></li>
                          <li><a href="#">Hanging Lamp</a></li>
                      </ul>

                      </div>
                      <div className='account'>
                          <h2>My Accounts</h2>
                       <ul>
                           <li><a href="#">My Account</a></li>
                           <li><a href="#">Wishlist</a></li>
                           <li><a href="#">Community</a></li>
                           <li><a href="#">Order History</a></li>
                           <li><a href="#">My Cart</a></li>
                       </ul>
                      </div>
                      <div className='letter'>
                          <h2>Newsletter</h2>
                      <p>Subscribe to get latest news,update and information.</p>
                      <form>
                          <input type='text' placeholder='Enter Email here...' />
                         <span><RiSendPlaneFill /></span>
                      </form>
                      </div>
            </div>
            <div className='icons'>
                   <ul>
                       <li><FaFacebookF /></li>
                       <li><BsInstagram /></li>
                       <li><AiFillLinkedin /></li>
                       <li><RiBehanceLine /></li>
                       <li><FaFacebookMessenger /></li>
                   </ul>
                   <p>©Copyright. Designed And Developed By Adel Sherif</p>
            </div>
        </div>
        </div>

      );
  }
  
  export default Footer;

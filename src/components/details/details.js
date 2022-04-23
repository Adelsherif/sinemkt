
import './details.css';
import React, { Component } from 'react';




function Details() {
   
    return (
        
      <div className='details'>
        <div className='container'>
            <div className='part1'>
             <img src={require('./p1.png')} />
             <h3>Arm Chair</h3>
             <p>Nemo enim ipsam voluptatem quia volu ptas sit asperna aut odit aut</p>
            </div>
            <div className='part2'>
            <div className='mainimage'>
             <img src={require('./p2.png')} />
             </div>
            <div className='maintext'>
             <h3>Latest Designed Stool and Chair</h3>
             <p>Edi Ut Perspiciatis Unde Omnis Iste Natusina Error Sit Voluptatem Accusantium Doloret Mque Laudantium, Totam Rem Aperiam.</p>
                <h4>Sales Start from <span>$99.00</span></h4>
                <a href='#'>Discover More</a>
             </div>
            </div>
            <div className='part1'>
             <img src={require('./p3.png')} className='img2'/>
             <h3>Hanging Lamp</h3>
             <p>Nemo enim ipsam voluptatem quia volu ptas sit asperna aut odit aut</p>
                
            </div>
        </div>
     </div>

      );
  }
  
  export default Details;

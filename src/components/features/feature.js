
import './feature.css';
import React from 'react';
import {AiOutlineStar ,AiFillStar} from 'react-icons/ai';


function Feature(){
   
    return (
        
      <div className='features'>
          <h1>Featured Products</h1>
         <div className='container'>
             <div className='feature'>
               <img src={require('./f1.jpg')} alt="photo"/>
               <div className='icons'><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiOutlineStar /> </div>
               <h4>Designed Sofa</h4>
               <h5>$160.00</h5>
             </div>
             <div className='feature'>
               <img src={require('./f2.jpg')} alt="photo"/>
               <div className='icons'><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiOutlineStar /> </div>
               <h4>Designed Sofa</h4>
               <h5>$160.00</h5>
             </div> <div className='feature'>
               <img src={require('./f3.jpg')} alt="photo"/>
               <div className='icons'><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiOutlineStar /> </div>
               <h4>Designed Sofa</h4>
               <h5>$160.00</h5>
             </div> <div className='feature'>
               <img src={require('./f4.jpg')} alt="photo"/>
               <div className='icons'><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiOutlineStar /> </div>
               <h4>Designed Sofa</h4>
               <h5>$160.00</h5>
             </div>
         </div>
     </div>

      );
  }
  
  export default Feature;

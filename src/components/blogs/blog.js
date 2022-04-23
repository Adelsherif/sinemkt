
import './blog.css';
import React from 'react';

function Blog(){
   
    return (
        
      <div className='blogs'>
          <h1>Latest Blog</h1>
         <div className='container'>
            <div className='blog'>
            <div className='image'>
               <img src={require('./b1.jpg')} alt="photo"/>
            </div>
               <h4>Why Brands are Looking at Local Language</h4>
               <h5>By Robert Norby / 18th March 2018</h5>
               <p>Nemo Enim Ipsam Voluptatem Quia Voluptas Sit Aspernatur Aut Odit Aut Fugit,
                    Sed Quia Consequuntur Magni Dolores Eos Qui Ratione Voluptatem Sequi Nesciunt....</p>
             </div>
             <div className='blog'>
            <div className='image'>
               <img src={require('./b2.jpg')} alt="photo"/>
               <div className='cover'></div>
            </div>
               <h4>Why Brands are Looking at Local Language</h4>
               <h5>By Robert Norby / 18th March 2018</h5>
               <p>Nemo Enim Ipsam Voluptatem Quia Voluptas Sit Aspernatur Aut Odit Aut Fugit,
                    Sed Quia Consequuntur Magni Dolores Eos Qui Ratione Voluptatem Sequi Nesciunt....</p>
             </div> <div className='blog'>
            <div className='image'>
               <img src={require('./b3.jpg')} alt="photo"/>
               <div className='cover'></div>
            </div>
               <h4>Why Brands are Looking at Local Language</h4>
               <h5>By Robert Norby / 18th March 2018</h5>
               <p>Nemo Enim Ipsam Voluptatem Quia Voluptas Sit Aspernatur Aut Odit Aut Fugit,
                    Sed Quia Consequuntur Magni Dolores Eos Qui Ratione Voluptatem Sequi Nesciunt....</p>
             </div>
         </div>
     </div>

      );
  }
  
  export default Blog;

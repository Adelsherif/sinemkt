
import './client.css';
import React from 'react';


function Client(){
   
    return (
        
      <div className='clients'>
        <div className='container'>
           <img src={require('./c1.png')} alt="photo" />
           <img src={require('./c2.png')} alt="photo" />
           <img src={require('./c3.png')} alt="photo" />
           <img src={require('./c4.png')} alt="photo" />
           <img src={require('./c5.png')} alt="photo" />

        </div>
     </div>

      );
}
  
  export default Client;

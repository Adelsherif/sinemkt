
import './arrivals.css';
import React,{Component} from 'react';
import {BsCartCheck , BsHeart} from 'react-icons/bs'; 

class Arrivals extends Component{
    render(){
       const products=this.props.product;
     
       const looper =  products.map(product => {
            return(
            <div className='product' key={product.id}>
            <div className='image'>
               <img src={product.image} alt="photo1" />
            </div>
            <div className='icons'>
               <p onClick={() => this.props.func(product.id)}> <BsCartCheck/> Add To Car</p>
               <p><BsHeart /></p>
            </div>
            <div className='text'>
                  <h3>{product.name}</h3>
                  <h4>${product.price}</h4>
        </div>
        </div>
         )})
    
    return (
        
      <div className='arrivals'>
          <div className='container'>
              <h1>New Arrivals</h1>
              <div className='products'>
              {looper}
              </div>
          </div>
        
     </div>

      );
  }
}
  export default Arrivals;

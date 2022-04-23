import "./car.css";
import React,{Component} from "react";
import {FaTimes,FaPlus,FaMinus } from 'react-icons/fa';




class Car extends Component{

    render() {
   let x=0;
    const delet = () =>{
      document.getElementById("carclass").style.display="none";
    }
    let mapper=  
    this.props.map.map(p =>{
    x +=p.price ;
   return(
           <div className='product-in' key={p.id}>
               <img src={p.image} />
               <h4>{p.name}</h4>
               <p>{p.price} "$"</p>
               <span onClick={() =>this.props.deletitem(p.id)}>Delet</span>
             </div>
             
  )})
  
    return(
       <div className="carclass" id="carclass">
          <div className="shoppingbasket">
              <h3>shopping basket</h3>
              <FaTimes onClick={delet}/>
          </div>
          <div id="car">
              {mapper}
          </div>
        <div className="total" id="total">Total:${x}.0</div>
       </div>
    )
}}







export default Car;
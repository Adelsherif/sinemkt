
import './App.css';
import React, { Component } from 'react';
import Header from './components/header/header';
import Car from './components/arrivals/car';
import Home from './components/home/home';
import Details from './components/details/details';
import Arrivals from './components/arrivals/arrivals';
import Collection from './components/collection/collection';
import Feature from './components/features/feature';
import Blog from './components/blogs/blog';
import Client from './components/clients/client';
import Footer from './components/footer/footer';
import {ImArrowUp2} from 'react-icons/im';




class App extends Component{
   state={
     products:[
     {id:Math.random(),name:"Wooden Chair",price:100.00,image:require("./arrivals1.png"),disabled:true},
     {id:Math.random(),name:"Single Armchair",price:65.00,image:require("./arrivals2.png"),disabled:true},
     {id:Math.random(),name:"Wooden Armchair",price:40.00,image:require("./arrivals3.png"),disabled:true},
     {id:Math.random(),name:"Stylish Chair",price:60.00,image:require("./arrivals4.png"),disabled:true},
     {id:Math.random(),name:"Modern Chair",price:90.00,image:require("./arrivals5.png"),disabled:true},
     {id:Math.random(),name:"Mapple Wood Dinning Table",price:150.00,image:require("./arrivals6.png"),disabled:true},
     {id:Math.random(),name:"Arm Chair",price:99.00,image:require("./arrivals7.png"),disabled:true},
     {id:Math.random(),name:"Wooden Bed",price:55.00,image:require("./arrivals8.png"),disabled:true},
    ],
    car:[],
    disabled:true
   }
   constructor(){
     super()
     if(localStorage.getItem("products")){
         this.state.car =JSON.parse(localStorage.getItem("products"));
     }
   }

  render() {
   let newState=this.state.car;
      window.onscroll=function (){
        window.scrollY > 400 ? document.getElementById("btn").style.display="block" :document.getElementById("btn").style.display="none";
      }
    const totop = () =>{
            window.scrollTo(0,0)
    }
   const  adder = (id) =>{ 
    this.state.products.filter(product =>{
    if( id === product.id && product.disabled !== false ){
            product.disabled=false;
      newState.push({name:product.name,id:product.id,image:product.image,price:product.price});
      this.setState({car:newState})
      localStorage.setItem("products",JSON.stringify(newState));
      product.setState({name:product.name,id:product.id,image:product.image,price:product.price,disabled:false})
  }
  }) 
}
const deletitem = (id) =>{
    let carts=newState.filter((product) =>{
        return product.id !== id 
    })
    this.setState({car:carts})
    localStorage.setItem("products",JSON.stringify(carts))
  }
  
   return ( 
      <div>
        <div className='totop'>
          <div className='inner'>
            <button onClick={totop} id="btn"><ImArrowUp2 /></button>
          </div>
        </div>
       
         <Header num={this.state.car.length}/>  
         <Car map={this.state.car} deletitem={deletitem}/> 
         <Home />
         <Details />
         <Arrivals product={this.state.products} func={adder}/>
         <Collection />
         <Feature />
         <Blog />
         <Client />
         <Footer />
     </div>
      );
  }}
  
  export default App;

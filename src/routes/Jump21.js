import React, { Component } from 'react'
import { Container,Row,Col,Navbar,NavbarBrand,NavLink,Button } from 'react-bootstrap'
import NavBar from '../components/Nav/NavBar'
import JP from '../img/jump21.jpg'
import { Link  } from "react-router-dom";
import Footer from '../components/Footer/Footer'

import allStyles from '../styles/All.module.css'

export default class Jump21 extends Component {
    componentDidMount() {
    
        window.scrollTo(0, 0);
    
   }    
   
    render() {
  
        return (

            <div>
                <NavBar />
            

            <div className={allStyles.jump21}>

                 <div className={allStyles.emptyDiv}></div>
                 
    
                    <div className={allStyles.mainText_hw}>

         
                    <h4 className={allStyles.mainText_title}>21 Jump Street</h4>
               

                    <div className={allStyles.mainText_year}> 2012 | 15+ | 109min |Action Comedy</div>
       


                    <div className={allStyles.paragraphText}>
                 
                    A pair of underachieving cops are sent back to a local high school to blend in and bring down a synthetic drug ring.
                
                         </div>
                      
                    
          
                    <p>Starting:Jonah Hill, Channing Tatum, Brie Larson, Dave Franco</p>
                         <Link to="/">Go Back</Link> 
       
    
                    </div>
                    <div className={allStyles.emptyDiv}></div>

        </div>


            <Footer />
        </div>

            
        )
    }






}
    

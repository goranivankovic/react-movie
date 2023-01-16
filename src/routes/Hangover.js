import React, { Component } from 'react'
import { Container,Row,Col,Navbar,NavbarBrand,NavLink,Button } from 'react-bootstrap'
import NavBar from '../components/Nav/NavBar'
import HG from '../img/hangover.jpg'
import { Link  } from "react-router-dom";
import Footer from '../components/Footer/Footer'

import allStyles from '../styles/All.module.css'

export default class Hangover extends Component {
    componentDidMount() {
    
        window.scrollTo(0, 0);
    
   }    
   
    render() {
  
        return (
            <div>
                <NavBar />
          

            <div className={allStyles.hangOver}>
        
                    <div className={allStyles.mainText_hw}>

         
                    <h4 className={allStyles.mainText_title}>The Hangover</h4>
              

                    <div className={allStyles.mainText_year}> 2009 | 16+ | 100min | Comedy</div>
         

                    <div className={allStyles.paragraphText}>
                 
                    Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing. They make their way around the city in order to find their friend before his wedding.
                        
                
                         </div>
                      
                    
           
                    <p>Starting:Bradley Cooper, Ed Helms, Zach Galifianakis, Justin Bartha</p>
                         <Link to="/">Go Back</Link> 
          
    
                    </div>
                

        </div>


              <Footer />

              </div>
        )
    }




   
}

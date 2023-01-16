import React, { Component } from 'react'
import { Container,Row,Col,Navbar,NavbarBrand,NavLink,Button } from 'react-bootstrap'
import NavBar from '../components/Nav/NavBar'
import LG from '../img/lego.jpg'
import { Link  } from "react-router-dom";
import Footer from '../components/Footer/Footer'

import allStyles from '../styles/All.module.css'
export default class Lego extends Component {
    componentDidMount() {
    
        window.scrollTo(0, 0);
    
   }    
   
    render() {
    
        return (
            <div>
                <NavBar />
            
            <div className={allStyles.lego}>
        
                    <div className={allStyles.mainText_hw}>

       

                    <h4 className={allStyles.mainText_title}>Lego Movie</h4>
             


                    <div className={allStyles.mainText_year}> 2014 | 13+ | 100min | Animation Adventure Comedy Family</div>
          


                    <div className={allStyles.paragraphText}>
                 
                    The LEGO Movie is a 3D animated film which follows lead character, Emmet a completely ordinary LEGO mini-figure who is identified as the most extraordinary person and the key to saving the Lego universe. Emmet and his friends go on an epic journey to stop the evil tyrant, Lord Business.
                
                         </div>
                      
                    
              
                    <p>Starting:Will Arnett, Elizabeth Banks, Craig Berry, Alison Brie</p>
                         <Link to="/">Go Back</Link> 
          
    
                    </div>
                

        </div>
        <Footer />


        </div>

            
        )
    }





   
}

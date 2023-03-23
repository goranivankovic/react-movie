import React, { Component } from 'react'
import { Container,Row,Col,Navbar,NavbarBrand,NavLink,Button } from 'react-bootstrap'
import NavBar from '../components/Nav/NavBar'
import CR from '../img/casinoRoyal.jpg'
import { Link  } from "react-router-dom";
import Footer from '../components/Footer/Footer'

import allStyles from '../styles/All.module.css'

export default class CasinoRoyal extends Component {
    componentDidMount() {
    
        window.scrollTo(0, 0);
    
   }    
   
    render() {
      
        return (
              <div>
                  <NavBar />
           
            <div className={allStyles.casino}>


                   <div className={allStyles.emptyDiv}></div>
        
                    <div className={allStyles.mainText_hw}>

          
                    <h4 className={allStyles.mainText_title}>Casino Royale</h4>
              

                    <div className={allStyles.mainText_year}>2006 | 15+ | 144min | Action Adventure Thriller</div>
            
                    <div className={allStyles.paragraphText}>
                 
                    After earning 00 status and a licence to kill, Secret Agent James Bond sets out on his first mission as 007. Bond must defeat a private banker funding terrorists in a high-stakes game of poker at Casino Royale, Montenegro.
                
                         </div>
                      
                    
           
                    <p>Starting:Daniel Craig, Eva Green, Mads Mikkelsen, Judi Dench</p>
                         <Link to="/">Go Back</Link> 
       
    

                    </div>
                
                 <div className={allStyles.emptyDiv}></div>
        </div>

        <Footer />

        </div>


            
            
        )
    }


  
}

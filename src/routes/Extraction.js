import React, { Component } from 'react'
import { Container,Row,Col,Navbar,NavbarBrand,NavLink,Button } from 'react-bootstrap'
import NavBar from '../components/Nav/NavBar'
import EX from '../img/extraction.jpg'
import { Link  } from "react-router-dom";
import Footer from '../components/Footer/Footer'

import allStyles from '../styles/All.module.css'

export default class Extraction extends Component {
    componentDidMount() {
    
        window.scrollTo(0, 0);
    
   }    
   
    render() {
   
        return (

            <div>
                <NavBar />

         

            <div className={allStyles.extraction}>
          
                    <div className={allStyles.mainText_hw}>

          
                    <h4 className={allStyles.mainText_title}>Extraction</h4>
                   
                    <div className={allStyles.mainText_year}> 2020 | 15+ | 116min | Action  Thriller</div>
         


                    <div className={allStyles.paragraphText}>
                 
                    Tyler Rake, a fearless black market mercenary, embarks on the most deadly extraction of his career when he's enlisted to rescue the kidnapped son of an imprisoned international crime lord
                
                         </div>
                      
                    
           
                    <p>Starting:Chris Hemsworth, Bryon Lerum, Ryder Lerum, Rudhraksh Jaiswal</p>
                         <Link to="/">Go Back</Link> 
        
    
                    </div>
                

        </div>
        <Footer />

        </div>


            
        )
    }
  
}

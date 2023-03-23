import React, { Component } from 'react'
import { Container,Row,Col,Navbar,NavbarBrand,NavLink,Button } from 'react-bootstrap'
import NavBar from '../components/Nav/NavBar'
import ST from '../img/steel.jpg'
import { Link  } from "react-router-dom";
import Footer from '../components/Footer/Footer'

import allStyles from '../styles/All.module.css'


export default class ManStell extends Component {
    componentDidMount() {
    
        window.scrollTo(0, 0);
    
   }    
   
    render() {
      
        return (
               <div>
                <NavBar />        
            <div className={allStyles.superman}>
           
          
                       <div className={allStyles.emptyDiv}></div>

                    <div className={allStyles.mainText_hw}>

            
                    <h4 className={allStyles.mainText_title}>Man of Steel</h4>


               
                    <div className={allStyles.mainText_year}> 2013 | 15+ | 143min | Action Adventure Thriller</div>
          

                    <div className={allStyles.paragraphText}>
                 
                    An alien child is evacuated from his dying world and sent to Earth to live among humans. His peace is threatened, when other survivors of his home planet invade Earth.
                
                         </div>
                      
              
                    <p>Starting:Henry Cavill, Amy Adams, Michael Shannon, Diane Lane</p>
                         <Link to="/">Go Back</Link> 
       
    
                    </div>
                 <div className={allStyles.emptyDiv}></div>

        </div>


        <Footer />



        </div>





            
        )
    }



    
}

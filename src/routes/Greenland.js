import React, { Component } from 'react'
import { Container,Row,Col,Navbar,NavbarBrand,NavLink,Button } from 'react-bootstrap'
import NavBar from '../components/Nav/NavBar'
import GL from '../img/greenland.jpg'
import { Link  } from "react-router-dom";
import Footer from '../components/Footer/Footer'

import allStyles from '../styles/All.module.css'

export default class Greenland extends Component {
    componentDidMount() {
    
        window.scrollTo(0, 0);
    
   }    
   
    render() {
   

        return (

            <div>

                <NavBar />


      

           
            <div className={allStyles.greenland}>
     

    
                    <div className={allStyles.mainText_hw}>

            
                    <h4 className={allStyles.mainText_title}>Greenland</h4>
                
                    <div className={allStyles.mainText_year}> 2020 | 15+ | 119 min | Action Drama Thriller</div>
          


                    <div className={allStyles.paragraphText}>
                 
                    A family struggles for survival in the face of a cataclysmic natural disaster.
                        
                
                         </div>
                      
                    
         
                    <p>Starting:Gerard Butler, Morena Baccarin, Roger Dale Floyd, Scott Glenn</p>
                         <Link to="/">Go Back</Link> 
       
    
                    </div>
                

        </div>
        <Footer />



        </div>
         
        )
    }
}

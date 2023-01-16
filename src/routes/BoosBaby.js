import React, { Component } from 'react'
import { Container,Row,Col,Navbar,NavbarBrand,NavLink,Button } from 'react-bootstrap'
import NavBar from '../components/Nav/NavBar'
import BB from '../img/bossBaby2.jpg'
import { Link  } from "react-router-dom";
import Footer from '../components/Footer/Footer'

import allStyles from '../styles/All.module.css'

export default class BoosBaby extends Component {
    componentDidMount() {
    
        window.scrollTo(0, 0);
    
   }    
   
    render() {
    
        return (
            <div>
                <NavBar />
           

              <div className={allStyles.bossBaby}>
       
                    <div className={allStyles.mainText_hw}>

             
                    <h4 className={allStyles.mainText_title}>The Boss Baby</h4>

                
                    <div className={allStyles.mainText_year}>2017 | 12+ | 97min | Animation, Adventure</div>
         
        
                    <div className={allStyles.paragraphText}>
                 
                    A suit-wearing, briefcase-carrying baby pairs up with his 7-year old brother to stop the dastardly plot of the CEO of Puppy Co.
                
                         </div>
                      
                    
              
                    <p>Starting:Alec Baldwin, Steve Buscemi, Jimmy Kimmel</p>
                         <Link to="/">Go Back</Link> 
       

    
                    </div>
                

        </div>

            
           <Footer />
        </div>
   
        )
    }




 
}

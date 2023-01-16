import React, { Component } from 'react'
import { Container,Row,Col,Navbar,NavbarBrand,NavLink,Button } from 'react-bootstrap'
import NavBar from '../components/Nav/NavBar'
import BP from '../img/blackPanter.jpg'
import { Link  } from "react-router-dom";
import Footer from '../components/Footer/Footer'

import allStyles from '../styles/All.module.css'

export default class BlackP extends Component {
    componentDidMount() {
    
        window.scrollTo(0, 0);
    
   }    
   
    render() {

      
      
        return (
            <div>
                <NavBar />
         

            <div className={allStyles.blackPanter}>
        
    
                    <div className={allStyles.mainText_hw}>
    
            
                    <h4 className={allStyles.mainText_title}>Black Panter</h4>
                
                    <div className={allStyles.mainText_year}>018 | 14+ | 134min | Action Adventure Sci-Fi</div>
              
                    <div className={allStyles.paragraphText}>
                 
                    T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past
                
                         </div>
                      
                    
               
                    <p>Starting:Chadwick Boseman, Michael B. Jordan, Lupita Nyong'o, Danai Gurira</p>
                         <Link to="/">Go Back</Link> 
        
    
                    </div>
                
    
        </div>
        <Footer />

        </div>
       
        )
    }






   
}

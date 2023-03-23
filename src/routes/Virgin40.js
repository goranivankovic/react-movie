import React, { Component } from 'react'
import { Container,Row,Col,Navbar,NavbarBrand,NavLink,Button } from 'react-bootstrap'
import NavBar from '../components/Nav/NavBar'
import VG from '../img/virgin.jpg'
import { Link  } from "react-router-dom";
import Footer from '../components/Footer/Footer'

import allStyles from '../styles/All.module.css'



export default class Virgin40 extends Component {
    componentDidMount() {
    
        window.scrollTo(0, 0);
    
   }    
   

    render() {
        const widHeig ={
            height:'90vh',
            width:'100%',
            zIndex:-10,
            opacity:0.4,
           
        }
        return (

            <div>
                <NavBar />
         

            <div className={allStyles.virgin}>

                   <div className={allStyles.emptyDiv}></div>
       
                    <div className={allStyles.mainText_hw}>

        
                    <h4 className={allStyles.mainText_title}>40 Year-old Virgin</h4>
              


                    <div className={allStyles.mainText_year}> 2005 | 14+ | 116min | Romance Comedy</div>
          

                    <div className={allStyles.paragraphText}>
                    Goaded by his buddies, a nerdy guy who's never \"done the deed\" only finds the pressure mounting when he meets a single mother
                         </div>
                      
                    
           
                    <p>Starting:Steve Carell, Catherine Keener, Paul Rudd, Romany Malco</p>
                         <Link to="/">Go Back</Link>
    
                    </div>
                   <div className={allStyles.emptyDiv}></div>

        </div>

          <Footer />

        </div>
            
        )
    }
   


}

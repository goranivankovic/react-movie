import React, { Component } from 'react'
import { Container,Row,Col,Navbar,NavbarBrand,NavLink,Button } from 'react-bootstrap'
import NavBar from '../components/Nav/NavBar'
import WW from '../img/wonderWomen.jpg'
import { Link  } from "react-router-dom";
import Footer from '../components/Footer/Footer'


import allStyles from '../styles/All.module.css'

export default class Venom extends Component {
    componentDidMount() {
    
        window.scrollTo(0, 0);
    
   }    
   
    render() {
   
        return (

            <div>
                <NavBar />
      

            <div className={allStyles.venom}>
        
                        <div className={allStyles.emptyDiv}></div>
                   
                        <div className={allStyles.mainText_hw}>

             
                        <h4 className={allStyles.mainText_title}>Venom</h4>
                   


                        <div className={allStyles.mainText_year}> 2018 | 16+ | 112 min | Adventure</div>
         


                        <div className={allStyles.paragraphText}>
                        A failed reporter is bonded to an alien entity, one of many symbiotes who have invaded Earth. But the being takes a liking to Earth and decides to protect it.
                             </div>
                          
                        
            
                        <p>Starting:Tom Hardy, Michelle Williams, Riz Ahmed</p>
                             <Link to="/">Go Back</Link> 
    
        
                        </div>
                        
                              <div className={allStyles.emptyDiv}></div>
                        
                        </div>
                    
                        
        
                   <Footer />
   

            </div>


          
        )
    }
}

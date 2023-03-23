import React, { Component } from 'react'
import { Container,Row,Col,Navbar,NavbarBrand,NavLink,Button } from 'react-bootstrap'
import NavBar from '../components/Nav/NavBar'
import CU from '../img/captainUnderPants2.jpg'
import { Link  } from "react-router-dom";
import Footer from '../components/Footer/Footer'

import allStyles from '../styles/All.module.css'

export default class CaptanPants extends Component {
    componentDidMount() {
    
        window.scrollTo(0, 0);
    
   }    
   
    render() {
     
        return (
            <div>

                <NavBar />

        


            <div className={allStyles.captain}>
           
                   
                      <div className={allStyles.emptyDiv}></div>
    
                    <div className={allStyles.mainText_hw}>

             
                    <h4 className={allStyles.mainText_title}>Captain Underpants</h4>
                


                    <div className={allStyles.mainText_year}>2017 | 12+ | 89min | Action, Adventure</div>
       
                    <div className={allStyles.paragraphText}>
                 
                    Two overly imaginative pranksters named George and Harold hypnotize their principal into thinking he's a ridiculously enthusiastic, incredibly dimwitted superhero named Captain Underpants.
                
                         </div>
                      
            
                    <p>Starting:Kevin Hart, Thomas Middleditch, Ed Helms</p>
                         <Link to="/">Go Back</Link> 
       
    
                    </div>
                
              <div className={allStyles.emptyDiv}></div>
        </div>
        <Footer />

        </div>

            

            
        )
    }





   




}

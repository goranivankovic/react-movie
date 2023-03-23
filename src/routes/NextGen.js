import React, { Component } from 'react'
import { Container,Row,Col,Navbar,NavbarBrand,NavLink,Button } from 'react-bootstrap'
import NavBar from '../components/Nav/NavBar'
import NG from '../img/nextGen.jpg'
import { Link  } from "react-router-dom";
import Footer from '../components/Footer/Footer'

import allStyles from '../styles/All.module.css'

export default class NextGen extends Component {
    componentDidMount() {
    
        window.scrollTo(0, 0);
    
   }    
   
    render() {
  
        return (

             <div>
                 <NavBar />

          
                     
            <div className={allStyles.next}>
        
                     <div className={allStyles.emptyDiv}></div>
                     
                    <div className={allStyles.mainText_hw}>

           
                    <h4 className={allStyles.mainText_title}>Next Gen</h4>

                  
                    <div className={allStyles.mainText_year}> 2018 | 13+ | 106min | Animation Adventure Comedy Family</div>
           

                    <div className={allStyles.paragraphText}>
                 
                    A friendship with a top-secret robot turns a lonely girl's life into a thrilling adventure as they take on bullies, evil bots and a scheming madman.
                
                         </div>
                      
                    
              
                    <p>Starting:John Krasinski, Charlyne Yi, Jason Sudeikis, Michael Peña</p>
                         <Link to="/">Go Back</Link> 
           
    
                    </div>
                   <div className={allStyles.emptyDiv}></div>

        </div>
        <Footer />



        </div>
            
        )
    }





    
}

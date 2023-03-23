import React, { Component } from 'react'
import { Container,Row,Col,Navbar,NavbarBrand,NavLink,Button } from 'react-bootstrap'
import NavBar from '../components/Nav/NavBar'
import BT from '../img/borat.jpg'
import { Link  } from "react-router-dom";
import Footer from '../components/Footer/Footer'

import allStyles from '../styles/All.module.css'

export default class Borat extends Component {
    componentDidMount() {
    
        window.scrollTo(0, 0);
    
   }    
   
    render() {
     
        return (

            <div>
                <NavBar />
           

            <div className={allStyles.borat}>

                   <div className={allStyles.emptyDiv}></div>
     
                    <div className={allStyles.mainText_hw}>

           
                    <h4 className={allStyles.mainText_title}>Borat</h4>
                

                    <div className={allStyles.mainText_year}>2006 | 16+ | 84min | Comedy</div>
          


                    <div className={allStyles.paragraphText}>
                 
                    Kazakh TV talking head Borat is dispatched to the United States to report on the greatest country in the world. With a documentary crew in tow, Borat becomes more interested in locating and marrying Pamela Anderson.
                
                         </div>
                      
                    
            
                    <p>Starting:Sacha Baron Cohen, Ken Davitian, Luenell, Chester</p>
                         <Link to="/">Go Back</Link> 
       
    
                    </div>
                   <div className={allStyles.emptyDiv}></div>

        </div>
        <Footer />

        </div>
            
        )
    }


   
}

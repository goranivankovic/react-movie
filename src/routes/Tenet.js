import React, { Component } from 'react'
import { Container,Row,Col,Navbar,NavbarBrand,NavLink,Button } from 'react-bootstrap'
import NavBar from '../components/Nav/NavBar'
import TN from '../img/tenet.jpg'
import { Link  } from "react-router-dom";
import allStyles from '../styles/All.module.css'
import Footer from '../components/Footer/Footer'


export default class Tenet extends Component {
    componentDidMount() {
    
        window.scrollTo(0, 0);
    
   }    
   
    render() {
    
        return (
            <div>
                <NavBar />
            <div className={allStyles.tenet}>
           
          
                     <div className={allStyles.emptyDiv}></div>
    
                    <div className={allStyles.mainText_hw}>

     

                    <h4 className={allStyles.mainText_title}>Tenet</h4>


           
                    <div className={allStyles.mainText_year}> 2020 | 15+ | 150min | Action Sci-Fi</div>
          

                    <div className={allStyles.paragraphText}>
                    Armed with only one word, Tenet, and fighting for the survival of the entire world, 
                        a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time

                
                         </div>
                      
                    
        
                    <p>Starting:Juhan Ulfsak, Jefferson Hall, Ivo Uukkivi, Andrew Howard</p>
                         <Link to="/">Go Back</Link> 
      

    
                    </div>
                 <div className={allStyles.emptyDiv}></div>

        </div>

           <Footer />

        </div>

            
        )
    }
}

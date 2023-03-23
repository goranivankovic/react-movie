import React, { Component } from 'react'
import { Container,Row,Col,Navbar,NavbarBrand,NavLink,Button } from 'react-bootstrap'
import NavBar from '../components/Nav/NavBar'
import LO from '../img/lost.jpg'
import { Link  } from "react-router-dom";
import Footer from '../components/Footer/Footer'
import allStyles from '../styles/All.module.css'



export default class Lost extends Component {
    componentDidMount() {
    
        window.scrollTo(0, 0);
    
   }    
   
    render() {
 
        return (

            <div>
                <NavBar />

       

            <div className={allStyles.lost}>


                   <div className={allStyles.emptyDiv}></div>

    
    
                    <div className={allStyles.mainText_hw}>

            

                    <h4 className={allStyles.mainText_title}>Lost In Space 2</h4>
           


                    <div className={allStyles.mainText_year}> 2018 | 12+ | 60min | Adventure Family Mystery Sci-Fi</div>
       
                    <div className={allStyles.paragraphText}>
                 
                    After crash-landing on an alien planet, the Robinson family fight against all odds to survive and escape, but they're surrounded by hidden dangers.
                
                         </div>
                      
                    
             
                    <p>Starting:Molly Parker, Toby Stephens, Maxwell Jenkins, Taylor Russell</p>
                         <Link to="/">Go Back</Link> 
     
    
                    </div>
                
                <div className={allStyles.emptyDiv}></div>
        </div>


           <Footer />
        </div>
            
        )
    }


  
}

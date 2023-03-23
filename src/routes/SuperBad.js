import React, { Component } from 'react'
import { Container,Row,Col,Navbar,NavbarBrand,NavLink,Button } from 'react-bootstrap'
import NavBar from '../components/Nav/NavBar'
import SB from '../img/superBad.jpg'
import { Link } from "react-router-dom";
import Footer from '../components/Footer/Footer'
import allStyles from '../styles/All.module.css'




 class SuperBad extends Component {

    componentDidMount() {
    
          window.scrollTo(0, 0);
      
    }    
 
  
    render() {
     
        return (

           <div>
               <NavBar />
      
                  
            <div className={allStyles.superBad}>
                   
                      <div className={allStyles.emptyDiv}></div>

    
                    <div className={allStyles.mainText_hw}>

       


                    <h4 className={allStyles.mainText_title}>Superbad</h4>
             


                    <div className={allStyles.mainText_year}> 2007 | 15+ | 113min | Comedy</div>
            

                    <div className={allStyles.paragraphText}>
                 
                    Two co-dependent high school seniors are forced to deal with separation anxiety after their plan to stage a booze-soaked party goes awry
                
                         </div>
                      
                    
        
                    <p>Starting:Jonah Hill, Michael Cera, Christopher Mintz-Plasse, Bill Haderd</p>
                         <Link to="/">Go Back</Link> 
    
    
                    </div>
                
                  <div className={allStyles.emptyDiv}></div>
        </div>

        <Footer />
      
        </div>

            
        )
    }



    
}
export default SuperBad;
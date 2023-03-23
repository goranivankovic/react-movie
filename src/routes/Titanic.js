import React from 'react'
import TitanicImg from '../img/titanic.jpg'
import { Container,Row,Col,Navbar,NavbarBrand,NavLink,Button } from 'react-bootstrap'
import NavBar from '../components/Nav/NavBar'
import { Link  } from "react-router-dom";
import allStyles from '../styles/All.module.css'
import Footer from '../components/Footer/Footer'

export default class Titanic extends React.Component {
    componentDidMount() {
    
        window.scrollTo(0, 0);
    
   }    
   
    
    render() {
 
   


        return (


         <div>

    
                 <NavBar />

            <div className={allStyles.titanic}>


                
                      <div className={allStyles.emptyDiv}></div>
                 
          
                        <div className={allStyles.mainText_hw}>

                 
                        <h4 className={allStyles.mainText_title}>Titanic</h4>
                  
                    
                        <div className={allStyles.mainText_year}> 1997 | 16+ | 194min | Drama Romance</div>
                  
                  
                  
                        <div className={allStyles.paragraphText}>84 years later, a 100 year-old woman named Rose DeWitt Bukater tells the story to her granddaughter Lizzy Calvert, 
                             Brock Lovett, Lewis Bodine, Bobby Buell and Anatoly Mikailavich on the Keldysh about her life set in April 10th 1912,
                             on a ship called Titanic.</div>
                          
                        
                      
                        <p>Starting:Leonardo DiCaprio, Kate Winslet, Billy Zane, Kathy Bates</p>
                             <Link to="/">Go Back</Link> 
                      
           
        
                        </div>



                         <div className={allStyles.emptyDiv}></div>
                        
                           
                        
                        
                    
                        </div> 

                        <Footer />


                        </div>
        

                 

         
        )
    }
}

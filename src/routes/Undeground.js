import React, { Component } from 'react'
import { Container,Row,Col,Navbar,NavbarBrand,NavLink,Button } from 'react-bootstrap'
import NavBar from '../components/Nav/NavBar'
import  U6 from '../img/underground6.jpg'
import { Link  } from "react-router-dom";
import Footer from '../components/Footer/Footer'


import allStyles from '../styles/All.module.css'

export default class Undeground extends Component {
    componentDidMount() {
    
        window.scrollTo(0, 0);
    
   }    
   
    render() {
  
        return (


            <div>
                <NavBar/>
           

            
            <div className={allStyles.underground}> 

    
                    <div className={allStyles.mainText_hw}>

         

                    <h4 className={allStyles.mainText_title}>6 Underground</h4>
             


                    <div className={allStyles.mainText_year}> 2019 | 16+ | 128min | Action Thriller</div>
       

                    <div className={allStyles.paragraphText}>
                    Meet a new kind of action hero. Six untraceable agents, totally off the grid. They've buried their pasts so they can change the future.
                         </div>
                      
                    
      
                    <p>Starting:Ryan Reynolds, Mélanie Laurent, Manuel Garcia-Rulfo, Ben Hardy</p>
                         <Link to="/">Go Back</Link> 
     
    
                    </div>
                

        </div>
        <Footer />

        </div>



            
        )
    }


   

    



}

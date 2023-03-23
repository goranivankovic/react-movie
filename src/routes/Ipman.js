import React, { Component } from 'react'
import { Container,Row,Col,Navbar,NavbarBrand,NavLink,Button } from 'react-bootstrap'
import NavBar from '../components/Nav/NavBar'
import  IM from '../img/ipMan.jpg'
import { Link  } from "react-router-dom";
import Footer from '../components/Footer/Footer'

import allStyles from '../styles/All.module.css'

export default class Ipman extends Component {
    componentDidMount() {
    
        window.scrollTo(0, 0);
    
   }    
   
    render() {
    
        return (

            <div>
                <NavBar />
        

            <div className={allStyles.ipMan}>
         
                  <div className={allStyles.emptyDiv}></div>
    
                    <div className={allStyles.mainText_hw}>

              
                    <h4 className={allStyles.mainText_title}>Ip Man</h4>
                
                    <div className={allStyles.mainText_year}> 2008 | 16+ | 106min | Biography Drama History</div>
       

                    <div className={allStyles.paragraphText}>
                 
                    During the Japanese invasion of China, a wealthy martial artist is forced to leave his home when his city is occupied. With little means of providing for themselves, Ip Man and the remaining members of the city must find a way to survive
                
                         </div>
                      
                    
          
                    <p>Starting:Donnie Yen, Simon Yam, Lynn Xiong, Hiroyuki Ikeuchi</p>
                         <Link to="/">Go Back</Link> 
      

    
                    </div>
                
                   <div className={allStyles.emptyDiv}></div>
        </div>
        <Footer />


        </div>


            
        )
    }


   



    
}

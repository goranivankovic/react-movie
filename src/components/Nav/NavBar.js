import React, { Component } from 'react'
import { Container,Row,Col,Navbar,NavbarBrand,NavLink,Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import navStyle from '../../styles/Nav.module.css'


 class NavBar extends Component {


    render() {



        return (
    
              
      


<div className={navStyle.navBar}>
                <div className={navStyle.navBar_div}>
            <div style={{color:"#dc3545"}}>MovieApp</div>

             <Link to="/movies/search">Search Movie</Link>
            

      </div>

      </div>
       
            
        
           




            
        )
    }
}

export default NavBar;
import React from 'react'
import footerStyle from '../../styles/Footer.module.css'
import { AiOutlineFacebook,AiOutlineYoutube ,AiFillGithub,AiOutlineLinkedin} from 'react-icons/ai'
import { FaTwitter  } from 'react-icons/fa'

function Footer() {
  return (

   <div className={footerStyle.main}>
        <div className={footerStyle.empty}></div>



        <div className={footerStyle.firstDiv}>

      <div className={footerStyle.firstDiv_first_row}>
          <div className={footerStyle.firstDiv_first_row_headline }>PRODUCTS</div>

          <div>Football Data</div>
          <div>The WC-API</div>
          <div>All football Data</div>
          <div>30 Day Kick Start Plan</div>
          <div>Our documentation</div>

      </div>

      <div className={footerStyle.firstDiv_first_row}>

      <div className={footerStyle.firstDiv_first_row_headline }>Data</div>

         <div>Countries/Fixtures</div>
         <div>Stadium/Attendance</div>
        <div>Finals/Results</div>
        <div>Date/Time</div>
        <div>2000 Requests/Per day</div>
          
          </div>

          <div className={footerStyle.firstDiv_first_row}>
          <div className={footerStyle.firstDiv_first_row_headline }>CONTACT US</div>

          
          <div>footballapiuk@gmail.com</div>
          <div>Support Centre</div>
          <div>Github Support </div>
          <div>Google Support </div>
          <div>Linkedin Support </div>
          
          </div>

          <div className={footerStyle.firstDiv_first_row_icons_hw}>

            
               <a href="https://github.com/goranivankovic" target='_blank' ><AiFillGithub className={footerStyle.firstDiv_first_row_icons} /></a> 
               <a  href="https://www.linkedin.com/in/goran-ivankovi%C4%87-86b19b1b9/" target='_blank'><AiOutlineLinkedin className={footerStyle.firstDiv_first_row_icons} /></a> 
               
                
              <a  href="https://www.facebook.com/" target='_blank'><AiOutlineFacebook className={footerStyle.firstDiv_first_row_icons} /></a>  
              <a  href="https://youtube.com" target='_blank'><AiOutlineYoutube  className={footerStyle.firstDiv_first_row_icons}/></a>  
          
              
             
          
          </div>
    


        </div>


        <div className={footerStyle.secondDiv}>
            
            <div>2022TERMS & CONDITION</div>
            <div>© THE WC-API</div>
            <div>@ PRIVACY POLICY COOKIE</div>


        </div>


       <div className={footerStyle.empty}></div>
    </div>
  )
}

export default Footer
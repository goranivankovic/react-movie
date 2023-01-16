import React from 'react'; 
import Axios from 'axios';
import Img from '../../images.js'
import NavBar from '../Nav/NavBar'
import { Link } from 'react-router-dom';
import Titanic from '../../routes/Titanic';
import {FaInstagram,FaGithub,FaPhone} from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import movieStyle from '../../styles/Movie.module.css'
import Footer from '../Footer/Footer';
import img from '../../images.js';

class Movie extends  React.Component{
constructor(props){
    super(props)

   this.resizeItems=this.resizeItems.bind(this)
   this.Item100=this.Item100.bind(this)

}

componentDidMount() {
    
     window.scrollTo(0, 0);
 
}    




resizeItems(a){

    a.target.style.transform='scale(0.97)'
    a.target.style.transition='1200ms'

}

Item100(b){

    b.target.style.transform='scale(1)'
    b.target.style.transition='700ms'

}

 


render(){



    return(

     <div>

         <NavBar />



        <div className={movieStyle.mainDiv}>


  
       





            <div className={movieStyle.mainText}>

                <div className={movieStyle.mainText_WH}>
                    <div  className={movieStyle.mainText_headline}> MovieApp Originals</div>
                    <div className={movieStyle.mainText_paragraph}>
                    MovieApp is the home of amazing original programming that you can’t find anywhere else.Movies,
                   TV shows, specials and more, it’s all tailored specifically to you. Watch now for free
                    </div>

             
                </div>


            </div>

              <div className={movieStyle.mainHeadline_popular}>
              Popular on MovieApp

                 </div>
     

        <div className={movieStyle.mainDiv_items} 
         onMouseOver={this.resizeItems}
         onMouseOut={this.Item100}
        >
    <Link to={'/movies/titanic'}>    <img src={Img.titanic}  alt="" /></Link>  
          
          </div>


          <div className={movieStyle.mainDiv_items}
               onMouseOver={this.resizeItems}
               onMouseOut={this.Item100}
          >
       <Link to={'/movies/manofstell'}>      <img src={Img.superman}  alt="" /></Link>
          
          
          </div>


          <div className={movieStyle.mainDiv_items}
               onMouseOver={this.resizeItems}
               onMouseOut={this.Item100}
          >
       <Link to={'/movies/greenland'}>      <img src={Img.grennLand}  alt="" /></Link>
          
          </div>

          <div className={movieStyle.mainDiv_items}
               onMouseOver={this.resizeItems}
               onMouseOut={this.Item100}
          >
       <Link to={'/movies/tenet'}>      <img src={Img.tenet}  alt="" /></Link>
          
          </div>

          <div className={movieStyle.mainDiv_items}
               onMouseOver={this.resizeItems}
               onMouseOut={this.Item100}
          >
      <Link to={'/movies/extraction'}>       <img src={Img.extraction}  alt="" /></Link>
          
          </div>




          <div className={movieStyle.mainDiv_items}
               onMouseOver={this.resizeItems}
               onMouseOut={this.Item100}
          >
         <Link to={'/movies/lost'}>      <img src={Img.lostInSpace}  alt="" /></Link>
          
          </div>

          <div className={movieStyle.mainDiv_items}
               onMouseOver={this.resizeItems}
               onMouseOut={this.Item100}
          >
          <Link to={'/movies/boosbaby'}>     <img src={Img.bossBaby}  alt="" /></Link>
          
          </div>

          <div className={movieStyle.mainDiv_items}
               onMouseOver={this.resizeItems}
               onMouseOut={this.Item100}
          >
         <Link to={'/movies/captanpants'}>      <img src={Img.captenPants}  alt="" /></Link>
          
          </div>

          <div className={movieStyle.mainDiv_items}
               onMouseOver={this.resizeItems}
               onMouseOut={this.Item100}
          >
       <Link to={'/movies/nextgen'}> <img src={Img.nextGen}  alt="" /></Link>    
          
          </div>

          <div className={movieStyle.mainDiv_items}
               onMouseOver={this.resizeItems}
               onMouseOut={this.Item100}
          >
        <Link to={'/movies/lego'}>  <img src={Img.legoMovie}  alt="" /></Link>  
          
          </div>



          <div className={movieStyle.mainDiv_items}
               onMouseOver={this.resizeItems}
               onMouseOut={this.Item100}
          >
        <Link to={'/movies/superbad'}>  <img src={Img.superBad}  alt="" /></Link>  
          
          </div>

          <div className={movieStyle.mainDiv_items}
               onMouseOver={this.resizeItems}
               onMouseOut={this.Item100}
          >
        <Link to={'/movies/jump21'} ><img src={Img.jump21}  alt="" /></Link>   
          
          </div>

          <div className={movieStyle.mainDiv_items}
               onMouseOver={this.resizeItems}
               onMouseOut={this.Item100}
          >
         <Link to={'/movies/hangover'}> <img src={Img.hangOver}  alt="" /></Link>  
          
          </div>


          <div className={movieStyle.mainDiv_items}
               onMouseOver={this.resizeItems}
               onMouseOut={this.Item100}
          >
       <Link to={'/movies/borat'}> <img src={Img.borat}  alt="" /></Link>    
          
          </div>

          <div className={movieStyle.mainDiv_items}
               onMouseOver={this.resizeItems}
               onMouseOut={this.Item100}
          >
         <Link to={'/movies/virgin40'} >  <img src={img.virgin40}  alt="" /></Link>
          
          </div>



          <div className={movieStyle.mainDiv_items}
               onMouseOver={this.resizeItems}
               onMouseOut={this.Item100}
          >
         <Link to={'/movies/underground6'}>  <img src={Img.undeground6}  alt="" /></Link>
         
          
          </div>

          <div className={movieStyle.mainDiv_items}
               onMouseOver={this.resizeItems}
               onMouseOut={this.Item100}
          >
      <Link to={'/movies/ipman'}><img src={Img.ipMan}  alt="" /></Link>      
          
          </div>

          <div className={movieStyle.mainDiv_items}
               onMouseOver={this.resizeItems}
               onMouseOut={this.Item100}
          >
     <Link to={'/movies/blackpanter'}>  <img src={Img.blackPanter}  alt="" /></Link>     
          
          </div>

          <div className={movieStyle.mainDiv_items}
               onMouseOver={this.resizeItems}
               onMouseOut={this.Item100}
          >
  <Link to={'/movies/casinoroyal'}>    <img src={Img.casinoRoyal}  alt="" /></Link>
          
          </div>

          <div className={movieStyle.mainDiv_items}
               onMouseOver={this.resizeItems}
               onMouseOut={this.Item100}
          >
     <Link to={'/movies/venom'}>      <img src={Img.wonderWomen}  alt="" /></Link>
          
          </div>

     
 
 

 


          
        
        </div>


        <Footer />




        </div>

    )
}








}

export default Movie;



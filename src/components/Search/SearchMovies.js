import React, { Component } from 'react'
import NavBar from '../Nav/NavBar'
import { Container,Row ,Col,Form,FormGroup,FormControl,Button } from 'react-bootstrap'
import Axios from 'axios';
import {Link}  from 'react-router-dom';
import Footer from '../Footer/Footer';
import searchStyle from '../../styles/Search.module.css'
import { FaBullseye } from 'react-icons/fa';



export default class SearchMovies extends Component {
    constructor(props){
        super(props)
        this.state={
            laz:false,
            movie:'',
            poster:'',
            title:'',
            year:'',
            runtime:'',
            genre:'',
            plot:'',
            actors:'',
            language:'',
            spanovi:'',
            textLanguage:' ',
            textStarting:' '


        }
  
        this.eraseInputVal=this.eraseInputVal.bind(this)
        this.getMovies =this.getMovies.bind(this)
    }
    componentDidMount(){
      this.setState({
          spanovi:'',
          textLanguage:'',
          textStarting:'',
        
      })

    }

   
          
           



    getMovies(e){
        this.setState({
            movie:e.target.value
        })

    }

    async eraseInputVal(e){
        e.preventDefault()
      
    
      
        try {
            let inputBox = document.getElementById('inputBox')
           
        
       
        
            
         

            const response = await Axios.get(`https://www.omdbapi.com/?t=${this.state.movie}&apikey=${process.env.REACT_APP_MOVIE_KEY}`);
   
       



    
if (response.data.Response== 'False') {
    let inputBox = document.getElementById('inputBox')

      inputBox.value=''

    this.setState({
        laz:false
    })
    
}else{

     let inputBox = document.getElementById('inputBox')
         

           inputBox.value=''
           this.setState({
            laz:true,
            poster:response.data.Poster,
            title:response.data.Title,
            year:response.data.Year,
            runtime:response.data.Runtime,
            genre:response.data.Genre,
            plot:response.data.Plot,
            actors:response.data.Actors,
            language:response.data.Language,
            spanovi:'',
            textLanguage:'',
            textStarting:''
            
           })


        }
       
        


          
          } catch (error) {

           
            let inputBox = document.getElementById('inputBox')
        
            inputBox.value=''

   this.setState({
                spanovi:'',
                textLanguage:'',
                textStarting:'',
              
            })

   
          
      

          

              
    
           
          }

 
           
    
    }
    
    
    


    render() {
  
   

        return (

            <div>

                <NavBar/>

                <div className={searchStyle.main}>
           <form onSubmit={this.eraseInputVal} className={searchStyle.form}>
                       
                                <input placeholder="  search movies.." id='inputBox' type="text" onChange={this.getMovies}></input>
                                
                         
                            <button  type='submit'>Search</button>
                           
                        </form>

                     {this.state.laz ?
                        <div className={searchStyle.firstDiv}>

                           
                           

                            <img className={searchStyle.firstDivItem1} src={this.state.poster } alt=''  />

                            <div className={searchStyle.firstDivItem2}>
                                <span className={searchStyle.firstDivItem2Headline}>{this.state.title}</span>

                              
                               <div className={searchStyle.firstDivItem2Year}> {this.state.year} || <span>{this.state.spanovi} </span> { this.state.runtime} ||<span>{this.state.spanovi} ||</span> {this.state.genre}</div>

                                    <p className={searchStyle.firstDivItem2Text}> {this.state.plot} </p>
                                    <p> {this.state.actors} </p>
                                    <p> {this.state.language} </p>

                                     
                                </div>

                   

                                
                        </div>
  :""}


                           <div className={searchStyle.emptyDiv}>
                            <Link to="/">Back</Link>
                             </div>


                </div>
            
                       
                 <Footer />     
                
                
            </div>
        )
    }
}

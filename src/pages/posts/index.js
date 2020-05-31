import React, { Component } from 'react'
import './styles.css'
import api from '../../api'
import {Link} from 'react-router-dom'


class Post extends Component{
  state = {
    posts:[],

  }

   async componentDidMount(){
    this.loadPosts()
  
     
   }
    loadPosts = async () =>{ //arrow function para não perder o ecopo do "this" (this continua a se referiar ao componente Post)
      
    const id = this.props.location.pathname
    const response =  await api.get(`${id}`)
    const {data} = response
  
   this.setState({posts: data.body})
     
      
   }


    render(){

     const {posts} = this.state
  
    return(
        <div >
          <header className='header'>
            <Link to='/' className="buttoninit">Início</Link>
          </header>
          <div className="container">
           <div className ="sidel"></div>

            <div className="posts">{posts}</div> 

           <div className="sider"></div>         
           </div>
           <footer className = 'footer'>redes sociais</footer>
         </div>
         
    )
}
}

export default Post
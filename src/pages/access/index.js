import React, {Component} from 'react'
import './styles.css'
import {Link} from 'react-router-dom'
import api from '../../api'


export default class Access extends Component{

  state = {
    posts: [],
  }
   componentDidMount(){
    this.loadPostsTitle()
  
  
  }
  loadPostsTitle = async () =>{        //arrow function para não perder o ecopo do "this" (this continua a se referiar ao componente Post)
  const response =  await api.get('/products')
  const {data} = response

  this.setState({posts: data})

}

  render(){
    
    const {posts} = this.state
    return (
    <div className='background'> 
    <header className="first-Header">
      <div className="toCreatePost-Container">
      <Link className="toCreatePost" to= "/createPost">create Post</Link>
      </div>
    </header>
        <div className="side-container">
        {
          posts.map(post =>(<li className="list" key ={post._id}><Link className="ListLink"   to={{
          pathname: `/posts/${post._id}`,
          state:{fromDashBoard : true}
          }} >
              {post.title}
          </Link>
          </li>))
  }
        </div>
    </div>
  )
  }
}
